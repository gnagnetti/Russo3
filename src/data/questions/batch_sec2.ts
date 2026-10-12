import { Question } from '../../types';

export const QUESTIONS_BATCH_SECTION_2: Question[] = [
  // --- Soggetto e Predicato: forme particolari (pp. 127-142) ---
  {
    id: 'q-s2-subj-num-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-subj-pred',
    chapterTitle: 'Подлежащее и сказуемое: количественные обороты',
    topicName: 'Accordo del predicato con parole approssimative: около, более, свыше',
    exerciseSource: 'Sezione 2, Esercizio 192, frase 3 (p. 138, chiave p. 384)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale forma del predicato è preferibile quando il soggetto è introdotto da preposizioni o avverbi di approssimazione quantitativa (около, более, менее)?\n«На митинг (...) около пятисот человек».',
    sentenceWithBlank: '«На митинг (...) около пятисот человек».',
    options: [
      { label: 'A', text: 'пришло (singolare neutro: forma impersonale standard per sintagmi quantitativi approssimati)' },
      { label: 'B', text: 'пришли (plurale)' },
      { label: 'C', text: 'пришедшие' },
      { label: 'D', text: 'приходить' }
    ],
    correctOption: 'A',
    hint: 'Con locuzioni approssimative (около, свыше, более, менее + numero) il predicato assume di norma la forma neutra singolare.',
    explanation:
      'Risposta esatta: A (пришло). Glazunova p. 138, §192: «При подлежащем, выраженном сочетанием с предлогами или словами со значением приблизительности (около, свыше, более, менее), сказуемое обычно ставится в форме единственного числа среднего рода: На собрание пришло около двадцати человек; Прошло более двух лет».',
    bookRuleRef: 'Glazunova §192, p. 138',
    tags: ['Количественные обороты', 'Около', 'Единственное число']
  },
  {
    id: 'q-s2-subj-tysyacha-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-subj-pred',
    chapterTitle: 'Подлежащее и сказуемое: тысяча, миллион',
    topicName: 'Accordo con sostantivi numerali: тысяча, миллион',
    exerciseSource: 'Sezione 2, Esercizio 194, frase 2 (p. 140)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale accordo del predicato è grammaticalmente corretto con la parola «тысяча» considerata come sostantivo singolare femminile?\n«В городе (...) тысяча новых деревьев».',
    sentenceWithBlank: '«В городе (...) тысяча новых деревьев».',
    options: [
      { label: 'A', text: 'была посажена (singolare femminile, concordato grammaticalmente con тысяча)' },
      { label: 'B', text: 'были посажены (accordo a senso al plurale)' },
      { label: 'C', text: 'было посажено' },
      { label: 'D', text: 'посадивши' }
    ],
    correctOption: 'A',
    hint: 'Parole come «тысяча», «миллион», «миллиард» sono sostantivi a pieno titolo e di norma impongono il proprio genere e numero al verbo passivo/predicato.',
    explanation:
      'Risposta esatta: A (была посажена). Glazunova p. 140: «При словах тысяча, миллион, миллиард сказуемое обычно согласуется по правилам грамматического согласования (в женском или мужском роде единственного числа): Была мобилизована тысяча бойцов; Выделен миллион рублей».',
    bookRuleRef: 'Glazunova §194, p. 140',
    tags: ['Подлежащее', 'Тысяча', 'Грамматическое согласование']
  },
  {
    id: 'q-s2-subj-collective-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-subj-pred',
    chapterTitle: 'Подлежащее и сказуемое: собирательные существительные',
    topicName: 'Accordo con sostantivi collettivi: большинство, меньшинство, ряд',
    exerciseSource: 'Sezione 2, Esercizio 195, frase 4 (p. 142)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Se tra il soggetto collettivo «большинство студентов» e il predicato si trova un attributo al plurale o il predicato è un verbo di azione attiva complessa, quale accordo è frequente e ammesso?\n«Большинство участников конференции (...) за резолюцию единогласно».',
    sentenceWithBlank: '«Большинство участников (...) за резолюцию».',
    options: [
      { label: 'A', text: 'проголосовали (accordo a senso al plurale, frequente con esseri animati che compiono un\'azione attiva deliberata)' },
      { label: 'B', text: 'проголосовал' },
      { label: 'C', text: 'проголосовало (forma neutra singolare grammaticale altrettanto possibile)' },
      { label: 'D', text: 'проголосовав' }
    ],
    correctOption: 'A',
    hint: 'Con soggetti animati che compiono azioni attive e consapevoli, l\'accordo al plurale (согласование по смыслу) è ampiamente utilizzato nello stile contemporaneo.',
    explanation:
      'Risposta esatta: A (проголосовали). Glazunova p. 142: «При существительных большинство, меньшинство, часть, ряд с зависимым родительным падежом множественного числа одушевлённых лиц сказуемое чаще ставится в форме множественного числа при подчеркивании раздельности действий участников: Большинство студентов успешно сдали экзамен / проголосовали».',
    bookRuleRef: 'Glazunova §195, p. 142',
    tags: ['Согласование по смыслу', 'Большинство', 'Множественное число']
  },

  // --- Frasi a un solo membro principale: Indefinito-personali e Generalizzanti (pp. 175-195) ---
  {
    id: 'q-s2-one-indef-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-one-member',
    chapterTitle: 'Односоставные: неопределённо-личные предложения',
    topicName: 'Forma del predicato nelle frasi indefinito-personali',
    exerciseSource: 'Sezione 2, Esercizio 240, frase 2 (p. 176)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale forma assume il verbo nelle frasi indefinito-personali (in cui chi agisce non è specificato volutamente o non è importante)?\n«В дверь громко (...)».',
    sentenceWithBlank: '«В дверь громко (...)».',
    options: [
      { label: 'A', text: 'постучали (3ª persona plurale al passato / plurale senza pronome «они»)' },
      { label: 'B', text: 'постучало' },
      { label: 'C', text: 'постучал' },
      { label: 'D', text: 'постучались' }
    ],
    correctOption: 'A',
    hint: 'Nelle frasi indefinito-personali il predicato è alla 3ª plurale (presente/futuro) o al plurale (passato), SENZA il pronome «они».',
    explanation:
      'Risposta esatta: A (постучали). Glazunova p. 176: «В неопределённо-личных предложениях сказуемое выражается глаголом в форме 3-го лица множественного числа настоящего/будущего времени или в форме множественного числа прошедшего времени (без местоимения они): В дверь постучали; На улице строят новый мост».',
    bookRuleRef: 'Glazunova §240, p. 176',
    tags: ['Односоставные', 'Неопределённо-личные', 'Постучали']
  },
  {
    id: 'q-s2-one-gen-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-one-member',
    chapterTitle: 'Односоставные: обобщённо-личные предложения',
    topicName: 'Proverbi e verità universali con la 2ª persona singolare',
    exerciseSource: 'Sezione 2, Esercizio 245, frase 1 (p. 180)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Qual è il valore sintattico della 2ª persona singolare nel celebre proverbio:\n«Цыплят по осени считают; Без труда не вынешь и рыбку из пруда»?',
    sentenceWithBlank: '«Без труда не вынешь и рыбку из пруда».',
    options: [
      { label: 'A', text: 'Обобщённо-личное (riferito a chiunque, all\'essere umano in generale, tipico della saggezza popolare)' },
      { label: 'B', text: 'Определённо-личное (riferito unicamente all\'interlocutore «ты»)' },
      { label: 'C', text: 'Безличное' },
      { label: 'D', text: 'Инфинитивное' }
    ],
    correctOption: 'A',
    hint: 'Quando il verbo alla 2ª persona singolare esprime una massima o una norma valida per tutti, la frase è sintatticamente «обобщённо-личное».',
    explanation:
      'Risposta esatta: A (Обобщённо-личное). Glazunova p. 180: «Обобщённо-личные предложения обозначают действие, которое в равной степени относится ко всякому, любому лицу. Форма глагола — чаще всего 2-е лицо единственного числа: Поспешишь — людей насмешишь; Слезами горю не поможешь».',
    bookRuleRef: 'Glazunova §245, p. 180',
    tags: ['Односоставные', 'Обобщённо-личные', 'Пословицы']
  },
  {
    id: 'q-s2-inf-pred-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-one-member',
    chapterTitle: 'Инфинитивные предложения',
    topicName: 'Frase infinitiva con sfumatura di inevitabilità: быть / не быть',
    exerciseSource: 'Sezione 2, Esercizio 255, frase 4 (p. 192)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale valore modale esprime la frase infinitiva indipendente con particella «быть»:\n«Быть грозе!» / «Этому не бывать!»?',
    sentenceWithBlank: '«Быть грозе!»',
    options: [
      { label: 'A', text: 'Inevitabilità o fatalità dell\'evento futuro' },
      { label: 'B', text: 'Puro desiderio soggettivo' },
      { label: 'C', text: 'Divieto assoluto' },
      { label: 'D', text: 'Incertezza ipotetica' }
    ],
    correctOption: 'A',
    hint: 'La struttura infinitiva indipendente «Быть + Dativo» esprime la certezza ineluttabile di un evento imminente voluto dal destino o dalla natura.',
    explanation:
      'Risposta esatta: A (Inevitabilità o fatalità). Glazunova p. 192: «Инфинитивные предложения со связкой быть выражают неизбежность, предначертанность или фатальную необходимость действия: Быть грозе! Быть беде! Быть празднику! С отрицанием: Этому не бывать (категорическая невозможность)».',
    bookRuleRef: 'Glazunova §255, p. 192',
    tags: ['Инфинитивные предложения', 'Быть грозе', 'Неизбежность']
  },

  // --- Membri isolati: Participi e Gerundi (pp. 196-235) ---
  {
    id: 'q-s2-gerund-err-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-isolated',
    chapterTitle: 'Обособленные обстоятельства: деепричастный оборот',
    topicName: 'Errore sintattico classico: discordanza di soggetto tra gerundio e reggente',
    exerciseSource: 'Sezione 2, Esercizio 290, frase 1 (p. 218)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Individua la frase che contiene un grave ERRORE sintattico nell\'uso del gerundio (деепричастие):\nQuale delle seguenti frasi è SBAGLIATA in russo?',
    sentenceWithBlank: 'Individua la frase errata tra le quattro opzioni.',
    options: [
      { label: 'A', text: '«Подъезжая к станции, у меня слетела шляпа» (ERRATA: il soggetto grammaticale è «шляпа», che non compie l\'azione di «подъезжать»)' },
      { label: 'B', text: '«Подъезжая к станции, я потерял шляпу» (Corretta: il soggetto «я» compie entrambe le azioni)' },
      { label: 'C', text: '«Возвращаясь домой, мы попали под сильный дождь» (Corretta)' },
      { label: 'D', text: '«Прочитав статью, он сделал подробные выписки» (Corretta)' }
    ],
    correctOption: 'A',
    hint: 'L\'azione espressa dal gerundio deve essere compiuta rigorosamente dallo stesso soggetto grammaticale che compie l\'azione del predicato principale.',
    explanation:
      'Risposta esatta: A (è la frase errata). Glazunova p. 218 cita il celeberrimo esempio di Čechov: «Подъезжая к сией станцыи и глядя на природу в окно, у меня слетела шляпа» come tipico errore sintattico. L\'agente del gerundio deve coincidere con il soggetto grammaticale della proposizione.',
    bookRuleRef: 'Glazunova §290, p. 218',
    tags: ['Деепричастный оборот', 'Синтаксическая ошибка', 'Совпадение субъекта']
  },
  {
    id: 'q-s2-part-post-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-isolated',
    chapterTitle: 'Обособленные определения: причастный оборот',
    topicName: 'Punteggiatura del costrutto participiale postposto vs preposto',
    exerciseSource: 'Sezione 2, Esercizio 270, frase 2 (p. 202)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quando un sintagma participiale con parole dipendenti si trova DOPO il sostantivo determinato, come viene segnalato dall\'interpunzione?\n«Мы вышли на поляну, (...) густым туманом».',
    sentenceWithBlank: '«Мы вышли на поляну, (...) туманом».',
    options: [
      { label: 'A', text: 'окутанную (si isola obbligatoriamente con virgola perché postposto al sostantivo поляну)' },
      { label: 'B', text: 'окутанная' },
      { label: 'C', text: 'окутанной' },
      { label: 'D', text: 'окутавшую' }
    ],
    correctOption: 'A',
    hint: 'Il costrutto participiale postposto a un sostantivo si isola sempre con le virgole ed è concordato nel caso con il nome a cui si riferisce (на поляну — окутанную).',
    explanation:
      'Risposta esatta: A (окутанную). Glazunova p. 202: «Причастный оборот, стоящий ПОСЛЕ определяемого существительного, обособляется (выделяется запятыми) и согласуется с ним в роде, числе и падеже: Мы вышли на поляну (какую?), окутанную густым туманом. Перед существительным запятая не ставится: Мы вышли на окутанную густым туманом поляну».',
    bookRuleRef: 'Glazunova §270, p. 202',
    tags: ['Причастный оборот', 'Обособление', 'Запятая']
  },
  {
    id: 'q-s2-isol-pron-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-isolated',
    chapterTitle: 'Обособленные определения: личные местоимения',
    topicName: 'Isolamento dell\'attributo riferito a pronome personale',
    exerciseSource: 'Sezione 2, Esercizio 275, frase 3 (p. 206)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Se l\'attributo o participio si riferisce a un pronome personale (я, ты, он, она, мы, вы, они), viene isolato con la virgola anche se PREPOSTO?\n«(...) долгой дорогой, он сразу уснул».',
    sentenceWithBlank: '«(...) дорогой, он сразу уснул».',
    options: [
      { label: 'A', text: 'Утомлённый (Sì: qualsiasi attributo riferito a un pronome personale si isola SEMPRE con virgola, sia prima che dopo)' },
      { label: 'B', text: 'Утомлённого' },
      { label: 'C', text: 'Утомившись' },
      { label: 'D', text: 'Утомив' }
    ],
    correctOption: 'A',
    hint: 'Regola ferrea della sintassi russa: le determinazioni riferite a pronomi personali si isolano con la virgola indipendentemente dalla loro posizione nella frase.',
    explanation:
      'Risposta esatta: A (Утомлённый). Glazunova p. 206: «Определение, относящееся к личному местоимению, ВСЕГДА обособляется запятыми, независимо от его положения по отношению к местоимению (до или после): Утомлённый долгой дорогой, он сразу уснул; Он, утомлённый дорогой, сразу уснул».',
    bookRuleRef: 'Glazunova §275, p. 206',
    tags: ['Обособление', 'Личное местоимение', 'Утомлённый']
  },
  {
    id: 'q-s2-order-rheme-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-word-order',
    chapterTitle: 'Порядок слов: тема и рема',
    topicName: 'Articolazione in tema e rema nell\'ordine neutro',
    exerciseSource: 'Sezione 2, Esercizio 340, frase 1 (p. 256)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Nella sintassi russa standard neutra (неэмфатический порядок слов), dove si colloca la parte che veicola l\'informazione nuova (Rema / Рема)?\n«Где находится рема в стилистически нейтральном предложении?»',
    sentenceWithBlank: '«В стилистически нейтральном повествовательном предложении рема находится...»',
    options: [
      { label: 'A', text: 'Alla fine della frase (Tema -> Rema: dal noto al nuovo)' },
      { label: 'B', text: 'All\'inizio della frase' },
      { label: 'C', text: 'Al centro tra soggetto e predicato' },
      { label: 'D', text: 'La posizione è assolutamente indifferente' }
    ],
    correctOption: 'A',
    hint: 'Nell\'enunciazione neutra l\'informazione di partenza (tema) apre la frase, mentre l\'apporto informativo nuovo e rilevante (rema) chiude l\'enunciato.',
    explanation:
      'Risposta esatta: A (Alla fine della frase). Glazunova p. 256: «При прямом (нейтральном) порядке слов тема (данное, исходный пункт) предшествует реме (новому, коммуникативному центру высказывания): В комнату вошёл (тема) незнакомый человек (рема). Сравните с инверсией при эмфазе: Незнакомый человек вошёл в комнату».',
    bookRuleRef: 'Glazunova §340, p. 256',
    tags: ['Порядок слов', 'Тема и рема', 'Актуальное членение']
  }
];
