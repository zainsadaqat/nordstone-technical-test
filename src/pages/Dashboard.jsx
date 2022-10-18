import React from 'react';
import { useUserContext } from '../context/userContext';

const Dashboard = () => {
  const { user, logoutUser } = useUserContext();
  return (
    <div>
      <h2>Name: {user.displayName}</h2>
      <p>Email: {user.email}</p>
      <button onClick={logoutUser}>Logout</button>
    </div>
  );
};

export default Dashboard;
