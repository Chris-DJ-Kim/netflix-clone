import React from "react";
import "../../sass/components/custom-button.scss";

function CustomButton({ children }) {
  return <button className="custom-button">{children}</button>;
}

export default CustomButton;
