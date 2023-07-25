import React from "react";
import Item from "./Item";
import "./itemList.scss";

const ItemList = ({ title = "Title", data = [] }) => {
  return (
    <div className="item-list">
      <p className="title-1 title">{title}</p>
      <div className="items-container">
        {data?.map((item) => (
          <Item
            imagePath={item.image}
            text={item.text}
            title={item.title}
            subText={item.subText}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
