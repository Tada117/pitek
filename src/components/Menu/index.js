import React from "react";
import "./menu.scss";
import homeIcon from "assets/svg/home.svg";
import notiIcon from "assets/svg/noti.svg";
import optionIcon from "assets/svg/options.svg";
import userIcon from "assets/svg/user.svg";

const Menu = () => {
  return (
    <div className="menu">
      <img alt="" src={homeIcon} />
      <img alt="" src={notiIcon} />
      <img alt="" src={optionIcon} />
      <img alt="" src={userIcon} />
    </div>
  );
};

export default Menu;
