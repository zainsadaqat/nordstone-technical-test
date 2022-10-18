import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Title from '../components/Title';
import { useUserContext } from '../context/userContext';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { signInUser, forgotPassword, error } = useUserContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (email && password) signInUser(email, password);
  };

  const forgotPasswordHandler = () => {
    const email = emailRef.current.value;
    if (email) forgotPassword(email);
  };

  return (
    <section className="min-h-screen">
      <Title title="Login" />
      {error && <p className="mb-[16px] text-[#ff0000] text-center">{error}</p>}
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <div className="flex flex-col justify-start">
          <label className="mb-[4px] font-medium text-md">
            Email <span className="text-[#ff0000]">*</span>
          </label>
          <input
            className="mb-[32px] text-md font-bold w-80 h-10 px-2 rounded-md"
            type="email"
            ref={emailRef}
            required
          />
        </div>
        <div className="flex flex-col justify-start">
          <label className="mb-[4px] font-medium text-md">
            Password <span className="text-[#ff0000]">*</span>
          </label>
          <input
            className="mb-[32px] text-md font-bold w-80 h-10 px-2 rounded-md"
            type="password"
            ref={passwordRef}
            required
          />
        </div>
        <Button buttonType="submit" text="Login" />
        <button
          className="bg-transparent border-none text-xs text-center font-medium"
          onClick={forgotPasswordHandler}
        >
          Forgot Password?
        </button>
        <p className="text-xs text-center font-medium">
          Don't have an account?{' '}
          <span className="underline underline-offset-4">
            <Link to="/register">Sign Up</Link>
          </span>
        </p>
      </form>
    </section>
  );
};

export default Login;
