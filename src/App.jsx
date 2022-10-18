import './App.css';
import React from 'react';
import Menu from './components/Menu';
import { useUserContext } from './context/userContext';
import Calculator from './pages/Calculator';

function App() {
  const { user } = useUserContext();
  return (
    <>
      <Menu />
    </>
  );
}

export default App;
