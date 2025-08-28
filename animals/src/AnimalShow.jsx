import bird from "./assets/bird.svg";
import cat from "./assets/cat.svg";
import cow from "./assets/cow.svg";
import dog from "./assets/dog.svg";
import gator from "./assets/gator.svg";
import heart from "./assets/heart.svg";
import horse from "./assets/horse.svg";
import React, { useState } from "react";
import "./AnimalShow.css";
const svgImg = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
  heart,
};

const AnimalShow = ({ type }) => {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className="animal-show" onClick={handleClick}>
      <img className="animal" src={svgImg[type]} alt="" />
      <img
        className="heart"
        src={heart}
        alt="heart"
        style={{ width: 10 + 10 * clicks + "px" }}
      />
    </div>
  );
};

export default AnimalShow;
