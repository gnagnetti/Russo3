import { Question } from '../../types';

export const QUESTIONS_BATCH_SECTION_2_PT4: Question[] = [
  // --- Serie 4 di approfondimento su Glazunova Sezione 2: La Frase Semplice ---
  {
    id: 'q-s2-subj-mnogo-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-subj-pred',
    chapterTitle: 'Подлежащее и сказуемое: слова много, мало, сколько',
    topicName: 'Accordo del verbo con avverbi quantitativi (много, мало, сколько)',
    exerciseSource: 'Sezione 2, Esercizio 190, frase 2 (p. 136)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale forma assume il predicato al passato quando il soggetto è introdotto da «много, мало, сколько, столько»?\n«На стадионе в тот день (...) много преданных болельщиков».',
    sentenceWithBlank: '«На стадионе (...) много болельщиков».',
    options: [
      { label: 'A', text: 'собралось (singolare neutro: forma impersonale standard)' },
      { label: 'B', text: 'собрались (plurale: ammesso raramente nel parlato, ma il neutro singolare è la norma di Glazunova)' },
      { label: 'C', text: 'собрался' },
      { label: 'D', text: 'собравшийся' }
    ],
    correctOption: 'A',
    hint: 'Con i quantitativi indefiniti «много», «мало», «сколько», «столько» il verbo al passato va al neutro singolare (-о / -ось).',
    explanation:
      'Risposta esatta: A (собралось). Glazunova p. 136, §190: «При подлежащем, выраженном словами много, мало, немного, сколько, столько с родительным падежом существительного, сказуемое ставится в форме единственного числа среднего рода: На площади собралось много народу; Сколько времени прошло!».',
    bookRuleRef: 'Glazunova §190, p. 136',
    tags: ['Подлежащее', 'Много', 'Средний род единственного числа']
  },
  {
    id: 'q-s2-subj-chast-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-subj-pred',
    chapterTitle: 'Подлежащее и сказуемое: слово «часть»',
    topicName: 'Accordo grammaticale con il sostantivo «часть»',
    exerciseSource: 'Sezione 2, Esercizio 196, frase 1 (p. 143)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale accordo rigorosamente grammaticale assume il predicato con il sostantivo singolare femminile «часть»?\n«Большая часть рукописи (...) в огне во время пожара».',
    sentenceWithBlank: '«Часть рукописи (...) в огне».',
    options: [
      { label: 'A', text: 'погибла (singolare femminile concordato col genere di «часть»)' },
      { label: 'B', text: 'погибли (plurale a senso)' },
      { label: 'C', text: 'погибло (neutro)' },
      { label: 'D', text: 'погибший' }
    ],
    correctOption: 'A',
    hint: 'Con «часть» inanimato singolare femminile il predicato concorda al femminile singolare (-ла).',
    explanation:
      'Risposta esatta: A (погибла). Glazunova p. 143, §196: «При слове ЧАСТЬ с зависимым неодушевлённым существительным сказуемое согласуется грамматически — в женском роде единственного числа: Большая часть книги была прочитана; Часть тиража погибла при транспортировке».',
    bookRuleRef: 'Glazunova §196, p. 143',
    tags: ['Подлежащее', 'Часть', 'Женский род']
  },
  {
    id: 'q-s2-pred-dolzhen-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-subj-pred',
    chapterTitle: 'Составное глагольное сказуемое: модальные связки',
    topicName: 'Accordo della copula breve modale: должен / обязана / намерены',
    exerciseSource: 'Sezione 2, Esercizio 202, frase 4 (p. 146)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Come concorda la forma modale breve predicativa «должен» con un soggetto femminile singolare?\n«Каждая дежурная бригада (...) строго соблюдать правила безопасности».',
    sentenceWithBlank: '«Бригада (...) соблюдать правила».',
    options: [
      { label: 'A', text: 'должна (femminile singolare concordato con бригада)' },
      { label: 'B', text: 'должен' },
      { label: 'C', text: 'должно' },
      { label: 'D', text: 'должны' }
    ],
    correctOption: 'A',
    hint: 'La forma breve dell\'aggettivo modale (должен, рада, готов, обязан) concorda sempre in genere e numero col soggetto grammaticale.',
    explanation:
      'Risposta esatta: A (должна). Glazunova p. 146, §202: «Краткие прилагательные в роли модальной связки в составном глагольном сказуемом (должен, обязан, готов, рад, намерен) согласуются с подлежащим в роде и числе: Студентка должна ответить; Бригада обязана проверить».',
    bookRuleRef: 'Glazunova §202, p. 146',
    tags: ['Составное глагольное', 'Должен', 'Согласование связки']
  },
  {
    id: 'q-s2-pred-faza-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-subj-pred',
    chapterTitle: 'Составное глагольное сказуемое: фазовые глаголы',
    topicName: 'Aspetto dell\'infinito dopo verbi di fase (начать, продолжить, бросить)',
    exerciseSource: 'Sezione 2, Esercizio 203, frase 2 (p. 147)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale aspetto verbale richiede TASSATIVAMENTE l\'infinito retto da verbi di fase (начать, стать, продолжать, кончить, перестать, бросить)?\n«После долгих колебаний он наконец бросил (...)».',
    sentenceWithBlank: '«Он бросил (...)».',
    options: [
      { label: 'A', text: 'курить (obbligatoriamente imperfettivo: i verbi di fase ammettono solo l\'infinito imperfettivo!)' },
      { label: 'B', text: 'закурить (perfettivo: errore gravissimo e vietato)' },
      { label: 'C', text: 'покурить' },
      { label: 'D', text: 'выкурить' }
    ],
    correctOption: 'A',
    hint: 'Regola universale della sintassi russa: dopo tutti i verbi che indicano inizio, continuazione o termine di un\'azione si può usare SOLO l\'aspetto IMPERFETTIVO.',
    explanation:
      'Risposta esatta: A (курить). Glazunova p. 147, §203: «Фазовые глаголы (начать, стать, продолжать, кончить, прекратить, перестать, бросить) сочетаются ИСКЛЮЧИТЕЛЬНО с инфинитивом НЕСОВЕРШЕННОГО вида: бросил курить, начал читать, продолжил работать. Использование совершенного вида после них грамматически недопустимо».',
    bookRuleRef: 'Glazunova §203, p. 147',
    tags: ['Фазовые глаголы', 'Несовершенный вид инфинитива', 'Запрет СВ']
  },
  {
    id: 'q-s2-one-inf-kat-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-one-member',
    chapterTitle: 'Инфинитивные предложения: категорическое предписание',
    topicName: 'Valore perentorio dell\'infinito nel registro militare o di comando: молчать! стоять!',
    exerciseSource: 'Sezione 2, Esercizio 256, frase 1 (p. 193)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale valore modale assume l\'infinito perfettivo/imperfettivo indipendente privo di particelle in un ordine categorico:\n«Всем встать! Никому не сходить со своих мест!»?',
    sentenceWithBlank: '«Всем встать!»',
    options: [
      { label: 'A', text: 'Ordine perentorio e categorico che esige immediata obbedienza (категорическое приказание)' },
      { label: 'B', text: 'Consiglio amichevole e facoltativo' },
      { label: 'C', text: 'Supplica disperata' },
      { label: 'D', text: 'Puro dubbio riflessivo' }
    ],
    correctOption: 'A',
    hint: 'L\'infinito indipendente privo di particelle esprime ordini indiscutibili e comandi ufficiali («Tutti in piedi! Silenzio!»).',
    explanation:
      'Risposta esatta: A. Glazunova p. 193, §256: «Независимый инфинитив без частиц в инфинитивных предложениях выражает категорическое приказание, повеление или запрет, не допускающие возражений: Всем встать! Не двигаться! Молчать!».',
    bookRuleRef: 'Glazunova §256, p. 193',
    tags: ['Инфинитивные предложения', 'Приказание', 'Категорический приказ']
  },
  {
    id: 'q-s2-one-nom-attr-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-one-member',
    chapterTitle: 'Назывные предложения: распространённые формы',
    topicName: 'Tipi di espansione ammessi nelle frasi nominali (назывные предложения)',
    exerciseSource: 'Sezione 2, Esercizio 262, frase 3 (p. 198)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Quali complementi o espansioni possono far parte di una genuina proposizione nominale (назывное предложение)?\n«Глухая полночь. Морозная зимняя тишина».',
    sentenceWithBlank: '«Глухая полночь. Морозная тишина».',
    options: [
      { label: 'A', text: 'Solo attributi concordati o non concordati (определения); la presenza di un complemento di circostanza verbale (обстоятельство) trasformerebbe la frase in un\'ellissi a due membri' },
      { label: 'B', text: 'Qualsiasi tipo di complemento, compreso il moto a luogo' },
      { label: 'C', text: 'Solo complementi di termine' },
      { label: 'D', text: 'Nessun tipo di aggettivo o determinante' }
    ],
    correctOption: 'A',
    hint: 'Glazunova chiarisce la distinzione accademica: una frase nominale pura ammette solo attributi (определения). Se compare una circostanza di luogo come «На столе — книга», si tratta di una frase ellittica a due membri col predicato sottinteso!',
    explanation:
      'Risposta esatta: A. Glazunova p. 198, §262: «Назывные предложения могут распространяться только определениями: Тёплый летний вечер; Тишина ночи. Если в предложении появляется обстоятельство места или времени (На улице шум), академическая грамматика квалифицирует его как неполное двусоставное с пропущенным сказуемым».',
    bookRuleRef: 'Glazunova §262, p. 198',
    tags: ['Назывные предложения', 'Определения', 'Теоретическая норма']
  },
  {
    id: 'q-s2-ellip-dash-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-incomplete',
    chapterTitle: 'Неполные предложения: тире на месте пропуска сказуемого',
    topicName: 'Uso della linea orizzontale (тире) al posto del verbo omesso',
    exerciseSource: 'Sezione 2, Esercizio 330, frase 2 (p. 248)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quando in una frase ellittica si omette il verbo per ritmo conciso e tra i due elementi si avverte una pausa, quale punteggiatura si colloca?\n«Мир освещается солнцем, а человек (...) знанием».',
    sentenceWithBlank: '«...человек (...) знанием».',
    options: [
      { label: 'A', text: '— (тире: segnala graficamente l\'omissione del predicato sottinteso)' },
      { label: 'B', text: ': (двоеточие)' },
      { label: 'C', text: '; (точка с запятой)' },
      { label: 'D', text: ', (простая запятая)' }
    ],
    correctOption: 'A',
    hint: 'La linea orizzontale (тире) sostituisce graficamente il verbo omesso per evitare la ripetizione (человек [освещается] знанием).',
    explanation:
      'Risposta esatta: A (— тире). Glazunova p. 248, §330: «ТИРЕ ставится в неполном предложении на месте пропущенного сказуемого, если в устной речи на этом месте делается интонационная пауза: Мир освещается солнцем, а человек — знанием; За рекой — густой лес».',
    bookRuleRef: 'Glazunova §330, p. 248',
    tags: ['Неполные предложения', 'Тире', 'Пропуск сказуемого']
  },
  {
    id: 'q-s2-isol-contr-adj-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-isolated',
    chapterTitle: 'Обособленные определения: согласованные прилагательные',
    topicName: 'Due aggettivi postposti al sostantivo determinato',
    exerciseSource: 'Sezione 2, Esercizio 272, frase 3 (p. 204)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Come si punteggiano due aggettivi qualificativi posti subito dopo un sostantivo che era già preceduto da un determinante?\n«Наступила тёплая весенняя ночь, (...) и тихая».',
    sentenceWithBlank: '«...ночь, (...) и тихая».',
    options: [
      { label: 'A', text: 'ясная (si isolano tra virgole: due aggettivi postposti a un nome già determinato assumono rilievo predicativo)' },
      { label: 'B', text: 'ясную' },
      { label: 'C', text: 'ясной' },
      { label: 'D', text: 'ясно' }
    ],
    correctOption: 'A',
    hint: 'Due o più aggettivi posposti a un sostantivo si isolano con virgole ed assumono una forte carica espressiva semi-predicativa.',
    explanation:
      'Risposta esatta: A (ясная). Glazunova p. 204, §272: «Два или более одиночных определения, стоящие ПОСЛЕ определяемого существительного (особенно если перед ним уже есть определение), обособляются запятыми: Наступила ночь, ясная и тихая; Солнце, яркое и ослепительное, вставало над горизонтом».',
    bookRuleRef: 'Glazunova §272, p. 204',
    tags: ['Обособленные определения', 'Постпозиция', 'Запятые']
  },
  {
    id: 'q-s2-isol-gerund-time-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-isolated',
    chapterTitle: 'Обособленные обстоятельства: одиночные деепричастия',
    topicName: 'Gerundi singoli non isolati che fungono da avverbio di modo',
    exerciseSource: 'Sezione 2, Esercizio 295, frase 4 (p. 222)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'In quale dei seguenti casi il gerundio singolo perde il valore verbale diventando avverbio di modo e NON si isola con la virgola?\n«Он шёл по коридору не спеша vs Читая книгу, он думал о своём».',
    sentenceWithBlank: '«Он шёл не спеша».',
    options: [
      { label: 'A', text: 'In «Он шёл не спеша» il gerundio ha valore di puro avverbio di modo (синоним медленно) e NON vuole la virgola' },
      { label: 'B', text: 'Si isola sempre con due virgole anche in «не спеша»' },
      { label: 'C', text: 'Si isola solo se il verbo è al passato' },
      { label: 'D', text: 'I gerundi si isolano solo con il punto esclamativo' }
    ],
    correctOption: 'A',
    hint: 'I gerundi singoli che rispondono alla domanda «come?» ed equivalgono a un avverbio (сидя, стоя, лёжа, не спеша, молча) si pronunciano senza pausa e NON si separano con la virgola!',
    explanation:
      'Risposta esatta: A. Glazunova p. 222, §295: «Одиночные деепричастия, утратившие значение добавочного действия и перешедшие в наречия образа действия, НЕ ОБОСОБЛЯЮТСЯ запятыми: Он читал лёжа (= в лежачем положении); Они шли не спеша (= медленно); Она слушала молча (= тихо)».',
    bookRuleRef: 'Glazunova §295, p. 222',
    tags: ['Деепричастия', 'Переход в наречие', 'Отсутствие запятой']
  },
  {
    id: 'q-s2-par-speech-source-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-parenthetical',
    chapterTitle: 'Вводные слова: источник сообщения',
    topicName: 'Parole incidentali che indicano la fonte dell\'informazione (по словам, по мнению, по слухам)',
    exerciseSource: 'Sezione 2, Esercizio 326, frase 1 (p. 245)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale locuzione incidentale indica la paternità o fonte autorevole della notizia?\n«(...), предстоящая зима будет аномально снежной и холодной».',
    sentenceWithBlank: '«(...), зима будет холодной».',
    options: [
      { label: 'A', text: 'По сообщениям синоптиков (locuzione incidentale che indica la fonte esterna dell\'informazione)' },
      { label: 'B', text: 'К счастью для синоптиков' },
      { label: 'C', text: 'На удивление синоптикам' },
      { label: 'D', text: 'Благодаря синоптикам' }
    ],
    correctOption: 'A',
    hint: 'Costrutti come «по словам кого», «по мнению кого», «по сообщениям кого» segnalano la fonte del messaggio e si isolano con virgole.',
    explanation:
      'Risposta esatta: A (По сообщениям синоптиков). Glazunova p. 245, §326: «Вводные сочетания, указывающие на источник сообщения (по словам кого, по мнению кого, по слухам, по сообщениям печати), всегда обособляются запятыми: По словам профессора, опыт удался; По мнению врачей, больной вне опасности».',
    bookRuleRef: 'Glazunova §326, p. 245',
    tags: ['Вводные слова', 'Источник сообщения', 'Обособление']
  }
];
