import { useState, useEffect, useContext } from "react";

import "./Game.css";
import Player from "../Player/Player";
import RollDice from "../RollDice/RollDice";
import HoldButton from "../Buttons/HoldButton";
import RestartButton from "../Buttons/RestartButton";
import ScoreGoalInput from "../ScoreGoalInput/ScoreGoalInput";

function Game() {
  const [totalScore1, setTotalScore1] = useState(0);
  const [totalScore2, setTotalScore2] = useState(0);
  const [scoreGoal, setScoreGoal] = useState(100);
  const [currentDiceRollSum, setCurrentDiceRollSum] = useState(0);
  const [playerTurn, setPlayerTurn] = useState([true, false]);
  const [winner, setWinner] = useState([false, false]);
  const [isGameOn, setIsGameOn] = useState(false);
  const [freezeGame, setFreezeGame] = useState(false);

  useEffect(() => {
    checkWinner();
  }, [totalScore1, totalScore2]);

  const updateCurrentDiceRollSum = (newSum) => {
    if (newSum === 12) {
      handleDoubleSix();
    } else {
      setCurrentDiceRollSum((prevSum) => {
        return newSum === 0 ? 0 : prevSum + newSum;
      });
    }
  };

  const updateTotalScore = () => {
    if (playerTurn[0]) {
      setTotalScore1((prevTotal1) => prevTotal1 + currentDiceRollSum);
    } else {
      setTotalScore2((prevTotal2) => prevTotal2 + currentDiceRollSum);
    }
    // checkWinner();
  };

  const changeTurn = () => {
    setPlayerTurn((prev) => {
      return [!prev[0], !prev[1]];
    });
  };

  const updateScoreGoal = (newScoreGoal) => {
    setScoreGoal(newScoreGoal);
  };

  const handleDoubleSix = () => {
    updateCurrentDiceRollSum(0);
    changeTurn();
  };

  const gameOver = () => {
    setFreezeGame(true);
  };

  const checkWinner = () => {
    if (totalScore1 === scoreGoal) {
      setWinner([true, false]);
      setPlayerTurn([true, false]);
      gameOver();
    } else if (totalScore2 === scoreGoal) {
      setWinner([false, true]);
      setPlayerTurn([false, true]);
      gameOver();
    } else if (totalScore1 > scoreGoal) {
      setWinner([false, true]);
      gameOver();
    } else if (totalScore2 > scoreGoal) {
      setWinner([true, false]);
      gameOver();
    } else {
      return;
    }
  };

  const restart = () => {
    setTotalScore1(0);
    setTotalScore2(0);
    setScoreGoal((prev) => prev);
    setCurrentDiceRollSum(0);
    setPlayerTurn([true, false]);
    setWinner([false, false]);
    setIsGameOn(false);
    setFreezeGame(false);
  };

  const changeGameMode = () => {
    setIsGameOn(true);
    setFreezeGame(true);
    setTimeout(() => {
      setFreezeGame(false);
    }, 1000);
  };

  return (
    <div className="game-container">
      <Player
        name="PLAYER 1"
        totalScore={totalScore1}
        currentScore={currentDiceRollSum}
        isMyTurn={playerTurn[0]}
        isWinner={winner[0]}
      />
      <div className="game-dashboard">
        <RestartButton restart={restart} />
        <RollDice
          updateCurrentSum={updateCurrentDiceRollSum}
          changeGameMode={changeGameMode}
          isGameOn={isGameOn}
          isDisabled={freezeGame}
        />
        <HoldButton
          updateCurrentSum={updateCurrentDiceRollSum}
          updateTotalScore={updateTotalScore}
          changeTurn={changeTurn}
          isGameOn={isGameOn}
          isDisabled={freezeGame}
        />
        <ScoreGoalInput
          onInputChange={updateScoreGoal}
          value={scoreGoal}
          isGameOn={isGameOn}
        />
      </div>
      <Player
        name="PLAYER 2"
        totalScore={totalScore2}
        currentScore={currentDiceRollSum}
        isMyTurn={playerTurn[1]}
        isWinner={winner[1]}
      />
    </div>
  );
}

export default Game;
