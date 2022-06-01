import "./Buttons.css";

function HoldButton({
  updateTotalScore,
  updateCurrentSum,
  changeTurn,
  isGameOn,
  isDisabled,
}) {
  const fireFunctionsOnClick = () => {
    updateTotalScore();
    updateCurrentSum(0);
    changeTurn();
  };

  return (
    <button
      onClick={fireFunctionsOnClick}
      className={`${isGameOn ? "visible" : "invisible"}`}
      disabled={isDisabled}
    >
      <i className="fa-solid fa-download fa-2x"></i> HOLD
    </button>
  );
}

export default HoldButton;
