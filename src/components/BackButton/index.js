import React from "react";
import "./backButton.scss";
import caretLeft from "assets/svg/caret-left.svg";

const BackButton = () => {
  return (
    <div className="backButton">
      <img src={caretLeft} alt="back" />
    </div>
  );
};

export default BackButton;
