import React, { Component } from "react";
import "./Game.css";
import Player from "../Player/Player";
import RollDice from "../RollDice/RollDice";
import HoldButton from "../Buttons/HoldButton";
import RestartButton from "../Buttons/RestartButton";
import ScoreGoalInput from "../ScoreGoalInput/ScoreGoalInput";

class Game extends Component {
  state = {
    totalScore1: 0,
    totalScore2: 0,
    scoreGoal: 100,
    currentDiceRollSum: 0,
    playerTurn: [true, false],
    winner: [false, false],
    isGameOn: false,
    freezeGame: false,
  };

  updateCurrentDiceRollSum = (newSum) => {
    if (newSum === 12) {
      this.handleDoubleSix();
    } else {
      this.setState((prev) => {
        return {
          currentDiceRollSum:
            newSum === 0 ? 0 : prev.currentDiceRollSum + newSum,
        };
      });
    }
  };

  updateTotalScore = () => {
    this.setState(
      (prev) => {
        return this.state.playerTurn[0]
          ? { totalScore1: prev.totalScore1 + prev.currentDiceRollSum }
          : { totalScore2: prev.totalScore2 + prev.currentDiceRollSum };
      },
      () => this.checkWinner()
    );
  };

  changeTurn = () => {
    this.setState((prev) => {
      return { playerTurn: [!prev.playerTurn[0], !prev.playerTurn[1]] };
    });
  };

  updateScoreGoal = (newScoreGoal) => {
    this.setState({ scoreGoal: newScoreGoal });
  };

  handleDoubleSix = () => {
    // add a set timeout with animation
    this.updateCurrentDiceRollSum(0);
    this.changeTurn();
  };

  gameOver = () => {
    this.setState({ freezeGame: true });
  };

  checkWinner = () => {
    if (this.state.totalScore1 === this.state.scoreGoal) {
      this.setState({ winner: [true, false], playerTurn: [true, false] });
      this.gameOver();
    } else if (this.state.totalScore2 === this.state.scoreGoal) {
      this.setState({ winner: [false, true], playerTurn: [false, true] });
      this.gameOver();
    } else if (this.state.totalScore1 > this.state.scoreGoal) {
      this.setState({ winner: [false, true] });
      this.gameOver();
    } else if (this.state.totalScore2 > this.state.scoreGoal) {
      this.setState({ winner: [true, false] });
      this.gameOver();
    } else {
      return;
    }
  };

  restart = () => {
    this.setState((prev) => {
      return {
        totalScore1: 0,
        totalScore2: 0,
        scoreGoal: prev.scoreGoal,
        currentDiceRollSum: 0,
        playerTurn: [true, false],
        winner: [false, false],
        isGameOn: false,
        freezeGame: false,
      };
    });
  };

  changeGameMode = () => {
    this.setState({ isGameOn: true, freezeGame: true });
    setTimeout(() => {
      this.setState({ freezeGame: false });
    }, 1000);
  };

  render() {
    return (
      <div className="game-container">
        <Player
          name="PLAYER 1"
          totalScore={this.state.totalScore1}
          currentScore={this.state.currentDiceRollSum}
          isMyTurn={this.state.playerTurn[0]}
          isWinner={this.state.winner[0]}
        />
        <div className="game-dashboard">
          <RestartButton restart={this.restart} />
          <RollDice
            updateCurrentSum={this.updateCurrentDiceRollSum}
            changeGameMode={this.changeGameMode}
            isGameOn={this.state.isGameOn}
            isDisabled={this.state.freezeGame}
          />
          <HoldButton
            updateCurrentSum={this.updateCurrentDiceRollSum}
            updateTotalScore={this.updateTotalScore}
            changeTurn={this.changeTurn}
            isGameOn={this.state.isGameOn}
            isDisabled={this.state.freezeGame}
          />
          <ScoreGoalInput
            onInputChange={this.updateScoreGoal}
            value={this.state.scoreGoal}
            isGameOn={this.state.isGameOn}
          />
        </div>
        <Player
          name="PLAYER 2"
          totalScore={this.state.totalScore2}
          currentScore={this.state.currentDiceRollSum}
          isMyTurn={this.state.playerTurn[1]}
          isWinner={this.state.winner[1]}
        />
      </div>
    );
  }
}

export default Game;
