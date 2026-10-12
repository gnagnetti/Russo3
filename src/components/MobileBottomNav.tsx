import React from 'react';
import { useTutor, AppMode } from '../context/TutorContext';
import { BookOpen, HelpCircle, CheckCircle2, Bookmark, RotateCcw, Compass, FileText, Award, AlertCircle } from 'lucide-react';

export const MobileBottomNav: React.FC = () => {
  const { mode, setMode, errorQuestionIds } = useTutor();

  const navItems: { mode: AppMode; label: string; icon: React.ReactNode; badge?: number }[] = [
    { mode: 'tutor', label: 'Tutor', icon: <Compass className="w-5 h-5" /> },
    { mode: 'path', label: 'Sillabo', icon: <BookOpen className="w-5 h-5" /> },
    { mode: 'rules', label: 'Schede', icon: <FileText className="w-5 h-5" /> },
    { mode: 'exam', label: 'Esame', icon: <Award className="w-5 h-5" /> },
    {
      mode: 'errors',
      label: 'Errori',
      icon: <AlertCircle className="w-5 h-5" />,
      badge: errorQuestionIds.length > 0 ? errorQuestionIds.length : undefined
    },
  ];

  return (
    <nav
      aria-label="Navigazione mobile"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-stone-900/95 backdrop-blur-md border-t border-stone-800 pb-[env(safe-area-inset-bottom)]"
    >
      <div className="grid grid-cols-5 h-16">
        {navItems.map((item) => {
          const isActive = mode === item.mode;
          return (
            <button
              key={item.mode}
              onClick={() => {
                setMode(item.mode);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`relative flex flex-col items-center justify-center gap-1 transition-colors select-none ${
                isActive ? 'text-amber-400 font-semibold' : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              <div className="relative">
                {item.icon}
                {item.badge !== undefined && (
                  <span className="absolute -top-1.5 -right-2.5 min-w-[16px] h-4 px-1 rounded-full bg-rose-600 text-white text-[10px] font-mono font-bold flex items-center justify-center leading-none">
                    {item.badge}
                  </span>
                )}
              </div>
              <span className="text-[10px] tracking-tight">{item.label}</span>
              {isActive && (
                <span className="absolute top-0 inset-x-3 h-0.5 bg-amber-400 rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
