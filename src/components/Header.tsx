import React from 'react';
import { useTutor, AppMode } from '../context/TutorContext';
import { RotateCcw } from 'lucide-react';

export const Header: React.FC = () => {
  const {
    mode,
    setMode,
    correctCount,
    answeredCount,
    scorePercentage,
    errorQuestionIds,
    resetProgress,
  } = useTutor();

  const navItems: { mode: AppMode; label: string; countBadge?: number }[] = [
    { mode: 'tutor', label: 'Tutor Interattivo' },
    { mode: 'path', label: 'Sillabo Manuale' },
    { mode: 'rules', label: 'Regole e Schede' },
    { mode: 'exam', label: 'Test d\'Esame B2-C1' },
    {
      mode: 'errors',
      label: `Quaderno Errori`,
      countBadge: errorQuestionIds.length > 0 ? errorQuestionIds.length : undefined,
    },
  ];

  return (
    <header className="sticky top-0 z-40 bg-stone-900/95 backdrop-blur-md border-b border-stone-800 text-stone-100">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-14 sm:h-16">
          {/* Zone 1: Wordmark */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            <button
              onClick={() => {
                setMode('tutor');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2 sm:gap-2.5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-md"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 font-serif font-bold text-base sm:text-lg group-hover:bg-amber-500/25 transition-colors shrink-0">
                Гл
              </div>
              <div className="min-w-0">
                <span className="font-serif text-sm sm:text-lg font-bold tracking-tight text-stone-100 truncate block leading-tight">
                  Russian Syntax Tutor
                </span>
                <span className="text-[10px] sm:text-[11px] text-stone-400 font-sans tracking-wide truncate block leading-none">
                  О.И. Глазунова · Синтаксис
                </span>
              </div>
            </button>
          </div>

          {/* Zone 2: Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const isActive = mode === item.mode;
              return (
                <button
                  key={item.mode}
                  onClick={() => setMode(item.mode)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-stone-800 text-amber-300 shadow-sm border border-stone-700'
                      : 'text-stone-300 hover:text-stone-100 hover:bg-stone-800/60'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.countBadge !== undefined && (
                    <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-rose-500/80 text-white font-mono font-bold">
                      {item.countBadge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Score & Reset */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            {answeredCount > 0 ? (
              <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-stone-300 font-mono tabular-nums bg-stone-800/70 border border-stone-700/60 px-2 py-1 rounded-md">
                <span className="text-emerald-400 font-medium">
                  {correctCount}/{answeredCount}
                </span>
                <span className="text-stone-500">·</span>
                <span className="text-amber-300">{scorePercentage}%</span>
              </div>
            ) : (
              <span className="hidden sm:inline-block text-xs text-stone-400">
                Livello B2–C1
              </span>
            )}

            <button
              onClick={resetProgress}
              title="Azzera progressi"
              aria-label="Azzera progressi"
              className="p-1.5 text-stone-400 hover:text-stone-200 hover:bg-stone-800 active:bg-stone-700 rounded-md transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
