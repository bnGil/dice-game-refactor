import React, { Component } from "react";
import "./Buttons.css";

class HoldButton extends Component {
  fireFunctionsOnClick = () => {
    this.props.updateTotalScore();
    this.props.updateCurrentSum(0);
    this.props.changeTurn();
  };

  render() {
    return (
      <button
        onClick={this.fireFunctionsOnClick}
        className={`${this.props.isGameOn ? "visible" : "invisible"}`}
        disabled={this.props.isDisabled}
      >
        <i className="fa-solid fa-download fa-2x"></i> HOLD
      </button>
    );
  }
}

export default HoldButton;
