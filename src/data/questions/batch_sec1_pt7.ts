import { Question } from '../../types';

export const QUESTIONS_BATCH_SECTION_1_PT7: Question[] = [
  // --- Serie 7 di approfondimento su Glazunova Sezione 1: Sintagma e Reggenze ---
  {
    id: 'q-s1-prep-v-multi-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-prep',
    chapterTitle: 'Предлоги кратности: в + винительный падеж',
    topicName: 'Fattore moltiplicativo comparativo: в два раза',
    exerciseSource: 'Sezione 1, Esercizio 127, frase 2 (p. 123)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale costrutto preposizionale esprime il moltiplicatore o la proporzione in una comparazione?\n«Новая модель смартфона работает в автономном режиме (...) дольше предыдущей».',
    sentenceWithBlank: '«...работает (...) дольше».',
    options: [
      { label: 'A', text: 'в два раза (moltiplicatore con «в + Accusativo»: в два раза, втрое)' },
      { label: 'B', text: 'на два раза (forma errata: su misura differenziale si usano solo unità, non "раза")' },
      { label: 'C', text: 'по двум разам' },
      { label: 'D', text: 'к двум разам' }
    ],
    correctOption: 'A',
    hint: 'La moltiplicazione comparativa («X volte di più/meno») in russo è categoricamente «в ... раз(а)» (в два раза, в пять раз).',
    explanation:
      'Risposta esatta: A (в два раза). Glazunova p. 123, §127: «Кратность увеличения или уменьшения выражается предлогом В с винительным падежом слова "раз": в два раза быстрее, в три раза дешевле, в десять раз больше. Смешение с предлогом НА (*на два раза) является распространённой ошибкой».',
    bookRuleRef: 'Glazunova §127, p. 123',
    tags: ['Предлог в', 'Кратность', 'В два раза']
  },
  {
    id: 'q-s1-gov-refuse-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-noprep',
    chapterTitle: 'Беспредложное управление: отказывать / отказать',
    topicName: 'Doppia reggenza: отказывать кому в чём vs отказываться от чего',
    exerciseSource: 'Sezione 1, Esercizio 20, frase 2 (p. 40)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale reggenza richiede il verbo transitivo «отказать» (negare a qualcuno qualcosa)?\n«Руководство фирмы отказало молодому соискателю (...) приёме на работу».',
    sentenceWithBlank: '«Отказало соискателю (...) приёме».',
    options: [
      { label: 'A', text: 'в (+ Prepositivo: отказать кому в чём)' },
      { label: 'B', text: 'от (+ Genitivo: questa è la reggenza del riflessivo «отказываться от чего»)' },
      { label: 'C', text: 'о' },
      { label: 'D', text: 'для' }
    ],
    correctOption: 'A',
    hint: 'Attenzione alla distinzione di Glazunova: «отказать кому (Dat.) в чём (Prepos.)» = negare a qualcuno qualcosa; «отказаться (riflessivo) от чего (Gen.)» = rinunciare da sé a qualcosa.',
    explanation:
      'Risposta esatta: A (в). Glazunova p. 40, §20: «Отказать кому (дат. пад.) в чём (предл. пад.): отказать просителю в помощи, в кредите, в доверии. В отличие от возвратного глагола отказываться / отказаться ОТ чего (род. пад.): отказаться от помощи, от должности, от сахара».',
    bookRuleRef: 'Glazunova §20, p. 40',
    tags: ['Управление', 'Отказать в чём', 'Предложный падеж']
  },
  {
    id: 'q-s1-gov-deprive-rights-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-noprep',
    chapterTitle: 'Беспредложное управление: лишать / лишить прав',
    topicName: 'Privazione legale: лишить водительских прав',
    exerciseSource: 'Sezione 1, Esercizio 11, frase 5 (p. 26)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale caso regge il complemento d\'oggetto della cosa sottratta nel provvedimento giuridico con «лишить»?\n«Суд лишил нарушителя (...) за вождение в нетрезвом виде».',
    sentenceWithBlank: '«Лишил нарушителя (...) прав».',
    options: [
      { label: 'A', text: 'водительских (Genitivo plurale: лишить кого чего)' },
      { label: 'B', text: 'водительские (Accusativo)' },
      { label: 'C', text: 'водительскими (Strumentale)' },
      { label: 'D', text: 'о водительских' }
    ],
    correctOption: 'A',
    hint: '«Лишить кого (Acc.) чего (Gen.)»: la persona colpita va all\'Accusativo, il diritto revocato va sempre al Genitivo.',
    explanation:
      'Risposta esatta: A (водительских). Glazunova p. 26, §11: «Глагол ЛИШАТЬ требует родительного падежа для отнимаемого объекта: лишить прав, лишить слова, лишить гражданства, лишить наследства».',
    bookRuleRef: 'Glazunova §11, p. 26',
    tags: ['Управление', 'Лишить чего', 'Родительный падеж']
  },
  {
    id: 'q-s1-gov-congrat-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-noprep',
    chapterTitle: 'Глагольное управление: поздравлять / поздравить',
    topicName: 'Doppia reggenza di congratulazione: поздравлять кого с чем',
    exerciseSource: 'Sezione 1, Esercizio 25, frase 2 (p. 47)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quali casi richiede la formula di augurio o congratulazione «поздравлять / поздравить»?\n«Коллеги тепло поздравили юбиляра (...) круглой датой».',
    sentenceWithBlank: '«Поздравили юбиляра (...) датой».',
    options: [
      { label: 'A', text: 'с (+ Strumentale: поздравлять кого с чем)' },
      { label: 'B', text: 'о' },
      { label: 'C', text: 'к' },
      { label: 'D', text: 'за' }
    ],
    correctOption: 'A',
    hint: 'La ricorrenza per cui ci si congratula si regge con la preposizione «с + Strumentale» (с днём рождения, с праздником, с победой).',
    explanation:
      'Risposta esatta: A (с). Glazunova p. 47, §25: «Поздравлять / поздравить кого (вин. пад.) с чем (с + твор. пад.): поздравить коллегу с юбилеем, с Новым годом, с успешной защитой диссертации».',
    bookRuleRef: 'Glazunova §25, p. 47',
    tags: ['Управление', 'Поздравить с', 'Творительный падеж']
  },
  {
    id: 'q-s1-gov-sympath-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-noprep',
    chapterTitle: 'Глагольное управление: сочувствовать / посочувствовать',
    topicName: 'Reggenza di «сочувствовать / соболезновать»',
    exerciseSource: 'Sezione 1, Esercizio 14, frase 3 (p. 31)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale caso reggono i verbi di solidarietà e vicinanza emotiva «сочувствовать» e «соболезновать»?\n«Мы искренне сочувствуем (...) в постигшем её горе».',
    sentenceWithBlank: '«Сочувствуем (...) в её горе».',
    options: [
      { label: 'A', text: 'этой семье (Dativo puro: кому/чему)' },
      { label: 'B', text: 'эту семью (Accusativo)' },
      { label: 'C', text: 'этой семьёй (Strumentale)' },
      { label: 'D', text: 'для этой семьи' }
    ],
    correctOption: 'A',
    hint: 'Esprimere compassione o condoglianze si regge con il DATIVO (сочувствовать чужой беде, соболезновать родственникам).',
    explanation:
      'Risposta esatta: A (этой семье). Glazunova p. 31, §14: «Глаголы сочувствовать, соболезновать, сопереживать требуют ДАТЕЛЬНОГО падежа: сочувствовать пострадавшим, соболезновать утрате, сопереживать герою книги».',
    bookRuleRef: 'Glazunova §14, p. 31',
    tags: ['Управление', 'Сочувствовать', 'Дательный падеж']
  },
  {
    id: 'q-s1-gov-praise-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-noprep',
    chapterTitle: 'Глагольное управление: хвалить vs благодарить',
    topicName: 'Reggenza della motivazione del plauso: хвалить / благодарить за что',
    exerciseSource: 'Sezione 1, Esercizio 27, frase 4 (p. 50)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale preposizione introduce la causa/motivo per cui si loda o ringrazia qualcuno?\n«Учитель похвалил ученика (...) проявленную инициативу».',
    sentenceWithBlank: '«Похвалил ученика (...) инициативу».',
    options: [
      { label: 'A', text: 'за (+ Accusativo: хвалить / благодарить кого за что)' },
      { label: 'B', text: 'о (+ Prepositivo)' },
      { label: 'C', text: 'по (+ Dativo)' },
      { label: 'D', text: 'из-за (+ Genitivo)' }
    ],
    correctOption: 'A',
    hint: 'La ragione del ringraziamento, della lode o della ricompensa è introdotta da «за + Accusativo» (за помощь, за смелость, за работу).',
    explanation:
      'Risposta esatta: A (за). Glazunova p. 50, §27: «Хвалить, благодарить, награждать кого за что (за + вин. пад.): благодарить за поддержку, хвалить за прилежание, наградить за храбрость».',
    bookRuleRef: 'Glazunova §27, p. 50',
    tags: ['Управление', 'Хвалить за', 'Винительный падеж']
  },
  {
    id: 'q-s1-gov-remind-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-noprep',
    chapterTitle: 'Глагольное управление: напоминать / напомнить',
    topicName: 'Reggenza di «напоминать кому о чём» vs «напоминать кого (somigliare a)»',
    exerciseSource: 'Sezione 1, Esercizio 23, frase 4 (p. 45)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Qual è la reggenza quando «напоминать» ha il senso di richiamare alla memoria un fatto dimenticato?\n«Секретарь напомнил директору (...) предстоящей встрече с инвесторами».',
    sentenceWithBlank: '«Напомнил директору (...) встрече».',
    options: [
      { label: 'A', text: 'о (+ Prepositivo: напоминать кому о чём)' },
      { label: 'B', text: 'насчёт (+ Genitivo)' },
      { label: 'C', text: 'про (+ Accusativo)' },
      { label: 'D', text: 'в' }
    ],
    correctOption: 'A',
    hint: 'Richiamare un impegno alla mente di qualcuno: «напоминать кому (Dat.) о чём (Prepos.)». Se invece indica somiglianza fisica, regge l\'Accusativo diretto («он напоминает своего отца»).',
    explanation:
      'Risposta esatta: A (о). Glazunova p. 45, §23: «Различайте: Напоминать кому о чём (предл. пад.) — восстанавливать в памяти: напомнить об обещании, о долге. Напоминать кого/что (вин. пад.) — быть похожим: сын очень напоминает отца».',
    bookRuleRef: 'Glazunova §23, p. 45',
    tags: ['Управление', 'Напомнить о', 'Предложный падеж']
  },
  {
    id: 'q-s1-gov-revenge-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-noprep',
    chapterTitle: 'Глагольное управление: мстить / отомстить',
    topicName: 'Reggenza del verbo «мстить кому за что»',
    exerciseSource: 'Sezione 1, Esercizio 27, frase 5 (p. 50)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quali complementi richiede il verbo della vendetta «мстить / отомстить»?\n«Герой пообещал жестоко отомстить (...) за причинённое зло».',
    sentenceWithBlank: '«Отомстить (...) за зло».',
    options: [
      { label: 'A', text: 'врагам (Dativo della persona bersaglio della vendetta: мстить кому за что)' },
      { label: 'B', text: 'врагов (Accusativo)' },
      { label: 'C', text: 'на врагов' },
      { label: 'D', text: 'с врагами' }
    ],
    correctOption: 'A',
    hint: 'La persona a cui ci si vendica si mette al DATIVO (мстить врагу, обидчику), mentre il torto per cui ci si vendica va retto da «за + Accusativo».',
    explanation:
      'Risposta esatta: A (врагам). Glazunova p. 50, §27: «Мстить / отомстить кому (дат. пад.) за что (за + вин. пад.): отомстить предателю за измену, мстить врагам за гибель товарищей».',
    bookRuleRef: 'Glazunova §27, p. 50',
    tags: ['Управление', 'Мстить кому', 'Дательный падеж']
  },
  {
    id: 'q-s1-gov-touch-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-noprep',
    chapterTitle: 'Беспредложное управление: касаться / коснуться',
    topicName: 'Reggenza di «касаться» (riguardare / toccare)',
    exerciseSource: 'Sezione 1, Esercizio 13, frase 2 (p. 28)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale caso regge il verbo «касаться / коснуться» sia nel senso fisico di sfiorare, sia nel senso metaforico di riguardare un tema?\n«Этот вопрос напрямую касается (...) всех сотрудников компании».',
    sentenceWithBlank: '«Вопрос касается (...) сотрудников».',
    options: [
      { label: 'A', text: 'интересов (Genitivo senza preposizione: касаться кого/чего)' },
      { label: 'B', text: 'интересы (Accusativo)' },
      { label: 'C', text: 'к интересам' },
      { label: 'D', text: 'интересами' }
    ],
    correctOption: 'A',
    hint: '«Касаться / коснуться кого? чего?» regge invariabilmente il GENITIVO senza preposizione.',
    explanation:
      'Risposta esatta: A (интересов). Glazunova p. 28, §13: «Глагол КАСАТЬСЯ / КОСНУТЬСЯ управляет РОДИТЕЛЬНЫМ падежом без предлога: коснуться руки (физический контакт), это касается каждого (значение отношения), коснуться важной темы в докладе».',
    bookRuleRef: 'Glazunova §13, p. 28',
    tags: ['Управление', 'Касаться', 'Родительный падеж']
  },
  {
    id: 'q-s1-gov-look-like-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-noprep',
    chapterTitle: 'Управление прилагательных: похож на кого/что',
    topicName: 'Reggenza dell\'aggettivo «похож / похожий»',
    exerciseSource: 'Sezione 1, Esercizio 37, frase 4 (p. 63)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale costrutto esprime la somiglianza con «похож»?\n«Младшая дочь удивительно похожа (...) свою бабушку».',
    sentenceWithBlank: '«Похожа (...) бабушку».',
    options: [
      { label: 'A', text: 'на (+ Accusativo: похож / похожа на кого/что)' },
      { label: 'B', text: 'к (+ Dativo)' },
      { label: 'C', text: 'с (+ Strumentale)' },
      { label: 'D', text: 'о (+ Prepositivo)' }
    ],
    correctOption: 'A',
    hint: 'La somiglianza in russo si regge con la preposizione «на + Accusativo» (похож на отца, на портрет).',
    explanation:
      'Risposta esatta: A (на). Glazunova p. 63, §37: «Краткое и полное прилагательное ПОХОЖ / ПОХОЖИЙ требует предлога НА с винительным падежом: похож на мать, они похожи друг на друга, задача похожа на предыдущую».',
    bookRuleRef: 'Glazunova §37, p. 63',
    tags: ['Управление прилагательных', 'Похож на', 'Винительный падеж']
  }
];
