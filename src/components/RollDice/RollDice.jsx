import React, { Component } from "react";
import "./RollDice.css";
import dice_1 from "../../assets/images/dice-1.png";
import dice_2 from "../../assets/images/dice-2.png";
import dice_3 from "../../assets/images/dice-3.png";
import dice_4 from "../../assets/images/dice-4.png";
import dice_5 from "../../assets/images/dice-5.png";
import dice_6 from "../../assets/images/dice-6.png";

const images = [dice_1, dice_2, dice_3, dice_4, dice_5, dice_6];

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = { die1: 1, die2: 1, isRolling: false };
  }
  roll = () => {
    this.setState({
      die1: Math.floor(Math.random() * 6 + 1),
      die2: Math.floor(Math.random() * 6 + 1),
      isRolling: true,
    });

    setTimeout(() => {
      this.setState({ isRolling: false });
      this.props.updateCurrentSum(this.state.die1 + this.state.die2);
    }, 1000);
  };

  functionsToFire = () => {
    this.roll();
    this.props.changeGameMode();
  };

  render() {
    return (
      <div className="rolldice-container">
        <div
          className={`dice-container ${
            this.props.isGameOn ? "visible" : "invisible"
          }`}
        >
          <img
            src={images[this.state.die1 - 1]}
            alt="dice-1"
            className={`dice ${this.state.isRolling ? "animation" : ""}`}
          />
          <img
            src={images[this.state.die2 - 1]}
            alt="dice-1"
            className={`dice ${this.state.isRolling ? "animation" : ""}`}
          />
        </div>
        <button onClick={this.functionsToFire} disabled={this.props.isDisabled}>
          <i className="fa-solid fa-dice fa-2x"></i> ROLL DICE
        </button>
      </div>
    );
  }
}

export default RollDice;
