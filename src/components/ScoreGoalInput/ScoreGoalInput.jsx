import React, { Component } from "react";
import "./ScoreGoalInput.css";

class ScoreGoalInput extends Component {
  render() {
    return (
      <div className="score-goal-container">
        <label htmlFor="score-goal">Score Goal:</label>
        <input
          type="text"
          id="score-goal"
          className="score-goal-input"
          value={this.props.value}
          onChange={(e) => this.props.onInputChange(e.target.value)}
          disabled={this.props.isGameOn}
        ></input>
      </div>
    );
  }
}

export default ScoreGoalInput;
