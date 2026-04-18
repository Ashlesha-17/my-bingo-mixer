interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
      <div className="w-full max-w-sm rounded-[1.75rem] border border-border bg-surface-strong/95 p-6 text-center shadow-[0_30px_90px_rgba(0,0,0,0.4)] animate-[pop_220ms_ease-out]">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#11223c] text-4xl text-neon-blue shadow-[0_0_20px_rgba(116,214,255,0.16)]">
          🎉
        </div>
        <h2 className="mt-5 text-3xl font-semibold text-text">Bingo!</h2>
        <p className="mt-3 text-sm leading-6 text-text-muted">
          You completed a line. Keep the momentum and keep playing.
        </p>

        <button
          onClick={onDismiss}
          className="mt-6 inline-flex w-full items-center justify-center rounded-3xl bg-[linear-gradient(135deg,var(--color-neon-blue),var(--color-neon-pink))] px-5 py-3 text-sm font-semibold text-bg shadow-[0_16px_48px_rgba(116,214,255,0.18)] transition duration-200 hover:scale-[1.01] hover:shadow-[0_18px_52px_rgba(116,214,255,0.22)]"
        >
          Keep Playing
        </button>
      </div>
    </div>
  );
}
