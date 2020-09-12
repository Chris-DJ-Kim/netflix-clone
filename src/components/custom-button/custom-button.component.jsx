import React from "react";
import "../../sass/components/custom-button.scss";

function CustomButton({ children, ...otherProps }) {
  return (
    <button {...otherProps} className="custom-button">
      {children}
    </button>
  );
}

export default CustomButton;
