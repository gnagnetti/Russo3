export type SectionId = 1 | 2 | 3;

export type QuestionType = 'multiple_choice' | 'true_false' | 'case_scenario';

export interface QuestionOption {
  label: string; // 'A' | 'B' | 'C' | 'D' | 'Vero' | 'Falso'
  text: string;
}

export interface Question {
  id: string;
  sectionId: SectionId;
  sectionTitle: string; // es. "Sezione 1: Il Sintagma (Словосочетание)"
  chapterId: string;
  chapterTitle: string; // es. "Подчинительная связь: согласование"
  topicName: string; // es. "Concordanza aggettivi e pronomi"
  exerciseSource: string; // es. "Cap. 1, Es. 3, n. 1 (p. 10)"
  level: 'B2' | 'C1';
  type: QuestionType;
  prompt: string; // Domanda o consegna in italiano
  russianContext?: string; // Frase o brano d'autore in russo
  sentenceWithBlank: string; // Frase con spazio vuoto o evidenziazione
  options: QuestionOption[];
  correctOption: string; // corrisponde a label es. 'A' o 'Vero'
  hint: string; // Spiegazione grammaticale in italiano senza svelare la risposta
  explanation: string; // Dettagliata analisi del perché in italiano con richiamo alla regola del libro
  bookRuleRef: string; // Riferimento al box del manuale (es. "Glazunova §3, Box p. 10")
  tags: string[];
  literaryAuthor?: string; // es. "М. Булгаков", "В. Пелевин", "Ю. Трифонов"
}

export interface GrammarRule {
  id: string;
  sectionId: SectionId;
  sectionName: string;
  category: string;
  title: string;
  russianHeading: string;
  ruleExplanationIt: string;
  warningNote?: string;
  bookPage: number;
  examples: {
    ru: string;
    it: string;
    analysis?: string;
  }[];
  comparisons?: {
    termA: string;
    termB: string;
    differenceIt: string;
    exampleA: string;
    exampleB: string;
  }[];
}

export interface UserAnswerRecord {
  questionId: string;
  selectedOption: string;
  isCorrect: boolean;
  hintUsed: boolean;
  timestamp: number;
}

export interface SectionMeta {
  id: SectionId;
  title: string;
  russianTitle: string;
  pages: string;
  summary: string;
  topics: { id: string; name: string; exerciseCount: number; ruleId: string }[];
}
