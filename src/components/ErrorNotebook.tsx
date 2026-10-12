import React from 'react';
import { useTutor } from '../context/TutorContext';
import { QUESTIONS } from '../data/questions';
import { RotateCcw, CheckCircle2, ArrowRight } from 'lucide-react';

export const ErrorNotebook: React.FC = () => {
  const { userAnswers, retryQuestion, setMode } = useTutor();

  const failedQuestions = QUESTIONS.filter(
    (q) => userAnswers[q.id] !== undefined && !userAnswers[q.id].isCorrect
  );

  return (
    <div className="max-w-4xl mx-auto px-3 sm:px-6 py-6 sm:py-10">
      <div className="mb-6 sm:mb-8">
        <span className="text-[11px] sm:text-xs uppercase tracking-widest text-rose-700 font-semibold mb-1 block">
          Quaderno degli Errori & Ripasso Mirato
        </span>
        <h1 className="font-serif text-2xl sm:text-4xl font-bold text-stone-900 tracking-tight">
          Revisione Errori ({failedQuestions.length})
        </h1>
        <p className="text-stone-600 text-xs sm:text-sm mt-1.5 sm:mt-2 max-w-2xl leading-relaxed">
          Tutti i quesiti che non hanno ricevuto una risposta corretta vengono raccolti qui.
          Rileggi la spiegazione del testo di Glazunova e riprova l'esercizio finché non lo padroneggi.
        </p>
      </div>

      {failedQuestions.length === 0 ? (
        <div className="bg-white rounded-xl border border-stone-200 p-6 sm:p-10 text-center shadow-sm">
          <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-900 mb-2">
            Nessun errore registrato!
          </h3>
          <p className="text-stone-600 text-xs sm:text-sm max-w-md mx-auto mb-6 leading-relaxed">
            Non hai ancora commesso errori o hai già corretto tutti i quesiti affrontati.
            Continua ad esercitarti con il Tutor Interattivo.
          </p>
          <button
            onClick={() => {
              setMode('tutor');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-5 py-2.5 bg-stone-900 text-stone-100 rounded-lg text-xs sm:text-sm font-medium hover:bg-stone-800 transition-colors shadow-sm touch-manipulation"
          >
            Torna al Tutor Interattivo
          </button>
        </div>
      ) : (
        <div className="space-y-4 sm:space-y-6">
          {failedQuestions.map((q) => {
            const rec = userAnswers[q.id];
            return (
              <div
                key={q.id}
                className="bg-white rounded-xl border border-rose-200/80 shadow-sm p-4 sm:p-6 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 pb-3 border-b border-stone-100 text-[11px] sm:text-xs text-stone-500">
                  <div className="flex items-center gap-2 truncate">
                    <span className="font-medium text-stone-700 truncate">{q.sectionTitle}</span>
                    <span>·</span>
                    <span className="truncate">{q.exerciseSource}</span>
                  </div>
                  <span className="font-mono text-[10px] sm:text-xs text-rose-700 font-semibold self-start sm:self-auto">
                    {q.bookRuleRef}
                  </span>
                </div>

                <div className="my-3 sm:my-4">
                  <p className="font-serif text-base sm:text-lg text-stone-900 font-medium mb-2 leading-relaxed">
                    «{q.sentenceWithBlank}»
                  </p>
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="px-2 py-1 rounded bg-rose-50 text-rose-800 border border-rose-200 font-mono">
                      Tua risposta: ({rec?.selectedOption || 'N/A'})
                    </span>
                    <span className="px-2 py-1 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 font-mono">
                      Risposta corretta: ({q.correctOption})
                    </span>
                  </div>
                </div>

                <div className="bg-stone-50 p-3 sm:p-4 rounded-lg border border-stone-200 text-xs leading-relaxed text-stone-700 mb-4 whitespace-pre-line">
                  {q.explanation}
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={() => {
                      retryQuestion(q.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-stone-900 hover:bg-stone-800 active:bg-stone-950 text-stone-100 rounded-lg text-xs font-medium transition-colors touch-manipulation"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Riprova questo esercizio</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
