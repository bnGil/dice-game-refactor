import Game from "./components/Game/Game";
import "./App.css";
import GameProvider from "./components/GameContext/GameContext";

function App() {
  return (
    <GameProvider>
      <Game />
    </GameProvider>
  );
}

export default App;
