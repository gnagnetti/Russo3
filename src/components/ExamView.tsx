import React, { useState, useEffect } from 'react';
import { QUESTIONS } from '../data/questions';
import { Question } from '../types';
import { CheckCircle2, XCircle, Award, Timer, RotateCcw, ArrowRight, BookOpen } from 'lucide-react';
import { useTutor } from '../context/TutorContext';

export const ExamView: React.FC = () => {
  const { setMode } = useTutor();
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [examAnswers, setExamAnswers] = useState<Record<string, string>>({});
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [timeRemaining, setTimeRemaining] = useState<number>(15 * 60); // 15 mins
  const [timerActive, setTimerActive] = useState<boolean>(false);

  // Initialize Exam with balanced sample from Section 1, 2, 3
  const startNewExam = () => {
    const s1 = QUESTIONS.filter((q) => q.sectionId === 1).slice(0, 5);
    const s2 = QUESTIONS.filter((q) => q.sectionId === 2).slice(0, 5);
    const s3 = QUESTIONS.filter((q) => q.sectionId === 3).slice(0, 5);
    const combined = [...s1, ...s2, ...s3];
    setExamQuestions(combined);
    setCurrentIndex(0);
    setExamAnswers({});
    setIsFinished(false);
    setTimeRemaining(15 * 60);
    setTimerActive(true);
  };

  useEffect(() => {
    startNewExam();
  }, []);

  // Timer countdown
  useEffect(() => {
    if (!timerActive || isFinished) return;
    const interval = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          setIsFinished(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [timerActive, isFinished]);

  const handleSelectOption = (label: string) => {
    if (!examQuestions[currentIndex]) return;
    const qId = examQuestions[currentIndex].id;
    setExamAnswers((prev) => ({
      ...prev,
      [qId]: label,
    }));
  };

  const handleNext = () => {
    if (currentIndex < examQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsFinished(true);
      setTimerActive(false);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  const timeFormatted = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  const currentQ = examQuestions[currentIndex];

  // Calculate results if finished
  const totalExam = examQuestions.length;
  let correctCount = 0;
  examQuestions.forEach((q) => {
    if (examAnswers[q.id] === q.correctOption) {
      correctCount += 1;
    }
  });
  const scorePct = totalExam > 0 ? Math.round((correctCount / totalExam) * 100) : 0;

  if (isFinished) {
    return (
      <div className="max-w-3xl mx-auto px-3 sm:px-6 py-6 sm:py-10 animate-in fade-in duration-200">
        <div className="bg-white rounded-xl border border-stone-200 p-5 sm:p-8 shadow-sm text-center">
          <div className="w-14 h-14 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mx-auto mb-4">
            <Award className="w-8 h-8" />
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mb-2">
            Simulazione Esame Completata
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm max-w-md mx-auto mb-6">
            Valutazione complessiva delle competenze di sintassi russa secondo i criteri del manuale di O.I. Glazunova.
          </p>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-md mx-auto mb-8 bg-stone-50 p-4 rounded-xl border border-stone-200">
            <div>
              <span className="text-[10px] sm:text-xs text-stone-500 block uppercase font-medium">Esatte</span>
              <span className="font-mono text-xl sm:text-2xl font-bold text-emerald-600">
                {correctCount}/{totalExam}
              </span>
            </div>
            <div>
              <span className="text-[10px] sm:text-xs text-stone-500 block uppercase font-medium">Percentuale</span>
              <span className="font-mono text-xl sm:text-2xl font-bold text-stone-900">
                {scorePct}%
              </span>
            </div>
            <div>
              <span className="text-[10px] sm:text-xs text-stone-500 block uppercase font-medium">Esito</span>
              <span className={`font-serif text-sm sm:text-base font-bold ${scorePct >= 70 ? 'text-emerald-700' : 'text-rose-700'}`}>
                {scorePct >= 85 ? 'Ottimo' : scorePct >= 70 ? 'Superato' : 'Da rivedere'}
              </span>
            </div>
          </div>

          {/* Detailed Question Review */}
          <div className="text-left mb-8 space-y-4">
            <h3 className="font-bold text-sm text-stone-900 border-b border-stone-200 pb-2">
              Revisione dettagliata dei quesiti:
            </h3>
            {examQuestions.map((q, idx) => {
              const userAns = examAnswers[q.id];
              const isCorrect = userAns === q.correctOption;

              return (
                <div
                  key={q.id}
                  className={`p-3.5 sm:p-4 rounded-lg border text-xs sm:text-sm ${
                    isCorrect
                      ? 'bg-emerald-50/50 border-emerald-200 text-emerald-950'
                      : 'bg-rose-50/50 border-rose-200 text-rose-950'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <span className="font-mono font-medium text-xs text-stone-500">
                      Quesito #{idx + 1} · Sezione {q.sectionId}
                    </span>
                    <span className="font-bold text-xs">
                      {isCorrect ? '✓ Corretta' : '✕ Errata'}
                    </span>
                  </div>
                  <p className="font-serif text-sm sm:text-base text-stone-900 mb-2 font-medium">
                    «{q.sentenceWithBlank}»
                  </p>
                  <p className="text-xs leading-relaxed text-stone-700 mb-2">
                    <span className="font-semibold">Tua risposta:</span> {userAns || 'Nessuna'} ·{' '}
                    <span className="font-semibold">Opzione corretta:</span> ({q.correctOption})
                  </p>
                  <p className="text-[11px] sm:text-xs text-stone-600 bg-white/70 p-2.5 rounded border border-current/10 leading-relaxed">
                    {q.explanation}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={startNewExam}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 bg-stone-900 text-stone-100 rounded-lg text-xs sm:text-sm font-medium hover:bg-stone-800 transition-colors shadow-sm touch-manipulation"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Ripeti nuova simulazione</span>
            </button>
            <button
              onClick={() => {
                setMode('tutor');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-5 py-2.5 border border-stone-300 text-stone-700 rounded-lg text-xs sm:text-sm font-medium hover:bg-stone-50 transition-colors touch-manipulation"
            >
              Torna al Tutor Guidato
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!currentQ) return null;

  return (
    <div className="max-w-3xl mx-auto px-3 sm:px-6 py-4 sm:py-8">
      {/* Exam Header Ribbon */}
      <div className="flex items-center justify-between gap-3 pb-4 mb-4 sm:mb-6 border-b border-stone-200">
        <div>
          <span className="text-[10px] sm:text-xs uppercase tracking-wider text-amber-800 font-semibold block">
            Test d'Esame Diagnostico B2–C1
          </span>
          <span className="font-mono text-xs sm:text-sm text-stone-600">
            Domanda {currentIndex + 1} di {examQuestions.length}
          </span>
        </div>

        <div className="flex items-center gap-2 bg-stone-100 px-3 py-1.5 rounded-lg border border-stone-200 text-stone-800 font-mono text-xs sm:text-sm font-medium">
          <Timer className="w-4 h-4 text-amber-700" />
          <span>{timeFormatted}</span>
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-xl border border-stone-200 shadow-sm p-4 sm:p-8">
        <p className="text-xs sm:text-sm text-stone-600 mb-2">
          {currentQ.prompt}
        </p>

        <div className="p-4 sm:p-6 bg-stone-50 rounded-lg border border-stone-200/80 mb-6">
          <p className="font-serif text-lg sm:text-2xl text-stone-900 leading-relaxed tracking-wide select-text">
            {currentQ.sentenceWithBlank}
          </p>
        </div>

        {/* Options */}
        <div className="space-y-2.5 sm:space-y-3 mb-6">
          {currentQ.options.map((opt) => {
            const isSelected = examAnswers[currentQ.id] === opt.label;

            return (
              <button
                key={opt.label}
                onClick={() => handleSelectOption(opt.label)}
                className={`w-full flex items-center gap-3 p-3.5 sm:p-4 rounded-lg border text-left transition-all text-xs sm:text-sm touch-manipulation min-h-[50px] ${
                  isSelected
                    ? 'border-amber-600 bg-amber-50/70 text-amber-950 font-medium ring-1 ring-amber-600'
                    : 'border-stone-200 bg-white hover:border-stone-300 active:bg-stone-50 text-stone-900'
                }`}
              >
                <span
                  className={`w-7 h-7 rounded-md border flex items-center justify-center font-mono font-medium text-xs shrink-0 ${
                    isSelected
                      ? 'bg-amber-600 text-white border-amber-600'
                      : 'bg-stone-100 text-stone-600 border-stone-300'
                  }`}
                >
                  {opt.label}
                </span>
                <span className="font-serif text-sm sm:text-base leading-snug flex-1">{opt.text}</span>
              </button>
            );
          })}
        </div>

        {/* Stepper controls */}
        <div className="flex items-center justify-between gap-3 pt-4 border-t border-stone-200">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="px-3.5 py-2 text-xs font-medium text-stone-600 hover:text-stone-900 disabled:opacity-30 disabled:pointer-events-none rounded-md transition-colors touch-manipulation"
          >
            Precedente
          </button>

          <button
            onClick={handleNext}
            className="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 active:bg-stone-950 text-stone-100 rounded-lg text-xs sm:text-sm font-medium transition-colors shadow-sm flex items-center gap-2 touch-manipulation"
          >
            <span>{currentIndex === examQuestions.length - 1 ? 'Concludi test' : 'Avanti'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
