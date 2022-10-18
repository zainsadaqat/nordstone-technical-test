import React from 'react';
import Button from '../components/Button';
import { useUserContext } from '../context/userContext';

const Notification = () => {
  const { user } = useUserContext();
  return (
    <section className="min-h-screen">
      {user ? (
        <div className="flex justify-center items-center">
          <button
            type="button"
            className="mt-[16px] py-2 bg-[#000] font-semibold text-sm w-80 rounded-md"
            onClick={() =>
              alert('I have receive 2M Post Impressions last week on LinkedIn')
            }
          >
            Notify Me!
          </button>
        </div>
      ) : (
        <p className="mt-[40px]">
          You're not logged in. Please login first to access the features.
        </p>
      )}
    </section>
  );
};

export default Notification;
