# Bingo Mixer Guidelines

## Code Style
- Use TypeScript for all new code
- Follow React functional components with hooks
- Use Tailwind CSS v4 for styling (see [Tailwind v4 instructions](instructions/tailwind-4.instructions.md))
- Follow ESLint configuration for code quality

## Architecture
- **Frontend**: React app built with Vite
- **Components**: Modular components in `src/components/` (StartScreen, GameScreen, BingoBoard, etc.)
- **Hooks**: Game logic in `src/hooks/useBingoGame.ts`
- **Data**: Questions in `src/data/questions.ts`
- **Utils**: Bingo logic in `src/utils/bingoLogic.ts`
- **Types**: TypeScript interfaces in `src/types/index.ts`

This is a lab project for learning VS Code GitHub Copilot agents. See [workshop guide](workshop/GUIDE.md) for development workflow.

## Build and Test
- Install: `npm install`
- Dev server: `npm run dev` (serves on http://localhost:5173/)
- Build: `npm run build`
- Lint: `npm run lint`
- Test: `npm test` (Vitest with 41 tests)

## Conventions
- Use custom agents for specialized tasks (see `.github/agents/`)
- Follow TDD workflow with agents like `tdd-green`, `tdd-red`, `tdd-refactor`
- Design-first approach: Prototype UI before implementation (see [frontend design instructions](instructions/frontend-design.instructions.md))
- Multi-agent development: Use quiz-master and other agents for collaborative coding

For detailed lab instructions, see [workshop/](workshop/) folder.