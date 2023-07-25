import React from "react";
import "./tierCard.scss";

const TierCard = () => {
  return (
    <div className="card">
      <div className="coin-balance">
        <p className="title-3">Available Coin balance</p>
        <h1>340</h1>
      </div>

      <div className="progress-bar">
        <div className="progress-bar__percent"></div>
      </div>

      <div className="description">
        <p>
          You have paid rental fee for $1,200. Pay more $800 to achieve Gold
          Tier.
        </p>
        <p href="#" className="link">
          View tier benefits{" "}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="#0062FF"
              stroke-width="2"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
          </svg>
        </p>
      </div>

      <div className="button title-1">My Coupons</div>

      <div className="updated">Updated : 02/11/2021</div>
    </div>
  );
};

export default TierCard;
