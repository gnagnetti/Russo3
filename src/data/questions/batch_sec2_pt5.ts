import { Question } from '../../types';

export const QUESTIONS_BATCH_SECTION_2_PT5: Question[] = [
  // --- Serie 5 di approfondimento su Glazunova Sezione 2: La Frase Semplice ---
  {
    id: 'q-s2-pred-long-short-diff-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-subj-pred',
    chapterTitle: 'Сказуемое: смысловые различия форм прилагательных',
    topicName: 'Forma lunga vs forma breve con valore metaforico / morale',
    exerciseSource: 'Sezione 2, Esercizio 214, frase 2 (p. 158)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Quale forma dell\'aggettivo predicativo esprime una valutazione morale/psicologica assoluta e permanente?\n«Этот человек (...) на любые благородные поступки».',
    sentenceWithBlank: '«Человек (...) на благородные поступки».',
    options: [
      { label: 'A', text: 'способен (forma breve predicativa: esprime predisposizione attiva o capacità interiore)' },
      { label: 'B', text: 'способный (forma lunga attributiva/predicativa generica)' },
      { label: 'C', text: 'способность' },
      { label: 'D', text: 'способно' }
    ],
    correctOption: 'A',
    hint: 'Aggettivi che reggono una specificazione (способен на что, готов к чему, рад кому) usano la forma breve.',
    explanation:
      'Risposta esatta: A (способен). Glazunova p. 158, §214: «При наличии зависимых дополнений или обстоятельств прилагательное в роли сказуемого употребляется преимущественно в краткой форме: способен на подвиг, готов к отъезду, достоин награды, богат полезными ископаемыми».',
    bookRuleRef: 'Glazunova §214, p. 158',
    tags: ['Сказуемое', 'Краткая форма', 'Способен на']
  },
  {
    id: 'q-s2-one-inf-doubt-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-one-member',
    chapterTitle: 'Инфинитивные предложения: сомнение и раздумье',
    topicName: 'Dubbio e dilemma interiore nella frase infinitiva interrogativa',
    exerciseSource: 'Sezione 2, Esercizio 258, frase 3 (p. 195)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale sfumatura esprime l\'infinito indipendente interrogativo con particella «ли»:\n«Идти ли мне туда? Сказать ли правду?»?',
    sentenceWithBlank: '«Сказать ли правду?»',
    options: [
      { label: 'A', text: 'Esitazione interiore, riflessione dubbiosa o ricerca di una decisione morale' },
      { label: 'B', text: 'Comando imperativo impartito ad altri' },
      { label: 'C', text: 'Certezze scientifiche oggettive' },
      { label: 'D', text: 'Divieto assoluto da codice della strada' }
    ],
    correctOption: 'A',
    hint: 'La struttura infinitiva indipendente interrogativa (Быть или не быть? Ехать ли?) esprime il travaglio decisionale e il dubbio intimo del soggetto.',
    explanation:
      'Risposta esatta: A. Glazunova p. 195, §258: «Инфинитивные вопросительные предложения выражают колебание, сомнение или нерешительность говорящего перед выбором действия: Сказать ли ему правду? Куда пойти? С кем посоветоваться?».',
    bookRuleRef: 'Glazunova §258, p. 195',
    tags: ['Инфинитивные предложения', 'Сомнение', 'Вопрос']
  },
  {
    id: 'q-s2-pred-kazat-instr-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-subj-pred',
    chapterTitle: 'Составное именное сказуемое: связка «казаться»',
    topicName: 'Accordo del complemento predicativo con «казаться кем/чем»',
    exerciseSource: 'Sezione 2, Esercizio 209, frase 3 (p. 153)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale caso assume il sostantivo predicativo retto da «казаться» al passato?\n«Издали этот силуэт казался (...) старинного парусного корабля».',
    sentenceWithBlank: '«Силуэт казался (...) корабля».',
    options: [
      { label: 'A', text: 'очертанием (Strumentale obbligatorio: казаться чем)' },
      { label: 'B', text: 'очертание (Nominativo)' },
      { label: 'C', text: 'очертания (Genitivo)' },
      { label: 'D', text: 'очертанию' }
    ],
    correctOption: 'A',
    hint: 'La copula «казаться / показаться» richiede tassativamente la parte nominale allo Strumentale (чем?).',
    explanation:
      'Risposta esatta: A (очертанием). Glazunova p. 153, §209: «Именная часть сказуемого при глаголе КАЗАТЬСЯ всегда стоит в ТВОРИТЕЛЬНОМ падеже: казаться великаном, казаться правдой, казаться странным сном».',
    bookRuleRef: 'Glazunova §209, p. 153',
    tags: ['Составное именное', 'Казаться', 'Творительный падеж']
  },
  {
    id: 'q-s2-homog-neither-nor-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-homogeneous',
    chapterTitle: 'Однородные члены: союз ни... ни',
    topicName: 'Congiunzione coordinata negativa ripetuta: ни... ни',
    exerciseSource: 'Sezione 2, Esercizio 235, frase 2 (p. 172)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale elemento negativo obbligatorio deve accompagnare il verbo predicato quando i membri omogenei sono legati da «ни..., ни...»?\n«В комнате (...) ни звука, ни шороха».',
    sentenceWithBlank: '«В комнате (...) ни звука, ни шороха».',
    options: [
      { label: 'A', text: 'не раздавалось (la particella negativa «не» deve essere presente davanti al verbo finito)' },
      { label: 'B', text: 'раздавалось (senza negazione: grammaticalmente errato)' },
      { label: 'C', text: 'ни раздавалось' },
      { label: 'D', text: 'нет раздавалось' }
    ],
    correctOption: 'A',
    hint: 'Nella frase russa con «ни..., ни...» il verbo deve SEMPRE contenere la particella negativa «не» (двойное отрицание).',
    explanation:
      'Risposta esatta: A (не раздавалось). Glazunova p. 172, §235: «При повторяющемся соединительном союзе НИ..., НИ... сказуемое обязательно имеет отрицательную частицу НЕ: В доме не слышно было ни голосов, ни смеха; Он не знал ни покоя, ни отдыха».',
    bookRuleRef: 'Glazunova §235, p. 172',
    tags: ['Однородные члены', 'Ни ни', 'Обязательное отрицание НЕ']
  },
  {
    id: 'q-s2-isol-despite-prep-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-isolated',
    chapterTitle: 'Обособленные обстоятельства: несмотря на',
    topicName: 'Isolamento della circostanza concessiva con «несмотря на»',
    exerciseSource: 'Sezione 2, Esercizio 305, frase 1 (p. 230)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Come si punteggia la circostanza concessiva introdotta dalla preposizione «несмотря на» nella frase semplice?\n«Мы решили отправиться в путь (...) проливной дождь и сильный ветер».',
    sentenceWithBlank: '«...в путь, (...) дождь, и дошли вовремя».',
    options: [
      { label: 'A', text: 'несмотря на (si isola obbligatoriamente tra virgole in qualsiasi posizione della frase)' },
      { label: 'B', text: 'не смотря на без запятых' },
      { label: 'C', text: 'несмотря к' },
      { label: 'D', text: 'невзирая к' }
    ],
    correctOption: 'A',
    hint: 'I complementi concessivi introdotti da «несмотря на + Accusativo» e «невзирая на + Accusativo» si isolano SEMPRE con le virgole.',
    explanation:
      'Risposta esatta: A (несмотря на). Glazunova p. 230, §305: «Обстоятельства уступки с производными предлогами НЕСМОТРЯ НА, НЕВЗИРАЯ НА всегда обособляются запятыми: Несмотря на усталость, мы продолжили путь; Мы, несмотря на плохую погоду, пошли на прогулку».',
    bookRuleRef: 'Glazunova §305, p. 230',
    tags: ['Обособленные обстоятельства', 'Несмотря на', 'Запятые']
  },
  {
    id: 'q-s2-par-emotion-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-parenthetical',
    chapterTitle: 'Вводные слова: чувства говорящего',
    topicName: 'Parole incidentali che esprimono sentimenti ed emozioni (к счастью, к сожалению, к удивлению)',
    exerciseSource: 'Sezione 2, Esercizio 324, frase 3 (p. 243)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale locuzione incidentale esprime il dispiacere o rammarico emotivo del parlante?\n«(...), мы так и не успели встретиться перед его отъездом за границу».',
    sentenceWithBlank: '«(...), мы не успели встретиться».',
    options: [
      { label: 'A', text: 'К великому сожалению, (locuzione incidentale di rammarico isolata da virgola)' },
      { label: 'B', text: 'К счастью,' },
      { label: 'C', text: 'Разумеется,' },
      { label: 'D', text: 'Следовательно,' }
    ],
    correctOption: 'A',
    hint: '«К сожалению / к великому сожалению» denota il rincrescimento e si isola sempre dalla frase con la virgola.',
    explanation:
      'Risposta esatta: A (К великому сожалению,). Glazunova p. 243, §324: «Вводные слова, выражающие чувства говорящего (радость, сожаление, удивление): к счастью, к сожалению, к досаде, к удивлению, к огорчению. Они обособляются запятыми: К сожалению, поезд уже ушёл».',
    bookRuleRef: 'Glazunova §324, p. 243',
    tags: ['Вводные слова', 'Чувства говорящего', 'К сожалению']
  },
  {
    id: 'q-s2-order-inversion-adverb-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-word-order',
    chapterTitle: 'Порядок слов: обстоятельство в начале предложения',
    topicName: 'Funzione comunicativa della circostanza di luogo/tempo in apertura',
    exerciseSource: 'Sezione 2, Esercizio 342, frase 2 (p. 257)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Nella frase espositiva «На углу улицы стоял старинный двухэтажный особняк», perché il complemento di luogo è collocato prima del verbo e del soggetto?\n«На углу улицы стоял особняк».',
    sentenceWithBlank: '«На углу улицы стоял особняк».',
    options: [
      { label: 'A', text: 'Perché il luogo funge da «tema» (cornice nota/orientamento scenico), mentre l\'esistenza dell\'edificio costituisce il «rema» (informazione nuova)' },
      { label: 'B', text: 'È un errore di sintassi poetica' },
      { label: 'C', text: 'Perché in russo i sostantivi non possono mai iniziare la frase' },
      { label: 'D', text: 'Perché la frase è interrogativa' }
    ],
    correctOption: 'A',
    hint: 'Nei testi descrittivi russi l\'orientamento scenico spaziale (localizzatore) apre la frase fungendo da base di partenza (tema).',
    explanation:
      'Risposta esatta: A. Glazunova p. 257, §342: «В описательных и бытийных предложениях обстоятельство места или времени занимает начальную позицию (тема), за ним следует глагол бытия/положения, а в конце — называемый предмет (рема): В саду росла яблоня; На столе лежала раскрытая книга».',
    bookRuleRef: 'Glazunova §342, p. 257',
    tags: ['Порядок слов', 'Бытийные предложения', 'Тема и рема']
  },
  {
    id: 'q-s2-homog-punctuation-single-i-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-homogeneous',
    chapterTitle: 'Однородные члены: одиночный союз И',
    topicName: 'Assenza di virgola con congiunzione «и» singola tra due membri omogenei',
    exerciseSource: 'Sezione 2, Esercizio 228, frase 1 (p. 168)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Qual è la regola ferrea sulla virgola tra due soli membri omogenei legati da un unico connettore «и»?\n«Студент уверенно и грамотно ответил на все вопросы профессора».',
    sentenceWithBlank: '«...уверенно и грамотно ответил».',
    options: [
      { label: 'A', text: 'La virgola NON si mette MAI davanti al singolo «и» che unisce due membri omogenei' },
      { label: 'B', text: 'La virgola è facoltativa a discrezione dell\'autore' },
      { label: 'C', text: 'La virgola è sempre obbligatoria' },
      { label: 'D', text: 'Si mette solo se gli avverbi terminano in -о' }
    ],
    correctOption: 'A',
    hint: 'Tra due membri omogenei legati da una sola «и» non si interpone mai la virgola.',
    explanation:
      'Risposta esatta: A. Glazunova p. 168, §228: «Между двумя однородными членами, соединёнными одиночным союзом И, ДА (= И), ИЛИ, ЛИБО, запятая НЕ СТАВИТСЯ: быстро и весело, отец и сын, читать или писать».',
    bookRuleRef: 'Glazunova §228, p. 168',
    tags: ['Однородные члены', 'Одиночный союз И', 'Правило пунктуации']
  },
  {
    id: 'q-s2-pred-prozvan-instr-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-subj-pred',
    chapterTitle: 'Составное именное сказуемое: глаголы называния',
    topicName: 'Soprannomi e denominazioni: звать, прозвать кого кем',
    exerciseSource: 'Sezione 2, Esercizio 210, frase 4 (p. 154)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale caso regge il predicativo che esprime il nomignolo o appellativo dato a una persona con «прозвать»?\n«За необыкновенную силу товарищи прозвали его (...)».',
    sentenceWithBlank: '«Прозвали его (...)».',
    options: [
      { label: 'A', text: 'Богатырём (Strumentale dell\'appellativo: прозвать кого кем)' },
      { label: 'B', text: 'Богатырь (Nominativo)' },
      { label: 'C', text: 'Богатыря (Accusativo)' },
      { label: 'D', text: 'о Богатыре' }
    ],
    correctOption: 'A',
    hint: 'I verbi di appellativo (звать, величать, прозвать кого кем) reggono l\'appellativo allo Strumentale.',
    explanation:
      'Risposta esatta: A (Богатырём). Glazunova p. 154, §210: «При глаголах называния и наречения (звать, величать, прозвать) имя или прозвище обычно ставится в творительном падеже: прозвать его силачом, величать по батюшке».',
    bookRuleRef: 'Glazunova §210, p. 154',
    tags: ['Глаголы называния', 'Прозвать кем', 'Творительный падеж']
  },
  {
    id: 'q-s2-subj-mnogie-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-subj-pred',
    chapterTitle: 'Подлежащее и сказуемое: субстантивированные местоимения',
    topicName: 'Accordo del verbo con «многие из нас / многие студенты»',
    exerciseSource: 'Sezione 2, Esercizio 197, frase 2 (p. 144)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale forma assume il predicato quando il soggetto è espresso dal pronome sostantivato «многие»?\n«Многие из присутствующих в зале (...) с этим предложением».',
    sentenceWithBlank: '«Многие (...) с этим предложением».',
    options: [
      { label: 'A', text: 'согласились (plurale: il pronome «многие» richiede categoricamente l\'accordo al plurale)' },
      { label: 'B', text: 'согласилось (neutro singolare)' },
      { label: 'C', text: 'согласился' },
      { label: 'D', text: 'согласившееся' }
    ],
    correctOption: 'A',
    hint: 'A differenza dell\'avverbio indeclinabile «много», il pronome declinabile «многие» regge il predicato rigorosamente al PLURALE.',
    explanation:
      'Risposta esatta: A (согласились). Glazunova p. 144, §197: «При подлежащем, выраженном местоимением МНОГИЕ, сказуемое ВСЕГДА ставится во множественном числе: Многие уехали; Многие из нас помнят об этом. Сравните с много людей (нейтрально средний род: уехало много людей)».',
    bookRuleRef: 'Glazunova §197, p. 144',
    tags: ['Подлежащее', 'Многие', 'Множественное число']
  }
];
