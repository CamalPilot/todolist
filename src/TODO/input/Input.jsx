import React from "react";

const Input = ({ type, placeholder, className, onChange, value }) => {
  return <input type={type} placeholder={placeholder} className={className} onChange={onChange} value={value}/>;
};

export default Input;
