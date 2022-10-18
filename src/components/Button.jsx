import React from 'react';

const Button = ({ buttonType, text }) => {
  return (
    <button
      type={buttonType}
      className="mt-[16px] py-2 bg-[#000] font-semibold text-sm w-80 rounded-md"
    >
      {text}
    </button>
  );
};

export default Button;
