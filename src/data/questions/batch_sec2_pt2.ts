import { Question } from '../../types';

export const QUESTIONS_BATCH_SECTION_2_PART2: Question[] = [
  // --- Predicato Nominale Composto: Scelta tra Nominativo e Strumentale (pp. 145-160) ---
  {
    id: 'q-s2-pred-nom-instr-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-subj-pred',
    chapterTitle: 'Составное именное сказуемое: падеж имени',
    topicName: 'Caso del nome predicativo con la copula al passato: был кто vs был кем',
    exerciseSource: 'Sezione 2, Esercizio 204, frase 3 (p. 148)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale caso del sostantivo predicativo sottolinea una qualifica temporanea, uno stato transitorio o una professione passata con la copula «был»?\n«В молодости его дедушка был (...) на военном заводе».',
    sentenceWithBlank: '«Его дедушка был (...) на заводе».',
    options: [
      { label: 'A', text: 'инженером (Strumentale: esprime stato temporaneo, ruolo o professione non permanente)' },
      { label: 'B', text: 'инженер (Nominativo: esprime caratteristica permanente o intrinseca)' },
      { label: 'C', text: 'инженера' },
      { label: 'D', text: 'инженеру' }
    ],
    correctOption: 'A',
    hint: 'Con la copula al passato «был/была/были», il nome della professione o dello stato transitorio assume normalmente il caso Strumentale.',
    explanation:
      'Risposta esatta: A (инженером). Glazunova p. 148: «В прошедшем времени при связке БЫТЬ творительный падеж существительного обозначает временное состояние, профессию или социальный статус в определённый период: Он был директором, учителем, студентом. Именительный падеж чаще указывает на постоянное свойство: Он был человек честный».',
    bookRuleRef: 'Glazunova §204, p. 148',
    tags: ['Составное именное', 'Творительный падеж', 'Был инженером']
  },
  {
    id: 'q-s2-pred-kazatsya-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-subj-pred',
    chapterTitle: 'Составное именное сказуемое: казаться / стать',
    topicName: 'Reggenza del predicato nominale con i verbi связки (казаться, оказаться, стать)',
    exerciseSource: 'Sezione 2, Esercizio 208, frase 1 (p. 152)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale caso richiede l\'aggettivo predicativo retto da verbi copulativi come «казаться», «оказаться», «становиться»?\n«Задача показалась студентам чрезвычайно (...)».',
    sentenceWithBlank: '«Задача показалась (...)».',
    options: [
      { label: 'A', text: 'сложной (Strumentale obbligatorio con verbi copulativi come казаться, являться, стать)' },
      { label: 'B', text: 'сложная (Nominativo)' },
      { label: 'C', text: 'сложно' },
      { label: 'D', text: 'сложность' }
    ],
    correctOption: 'A',
    hint: 'Verbi copulativi semantici come «казаться», «становиться», «оказаться», «являться» reggono sempre la parte nominale al caso Strumentale.',
    explanation:
      'Risposta esatta: A (сложной). Glazunova p. 152: «При полузнаменательных связках казаться, оказаться, показаться, стать, сделаться, являться именная часть ВСЕГДА ставится в творительном падеже: Он стал врачом; Задача показалась сложной; Решение оказалось правильным».',
    bookRuleRef: 'Glazunova §208, p. 152',
    tags: ['Связочные глаголы', 'Казаться', 'Творительный падеж']
  },
  {
    id: 'q-s2-pred-kratkoe-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-subj-pred',
    chapterTitle: 'Краткие и полные прилагательные в роли сказуемого',
    topicName: 'Valore semantico della forma breve vs forma lunga dell\'aggettivo predicativo',
    exerciseSource: 'Sezione 2, Esercizio 212, frase 5 (p. 156)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale differenza di significato sussiste tra «Эта куртка узкая» (forma lunga) ed «Эта куртка мне узка» (forma breve)?\n«Эта куртка узкая vs узка мне».',
    sentenceWithBlank: '«Куртка мне узка».',
    options: [
      { label: 'A', text: '«Узка» (forma breve) indica una limitazione concreta e relativa rispetto a una persona/situazione («troppo stretta per me»), mentre «узкая» descrive una qualità obiettiva e permanente' },
      { label: 'B', text: 'Nessuna differenza, sono sinonimi intercambiabili' },
      { label: 'C', text: 'La forma breve si usa solo nella poesia antica' },
      { label: 'D', text: 'La forma lunga esprime sempre divieto' }
    ],
    correctOption: 'A',
    hint: 'La forma breve dell\'aggettivo (мал, велик, узок, широк, готов, согласен) esprime uno stato temporaneo o relativo a un parametro soggettivo (es. «è troppo stretto per me»).',
    explanation:
      'Risposta esatta: A. Glazunova p. 156: «Краткая форма прилагательного обозначает временный признак или признак, проявляющийся в отношении к конкретной ситуации/лицу (с оттенком "слишком"): Ботинки узки мне (не вообще узкие, а именно для меня); Отец болен (временное состояние) vs Отец больной (постоянное свойство)».',
    bookRuleRef: 'Glazunova §212, p. 156',
    tags: ['Краткие прилагательные', 'Сказуемое', 'Узка мне']
  },
  {
    id: 'q-s2-one-weather-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-one-member',
    chapterTitle: 'Безличные предложения: состояние природы и среды',
    topicName: 'Verbi atmosferici impersonali',
    exerciseSource: 'Sezione 2, Esercizio 248, frase 2 (p. 184)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale forma verbale esprime il fenomeno naturale del crepuscolo e dell\'imbrunire in una frase impersonale al passato?\n«На улице быстро (...) и похолодало».',
    sentenceWithBlank: '«На улице быстро (...) и похолодало».',
    options: [
      { label: 'A', text: 'смеркалось (impersonale, neutro singolare passato in -ось)' },
      { label: 'B', text: 'смеркался' },
      { label: 'C', text: 'смеркалась' },
      { label: 'D', text: 'смеркались' }
    ],
    correctOption: 'A',
    hint: 'I predicati impersonali descrittivi di stati atmosferici assumono al passato la desinenza neutra singolare (-о / -ось): светало, темнело, смеркалось, морозило.',
    explanation:
      'Risposta esatta: A (смеркалось). Glazunova p. 184: «Безличные глаголы, обозначающие явления природы, имеют форму 3-го лица ед. ч. настоящего/будущего времени или среднего рода прошедшего времени: смеркается / смеркалось, темнеет / темнело, морозит / морозило».',
    bookRuleRef: 'Glazunova §248, p. 184',
    tags: ['Безличные предложения', 'Смеркалось', 'Явления природы']
  },
  {
    id: 'q-s2-one-phys-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-one-member',
    chapterTitle: 'Безличные предложения: физическое и душевное состояние лица',
    topicName: 'Struttura impersonale con verbi riflessivi: не спится, не сидится',
    exerciseSource: 'Sezione 2, Esercizio 250, frase 3 (p. 187)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale caso esprime la persona che sperimenta l\'impossibilità involontaria di compiere l\'azione nel costrutto con verbo riflessivo impersonale «не спится»?\n«(...) сегодня долго не спалось из-за духоты в комнате».',
    sentenceWithBlank: '«(...) не спалось из-за духоты».',
    options: [
      { label: 'A', text: 'Ему (Dativo della persona che subisce lo stato: ему не спится)' },
      { label: 'B', text: 'Он (Nominativo)' },
      { label: 'C', text: 'Его (Accusativo)' },
      { label: 'D', text: 'Им (Strumentale)' }
    ],
    correctOption: 'A',
    hint: 'Le costruzioni involontarie in -ся (не спится, не сидится, не верится, думается) richiedono il soggetto logico al caso Dativo (кому?).',
    explanation:
      'Risposta esatta: A (Ему). Glazunova p. 187: «Безличные глаголы на -ся с модальным значением непроизвольности или предрасположенности к действию требуют логического субъекта в форме ДАТЕЛЬНОГО падежа: Мне не спится; Ему не сидится на месте; Нам легко дышится».',
    bookRuleRef: 'Glazunova §250, p. 187',
    tags: ['Безличные предложения', 'Не спится', 'Дательный падеж']
  },
  {
    id: 'q-s2-homog-both-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-homogeneous',
    chapterTitle: 'Однородные члены: двойные союзы как... так и',
    topicName: 'Uso del connettore binario «как... так и» con membri omogenei',
    exerciseSource: 'Sezione 2, Esercizio 230, frase 2 (p. 168)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale correlativo completa obbligatoriamente la prima parte «как» per coordinare due membri omogenei?\n«На конференции присутствовали как российские, (...) зарубежные специалисты».',
    sentenceWithBlank: '«...как российские, (...) зарубежные специалисты».',
    options: [
      { label: 'A', text: 'так и (la coppia binaria fissa è «как..., так и...»)' },
      { label: 'B', text: 'а также' },
      { label: 'C', text: 'но и' },
      { label: 'D', text: 'и тоже' }
    ],
    correctOption: 'A',
    hint: 'La congiunzione doppia correlativa russa per dire «sia... sia...» è rigorosamente «как..., так и...». Con «не только...» si usa invece «но и...».',
    explanation:
      'Risposta esatta: A (так и). Glazunova p. 168: «Двойной соединительный союз КАК..., ТАК И... связывает однородные члены предложения: как преподаватели, так и студенты. Нельзя смешивать его части с союзом НЕ ТОЛЬКО..., НО И...».',
    bookRuleRef: 'Glazunova §230, p. 168',
    tags: ['Однородные члены', 'Двойные союзы', 'Как так и']
  },
  {
    id: 'q-s2-homog-not-only-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-homogeneous',
    chapterTitle: 'Однородные члены: не только... но и',
    topicName: 'Correlativo «не только..., но и...»',
    exerciseSource: 'Sezione 2, Esercizio 232, frase 4 (p. 170)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale seconda parte completa la correlazione concessivo-graduata:\n«Он владел не только немецким языком, (...) свободно говорил по-французски».',
    sentenceWithBlank: '«...не только немецким, (...) французским».',
    options: [
      { label: 'A', text: 'но и (coppia fissa: не только..., но и...)' },
      { label: 'B', text: 'так и' },
      { label: 'C', text: 'а и' },
      { label: 'D', text: 'тоже и' }
    ],
    correctOption: 'A',
    hint: 'La formula sintattica indissolubile russa per «non solo... ma anche...» è «не только..., но и...».',
    explanation:
      'Risposta esatta: A (но и). Glazunova p. 170: «Союз НЕ ТОЛЬКО..., НО И... вносит градационное значение: усиливает значимость второго однородного члена. Нарушение пары союзов (например, *не только..., а также) является грубой синтаксической ошибкой».',
    bookRuleRef: 'Glazunova §232, p. 170',
    tags: ['Однородные члены', 'Не только но и', 'Градация']
  },
  {
    id: 'q-s2-isol-app-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-isolated',
    chapterTitle: 'Обособленные приложения: союз как',
    topicName: 'Apposizione con «как»: isolamento con virgola vs assenza di virgola',
    exerciseSource: 'Sezione 2, Esercizio 282, frase 3 (p. 212, chiave p. 392)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'In quale dei due casi il sintagma introdotto da «как» NON si isola con la virgola?\n«Он известен всем как талантливый физик vs Как опытный врач, он сразу понял причину».',
    sentenceWithBlank: '«Он известен как талантливый физик».',
    options: [
      { label: 'A', text: 'Quando «как» ha il significato di «in qualità di / в качестве кого-либо» e fa parte del predicato, la virgola NON si mette' },
      { label: 'B', text: 'Si mette sempre in ogni circostanza' },
      { label: 'C', text: 'Non si mette mai con i nomi di persona' },
      { label: 'D', text: 'Si mette solo se prima c\'è un punto fermo' }
    ],
    correctOption: 'A',
    hint: 'Regola fondamentale della punteggiatura russa: se «как» equivale a «в качестве» (in qualità di), la virgola non si mette («Он приглашён как консультант»). Se invece contiene una sfumatura causale («essendo un...»), la virgola è obbligatoria.',
    explanation:
      'Risposta esatta: A. Glazunova p. 212: «Приложение с союзом КАК обособляется запятыми, если имеет оттенок причины: Как опытный врач (будучи опытным врачом), он сразу поставил диагноз. Если союз как имеет значение "в качестве", запятая НЕ ставится: Мы знаем его как честного человека (в качестве честного человека)».',
    bookRuleRef: 'Glazunova §282, p. 212',
    tags: ['Обособленные приложения', 'Союз как', 'В качестве']
  },
  {
    id: 'q-s2-isol-clar-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-isolated',
    chapterTitle: 'Уточняющие члены предложения',
    topicName: 'Isolamento dei membri chiarificatori di luogo e di tempo',
    exerciseSource: 'Sezione 2, Esercizio 310, frase 2 (p. 234)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Come si isola il complemento circostanziale che precisa più nel dettaglio il punto geografico generale precedente?\n«Там, (...) лесной опушке, стояла старая бревенчатая избушка».',
    sentenceWithBlank: '«Там, (...) опушке, стояла избушка».',
    options: [
      { label: 'A', text: 'на самой (si isola tra virgole perché specifica e restringe «там»)' },
      { label: 'B', text: 'на самое' },
      { label: 'C', text: 'в самую' },
      { label: 'D', text: 'к самой' }
    ],
    correctOption: 'A',
    hint: 'I membri precisatori (уточняющие обстоятельства: там, где именно? — на опушке; вчера, когда именно? — в шесть вечера) si isolano con virgole su entrambi i lati.',
    explanation:
      'Risposta esatta: A (на самой). Glazunova p. 234: «Уточняющие обстоятельства места и времени конкретизируют предшествующее более широкое понятие и обособляются запятыми: Внизу, в лощине, шумел ручей; Там, на самой опушке, стояла изба; Завтра, в восемь утра, мы отправляемся в путь».',
    bookRuleRef: 'Glazunova §310, p. 234',
    tags: ['Уточняющие члены', 'Обособление', 'Запятые']
  },
  {
    id: 'q-s2-par-words-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-parenthetical',
    chapterTitle: 'Вводные слова: казалось бы vs кажется',
    topicName: 'Parole incidentali e loro isolamento con virgola',
    exerciseSource: 'Sezione 2, Esercizio 325, frase 4 (p. 244)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale delle seguenti espressioni incidentali esprime una deduzione logica o la conclusione di un ragionamento del parlante?\n«(...) всё складывалось наилучшим образом».',
    sentenceWithBlank: '«(...) всё складывалось наилучшим образом».',
    options: [
      { label: 'A', text: 'Следовательно, (avverbio/parola incidentale che conclude un ragionamento deduttivo: dunque, per conseguenza)' },
      { label: 'B', text: 'К счастью,' },
      { label: 'C', text: 'Впрочем,' },
      { label: 'D', text: 'По слухам,' }
    ],
    correctOption: 'A',
    hint: '«Следовательно» (dunque, pertanto) fa parte delle parole incidentali che indicano i nessi logici del pensiero (порядок мыслей и их связь).',
    explanation:
      'Risposta esatta: A (Следовательно). Glazunova p. 244: «Вводные слова, указывающие на логическую связь мыслей: итак, следовательно, значит, наоборот, напротив, во-первых, с одной стороны. Они всегда выделяются запятыми в предложении».',
    bookRuleRef: 'Glazunova §325, p. 244',
    tags: ['Вводные слова', 'Следовательно', 'Логическая связь']
  }
];
