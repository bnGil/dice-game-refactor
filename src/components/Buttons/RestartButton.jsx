function RestartButton({ restart }) {
  return (
    <button onClick={restart}>
      <i className="fa-solid fa-arrow-rotate-left fa-2x"></i> RESETART
    </button>
  );
}

export default RestartButton;
