import { useState } from "react";
import "./RollDice.css";
import dice_1 from "../../assets/images/dice-1.png";
import dice_2 from "../../assets/images/dice-2.png";
import dice_3 from "../../assets/images/dice-3.png";
import dice_4 from "../../assets/images/dice-4.png";
import dice_5 from "../../assets/images/dice-5.png";
import dice_6 from "../../assets/images/dice-6.png";

const images = [dice_1, dice_2, dice_3, dice_4, dice_5, dice_6];

function RollDice({ updateCurrentSum, changeGameMode, isGameOn, isDisabled }) {
  const [die1, setDie1] = useState(1);
  const [die2, setDie2] = useState(1);
  const [isRolling, setIsRolling] = useState(false);

  const roll = () => {
    const dice = [
      Math.floor(Math.random() * 6 + 1),
      Math.floor(Math.random() * 6 + 1),
    ];
    setDie1(dice[0]);
    setDie2(dice[1]);
    setIsRolling(true);

    setTimeout(() => {
      setIsRolling(false);
      updateCurrentSum(dice[0] + dice[1]);
    }, 1000);
  };

  const functionsToFire = () => {
    roll();
    changeGameMode();
  };

  return (
    <div className="rolldice-container">
      <div className={`dice-container ${isGameOn ? "visible" : "invisible"}`}>
        <img
          src={images[die1 - 1]}
          alt="dice-1"
          className={`dice ${isRolling ? "animation" : ""}`}
        />
        <img
          src={images[die2 - 1]}
          alt="dice-1"
          className={`dice ${isRolling ? "animation" : ""}`}
        />
      </div>
      <button onClick={functionsToFire} disabled={isDisabled}>
        <i className="fa-solid fa-dice fa-2x"></i> ROLL DICE
      </button>
    </div>
  );
}

export default RollDice;
