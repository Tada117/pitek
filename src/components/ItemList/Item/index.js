import React from "react";
import "./item.scss";

const Item = ({ imagePath, title, text, subText }) => {
  return (
    <div className="item-wrapper">
      <div className="item-image">
        <img src={imagePath} alt="demo" />
      </div>
      <div className="item-body">
        <p className="title-2">{title}</p>
        <p className="body-text">{text}</p>
        <p className="body-sub-text ">{subText}</p>
      </div>
    </div>
  );
};

export default Item;
