import "./ScoreGoalInput.css";

function ScoreGoalInput({ value, onInputChange, isGameOn }) {
  return (
    <div className="score-goal-container">
      <label htmlFor="score-goal">Score Goal:</label>
      <input
        type="text"
        id="score-goal"
        className="score-goal-input"
        value={value}
        onChange={(e) => onInputChange(e.target.value)}
        disabled={isGameOn}
      ></input>
    </div>
  );
}

export default ScoreGoalInput;
