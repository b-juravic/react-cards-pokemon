import React, { useState } from "react";
import backOfCard from "./back.png";
import "./PlayingCard.css"
import {useFlip} from "./hooks";

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
    // custom hook to flip a card
    const [isFacingUp, flip] = useFlip(true);

  // using the useFlip custom hook above to replace the commented code below
      // const [isFacingUp, setIsFacingUp] = useState(true);
      // const flipCard = () => {
      //   setIsFacingUp(isUp => !isUp);
      // };

  return (
    <img
      src={isFacingUp ? front : back}
      alt="playing card"
      onClick={flip}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
