import React, { useEffect, useCallback } from 'react';
import { useTutor } from '../context/TutorContext';
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  ChevronRight,
  ChevronLeft,
  Bookmark,
  BookOpen,
  Sparkles,
  ArrowRight,
  Flame
} from 'lucide-react';
import { SECTIONS } from '../data/sections';

export const TutorView: React.FC = () => {
  const {
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    filteredQuestions,
    selectedSection,
    setSelectedSection,
    userAnswers,
    currentHintRevealed,
    requestHint,
    submitAnswer,
    nextQuestion,
    previousQuestion,
    goToQuestion,
    bookmarkedIds,
    toggleBookmark,
    correctCount,
    answeredCount,
    streak,
    setMode,
  } = useTutor();

  const currentRecord = currentQuestion ? userAnswers[currentQuestion.id] : undefined;
  const isAnswered = currentRecord !== undefined;
  const isBookmarked = currentQuestion ? bookmarkedIds.includes(currentQuestion.id) : false;

  // Keyboard shortcut handler
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!currentQuestion) return;
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      const key = e.key.toUpperCase();
      if (!isAnswered) {
        if (key === 'A' || key === '1') {
          const opt = currentQuestion.options[0];
          if (opt) submitAnswer(opt.label);
        } else if (key === 'B' || key === '2') {
          const opt = currentQuestion.options[1];
          if (opt) submitAnswer(opt.label);
        } else if (key === 'C' || key === '3') {
          const opt = currentQuestion.options[2];
          if (opt) submitAnswer(opt.label);
        } else if (key === 'D' || key === '4') {
          const opt = currentQuestion.options[3];
          if (opt) submitAnswer(opt.label);
        } else if (key === 'H' || key === '?') {
          requestHint();
        }
      } else {
        if (e.key === 'ArrowRight' || e.key === 'Enter') {
          nextQuestion();
        } else if (e.key === 'ArrowLeft') {
          previousQuestion();
        }
      }
    },
    [currentQuestion, isAnswered, submitAnswer, requestHint, nextQuestion, previousQuestion]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  if (!currentQuestion) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <p className="text-stone-600 text-base mb-4">Nessun esercizio corrisponde ai filtri selezionati.</p>
        <button
          onClick={() => setSelectedSection('all')}
          className="px-4 py-2 bg-stone-900 text-stone-100 rounded-lg text-sm font-medium hover:bg-stone-800 transition-colors"
        >
          Mostra tutti gli esercizi
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-3 sm:px-6 py-4 sm:py-8">
      {/* Top Filter and Progress Ribbon (Mobile Scrollable) */}
      <div className="flex flex-col gap-3 pb-4 sm:pb-6 border-b border-stone-200">
        {/* Section Segmented Selector */}
        <div className="flex items-center gap-1.5 p-1 bg-stone-200/70 rounded-lg overflow-x-auto scrollbar-none touch-pan-x -mx-1 px-1">
          <button
            onClick={() => setSelectedSection('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
              selectedSection === 'all'
                ? 'bg-white text-stone-900 shadow-sm'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Tutti ({filteredQuestions.length})
          </button>
          {SECTIONS.map((sec) => (
            <button
              key={sec.id}
              onClick={() => setSelectedSection(sec.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                selectedSection === sec.id
                  ? 'bg-white text-stone-900 shadow-sm'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Sezione {sec.id}
            </button>
          ))}
        </div>

        {/* Status indicator: Exercise X of N | Score */}
        <div className="flex items-center justify-between gap-2 text-xs text-stone-600 font-mono tabular-nums">
          <div className="flex items-center gap-1.5 bg-stone-100 border border-stone-200/80 px-2.5 py-1 rounded-md text-[11px] sm:text-xs">
            <span>Es. {currentQuestionIndex + 1}/{totalQuestions}</span>
            <span className="text-stone-400">·</span>
            <span className="text-stone-900 font-medium">{correctCount}/{answeredCount} esatti</span>
          </div>

          <div className="flex items-center gap-2">
            {streak > 1 && (
              <div className="flex items-center gap-1 text-amber-700 bg-amber-50 border border-amber-200/60 px-2 py-1 rounded-md text-[11px]">
                <Flame className="w-3.5 h-3.5 text-amber-600" />
                <span>{streak} di fila</span>
              </div>
            )}

            <button
              onClick={() => toggleBookmark(currentQuestion.id)}
              title={isBookmarked ? 'Rimuovi dai salvati' : 'Salva esercizio'}
              aria-label="Salva esercizio"
              className={`p-1.5 rounded-md border transition-colors touch-manipulation ${
                isBookmarked
                  ? 'bg-amber-50 text-amber-600 border-amber-300'
                  : 'bg-stone-100 text-stone-400 border-stone-200 hover:text-stone-700'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-amber-500' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Tutor Intro Context Box */}
      <div className="mt-4 sm:mt-6 mb-3 sm:mb-4 flex flex-wrap items-center justify-between gap-1 text-[11px] sm:text-xs text-stone-500">
        <div className="flex items-center gap-1.5 sm:gap-2 truncate max-w-[80%]">
          <span className="font-semibold text-stone-700 truncate">{currentQuestion.sectionTitle}</span>
          <span>·</span>
          <span className="truncate">{currentQuestion.exerciseSource}</span>
        </div>
        <span className="font-mono bg-stone-100 text-stone-700 border border-stone-200 px-1.5 py-0.5 rounded text-[10px] sm:text-[11px] shrink-0">
          Livello {currentQuestion.level}
        </span>
      </div>

      {/* Main Single-Exercise Card */}
      <div className="bg-white rounded-xl border border-stone-200 shadow-sm p-4 sm:p-8 transition-all">
        {/* Instruction Prompt */}
        <div className="mb-3 sm:mb-4">
          <p className="text-sm font-medium text-stone-700 mb-1 leading-snug sm:leading-normal">
            {currentQuestion.prompt}
          </p>
          {currentQuestion.literaryAuthor && (
            <p className="text-xs text-stone-500 italic">
              Fonte letteraria: {currentQuestion.literaryAuthor}
            </p>
          )}
        </div>

        {/* Russian Sentence Display Box */}
        <div className="p-4 sm:p-6 bg-stone-50/80 rounded-lg border border-stone-200/70 mb-5 sm:mb-8">
          <p className="font-serif text-lg sm:text-2xl text-stone-900 leading-relaxed sm:leading-relaxed tracking-wide select-text">
            {currentQuestion.sentenceWithBlank}
          </p>
          {currentQuestion.russianContext && (
            <p className="mt-2.5 sm:mt-3 text-xs text-stone-500 font-sans border-t border-stone-200/50 pt-2">
              Contesto testuale: «{currentQuestion.russianContext}»
            </p>
          )}
        </div>

        {/* Interactive Options (Buttons) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-5 sm:mb-6">
          {currentQuestion.options.map((opt) => {
            const isSelected = currentRecord?.selectedOption === opt.label;
            const isCorrect = opt.label === currentQuestion.correctOption;

            let buttonStyles = 'border-stone-200 bg-white hover:border-stone-400 active:bg-stone-100 text-stone-900';
            let badgeStyles = 'bg-stone-100 text-stone-600 border-stone-300';

            if (isAnswered) {
              if (isCorrect) {
                buttonStyles = 'border-emerald-500 bg-emerald-50/70 text-emerald-950 font-medium ring-1 ring-emerald-500';
                badgeStyles = 'bg-emerald-600 text-white border-emerald-600';
              } else if (isSelected) {
                buttonStyles = 'border-rose-400 bg-rose-50/70 text-rose-950 ring-1 ring-rose-400';
                badgeStyles = 'bg-rose-600 text-white border-rose-600';
              } else {
                buttonStyles = 'border-stone-200 bg-stone-50/50 text-stone-400 opacity-70';
              }
            }

            return (
              <button
                key={opt.label}
                disabled={isAnswered}
                onClick={() => submitAnswer(opt.label)}
                className={`relative flex items-center gap-2.5 sm:gap-3 p-3.5 sm:p-4 rounded-lg border text-left transition-all text-sm group touch-manipulation min-h-[52px] ${buttonStyles}`}
              >
                <span
                  className={`w-7 h-7 rounded-md border flex items-center justify-center font-mono font-medium text-xs shrink-0 transition-colors ${badgeStyles}`}
                >
                  {opt.label}
                </span>
                <span className="font-serif text-sm sm:text-base leading-snug flex-1">{opt.text}</span>

                {isAnswered && isCorrect && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 ml-auto shrink-0" />
                )}
                {isAnswered && isSelected && !isCorrect && (
                  <XCircle className="w-5 h-5 text-rose-600 ml-auto shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Hint Section ("Non lo so / Richiedi un Indizio") */}
        {!isAnswered && (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 sm:pt-4 border-t border-stone-100">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              {!currentHintRevealed ? (
                <button
                  onClick={requestHint}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-3.5 py-2.5 sm:py-2 text-xs font-medium text-amber-800 bg-amber-50 hover:bg-amber-100/80 active:bg-amber-200 border border-amber-200/80 rounded-md transition-colors touch-manipulation"
                >
                  <HelpCircle className="w-4 h-4 text-amber-600" />
                  <span>Non lo so · Ricevi un indizio</span>
                </button>
              ) : (
                <div className="p-3 bg-amber-50/90 border border-amber-200 rounded-lg text-xs text-amber-950 flex items-start gap-2 w-full max-w-xl">
                  <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block mb-0.5">Indizio grammaticale del Tutor:</span>
                    <p className="leading-relaxed">{currentQuestion.hint}</p>
                  </div>
                </div>
              )}
            </div>

            <span className="text-[11px] text-stone-400 font-mono hidden lg:inline">
              Premi A, B, C, D sulla tastiera o tocca l'opzione
            </span>
          </div>
        )}

        {/* Immediate Feedback & Rich Italian Explanation */}
        {isAnswered && (
          <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-stone-200 animate-in fade-in duration-200">
            {/* Verdict Banner */}
            <div
              className={`p-3.5 sm:p-4 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 mb-4 sm:mb-5 ${
                currentRecord.isCorrect
                  ? 'bg-emerald-50 border border-emerald-200 text-emerald-900'
                  : 'bg-rose-50 border border-rose-200 text-rose-900'
              }`}
            >
              <div className="flex items-start sm:items-center gap-2.5 sm:gap-3">
                {currentRecord.isCorrect ? (
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 shrink-0 mt-0.5 sm:mt-0" />
                ) : (
                  <XCircle className="w-5 h-5 sm:w-6 sm:h-6 text-rose-600 shrink-0 mt-0.5 sm:mt-0" />
                )}
                <div>
                  <h4 className="font-bold text-xs sm:text-sm tracking-wide">
                    {currentRecord.isCorrect ? '[RISPOSTA CORRETTA]' : '[RISPOSTA ERRATA]'}
                  </h4>
                  <p className="text-xs opacity-90 mt-0.5 leading-snug">
                    {currentRecord.isCorrect
                      ? 'Ottimo lavoro! Struttura sintattica corretta.'
                      : `L'opzione corretta è la (${currentQuestion.correctOption}). Leggi l'analisi grammaticale:`}
                  </p>
                </div>
              </div>

              <span className="self-start sm:self-auto font-mono text-[11px] sm:text-xs font-semibold px-2 py-0.5 sm:px-2.5 sm:py-1 bg-white/80 rounded border border-current/20">
                {currentQuestion.bookRuleRef}
              </span>
            </div>

            {/* In-depth Grammar Analysis in Italian */}
            <div className="bg-stone-50 border border-stone-200/90 rounded-lg p-4 sm:p-5 text-stone-800 text-xs sm:text-sm leading-relaxed">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-[11px] sm:text-xs tracking-wider uppercase text-stone-600 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                  Spiegazione grammaticale del perché
                </span>
                <span className="text-[10px] sm:text-[11px] text-stone-500 italic">
                  Glazunova (2011)
                </span>
              </div>
              <p className="text-stone-700 whitespace-pre-line leading-relaxed">{currentQuestion.explanation}</p>

              {/* Tags & Topic Reference */}
              <div className="mt-3.5 pt-3 border-t border-stone-200/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-stone-500">
                  <span className="font-medium">Argomenti:</span>
                  {currentQuestion.tags.map((tag, idx) => (
                    <span key={tag} className="font-mono text-stone-700 bg-stone-200/60 px-1.5 py-0.5 rounded text-[10px]">
                      {tag}
                      {idx < currentQuestion.tags.length - 1 && ''}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setMode('rules')}
                  className="text-xs text-amber-700 hover:text-amber-900 font-medium flex items-center gap-1 underline underline-offset-2 transition-colors self-start sm:self-auto touch-manipulation"
                >
                  Consulta le regole teoriche
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Navigation CTA to next question */}
            <div className="mt-5 sm:mt-6 flex items-center justify-between gap-3">
              <button
                onClick={previousQuestion}
                disabled={currentQuestionIndex === 0}
                className="flex items-center gap-1 px-3 py-2.5 sm:py-2 text-xs font-medium text-stone-600 hover:text-stone-900 active:bg-stone-100 disabled:opacity-30 disabled:pointer-events-none rounded-md transition-colors touch-manipulation"
              >
                <ChevronLeft className="w-4 h-4" />
                Precedente
              </button>

              <button
                onClick={nextQuestion}
                disabled={currentQuestionIndex >= filteredQuestions.length - 1}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-3 sm:py-2.5 bg-stone-900 hover:bg-stone-800 active:bg-stone-950 text-stone-100 rounded-lg text-xs sm:text-sm font-medium transition-colors shadow-sm disabled:opacity-30 disabled:pointer-events-none touch-manipulation"
              >
                <span>Prossimo esercizio</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Mini Question Navigator Drawer (Mobile compact) */}
      <div className="mt-6 sm:mt-8 bg-stone-100/80 border border-stone-200 rounded-lg p-3 sm:p-4">
        <div className="flex items-center justify-between text-xs text-stone-600 mb-2.5">
          <span className="font-medium">Mappa esercizi</span>
          <span>
            {answeredCount}/{filteredQuestions.length} svolti
          </span>
        </div>
        <div className="flex flex-wrap gap-1 max-h-24 sm:max-h-32 overflow-y-auto pr-1">
          {filteredQuestions.map((q, idx) => {
            const rec = userAnswers[q.id];
            let dotColor = 'bg-white text-stone-600 border-stone-300 hover:border-stone-500';
            if (rec) {
              dotColor = rec.isCorrect
                ? 'bg-emerald-600 text-white border-emerald-600'
                : 'bg-rose-600 text-white border-rose-600';
            }
            const isCurrent = idx === currentQuestionIndex;

            return (
              <button
                key={q.id}
                onClick={() => goToQuestion(idx)}
                className={`w-6 h-6 sm:w-7 sm:h-7 rounded text-[10px] sm:text-[11px] font-mono font-medium border flex items-center justify-center transition-all touch-manipulation ${dotColor} ${
                  isCurrent ? 'ring-2 ring-stone-900 ring-offset-1 font-bold' : ''
                }`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
