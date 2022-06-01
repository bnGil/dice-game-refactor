import "./Player.css";

function Player({ isMyTurn, isWinner, name, totalScore, currentScore }) {
  const myTurn = isMyTurn ? "player-turn" : "";

  return (
    <div className={`player-container ${myTurn}`}>
      <h2 className="name">{isWinner ? "Winner!" : name}</h2>
      <p className="total-score">{totalScore}</p>
      <div className="current-score-container">
        <p className="current-score-header">CURRENT</p>
        <p className="current-score">{isMyTurn ? currentScore : 0}</p>
      </div>
    </div>
  );
}

export default Player;
