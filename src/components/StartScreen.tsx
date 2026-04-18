interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="relative flex min-h-[520px] w-full items-center justify-center overflow-hidden rounded-[2rem] border border-border bg-surface/95 p-6 shadow-[0_40px_120px_rgba(0,0,0,0.45)] sm:p-10">
      <div className="pointer-events-none absolute -inset-x-20 top-0 h-80 bg-[radial-gradient(circle,_rgba(116,214,255,0.14),transparent_35%)] blur-3xl" />
      <div className="pointer-events-none absolute -inset-x-20 bottom-0 h-64 bg-[radial-gradient(circle,_rgba(255,126,210,0.14),transparent_30%)] blur-3xl" />

      <div className="relative z-10 w-full max-w-md space-y-8">
        <div className="space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-text-muted">Cyberpunk Neon Mix</p>
          <h1 className="text-4xl font-semibold tracking-tight text-text sm:text-5xl">Bingo Mixer</h1>
          <p className="text-base leading-7 text-text-muted">
            Find people who match the questions, then collect a neon line to win.
          </p>
        </div>

        <div className="rounded-[1.75rem] border border-border bg-surface-strong/95 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
          <h2 className="text-lg font-semibold text-text">How to play</h2>
          <ul className="mt-4 space-y-3 text-left text-sm text-text-muted">
            <li>• Look for people who match each prompt.</li>
            <li>• Tap the square when you confirm a match.</li>
            <li>• Complete 5 squares in a row to score bingo.</li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="w-full rounded-3xl bg-[linear-gradient(135deg,var(--color-neon-blue),var(--color-neon-pink))] px-6 py-4 text-base font-semibold text-bg shadow-[0_20px_60px_rgba(116,214,255,0.18)] transition duration-300 hover:scale-[1.01] hover:shadow-[0_24px_80px_rgba(116,214,255,0.22)]"
        >
          Start Game
        </button>
      </div>
    </div>
  );
}
