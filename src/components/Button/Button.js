import React from 'react';
import './Button.css';
const Button = ({ children }) => {
  return <div className="reusable-btn">{children}</div>;
};

export default Button;
