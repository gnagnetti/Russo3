import React, { createContext, useContext, useState, useEffect } from 'react';
import { Question, UserAnswerRecord, SectionId } from '../types';
import { QUESTIONS } from '../data/questions';

export type AppMode = 'tutor' | 'path' | 'exam' | 'rules' | 'errors';

interface TutorContextType {
  mode: AppMode;
  setMode: (mode: AppMode) => void;
  currentQuestion: Question;
  currentQuestionIndex: number;
  totalQuestions: number;
  filteredQuestions: Question[];
  selectedSection: SectionId | 'all';
  setSelectedSection: (sec: SectionId | 'all') => void;
  selectedChapter: string | 'all';
  setSelectedChapter: (chapter: string | 'all') => void;
  
  // Interaction State
  userAnswers: Record<string, UserAnswerRecord>;
  currentHintRevealed: boolean;
  requestHint: () => void;
  submitAnswer: (optionLabel: string) => void;
  nextQuestion: () => void;
  previousQuestion: () => void;
  goToQuestion: (index: number) => void;
  
  // Bookmarks & Errors
  bookmarkedIds: string[];
  toggleBookmark: (questionId: string) => void;
  errorQuestionIds: string[];
  retryQuestion: (questionId: string) => void;
  
  // Stats
  correctCount: number;
  answeredCount: number;
  streak: number;
  scorePercentage: number;
  resetProgress: () => void;

  // Search
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const LOCAL_STORAGE_KEY = 'russian_syntax_tutor_glazunova_v1';

const TutorContext = createContext<TutorContextType | null>(null);

export const TutorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<AppMode>('tutor');
  const [selectedSection, setSelectedSection] = useState<SectionId | 'all'>('all');
  const [selectedChapter, setSelectedChapter] = useState<string | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [currentHintRevealed, setCurrentHintRevealed] = useState<boolean>(false);
  const [userAnswers, setUserAnswers] = useState<Record<string, UserAnswerRecord>>({});
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.userAnswers) setUserAnswers(parsed.userAnswers);
        if (parsed.bookmarkedIds) setBookmarkedIds(parsed.bookmarkedIds);
      }
    } catch {
      // local fallback
    }
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify({ userAnswers, bookmarkedIds })
      );
    } catch {
      // ignore
    }
  }, [userAnswers, bookmarkedIds]);

  // Filter questions based on section, chapter, search query
  const filteredQuestions = QUESTIONS.filter((q) => {
    if (selectedSection !== 'all' && q.sectionId !== selectedSection) return false;
    if (selectedChapter !== 'all' && q.chapterId !== selectedChapter) return false;
    if (searchQuery.trim()) {
      const qLower = searchQuery.toLowerCase();
      const matchText =
        q.prompt.toLowerCase().includes(qLower) ||
        q.sentenceWithBlank.toLowerCase().includes(qLower) ||
        q.explanation.toLowerCase().includes(qLower) ||
        q.tags.some((t) => t.toLowerCase().includes(qLower)) ||
        (q.literaryAuthor && q.literaryAuthor.toLowerCase().includes(qLower)) ||
        q.topicName.toLowerCase().includes(qLower);
      if (!matchText) return false;
    }
    return true;
  });

  // Clamp index
  const safeIndex = Math.min(
    Math.max(0, currentQuestionIndex),
    Math.max(0, filteredQuestions.length - 1)
  );

  const currentQuestion = filteredQuestions[safeIndex] || QUESTIONS[0];

  // Reset hint when switching question
  useEffect(() => {
    setCurrentHintRevealed(false);
  }, [safeIndex, currentQuestion?.id]);

  const requestHint = () => {
    setCurrentHintRevealed(true);
  };

  const submitAnswer = (optionLabel: string) => {
    if (!currentQuestion) return;
    const isCorrect = optionLabel === currentQuestion.correctOption;
    const record: UserAnswerRecord = {
      questionId: currentQuestion.id,
      selectedOption: optionLabel,
      isCorrect,
      hintUsed: currentHintRevealed,
      timestamp: Date.now(),
    };

    setUserAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: record,
    }));
  };

  const nextQuestion = () => {
    if (safeIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(safeIndex + 1);
    }
  };

  const previousQuestion = () => {
    if (safeIndex > 0) {
      setCurrentQuestionIndex(safeIndex - 1);
    }
  };

  const goToQuestion = (index: number) => {
    if (index >= 0 && index < filteredQuestions.length) {
      setCurrentQuestionIndex(index);
    }
  };

  const toggleBookmark = (id: string) => {
    setBookmarkedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const retryQuestion = (questionId: string) => {
    setUserAnswers((prev) => {
      const next = { ...prev };
      delete next[questionId];
      return next;
    });
    const foundIndex = filteredQuestions.findIndex((q) => q.id === questionId);
    if (foundIndex !== -1) {
      setCurrentQuestionIndex(foundIndex);
    }
    setMode('tutor');
  };

  // Stats calculation
  const answeredRecords = Object.values(userAnswers);
  const answeredCount = answeredRecords.length;
  const correctCount = answeredRecords.filter((r) => r.isCorrect).length;
  const scorePercentage = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;

  // Streak
  const streak = answeredRecords.reduce((acc, curr) => {
    return curr.isCorrect ? acc + 1 : 0;
  }, 0);

  const errorQuestionIds = Object.entries(userAnswers)
    .filter(([, rec]) => !rec.isCorrect)
    .map(([id]) => id);

  const resetProgress = () => {
    if (window.confirm('Vuoi davvero azzerare i progressi e il punteggio del tutor?')) {
      setUserAnswers({});
      setCurrentQuestionIndex(0);
      setCurrentHintRevealed(false);
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    }
  };

  return (
    <TutorContext.Provider
      value={{
        mode,
        setMode,
        currentQuestion,
        currentQuestionIndex: safeIndex,
        totalQuestions: filteredQuestions.length,
        filteredQuestions,
        selectedSection,
        setSelectedSection,
        selectedChapter,
        setSelectedChapter,
        userAnswers,
        currentHintRevealed,
        requestHint,
        submitAnswer,
        nextQuestion,
        previousQuestion,
        goToQuestion,
        bookmarkedIds,
        toggleBookmark,
        errorQuestionIds,
        retryQuestion,
        correctCount,
        answeredCount,
        streak,
        scorePercentage,
        resetProgress,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </TutorContext.Provider>
  );
};

export const useTutor = () => {
  const context = useContext(TutorContext);
  if (!context) throw new Error('useTutor must be used within a TutorProvider');
  return context;
};
