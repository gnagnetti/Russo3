import { Question } from '../../types';

export const QUESTIONS_BATCH_SECTION_1_PT5: Question[] = [
  // --- Согласование сказуемого с однородными подлежащими (Glazunova pp. 15-20, Es. 8-10) ---
  {
    id: 'q-s1-coord-homog-subj-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-coord',
    chapterTitle: 'Согласование: однородные подлежащие',
    topicName: 'Accordo del predicato posposto a più soggetti singolari',
    exerciseSource: 'Sezione 1, Esercizio 8, frase 2 (p. 16)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quando il predicato si trova DOPO due o più soggetti singolari uniti dalla congiunzione «и», quale numero assume di regola?\n«Брат и сестра (...) домой поздно вечером».',
    sentenceWithBlank: '«Брат и сестра (...) поздно вечером».',
    options: [
      { label: 'A', text: 'вернулись (plurale: regola standard per predicato posposto a più soggetti singolari)' },
      { label: 'B', text: 'вернулся (singolare maschile concordato solo col primo soggetto)' },
      { label: 'C', text: 'вернулась (singolare femminile concordato col secondo soggetto)' },
      { label: 'D', text: 'вернулось' }
    ],
    correctOption: 'A',
    hint: 'Se il predicato si trova DOPO i soggetti omogenei, la forma al PLURALE è la norma generale obbligatoria.',
    explanation:
      'Risposta esatta: A (вернулись). Glazunova p. 16, §8: «При прямом порядке слов (подлежащие предшествуют сказуемому) сказуемое при однородных подлежащих, соединённых союзом И, обычно ставится во МНОЖЕСТВЕННОМ числе: Брат и сестра вернулись; Отец и мать отдыхали».',
    bookRuleRef: 'Glazunova §8, p. 16',
    tags: ['Согласование', 'Однородные подлежащие', 'Множественное число']
  },
  {
    id: 'q-s1-coord-preposed-subj-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-coord',
    chapterTitle: 'Согласование: препозитивное сказуемое',
    topicName: 'Accordo del predicato ANTEPOSTO a più soggetti',
    exerciseSource: 'Sezione 1, Esercizio 9, frase 4 (p. 18)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quando il predicato PRECEDE una serie di soggetti singolari, quale accordo è frequente e consentito nello stile neutro/letterario?\n«Из окна (...) весёлый смех и громкие разговоры».',
    sentenceWithBlank: '«Из окна (...) весёлый смех и громкие разговоры».',
    options: [
      { label: 'A', text: 'доносился (singolare concordato con il primo soggetto più vicino: смех)' },
      { label: 'B', text: 'доносились (plurale standard altrettanto possibile ma qui concordato al primo)' },
      { label: 'C', text: 'доносилось' },
      { label: 'D', text: 'доносившиеся' }
    ],
    correctOption: 'A',
    hint: 'Quando il predicato è posto PRIMA dei soggetti, l\'accordo al singolare con il primo elemento più vicino (согласование с ближайшим подлежащим) è norma comune.',
    explanation:
      'Risposta esatta: A (доносился). Glazunova p. 18, §9: «Если сказуемое предшествует однородным подлежащим, оно может согласоваться с ближайшим из них в роде и числе: Из окна доносился весёлый смех (м. р., ед. ч.) и громкие разговоры; В комнате стоял шум и гам».',
    bookRuleRef: 'Glazunova §9, p. 18',
    tags: ['Согласование', 'Препозитивное сказуемое', 'Ближайшее подлежащее']
  },

  // --- Reggenze verbali di reazione emotiva, rimpianto e ricerca (Glazunova pp. 29-35) ---
  {
    id: 'q-s1-gov-regret-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-noprep',
    chapterTitle: 'Беспредложное управление: жалеть / пожалеть',
    topicName: 'Doppia possibilità di reggenza di «жалеть»',
    exerciseSource: 'Sezione 1, Esercizio 15, frase 2 (p. 33)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale reggenza assume il verbo «жалеть» nel senso di provare compassione/pena per qualcuno vs rimpiangere una risorsa?\n«Он никогда не жалел (...) для близких друзей».',
    sentenceWithBlank: '«Он никогда не жалел (...) для друзей».',
    options: [
      { label: 'A', text: 'времени и сил (Genitivo: non risparmiare / non lesinare qualcosa)' },
      { label: 'B', text: 'время и силы (Accusativo)' },
      { label: 'C', text: 'временем и силами (Strumentale)' },
      { label: 'D', text: 'о времени и силах' }
    ],
    correctOption: 'A',
    hint: 'Nel senso di non lesinare o non risparmiare risorse materiali o forze, «жалеть» regge il Genitivo (не жалеть денег, сил, времени).',
    explanation:
      'Risposta esatta: A (времени и сил). Glazunova p. 33, §15: «Жалеть кого/что (вин. пад.) — сочувствовать: жалеть сироту, больного. Жалеть чего (род. пад.) — не скупиться, не экономить: не жалеть денег, сил, времени. Жалеть о ком/чём (предл. пад.) — сокрушаться о прошлом: жалеть об ушедшей юности, об ошибке».',
    bookRuleRef: 'Glazunova §15, p. 33',
    tags: ['Управление', 'Жалеть', 'Родительный падеж']
  },
  {
    id: 'q-s1-gov-seek-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-noprep',
    chapterTitle: 'Беспредложное управление: искать',
    topicName: 'Reggenza di «искать»: Accusativo (concreto) vs Genitivo (astratto)',
    exerciseSource: 'Sezione 1, Esercizio 16, frase 4 (p. 34)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale caso regge preferibilmente il verbo «искать» quando l\'oggetto cercato è una nozione astratta o ideale (conforto, pace, verità)?\n«Устав от городской суеты, он искал (...) в уединении».',
    sentenceWithBlank: '«Он искал (...) в уединении».',
    options: [
      { label: 'A', text: 'душевного покоя (Genitivo: tipico di oggetti astratti, ideali o indeterminati)' },
      { label: 'B', text: 'душевный покой (Accusativo)' },
      { label: 'C', text: 'душевным покоем (Strumentale)' },
      { label: 'D', text: 'к душевному покою' }
    ],
    correctOption: 'A',
    hint: 'Con i concetti astratti (искать спасения, сочувствия, покоя, правды, справедливости), Glazunova indica la preferenza per il Genitivo.',
    explanation:
      'Risposta esatta: A (душевного покоя). Glazunova p. 34, §16: «Глагол ИСКАТЬ управляет винительным падежом при конкретном объекте (искать ключи, книгу, дорогу) и родительным падежом при отвлечённом, абстрактном понятии: искать покоя, сочувствия, спасения, правды, выхода из ситуации».',
    bookRuleRef: 'Glazunova §16, p. 34',
    tags: ['Управление', 'Искать', 'Абстрактное понятие']
  },
  {
    id: 'q-s1-gov-wait-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-noprep',
    chapterTitle: 'Беспредложное управление: ждать / дожидаться',
    topicName: 'Accusativo vs Genitivo con il verbo «ждать»',
    exerciseSource: 'Sezione 1, Esercizio 17, frase 3 (p. 36)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale caso si usa con «ждать» quando si aspetta una persona determinata o un oggetto concreto specifico?\n«Она уже полчаса ждала (...) на автобусной остановке».',
    sentenceWithBlank: '«Она ждала (...) на остановке».',
    options: [
      { label: 'A', text: 'свою подругу (Accusativo: persona concreta o oggetto determinato e individualizzato)' },
      { label: 'B', text: 'своей подруги (Genitivo)' },
      { label: 'C', text: 'своей подруге' },
      { label: 'D', text: 'со своей подругой' }
    ],
    correctOption: 'A',
    hint: 'Quando l\'attesa riguarda un essere animato specifico e definito (подругу, маму, поезд №5), si usa l\'Accusativo.',
    explanation:
      'Risposta esatta: A (свою подругу). Glazunova p. 36, §17: «Глагол ЖДАТЬ управляет винительным падежом при конкретном, индивидуализированном объекте или одушевлённом лице: ждать подругу, брата, скорый поезд. При абстрактных понятиях или неопределённых предметах используется родительный: ждать ответа, решения, удобного случая, поезда (вообще)».',
    bookRuleRef: 'Glazunova §17, p. 36',
    tags: ['Управление', 'Ждать', 'Винительный vs Родительный']
  },

  // --- Preposizioni con reggenza complessa e sinonimia (Glazunova pp. 98-115) ---
  {
    id: 'q-s1-prep-po-distrib-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-prep',
    chapterTitle: 'Предлог «по» с распределительным значением',
    topicName: 'Valore distributivo di «по» con i numerali',
    exerciseSource: 'Sezione 1, Esercizio 82, frase 3 (p. 110)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Quale caso regge il numerale «два, три, четыре» dopo la preposizione distributiva «по» (ciascuno / a testa)?\n«Учитель раздал ученикам (...) тетради».',
    sentenceWithBlank: '«Раздал ученикам по (...) тетради».',
    options: [
      { label: 'A', text: 'две (Accusativo per i numerali 2, 3, 4: по две, по три, по четыре тетради)' },
      { label: 'B', text: 'двум (Dativo)' },
      { label: 'C', text: 'двух (Genitivo)' },
      { label: 'D', text: 'двумя (Strumentale)' }
    ],
    correctOption: 'A',
    hint: 'Nella norma moderna del russo, con «по» distributivo i numerali два, три, четыре, двести, триста mantengono l\'Accusativo.',
    explanation:
      'Risposta esatta: A (две). Glazunova p. 110, §82: «В распределительном значении предлог ПО с числительными два, три, четыре, двести, триста требует формы винительного падежа: дать по два яблока, по три рубля, по две тетради. Числительное один ставится в дательном (по одному), а от пяти и выше — в дательном или винительном (по пяти / по пять)».',
    bookRuleRef: 'Glazunova §82, p. 110',
    tags: ['Предлог по', 'Дистрибутивное значение', 'Числительные']
  },
  {
    id: 'q-s1-prep-v-role-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-prep',
    chapterTitle: 'Предлог «в качестве» vs «в виде»',
    topicName: 'Differenza d\'uso tra «в качестве кого» e «в виде чего»',
    exerciseSource: 'Sezione 1, Esercizio 112, frase 2 (p. 118)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale locuzione preposizionale introduce il ruolo o qualifica ufficiale assunta da una persona?\n«Его пригласили на международную конференцию (...) эксперта».',
    sentenceWithBlank: '«Его пригласили (...) эксперта».',
    options: [
      { label: 'A', text: 'в качестве (+ Genitivo: per persone e ruoli/cariche: в качестве кого)' },
      { label: 'B', text: 'в виде (usato per forme esteriori di oggetti o manifestazioni fisiche)' },
      { label: 'C', text: 'в роде' },
      { label: 'D', text: 'по качеству' }
    ],
    correctOption: 'A',
    hint: 'Per indicare «nella veste di / in qualità di» riferito a una persona o carica, si usa rigorosamente «в качестве + Genitivo».',
    explanation:
      'Risposta esatta: A (в качестве). Glazunova p. 118, §112: «Оборот В КАЧЕСТВЕ кого/чего указывает на официальный статус, роль или функцию лица: выступать в качестве свидетеля, работать в качестве переводчика. В ВИДЕ чего указывает на внешнюю форму или подобие предмета: памятник в виде орла; помощь в виде субсидии».',
    bookRuleRef: 'Glazunova §112, p. 118',
    tags: ['В качестве', 'В виде', 'Различие оборотов']
  },
  {
    id: 'q-s1-prep-time-spustya-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-prep',
    chapterTitle: 'Предлоги времени: спустя + винительный падеж',
    topicName: 'Posizione postposta o preposta di «спустя»',
    exerciseSource: 'Sezione 1, Esercizio 68, frase 4 (p. 98)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale caso regge la preposizione temporale «спустя» (dopo un intervallo di tempo)?\n«(...) несколько лет они случайно встретились на набережной Невы».',
    sentenceWithBlank: '«(...) несколько лет они встретились».',
    options: [
      { label: 'A', text: 'Спустя (+ Accusativo: спустя год, спустя несколько лет, три года спустя)' },
      { label: 'B', text: 'Спустя (+ Genitivo)' },
      { label: 'C', text: 'Спустившись' },
      { label: 'D', text: 'Вслед' }
    ],
    correctOption: 'A',
    hint: '«Спустя» (di origine participiale, ora preposizione) regge sempre l\'Accusativo e può precedere o seguire il sintagma (год спустя / спустя год).',
    explanation:
      'Risposta esatta: A (Спустя). Glazunova p. 98, §68: «Предлог СПУСТЯ употребляется с ВИНИТЕЛЬНЫМ падежом и указывает на промежуток времени, после которого совершается действие (синоним через): спустя месяц, спустя несколько лет, два дня спустя».',
    bookRuleRef: 'Glazunova §68, p. 98',
    tags: ['Предлоги времени', 'Спустя', 'Винительный падеж']
  },
  {
    id: 'q-s1-prep-pod-vidom-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-prep',
    chapterTitle: 'Предлоги способа: под видом vs под предлогом',
    topicName: 'Dissimulazione con «под видом» (apparenza) vs «под предлогом» (scusa)',
    exerciseSource: 'Sezione 1, Esercizio 122, frase 3 (p. 122)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Quale locuzione indica che qualcuno si spacciava sotto false sembianze estetiche o falsa identità?\n«Злоумышленник проник в здание (...) сотрудника коммунальной службы».',
    sentenceWithBlank: '«Проник в здание (...) сотрудника службы».',
    options: [
      { label: 'A', text: 'под видом (+ Genitivo: sotto le sembianze fittizie di una persona/cosa)' },
      { label: 'B', text: 'под предлогом (sotto il pretesto / con la scusa di un motivo addotto)' },
      { label: 'C', text: 'с видом' },
      { label: 'D', text: 'на виду' }
    ],
    correctOption: 'A',
    hint: '«Под видом кого» significa travestito da / con le sembianze esteriori di; «под предлогом чего» significa usando come scusa verbale un pretesto.',
    explanation:
      'Risposta esatta: A (под видом). Glazunova p. 122, §122: «ПОД ВИДОМ кого/чего указывает на внешнюю маскировку, обманчивый облик лица или предмета: под видом туриста, под видом лекарства. ПОД ПРЕДЛОГОМ чего указывает на мнимую мотивировку или отговорку: уйти под предлогом болезни, отказаться под предлогом занятости».',
    bookRuleRef: 'Glazunova §122, p. 122',
    tags: ['Под видом', 'Под предлогом', 'Различие понятий']
  },
  {
    id: 'q-s1-prep-po-mere-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-prep',
    chapterTitle: 'Предлоги времени и меры: по мере + родительный падеж',
    topicName: 'Progressione graduale sincrona con «по мере»',
    exerciseSource: 'Sezione 1, Esercizio 70, frase 2 (p. 99)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale locuzione preposizionale esprime l\'evoluzione progressiva di un processo man mano che procede un altro fattore?\n«(...) приближения к морю воздух становился всё более влажным и прохладным».',
    sentenceWithBlank: '«(...) приближения к морю воздух становился влажным».',
    options: [
      { label: 'A', text: 'По мере (+ Genitivo: man mano che, a misura che)' },
      { label: 'B', text: 'В меру' },
      { label: 'C', text: 'С мерой' },
      { label: 'D', text: 'До меры' }
    ],
    correctOption: 'A',
    hint: '«По мере + Genitivo» denota la gradualità sincronizzata (по мере продвижения, по мере сил, по мере развития).',
    explanation:
      'Risposta esatta: A (По мере). Glazunova p. 99, §70: «Предлог ПО МЕРЕ + род. пад. указывает на постепенное развитие действия, происходящее пропорционально другому процессу: по мере приближения, по мере чтения книги, по мере поступления информации».',
    bookRuleRef: 'Glazunova §70, p. 99',
    tags: ['По мере', 'Постепенность', 'Родительный падеж']
  }
];
