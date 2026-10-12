import { Question } from '../../types';

export const QUESTIONS_BATCH_SECTION_1_PART2: Question[] = [
  // --- Approfondimento Reggenze con Preposizioni: Spazio, Contatto e Posizione (pp. 64-80) ---
  {
    id: 'q-s1-prep-spatial-skvoz-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-prep',
    chapterTitle: 'Предлоги места: сквозь vs через',
    topicName: 'Passaggio attraverso ostacoli fitti: сквозь',
    exerciseSource: 'Sezione 1, Esercizio 45, frase 2 (p. 72)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale preposizione si usa preferibilmente quando l\'attraversamento incontra resistenza o un ostacolo fitto (nebbia, lacrime, cespugli)?\n«Лучи солнца с трудом пробивались (...) густой утренний туман».',
    sentenceWithBlank: '«Лучи солнца пробивались (...) туман».',
    options: [
      { label: 'A', text: 'сквозь (+ Accusativo: attraverso un mezzo denso con resistenza)' },
      { label: 'B', text: 'через (attraversamento geometrico o spaziale ordinario)' },
      { label: 'C', text: 'по' },
      { label: 'D', text: 'мимо' }
    ],
    correctOption: 'A',
    hint: '«Сквозь» sottolinea il filtrare o il passare a fatica attraverso qualcosa di fitto: сквозь слёзы, сквозь сон, сквозь туман.',
    explanation:
      'Risposta esatta: A (сквозь). Glazunova p. 72: «Предлог СКВОЗЬ употребляется при указании на преодоление плотной среды или зрительного/слухового препятствия: смотреть сквозь пальцы, улыбаться сквозь слёзы, пробираться сквозь заросли. ЧЕРЕЗ обозначает переход через границу или пространство: перейти через дорогу, перешагнуть через порог».',
    bookRuleRef: 'Glazunova §45, p. 72',
    tags: ['Предлоги места', 'Сквозь', 'Препятствие']
  },
  {
    id: 'q-s1-prep-spatial-vdol-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-prep',
    chapterTitle: 'Предлоги места: вдоль vs поперёк',
    topicName: 'Movimento longitudinale lungo una linea: вдоль',
    exerciseSource: 'Sezione 1, Esercizio 48, frase 3 (p. 75)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale preposizione regge il Genitivo per indicare moto o disposizione nel senso della lunghezza?\n«Мы не спеша шли (...) набережной, любуясь вечерним городом».',
    sentenceWithBlank: '«Мы шли (...) набережной».',
    options: [
      { label: 'A', text: 'вдоль (+ Genitivo: lungo)' },
      { label: 'B', text: 'поперёк' },
      { label: 'C', text: 'вокруг' },
      { label: 'D', text: 'впереди' }
    ],
    correctOption: 'A',
    hint: '«Вдоль + Genitivo» significa «in direzione longitudinale, lungo»: вдоль берега, вдоль улицы, вдоль забора.',
    explanation:
      'Risposta esatta: A (вдоль). Glazunova p. 75: «Предлог ВДОЛЬ + род. пад. обозначает перемещение или расположение по продольной линии предмета: идти вдоль реки, деревья посажены вдоль дороги».',
    bookRuleRef: 'Glazunova §48, p. 75',
    tags: ['Предлоги места', 'Вдоль', 'Родительный падеж']
  },
  {
    id: 'q-s1-prep-spatial-posredi-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-prep',
    chapterTitle: 'Предлоги места: посреди / посредине',
    topicName: 'Collocazione al centro esatto di uno spazio o evento',
    exerciseSource: 'Sezione 1, Esercizio 50, frase 1 (p. 77)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale preposizione regge il Genitivo per esprimere la posizione al centro di un\'area?\n«(...) площади стоял старинный бронзовый памятник».',
    sentenceWithBlank: '«(...) площади стоял памятник».',
    options: [
      { label: 'A', text: 'Посреди (+ Genitivo: al centro esatto di)' },
      { label: 'B', text: 'Внутри' },
      { label: 'C', text: 'Среди' },
      { label: 'D', text: 'Около' }
    ],
    correctOption: 'A',
    hint: '«Посреди» denota il punto centrale di uno spazio fisico continuo o bidimensionale (комнаты, площади, двора).',
    explanation:
      'Risposta esatta: A (Посреди). Glazunova p. 77: «Предлог ПОСРЕДИ (ПОСРЕДИНЕ) + род. пад. указывает на центральную часть открытого пространства: посреди зала, посреди комнаты, посреди улицы. СРЕДИ чаще используется во множественном числе для окружения однородными предметами или лицами: среди берёз, среди друзей».',
    bookRuleRef: 'Glazunova §50, p. 77',
    tags: ['Предлоги места', 'Посреди', 'Центр пространства']
  },
  {
    id: 'q-s1-prep-attr-po-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-prep',
    chapterTitle: 'Определительные отношения: по + дательный падеж',
    topicName: 'Specializzazione e sfera di competenza: специалист по чему',
    exerciseSource: 'Sezione 1, Esercizio 85, frase 4 (p. 111)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale reggenza preposizionale esprime l\'ambito scientifico o disciplinare di un esperto?\n«Профессор Иванов — признанный специалист (...) древнерусской литературе».',
    sentenceWithBlank: '«Специалист (...) древнерусской литературе».',
    options: [
      { label: 'A', text: 'по (+ Dativo: специалист по литературе, экзамен по истории)' },
      { label: 'B', text: 'в' },
      { label: 'C', text: 'о' },
      { label: 'D', text: 'для' }
    ],
    correctOption: 'A',
    hint: 'L\'ambito disciplinare e di studio si esprime con «по + Dativo»: экзамен по русскому языку, зачёт по физике, мастер по ремонту.',
    explanation:
      'Risposta esatta: A (по). Glazunova p. 111: «Предлог ПО + дат. пад. в определительном значении указывает на сферу деятельности, отрасль науки или признак: специалист по экономике, контрольная работа по химии, мастер по пошиву одежды».',
    bookRuleRef: 'Glazunova §85, p. 111',
    tags: ['Определительные отношения', 'По + дательный', 'Сфера деятельности']
  },
  {
    id: 'q-s1-prep-attr-s-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-prep',
    chapterTitle: 'Определительные отношения: с vs без',
    topicName: 'Attributo di presenza / tratto esteriore caratterizzante',
    exerciseSource: 'Sezione 1, Esercizio 88, frase 2 (p. 112)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale costrutto esprime la presenza di un tratto esteriore o particolare distintivo in un ritratto?\n«В комнату вошёл высокий мужчина (...) седой бородой и внимательным взглядом».',
    sentenceWithBlank: '«Мужчина (...) седой бородой».',
    options: [
      { label: 'A', text: 'с (+ Strumentale: presenza di caratteristica fisica)' },
      { label: 'B', text: 'у' },
      { label: 'C', text: 'в' },
      { label: 'D', text: 'при' }
    ],
    correctOption: 'A',
    hint: 'La presenza di una caratteristica distintiva si esprime con la preposizione «с + Strumentale»: человек с юмором, девушка с голубыми глазами.',
    explanation:
      'Risposta esatta: A (с). Glazunova p. 112: «Предлог С + твор. пад. выражает качественную характеристику предмета или лица через наличие признака, детали внешности или свойства: человек с характером, кофе с молоком, пальто с капюшоном».',
    bookRuleRef: 'Glazunova §88, p. 112',
    tags: ['Определительные отношения', 'С + творительный', 'Признак']
  },
  {
    id: 'q-s1-prep-cond-pod-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-prep',
    chapterTitle: 'Предлоги условия: под + винительный падеж',
    topicName: 'Garanzia, promessa o pegno: под залог, под расписку',
    exerciseSource: 'Sezione 1, Esercizio 118, frase 2 (p. 121)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale preposizione esprime la condizione di garanzia giuridica o promessa formale?\n«Банк согласился выдать кредит только (...) залог недвижимости».',
    sentenceWithBlank: '«Выдать кредит (...) залог недвижимости».',
    options: [
      { label: 'A', text: 'под (+ Accusativo: под залог, под расписку, под честное слово)' },
      { label: 'B', text: 'на' },
      { label: 'C', text: 'при' },
      { label: 'D', text: 'в' }
    ],
    correctOption: 'A',
    hint: 'In russo le garanzie, i pegni e le promesse formali si reggono con «под + Accusativo»: под залог, под процент, под расписку.',
    explanation:
      'Risposta esatta: A (под). Glazunova p. 121: «Предлог ПОД + вин. пад. обозначает условие в виде обязательства, гарантии или обеспечения: брать деньги под расписку, кредит под залог, отпустить под честное слово, под поручительство».',
    bookRuleRef: 'Glazunova §118, p. 121',
    tags: ['Предлоги условия', 'Под залог', 'Гарантия']
  },
  {
    id: 'q-s1-gov-accuse-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-noprep',
    chapterTitle: 'Глагольное управление: обвинять / обвинить',
    topicName: 'Doppia reggenza: обвинять кого в чём',
    exerciseSource: 'Sezione 1, Esercizio 28, frase 2 (p. 51)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale reggenza richiede il verbo «обвинять» per indicare l\'imputato e il capo d\'accusa?\n«Его безосновательно обвинили (...) нарушении должностных обязанностей».',
    sentenceWithBlank: '«Его обвинили (...) нарушении обязанностей».',
    options: [
      { label: 'A', text: 'в (+ Prepositivo: обвинять кого в чём)' },
      { label: 'B', text: 'о' },
      { label: 'C', text: 'за' },
      { label: 'D', text: 'на' }
    ],
    correctOption: 'A',
    hint: '«Обвинять кого в чём» (в преступлении, во лжи, в халатности).',
    explanation:
      'Risposta esatta: A (в). Glazunova p. 51: «Обвинять / обвинить кого (вин. пад.) в чём (предл. пад.): обвинить подозреваемого в краже, во лжи, в некомпетентности».',
    bookRuleRef: 'Glazunova §28, p. 51',
    tags: ['Управление', 'Обвинять в чём', 'Предложный падеж']
  },
  {
    id: 'q-s1-gov-rejoice-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-noprep',
    chapterTitle: 'Глагольное управление: радоваться',
    topicName: 'Reggenza del verbo радоваться: кому/чему vs за кого',
    exerciseSource: 'Sezione 1, Esercizio 18, frase 4 (p. 37)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Come si esprime la gioia per un evento favorevole che accade a sé o in generale vs per il successo di un\'altra persona?\n«Мы искренне радуемся (...) вашим выдающимся успехам».',
    sentenceWithBlank: '«Мы радуемся (...) вашим успехам».',
    options: [
      { label: 'A', text: 'вашим успехам (Dativo: радоваться чему)' },
      { label: 'B', text: 'о ваших успехах' },
      { label: 'C', text: 'за ваши успехи (forma usata quando si gioisce per un\'altra persona: радоваться за друга)' },
      { label: 'D', text: 'на ваши успехи' }
    ],
    correctOption: 'A',
    hint: 'L\'oggetto o evento per cui si gioisce va al Dativo (радоваться весне, встрече, успехам). Per una persona si può usare anche «радоваться за кого».',
    explanation:
      'Risposta esatta: A (вашим успехам). Glazunova p. 37: «Радоваться кому/чему (дат. пад.): радоваться жизни, гостям, успехам, победе. При выражении сопереживания радости другого человека: радоваться ЗА кого (за друга, за брата)».',
    bookRuleRef: 'Glazunova §18, p. 37',
    tags: ['Управление', 'Радоваться', 'Дательный падеж']
  },
  {
    id: 'q-s1-gov-doubt-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-noprep',
    chapterTitle: 'Глагольное управление: сомневаться',
    topicName: 'Reggenza di «сомневаться / усомниться»',
    exerciseSource: 'Sezione 1, Esercizio 19, frase 1 (p. 39)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale reggenza richiede il verbo «сомневаться» (dubitare)?\n«Никто из присутствующих не сомневался (...) правильности принятого решения».',
    sentenceWithBlank: '«Не сомневался (...) правильности решения».',
    options: [
      { label: 'A', text: 'в (+ Prepositivo: сомневаться в чём)' },
      { label: 'B', text: 'о' },
      { label: 'C', text: 'насчёт' },
      { label: 'D', text: 'про' }
    ],
    correctOption: 'A',
    hint: 'Il verbo сомневаться richiede la preposizione «в + Prepositivo» (в успехе, в искренности, в победе).',
    explanation:
      'Risposta esatta: A (в). Glazunova p. 39: «Сомневаться / усомниться в ком/чём (предл. пад.): сомневаться в достоверности сведений, в друге, в успехе дела».',
    bookRuleRef: 'Glazunova §19, p. 39',
    tags: ['Управление', 'Сомневаться', 'Предложный падеж']
  },
  {
    id: 'q-s1-gov-admit-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-noprep',
    chapterTitle: 'Глагольное управление: признаваться / признаться',
    topicName: 'Reggenza di «признаваться»: кому в чём',
    exerciseSource: 'Sezione 1, Esercizio 21, frase 3 (p. 42)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale reggenza esprime l\'oggetto o la colpa confessata con «признаться»?\n«Он набрался смелости и признался (...) своей давней ошибке».',
    sentenceWithBlank: '«Признался (...) ошибке».',
    options: [
      { label: 'A', text: 'в (+ Prepositivo: признаться в чём)' },
      { label: 'B', text: 'о' },
      { label: 'C', text: 'за' },
      { label: 'D', text: 'про' }
    ],
    correctOption: 'A',
    hint: 'Confessare qualcosa a qualcuno si dice «признаться кому (Dat.) в чём (Prepos.)»: признаться в любви, в ошибке, в преступлении.',
    explanation:
      'Risposta esatta: A (в). Glazunova p. 42: «Признаваться / признаться кому (дат. пад.) в ком/чём (предл. пад.): признаться в любви, в своей неправоте, в совершённом проступке».',
    bookRuleRef: 'Glazunova §21, p. 42',
    tags: ['Управление', 'Признаться', 'Предложный падеж']
  }
];
