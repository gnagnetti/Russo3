import React from 'react';
import { TutorProvider, useTutor } from './context/TutorContext';
import { Header } from './components/Header';
import { TutorView } from './components/TutorView';
import { PathView } from './components/PathView';
import { RulesDesk } from './components/RulesDesk';
import { ExamView } from './components/ExamView';
import { ErrorNotebook } from './components/ErrorNotebook';
import { MobileBottomNav } from './components/MobileBottomNav';

const AppContent: React.FC = () => {
  const { mode } = useTutor();

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 selection:bg-amber-100 selection:text-amber-900 pb-16 md:pb-0">
      <Header />

      <main className="flex-1">
        {mode === 'tutor' && <TutorView />}
        {mode === 'path' && <PathView />}
        {mode === 'rules' && <RulesDesk />}
        {mode === 'exam' && <ExamView />}
        {mode === 'errors' && <ErrorNotebook />}
      </main>

      {/* Institutional Editorial Footer */}
      <footer className="border-t border-stone-200 bg-white py-6 sm:py-8 mt-12 sm:mt-16 text-xs text-stone-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 sm:gap-2">
            <span className="font-serif font-bold text-stone-800">
              Russian Syntax Tutor
            </span>
            <span>·</span>
            <span>О.И. Глазунова, «Синтаксис» (2011)</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-stone-400 text-[11px] sm:text-xs">
            <span>Златоуст (СПб)</span>
            <span>·</span>
            <span>Livello B2–C1</span>
            <span>·</span>
            <span>100% Offline</span>
          </div>
        </div>
      </footer>

      {/* Persistent Bottom Bar for Mobile Devices */}
      <MobileBottomNav />
    </div>
  );
};

export default function App() {
  return (
    <TutorProvider>
      <AppContent />
    </TutorProvider>
  );
}
