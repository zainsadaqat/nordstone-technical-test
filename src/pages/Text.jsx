import { addDoc, collection, query, onSnapshot, doc } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import SubTitle from '../components/SubTitle';
import Title from '../components/Title';
import { useUserContext } from '../context/userContext';
import { db } from '../firebase';

const Text = () => {
  const [text, setText] = useState('');
  const [data, setData] = useState([]);
  const { user } = useUserContext();

  useEffect(() => {
    const q = query(collection(db, 'text'));
    const unSub = onSnapshot(q, (querySnapshot) => {
      const tempArray = [];
      querySnapshot.forEach((doc) => {
        tempArray.push({ ...doc.data(), id: doc.id });
      });
      setData(tempArray);
    });
    return () => unSub();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (text !== '') {
      await addDoc(collection(db, 'text'), {
        text,
      });
    }

    setText('');
  };
  return (
    <section className="min-h-full">
      {user ? (
        <>
          <Title title="Enter Text Below" />
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <textarea
              className="p-2"
              rows="10"
              cols="40"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter text here...."
              required
            ></textarea>
            <Button buttonType="submit" text="Submit" />
          </form>

          <SubTitle subTitle="Data fetched from Firebase" />
          {data.map((text) => {
            return <p key={text.id}>{text.text}</p>;
          })}
        </>
      ) : (
        <p className="mt-[40px]">
          You're not logged in. Please login first to access the features.
        </p>
      )}
    </section>
  );
};

export default Text;
