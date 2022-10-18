import React, { useState, useEffect } from 'react';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';
import { storage } from '../firebase/index';
import Title from '../components/Title';
import SubTitle from '../components/SubTitle';
import { useUserContext } from '../context/userContext';

const ImagesList = () => {
  const { user } = useUserContext();

  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);

  const imageListRef = ref(storage, 'images/');
  const handleUpload = () => {
    if (imageUpload === null) return;

    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageList((prev) => [...prev, url]);
      });
    });
  };

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    });
  }, []);
  return (
    <section className="min-h-screen">
      {user ? (
        <>
          <SubTitle subTitle="Image Upload" />
          <div className="flex flex-col justify-start items-center">
            <input
              type="file"
              onChange={(event) => setImageUpload(event.target.files[0])}
            />
            <button
              className="mt-[16px] py-2 bg-[#000] font-semibold text-sm w-80 rounded-md"
              onClick={handleUpload}
            >
              Upload Image
            </button>
          </div>
          <Title title="Images List" />
          <div className="flex items-center justify-center flex-wrap gap-2">
            {imageList
              ? imageList.map((image, index) => {
                  return (
                    <img
                      className="my-4 border-1"
                      key={index}
                      src={image}
                      width="200"
                    />
                  );
                })
              : 'No Images Uploaded'}
          </div>
        </>
      ) : (
        <p className="mt-[40px]">
          You're not logged in. Please login first to access the features.
        </p>
      )}
    </section>
  );
};

export default ImagesList;
