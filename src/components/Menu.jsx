import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Login from '../pages/Login';
import Calculator from '../pages/Calculator';
import ImagesList from '../pages/ImagesList';
import { useUserContext } from '../context/userContext';
import Notification from '../pages/Notification';
import Text from '../pages/Text';
import Register from '../pages/Register';
import Logo from '../assets/whiteNordstoneLogo.png';
import Hamburger from '../assets/whiteHamburgerIcon.png';

const Menu = () => {
  const { user, logoutUser } = useUserContext();
  return (
    <nav className="flex flex-col item-center justify-between">
      <div className="flex justify-between">
        <div>
          <img src={Logo} width="150" height="50" />
        </div>
        <div>
          <img src={Hamburger} width="50" height="50" />
        </div>
      </div>
      <ul className="py-2 px-4 flex justify-center items-center">
        <li className="px-4 flex flex-col items-center">
          <Link
            className="text-white text-base font-semibold"
            to="/notification"
          >
            Notifications
          </Link>
        </li>
        {!user && (
          <li className="px-4 flex flex-col items-center">
            <Link className="text-white text-base font-semibold" to="/login">
              Login
            </Link>
          </li>
        )}
        <li className="px-4 flex flex-col items-center">
          <Link className="text-white text-base font-semibold" to="/calculator">
            Calculator
          </Link>
        </li>
        <li className="px-4 flex flex-col items-center">
          <Link
            className="text-white text-base font-semibold"
            to="/images-list"
          >
            Images List
          </Link>
        </li>
        <li className="px-4 flex flex-col items-center">
          <Link className="text-white text-base font-semibold" to="text">
            Text
          </Link>
        </li>
        <li>{user && <button onClick={logoutUser}>Logout</button>}</li>
      </ul>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/images-list" element={<ImagesList />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/text" element={<Text />} />
      </Routes>
    </nav>
  );
};

export default Menu;

{
  /* <img className="mb-[6px]" src={TextIcon} width="24" height="24" /> */
}
