import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="flex w-full flex-col rounded-[2rem] border border-border bg-surface/95 p-4 shadow-[0_40px_120px_rgba(0,0,0,0.35)] sm:p-6">
      <div className="flex items-center justify-between gap-4 rounded-3xl border border-border bg-surface-strong/90 px-4 py-3 text-sm text-text-muted shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]">
        <button
          onClick={onReset}
          className="rounded-2xl border border-[#4d7fb4]/30 bg-[#0f1c32] px-3 py-2 text-text transition hover:border-neon-blue/70 hover:text-neon-blue"
        >
          ← Reset
        </button>
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.24em] text-text-muted">Current mode</p>
          <p className="text-sm font-semibold text-text">Cyberpunk Bingo</p>
        </div>
        <div className="w-24" />
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <section className="rounded-[1.75rem] border border-border bg-surface-strong/90 p-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]">
          <div className="mb-3 flex items-center justify-between gap-4 text-sm text-text-muted">
            <p>Tap a square when someone matches the prompt.</p>
            {hasBingo ? (
              <span className="inline-flex rounded-full bg-neon-blue/10 px-3 py-1 text-neon-blue">Bingo ready</span>
            ) : (
              <span className="inline-flex rounded-full bg-[rgba(255,255,255,0.05)] px-3 py-1 text-text-muted">Looking for matches</span>
            )}
          </div>
          <div className="flex items-center justify-center">
            <BingoBoard
              board={board}
              winningSquareIds={winningSquareIds}
              onSquareClick={onSquareClick}
            />
          </div>
        </section>

        <aside className="space-y-4 rounded-[1.75rem] border border-border bg-surface-strong/90 p-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]">
          <div>
            <p className="text-sm font-semibold text-text">Game tips</p>
            <p className="mt-3 text-sm leading-6 text-text-muted">
              Use the free center square as your anchor and focus on natural connections. Keep your board clean by marking only confirmed matches.
            </p>
          </div>

          <div className="rounded-3xl border border-[#ffffff1a] bg-[#09101f] p-4">
            <p className="text-xs uppercase tracking-[0.24em] text-text-muted">Highlight</p>
            <p className="mt-2 text-sm leading-6 text-text">
              A strong card layout with calm neon accents keeps the interface readable and easy to scan.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
