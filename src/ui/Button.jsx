import React from "react";

// eslint-disable-next-line react/prop-types
const Button = ({ children, image, size = "small" }) => {
  return (
    <button
      className={`block relative tracking-wide font-semibold hover:bg-hoverColor duration-300 ${
        size === "large" ? "text-3xl" : "text-lg"
      } font-primaryFont px-7 py-3 rounded-full border border-white bg-primary`}
    >
      <span>{children}</span>

      <img
        src={image}
        alt=""
        className="absolute right-2 top-[50%] w-10 -translate-y-[50%]"
      />
    </button>
  );
};

export default Button;
