import { Question } from '../../types';

export const QUESTIONS_BATCH_SECTION_1_PART4: Question[] = [
  // --- Serie 4 di approfondimento su Glazunova Sezione 1: Sintagma e Reggenze ---
  {
    id: 'q-s1-prep-time-s-po-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-prep',
    chapterTitle: 'Предлоги времени: с... по vs с... до',
    topicName: 'Inclusività del limite finale: с... по (compreso) vs с... до',
    exerciseSource: 'Sezione 1, Esercizio 66, frase 3 (p. 96)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale coppia di preposizioni temporali include TASSATIVAMENTE anche l\'ultimo giorno/mese citato come termine dell\'intervallo?\n«Выставка продлится (...) первое (...) тридцатое сентября включительно».',
    sentenceWithBlank: '«...продлится (...) первое (...) тридцатое сентября».',
    options: [
      { label: 'A', text: 'с... по (+ Accusativo: il limite finale è rigorosamente compreso nell\'intervallo)' },
      { label: 'B', text: 'с... до (+ Genitivo: il limite finale può non essere incluso o restare ambiguo)' },
      { label: 'C', text: 'от... до' },
      { label: 'D', text: 'из... в' }
    ],
    correctOption: 'A',
    hint: 'La formula temporale russa per indicare «dal... al... compreso» è «с + Genitivo ... по + Accusativo» (с первого по тридцатое).',
    explanation:
      'Risposta esatta: A (с... по). Glazunova p. 96: «Сочетание С... ПО (+ вин. пад.) указывает на временной отрезок с ОБЯЗАТЕЛЬНЫМ включением конечного предела: отпуск с первого по пятое мая (пятое мая включительно). Сочетание С... ДО (+ род. пад.) конечный момент может исключать».',
    bookRuleRef: 'Glazunova §66, p. 96',
    tags: ['Предлоги времени', 'С по', 'Включение предела']
  },
  {
    id: 'q-s1-prep-spatial-ot-do-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-prep',
    chapterTitle: 'Предлоги пространства: от... до',
    topicName: 'Distanza nello spazio tra due punti: от... до',
    exerciseSource: 'Sezione 1, Esercizio 42, frase 2 (p. 68)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale coppia preposizionale esprime la distanza spaziale o la tratta percorsa tra il punto di partenza e quello di arrivo?\n«(...) вокзала (...) гостиницы можно дойти пешком за десять минут».',
    sentenceWithBlank: '«(...) вокзала (...) гостиницы десять минут пешком».',
    options: [
      { label: 'A', text: 'От... до (+ Genitivo in entrambi: от вокзала до гостиницы)' },
      { label: 'B', text: 'Из... в' },
      { label: 'C', text: 'С... на' },
      { label: 'D', text: 'У... к' }
    ],
    correctOption: 'A',
    hint: 'La distanza spaziale oggettiva da un punto A a un punto B si esprime con «от + Gen. ... до + Gen.».',
    explanation:
      'Risposta esatta: A (От... до). Glazunova p. 68: «Конструкция ОТ... ДО (+ род. пад.) обозначает пространственный интервал между исходным и конечным пунктами: Расстояние от Москвы до Петербурга; Путь от вокзала до центра».',
    bookRuleRef: 'Glazunova §42, p. 68',
    tags: ['Предлоги пространства', 'От до', 'Пространственный интервал']
  },
  {
    id: 'q-s1-gov-acc-instr-appoint-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-noprep',
    chapterTitle: 'Двойное управление: назначать / назначить',
    topicName: 'Doppia reggenza: назначать кого кем',
    exerciseSource: 'Sezione 1, Esercizio 25, frase 4 (p. 48)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quali casi richiede il verbo di nomina istituzionale «назначить»?\n«Его назначили (...) нового отдела».',
    sentenceWithBlank: '«Его назначили (...) нового отдела».',
    options: [
      { label: 'A', text: 'руководителем (Strumentale della carica: назначить кого кем)' },
      { label: 'B', text: 'руководитель (Nominativo)' },
      { label: 'C', text: 'на руководителя' },
      { label: 'D', text: 'к руководителю' }
    ],
    correctOption: 'A',
    hint: 'I verbi di nomina ed elezione (назначить, избрать, объявить) reggono l\'Accusativo della persona e lo Strumentale della carica (кого кем).',
    explanation:
      'Risposta esatta: A (руководителем). Glazunova p. 48: «Глаголы назначения и выбора (назначать, выбирать, объявлять кого кем) требуют формы винительного падежа для лица и творительного падежа для должности/звания: назначить его директором, выбрать её председателем».',
    bookRuleRef: 'Glazunova §25, p. 48',
    tags: ['Двойное управление', 'Назначить кем', 'Творительный падеж']
  },
  {
    id: 'q-s1-gov-warn-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-noprep',
    chapterTitle: 'Глагольное управление: предупреждать / предупредить',
    topicName: 'Reggenza del verbo «предупреждать кого о чём»',
    exerciseSource: 'Sezione 1, Esercizio 23, frase 2 (p. 45)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale reggenza richiede «предупредить» per avvisare di un pericolo o evento?\n«Служба спасения заранее предупредила жителей города (...) надвигающемся урагане».',
    sentenceWithBlank: '«Предупредила жителей (...) урагане».',
    options: [
      { label: 'A', text: 'о (+ Prepositivo: предупреждать кого о чём)' },
      { label: 'B', text: 'насчёт (+ Genitivo)' },
      { label: 'C', text: 'от (+ Genitivo)' },
      { label: 'D', text: 'против (+ Genitivo)' }
    ],
    correctOption: 'A',
    hint: '«Предупреждать кого (Acc.) о чём (Prepos.)» (об опасности, об изменении графика).',
    explanation:
      'Risposta esatta: A (о). Glazunova p. 45: «Предупреждать / предупредить кого (вин. пад.) о ком/чём (предл. пад.): предупредить пассажиров о задержке рейса, об опасности».',
    bookRuleRef: 'Glazunova §23, p. 45',
    tags: ['Управление', 'Предупредить о', 'Предложный падеж']
  },
  {
    id: 'q-s1-prep-accord-soglasno-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-prep',
    chapterTitle: 'Предлоги соответствия: согласно, вопреки',
    topicName: 'Reggenza di «согласно» nella norma colta russa',
    exerciseSource: 'Sezione 1, Esercizio 79, frase 1 (p. 109)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Nella rigorosa norma grammaticale e burocratica russa, quale caso regge TASSATIVAMENTE la preposizione «согласно» (in conformità a)?\n«Все документы были оформлены строго согласно (...)».',
    sentenceWithBlank: '«...согласно (...) новому закону».',
    options: [
      { label: 'A', text: 'новому закону (Dativo obbligatorio secondo la norma colta: согласно чему)' },
      { label: 'B', text: 'нового закона (Genitivo: errore frequente nel parlato)' },
      { label: 'C', text: 'новым законом (Strumentale)' },
      { label: 'D', text: 'на новый закон' }
    ],
    correctOption: 'A',
    hint: 'Preposizioni come «согласно», «благодаря», «вопреки», «наперекор» reggono rigorosamente il DATIVO nella lingua russa corretta.',
    explanation:
      'Risposta esatta: A (новому закону). Glazunova p. 109, nota con punto esclamativo (!): «Предлог СОГЛАСНО в современном литературном языке требует строго ДАТЕЛЬНОГО падежа: согласно приказу, согласно расписанию, согласно договору. Форма родительного падежа (*согласно приказа) признаётся грубым нарушением нормы».',
    bookRuleRef: 'Glazunova §79, p. 109',
    tags: ['Предлоги', 'Согласно', 'Дательный падеж']
  },
  {
    id: 'q-s1-prep-vopreki-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-prep',
    chapterTitle: 'Предлоги соответствия: вопреки + дательный падеж',
    topicName: 'Reggenza del connettore concessivo «вопреки»',
    exerciseSource: 'Sezione 1, Esercizio 80, frase 3 (p. 110)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale caso regge la preposizione «вопреки» (a dispetto di, contro il parere di)?\n«Они приняли это решение вопреки (...) главного инженера».',
    sentenceWithBlank: '«...вопреки (...) совету инженера».',
    options: [
      { label: 'A', text: 'совету (Dativo obbligatorio: вопреки кому/чему)' },
      { label: 'B', text: 'совета (Genitivo)' },
      { label: 'C', text: 'советом (Strumentale)' },
      { label: 'D', text: 'в совет' }
    ],
    correctOption: 'A',
    hint: 'Anche «вопреки» esige sempre il DATIVO (вопреки ожиданиям, вопреки прогнозам, вопреки трудностям).',
    explanation:
      'Risposta esatta: A (совету). Glazunova p. 110: «Предлог ВОПРЕКИ употребляется только с ДАТЕЛЬНЫМ падежом при выражении действия, совершающегося наперекор препятствию или воле: вопреки предсказаниям, вопреки желанию, вопреки здравому смыслу».',
    bookRuleRef: 'Glazunova §80, p. 110',
    tags: ['Предлоги', 'Вопреки', 'Дательный падеж']
  },
  {
    id: 'q-s1-gov-distinguish-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-noprep',
    chapterTitle: 'Глагольное управление: отличать vs различать',
    topicName: 'Differenza di reggenza: отличать от кого vs различать что и что',
    exerciseSource: 'Sezione 1, Esercizio 35, frase 5 (p. 61)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Quale reggenza distingue «отличать» da «различать» nel manuale di Glazunova?\n«Он с раннего детства умел отличать правду (...) лжи».',
    sentenceWithBlank: '«...отличать правду (...) лжи».',
    options: [
      { label: 'A', text: 'от (+ Genitivo: отличать что от чего)' },
      { label: 'B', text: 'с' },
      { label: 'C', text: 'из' },
      { label: 'D', text: 'между' }
    ],
    correctOption: 'A',
    hint: '«Отличать что ОТ чего» (distinguere una cosa da un\'altra); «Различать что и что / между чем» (discernere due cose tra loro).',
    explanation:
      'Risposta esatta: A (от). Glazunova p. 61: «Глагол ОТЛИЧАТЬ требует предлога ОТ с родительным падежом: отличать добро от зла, правду от вымысла. Глагол РАЗЛИЧАТЬ обычно управляет винительным падежом двух объектов: различать цвета, звуки, буквы; различать добро и зло».',
    bookRuleRef: 'Glazunova §35, p. 61',
    tags: ['Управление', 'Отличать от', 'Родительный падеж']
  },
  {
    id: 'q-s1-gov-adj-worthy-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-noprep',
    chapterTitle: 'Управление прилагательных: достоин vs удостоен',
    topicName: 'Reggenza di «достоин кого/чего» vs «удостоен чего»',
    exerciseSource: 'Sezione 1, Esercizio 37, frase 2 (p. 63)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale caso regge l\'aggettivo predicativo breve «достоин» (degno di)?\n«Его благородный поступок достоин (...)».',
    sentenceWithBlank: '«Поступок достоин (...)».',
    options: [
      { label: 'A', text: 'всяческого уважения (Genitivo senza preposizione: достоин кого/чего)' },
      { label: 'B', text: 'всяческое уважение (Accusativo)' },
      { label: 'C', text: 'к всяческому уважению' },
      { label: 'D', text: 'всяческим уважением' }
    ],
    correctOption: 'A',
    hint: '«Достоин» regge sempre il Genitivo senza preposizione: достоин награды, похвалы, внимания.',
    explanation:
      'Risposta esatta: A (всяческого уважения). Glazunova p. 63: «Краткое прилагательное ДОСТОИН кого/чего управляет РОДИТЕЛЬНЫМ падежом: достоин награды, уважения, звания победителя».',
    bookRuleRef: 'Glazunova §37, p. 63',
    tags: ['Управление прилагательных', 'Достоин', 'Родительный падеж']
  },
  {
    id: 'q-s1-prep-spatial-u-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-prep',
    chapterTitle: 'Предлоги пространства: у vs около / возле',
    topicName: 'Uso di «у» per vicinanza immediata e contatto visivo',
    exerciseSource: 'Sezione 1, Esercizio 44, frase 1 (p. 70)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale preposizione denota la posizione adiacente a un punto di riferimento funzionale ben identificabile (porta, finestra, ingresso)?\n«Он долго стоял (...) раскрытого окна, глубоко вдыхая свежий ночной воздух».',
    sentenceWithBlank: '«Стоял (...) раскрытого окна».',
    options: [
      { label: 'A', text: 'у (+ Genitivo: u окна, u двери, u доски, u телефона)' },
      { label: 'B', text: 'на' },
      { label: 'C', text: 'в' },
      { label: 'D', text: 'по' }
    ],
    correctOption: 'A',
    hint: 'Stare accanto a una finestra, a una porta, alla cattedra o a un bordo richiede tipicamente la preposizione «у + Genitivo».',
    explanation:
      'Risposta esatta: A (у). Glazunova p. 70: «Предлог У + род. пад. указывает на нахождение в непосредственной близости от предмета-ориентира или функционального места: стоять у окна, сидеть у костра, встретиться у входа в театр».',
    bookRuleRef: 'Glazunova §44, p. 70',
    tags: ['Предлоги пространства', 'У окна', 'Близость']
  },
  {
    id: 'q-s1-prep-condition-v-sluchae-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-prep',
    chapterTitle: 'Предлоги условия: в случае + родительный падеж',
    topicName: 'Locuzione condizionale burocratica e formale: в случае чего',
    exerciseSource: 'Sezione 1, Esercizio 116, frase 4 (p. 121)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale locuzione preposizionale introduce l\'ipotesi formale o evenienza nel registro amministrativo e giuridico?\n«(...) возникновения чрезвычайной ситуации немедленно звоните по номеру 112».',
    sentenceWithBlank: '«(...) возникновения ситуации звоните 112».',
    options: [
      { label: 'A', text: 'В случае (+ Genitivo: in caso di, qualora si verifichi)' },
      { label: 'B', text: 'При случае (in caso di occasione favorevole)' },
      { label: 'C', text: 'По случаю (in occasione celebrativa di)' },
      { label: 'D', text: 'На случай (per precauzione)' }
    ],
    correctOption: 'A',
    hint: '«В случае + Genitivo» esprime la pura condizione ipotetica («in caso di / qualora si verifichi...»).',
    explanation:
      'Risposta esatta: A (В случае). Glazunova p. 121: «Оборот В СЛУЧАЕ + род. пад. выражает условие в официально-деловом стиле: в случае необходимости, в случае задержки, в случае отказа. Различайте с ПО СЛУЧАЮ (причина-повод: праздник по случаю юбилея) и НА СЛУЧАЙ (цель-предосторожность: зонт на случай дождя)».',
    bookRuleRef: 'Glazunova §116, p. 121',
    tags: ['Предлоги условия', 'В случае', 'Официально-деловой стиль']
  }
];
