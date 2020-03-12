import React from 'react';
import './Button.css';
const Button = ({ children, ...otherprops }) => {
  return (
    <div className="reusable-btn" style={{ ...otherprops }}>
      {children}
    </div>
  );
};

export default Button;
