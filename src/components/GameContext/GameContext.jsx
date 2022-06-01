import { useState, createContext } from "react";

export const GameContext = createContext();

function GameProvider({ children }) {
  const [totalScore1, setTotalScore1] = useState(0);
  const [totalScore2, setTotalScore2] = useState(0);
  const [scoreGoal, setScoreGoal] = useState(100);
  const [currentDiceRollSum, setCurrentDiceRollSum] = useState(0);
  const [playerTurn, setPlayerTurn] = useState([true, false]);
  const [winner, setWinner] = useState([false, false]);
  const [isGameOn, setIsGameOn] = useState(false);
  const [freezeGame, setFreezeGame] = useState(false);

  return (
    <GameContext.Provider
      value={{
        totalScore1,
        setTotalScore1,
        totalScore2,
        setTotalScore2,
        scoreGoal,
        setScoreGoal,
        currentDiceRollSum,
        setCurrentDiceRollSum,
        playerTurn,
        setPlayerTurn,
        winner,
        setWinner,
        isGameOn,
        setIsGameOn,
        freezeGame,
        setFreezeGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
export default GameProvider;
