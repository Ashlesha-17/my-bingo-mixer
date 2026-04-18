import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex items-center justify-center rounded-2xl border px-2 py-3 text-center text-[0.7rem] leading-tight transition duration-300 ease-out select-none min-h-[68px] sm:text-xs';

  const stateClasses = square.isMarked
    ? isWinning
      ? 'border-neon-pink/60 bg-[#171f35] text-text shadow-[0_0_24px_rgba(255,126,210,0.14)]'
      : 'border-neon-blue/40 bg-[#111d34] text-text'
    : 'border-[#ffffff10] bg-[#081125] text-text-muted hover:border-neon-blue/40 hover:bg-[#0d1730]';

  const freeSpaceClasses = square.isFreeSpace
    ? 'bg-[#10203a] border-neon-cyan/30 text-neon-cyan shadow-[0_0_18px_rgba(123,240,255,0.12)]'
    : '';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses} ${freeSpaceClasses}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="wrap-break-word hyphens-auto">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute top-1 right-1 text-sm text-neon-cyan">✓</span>
      )}
    </button>
  );
}
