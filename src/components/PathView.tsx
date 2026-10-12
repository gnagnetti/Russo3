import React from 'react';
import { useTutor } from '../context/TutorContext';
import { SECTIONS } from '../data/sections';
import { QUESTIONS } from '../data/questions';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { SectionId } from '../types';

export const PathView: React.FC = () => {
  const { setSelectedSection, setMode, userAnswers } = useTutor();

  const handleStartSection = (secId: SectionId) => {
    setSelectedSection(secId);
    setMode('tutor');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-5xl mx-auto px-3 sm:px-6 py-6 sm:py-10">
      {/* Editorial Header */}
      <div className="mb-6 sm:mb-10 text-center max-w-2xl mx-auto">
        <span className="text-[11px] sm:text-xs uppercase tracking-widest text-amber-800 font-semibold mb-1 sm:mb-2 block">
          Struttura del Manuale di O.I. Glazunova
        </span>
        <h1 className="font-serif text-2xl sm:text-4xl font-bold text-stone-900 tracking-tight mb-2 sm:mb-3">
          Sillabo del Corso di Sintassi Russa
        </h1>
        <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
          Percorso completo strutturato sulle tre sezioni del manuale di San Pietroburgo
          (Zlatoust, 2011). Ogni sezione raggruppa le unità teoriche, le reggenze e gli esercizi
          a scelta multipla.
        </p>
      </div>

      {/* Sections Cards */}
      <div className="space-y-5 sm:space-y-8">
        {SECTIONS.map((sec) => {
          const sectionQuestions = QUESTIONS.filter((q) => q.sectionId === sec.id);
          const answeredInSection = sectionQuestions.filter((q) => userAnswers[q.id] !== undefined);
          const completionPct =
            sectionQuestions.length > 0
              ? Math.round((answeredInSection.length / sectionQuestions.length) * 100)
              : 0;

          return (
            <div
              key={sec.id}
              className="bg-white rounded-xl border border-stone-200 shadow-sm p-4 sm:p-8 transition-shadow hover:shadow-md"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 sm:pb-5 border-b border-stone-100">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500 font-mono mb-1">
                    <span className="font-semibold text-amber-700">Sezione {sec.id}</span>
                    <span>·</span>
                    <span>{sec.pages}</span>
                    <span>·</span>
                    <span>{sectionQuestions.length} esercizi</span>
                  </div>
                  <h2 className="font-serif text-lg sm:text-2xl font-bold text-stone-900 leading-snug">
                    {sec.title}
                  </h2>
                  <p className="font-serif text-xs sm:text-sm text-stone-600 italic mt-0.5">
                    {sec.russianTitle}
                  </p>
                </div>

                <div className="flex items-center gap-3 sm:text-right shrink-0">
                  <div className="bg-stone-50 px-3 py-1.5 rounded-lg border border-stone-200 font-mono text-xs tabular-nums">
                    <span className="text-stone-500">Progresso: </span>
                    <span className="font-semibold text-stone-900">
                      {answeredInSection.length}/{sectionQuestions.length} ({completionPct}%)
                    </span>
                  </div>
                  <button
                    onClick={() => handleStartSection(sec.id)}
                    className="flex items-center gap-1.5 px-4 py-2 bg-stone-900 text-stone-100 rounded-lg text-xs font-medium hover:bg-stone-800 active:bg-stone-950 transition-colors shadow-sm touch-manipulation"
                  >
                    <span>Pratica</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Summary description */}
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-3 sm:my-4">
                {sec.summary}
              </p>

              {/* Topics list */}
              <div className="mt-4 pt-3 border-t border-stone-100">
                <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block mb-2.5">
                  Argomenti principali della sezione:
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {sec.topics.map((top) => {
                    return (
                      <div
                        key={top.id}
                        onClick={() => handleStartSection(sec.id)}
                        className="p-3 rounded-lg border border-stone-200/80 bg-stone-50/50 hover:bg-amber-50/40 hover:border-amber-300 transition-all cursor-pointer group flex items-start justify-between gap-2 touch-manipulation"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-xs sm:text-sm text-stone-900 group-hover:text-amber-950">
                              {top.name}
                            </span>
                          </div>
                          <span className="text-[10px] font-mono text-stone-400 mt-1 block">
                            {top.exerciseCount} esercizi nel manuale
                          </span>
                        </div>

                        <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-amber-700 group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
