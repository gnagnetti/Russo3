import { Question } from '../types';
import { QUESTIONS_SECTION_1 } from './questions/section1';
import { QUESTIONS_SECTION_2 } from './questions/section2';
import { QUESTIONS_SECTION_3 } from './questions/section3';

// Lotti aggiuntivi Sezione 1
import { QUESTIONS_BATCH_SECTION_1 } from './questions/batch_sec1';
import { QUESTIONS_BATCH_SECTION_1_PART2 } from './questions/batch_sec1_pt2';
import { QUESTIONS_BATCH_SECTION_1_PART3 } from './questions/batch_sec1_pt3';
import { QUESTIONS_BATCH_SECTION_1_PART4 } from './questions/batch_sec1_pt4';
import { QUESTIONS_BATCH_SECTION_1_PT5 } from './questions/batch_sec1_pt5';
import { QUESTIONS_BATCH_SECTION_1_PT6 } from './questions/batch_sec1_pt6';
import { QUESTIONS_BATCH_SECTION_1_PT7 } from './questions/batch_sec1_pt7';

// Lotti aggiuntivi Sezione 2
import { QUESTIONS_BATCH_SECTION_2 } from './questions/batch_sec2';
import { QUESTIONS_BATCH_SECTION_2_PART2 } from './questions/batch_sec2_pt2';
import { QUESTIONS_BATCH_SECTION_2_PART3 } from './questions/batch_sec2_pt3';
import { QUESTIONS_BATCH_SECTION_2_PT4 } from './questions/batch_sec2_pt4';
import { QUESTIONS_BATCH_SECTION_2_PT5 } from './questions/batch_sec2_pt5';

// Lotti aggiuntivi Sezione 3
import { QUESTIONS_BATCH_SECTION_3 } from './questions/batch_sec3';
import { QUESTIONS_BATCH_SECTION_3_PART2 } from './questions/batch_sec3_pt2';
import { QUESTIONS_BATCH_SECTION_3_PART3 } from './questions/batch_sec3_pt3';
import { QUESTIONS_BATCH_SECTION_3_PT4 } from './questions/batch_sec3_pt4';
import { QUESTIONS_BATCH_SECTION_3_PT5 } from './questions/batch_sec3_pt5';

export const QUESTIONS: Question[] = [
  // Sezione 1: Il Sintagma (Словосочетание) - 145 esercizi
  ...QUESTIONS_SECTION_1,
  ...QUESTIONS_BATCH_SECTION_1,
  ...QUESTIONS_BATCH_SECTION_1_PART2,
  ...QUESTIONS_BATCH_SECTION_1_PART3,
  ...QUESTIONS_BATCH_SECTION_1_PART4,
  ...QUESTIONS_BATCH_SECTION_1_PT5,
  ...QUESTIONS_BATCH_SECTION_1_PT6,
  ...QUESTIONS_BATCH_SECTION_1_PT7,

  // Sezione 2: La Frase Semplice (Простое предложение) - 95 esercizi
  ...QUESTIONS_SECTION_2,
  ...QUESTIONS_BATCH_SECTION_2,
  ...QUESTIONS_BATCH_SECTION_2_PART2,
  ...QUESTIONS_BATCH_SECTION_2_PART3,
  ...QUESTIONS_BATCH_SECTION_2_PT4,
  ...QUESTIONS_BATCH_SECTION_2_PT5,

  // Sezione 3: La Frase Complessa (Сложное предложение) - 90 esercizi
  ...QUESTIONS_SECTION_3,
  ...QUESTIONS_BATCH_SECTION_3,
  ...QUESTIONS_BATCH_SECTION_3_PART2,
  ...QUESTIONS_BATCH_SECTION_3_PART3,
  ...QUESTIONS_BATCH_SECTION_3_PT4,
  ...QUESTIONS_BATCH_SECTION_3_PT5,
];
