import { useBingoGame } from './hooks/useBingoGame';
import { StartScreen } from './components/StartScreen';
import { GameScreen } from './components/GameScreen';
import { BingoModal } from './components/BingoModal';

function App() {
  const {
    gameState,
    board,
    winningSquareIds,
    showBingoModal,
    startGame,
    handleSquareClick,
    resetGame,
    dismissModal,
  } = useBingoGame();

  return (
    <div className="min-h-screen bg-bg text-text px-4 py-6 sm:px-6">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-6xl items-center justify-center">
        {gameState === 'start' ? (
          <StartScreen onStart={startGame} />
        ) : (
          <GameScreen
            board={board}
            winningSquareIds={winningSquareIds}
            hasBingo={gameState === 'bingo'}
            onSquareClick={handleSquareClick}
            onReset={resetGame}
          />
        )}
      </div>
      {showBingoModal && <BingoModal onDismiss={dismissModal} />}
    </div>
  );
}

export default App;
