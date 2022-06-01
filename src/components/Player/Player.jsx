import React, { Component } from "react";
import "./Player.css";

class Player extends Component {
  render() {
    const myTurn = this.props.isMyTurn ? "player-turn" : "";

    return (
      <div className={`player-container ${myTurn}`}>
        <h2 className="name">
          {this.props.isWinner ? "Winner!" : this.props.name}
        </h2>
        <p className="total-score">{this.props.totalScore}</p>
        <div className="current-score-container">
          <p className="current-score-header">CURRENT</p>
          <p className="current-score">
            {this.props.isMyTurn ? this.props.currentScore : 0}
          </p>
        </div>
      </div>
    );
  }
}

export default Player;
