import { Question } from '../../types';

export const QUESTIONS_BATCH_SECTION_3_PT5: Question[] = [
  // --- Serie 5 di approfondimento su Glazunova Sezione 3: La Frase Complessa ---
  {
    id: 'q-s3-sub-manner-tak-kak-budto-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Словосочетание)',
    chapterId: 'sec3-sub-comparative',
    chapterTitle: 'Придаточные образа действия: так... как будто',
    topicName: 'Modo comparativo ipotetico: так, как будто / так, словно',
    exerciseSource: 'Sezione 3, Esercizio 476, frase 1 (p. 356)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale coppia connettiva unisce la modalità dell\'azione nella principale con un paragone ipotetico nella subordinata?\n«Он говорил так уверенно и спокойно, (...) всё происходящее было заранее спланировано».',
    sentenceWithBlank: '«...так спокойно, (...) всё было спланировано».',
    options: [
      { label: 'A', text: 'как будто (так..., как будто... = come se)' },
      { label: 'B', text: 'что (esprimerebbe solo una conseguenza effettiva, non una somiglianza ipotetica)' },
      { label: 'C', text: 'чтобы' },
      { label: 'D', text: 'потому что' }
    ],
    correctOption: 'A',
    hint: 'La correlazione per descrivere il modo di fare paragonandolo a una situazione immaginaria («come se») è «так, как будто...» (oppure «так, словно...»).',
    explanation:
      'Risposta esatta: A (как будто). Glazunova p. 356, §476: «В придаточных образа действия со сравнительным оттенком указательное слово ТАК сочетается с союзами КАК БУДТО, СЛОВНО, ТОЧНО: Он держался так, как будто ничего не произошло; Она посмотрела так, словно хотела что-то сказать».',
    bookRuleRef: 'Glazunova §476, p. 356',
    tags: ['Придаточные образа действия', 'Так как будто', 'Сравнение']
  },
  {
    id: 'q-s3-sub-time-posle-togo-kak-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Словосочетание)',
    chapterId: 'sec3-sub-time',
    chapterTitle: 'Придаточные времени: после того как',
    topicName: 'Anteriorità completata con «после того как»',
    exerciseSource: 'Sezione 3, Esercizio 428, frase 4 (p. 318)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale congiunzione complessa indica che l\'azione della subordinata si è conclusa prima dell\'inizio della principale («dopo che»)?\n«(...) докладчик закончил своё выступление, в зале началось бурное обсуждение».',
    sentenceWithBlank: '«(...) докладчик закончил, началось обсуждение».',
    options: [
      { label: 'A', text: 'После того как (dopo che: esprime anteriorità conclusa rispetto alla principale)' },
      { label: 'B', text: 'Перед тем как (prima che)' },
      { label: 'C', text: 'Пока' },
      { label: 'D', text: 'В то время как' }
    ],
    correctOption: 'A',
    hint: '«После того как» traduce fedelmente l\'italiano «dopo che» e regge di norma l\'aspetto perfettivo per indicare anteriorità compiuta.',
    explanation:
      'Risposta esatta: A (После того как). Glazunova p. 318, §428: «Сложный союз ПОСЛЕ ТОГО КАК указывает на то, что действие придаточной части полностью завершилось до начала действия главной: После того как поезд ушёл, перрон опустел».',
    bookRuleRef: 'Glazunova §428, p. 318',
    tags: ['Придаточные времени', 'После того как', 'Предшествование']
  },
  {
    id: 'q-s3-sub-time-pered-tem-kak-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Словосочетание)',
    chapterId: 'sec3-sub-time',
    chapterTitle: 'Придаточные времени: перед тем как / до того как',
    topicName: 'Posteriorità con «перед тем как» (prima di / prima che)',
    exerciseSource: 'Sezione 3, Esercizio 429, frase 2 (p. 319)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale congiunzione temporale indica l\'azione immediatamente successiva, traducibile con «prima di / prima che»?\n«(...) принять окончательное решение, внимательно взвесьте все за и против».',
    sentenceWithBlank: '«(...) принять решение, взвесьте всё».',
    options: [
      { label: 'A', text: 'Перед тем как (+ infinito o forma finita: prima di prendere una decisione)' },
      { label: 'B', text: 'После того как' },
      { label: 'C', text: 'С тех пор как' },
      { label: 'D', text: 'Пока не' }
    ],
    correctOption: 'A',
    hint: '«Перед тем как» o «до того как» esprimono che la principale deve avvenire prima della subordinata («prima di fare qualcosa»).',
    explanation:
      'Risposta esatta: A (Перед тем как). Glazunova p. 319, §429: «Союзы ПЕРЕД ТЕМ КАК и ДО ТОГО КАК указывают на действие, которому предшествует действие главной части: Перед тем как выйти из дома, выключите свет; До того как начался дождь, мы успели дойти до метро».',
    bookRuleRef: 'Glazunova §429, p. 319',
    tags: ['Придаточные времени', 'Перед тем как', 'Следование']
  },
  {
    id: 'q-s3-asyn-interrog-second-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Словосочетание)',
    chapterId: 'sec3-asyndetic',
    chapterTitle: 'Бессоюзные предложения: вопросительная вторая часть',
    topicName: 'Punteggiatura quando la seconda parte asindetica pone una domanda diretta',
    exerciseSource: 'Sezione 3, Esercizio 489, frase 1 (p. 371)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale punteggiatura separa le proposizioni quando la prima introduce un pensiero e la seconda è una domanda diretta a bruciapelo?\n«Я подошёл к нему с вопросом (...) когда же начнётся заседание?»',
    sentenceWithBlank: '«Я спросил (...) когда начнётся заседание?»',
    options: [
      { label: 'A', text: ': (двоеточие: avverte che segue la domanda o citazione diretta)' },
      { label: 'B', text: '— (тире)' },
      { label: 'C', text: ', (semplice virgola)' },
      { label: 'D', text: '; (punto e virgola)' }
    ],
    correctOption: 'A',
    hint: 'I due punti (двоеточие) introducono l\'interrogazione o la formulazione del quesito nella parte asindetica.',
    explanation:
      'Risposta esatta: A (: двоеточие). Glazunova p. 371, §489: «ДВОЕТОЧИЕ ставится перед прямой речью или вопросительным предложением в составе бессоюзного сложного: Один только вопрос волновал всех: успеем ли мы закончить проект в срок?».',
    bookRuleRef: 'Glazunova §489, p. 371',
    tags: ['Бессоюзные предложения', 'Двоеточие', 'Прямой вопрос']
  },
  {
    id: 'q-s3-coord-advers-odnako-punct-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Словосочетание)',
    chapterId: 'sec3-compound-coord',
    chapterTitle: 'Сложносочинённые: пунктуация при союзе однако',
    topicName: 'Assenza di virgola DOPO la congiunzione «однако» in apertura di coordinata',
    exerciseSource: 'Sezione 3, Esercizio 386, frase 3 (p. 288)',
    level: 'B2',
    type: 'true_false',
    prompt: 'Vero o Falso: Quando «однако» si trova all\'inizio della seconda proposizione coordinata con il significato di «ma/tuttavia» (синоним «но»), è VIETATO mettere la virgola subito dopo di esso?\n«Дождь перестал, однако на улице было холодно».',
    sentenceWithBlank: '«Дождь перестал, однако на улице было холодно».',
    options: [
      { label: 'Vero', text: 'Vero: come congiunzione (all\'inizio della parte coordinata), «однако» ha la virgola SOLO PRIMA di sé, MAI dopo' },
      { label: 'Falso', text: 'Falso: dopo «однако» la virgola è sempre obbligatoria' }
    ],
    correctOption: 'Vero',
    hint: 'Regola classica del dettato russo: «однако» all\'inizio di coordinata non vuole mai la virgola dopo di sé (a differenza dell\'inglese «however, ...»).',
    explanation:
      'Risposta esatta: Vero. Glazunova p. 288, nota con punto esclamativo (!): «Если союз ОДНАКО стоит в начале предложения или части сложносочинённого предложения (в значении НО), запятая после него НЕ СТАВИТСЯ: Солнце взошло, однако туман ещё не рассеялся. Запятыми с двух сторон выделяется только вводное слово однако в середине фразы».',
    bookRuleRef: 'Glazunova §386, p. 288',
    tags: ['Сложносочинённые', 'Однако', 'Правило пунктуации']
  },
  {
    id: 'q-s3-sub-attr-mest-kotorogo-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Словосочетание)',
    chapterId: 'sec3-sub-relative',
    chapterTitle: 'Определительные придаточные: предлог перед который',
    topicName: 'Posizione della preposizione davanti al relativo «который»',
    exerciseSource: 'Sezione 3, Esercizio 416, frase 2 (p. 308)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Dove si colloca la preposizione che regge il relativo «который» all\'inizio della subordinata attributiva?\n«Это тот самый дом, (...) мы вчера долго говорили».',
    sentenceWithBlank: '«...дом, (...) мы говорили».',
    options: [
      { label: 'A', text: 'о котором (la preposizione precede SEMPRE il pronome «который»)' },
      { label: 'B', text: 'котором о' },
      { label: 'C', text: 'который о' },
      { label: 'D', text: 'об котором' }
    ],
    correctOption: 'A',
    hint: 'La preposizione si antepone rigorosamente alla forma flessa di который (о котором, в котором, с которым).',
    explanation:
      'Risposta esatta: A (о котором). Glazunova p. 308, §416: «Предлог всегда ставится ПЕРЕД союзным словом КОТОРЫЙ: книга, о которой мы спорили; город, в котором я родился; коллега, с которым я работаю».',
    bookRuleRef: 'Glazunova §416, p. 308',
    tags: ['Определительные придаточные', 'О котором', 'Положение предлога']
  },
  {
    id: 'q-s3-sub-expl-esli-li-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Словосочетание)',
    chapterId: 'sec3-sub-explicative',
    chapterTitle: 'Изъяснительные: различие между «если» и «ли»',
    topicName: 'Errore sintattico: uso indebito di «если» al posto di «ли» nell\'interrogativa indiretta',
    exerciseSource: 'Sezione 3, Esercizio 411, frase 4 (p. 304)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Individua la formulazione corretta nell\'interrogativa indiretta (che esprime dubbio):\n«Мы хотели узнать, (...) завтра экзамен».',
    sentenceWithBlank: '«Мы хотели узнать, (...) завтра экзамен».',
    options: [
      { label: 'A', text: 'состоится ли (corretto con particella «ли»)' },
      { label: 'B', text: 'если состоится (errato: «если» introduce una condizione ipotetica, non un\'interrogativa indiretta!)' },
      { label: 'C', text: 'что если состоится' },
      { label: 'D', text: 'ли состоится' }
    ],
    correctOption: 'A',
    hint: 'In russo non si traduce l\'inglese «if» o l\'italiano «se» del dubbio con «если»! Nel dubbio indiretto si usa TASSATIVAMENTE la particella «ли» posposta (состоится ли).',
    explanation:
      'Risposta esatta: A (состоится ли). Glazunova p. 304, §411: «В косвенном вопросе для выражения сомнения или неизвестности используется частица-союз ЛИ (Я не знаю, придёт ли он). Использование союза ЕСЛИ в этой функции (*Я не знаю, если он придёт) является грубой калькой и ошибкой».',
    bookRuleRef: 'Glazunova §411, p. 304',
    tags: ['Изъяснительные придаточные', 'Частица ли', 'Ошибка с если']
  },
  {
    id: 'q-s3-asyn-reason-colon-tendryakov-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Словосочетание)',
    chapterId: 'sec3-asyndetic',
    chapterTitle: 'Бессоюзные предложения в современной прозе: В. Тендряков',
    topicName: 'Struttura asindetica causale in Vladimir Tendrjakov',
    exerciseSource: 'Sezione 3, Esercizio 490 (Vladimir Tendrjakov, p. 371)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Dal testo di V. Tendrjakov in Glazunova: quale motivazione sintattica impone i due punti in:\n«В лесу нельзя было шуметь: малейший шорох мог вспугнуть чуткого зверя»?',
    sentenceWithBlank: '«Нельзя шуметь (...) шорох мог вспугнуть зверя».',
    options: [
      { label: 'A', text: ': (la seconda frase spiega la causa del divieto enunciato nella prima: si può sostituire con «так как / потому что»)' },
      { label: 'B', text: '— (indica condizione ipotetica)' },
      { label: 'C', text: ', (semplice elenco)' },
      { label: 'D', text: '; (punto e virgola)' }
    ],
    correctOption: 'A',
    hint: 'La seconda parte motiva perché non si poteva far rumore (motivo/causa) -> due punti.',
    explanation:
      'Risposta esatta: A (: двоеточие). Glazunova p. 371, §490 (da V. Tendrjakov): «Двоеточие ставится между частями бессоюзного сложного предложения, если вторая часть указывает на причину того, о чём говорится в первой (между ними легко вставляется причинный союз ПОТОМУ ЧТО)».',
    bookRuleRef: 'Glazunova §490, p. 371',
    tags: ['Тендряков', 'Бессоюзные предложения', 'Причина']
  },
  {
    id: 'q-s3-sub-purp-s-tem-chtoby-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Словосочетание)',
    chapterId: 'sec3-sub-purpose',
    chapterTitle: 'Придаточные цели: с тем чтобы',
    topicName: 'Congiunzione complessa formale di scopo: с тем чтобы',
    exerciseSource: 'Sezione 3, Esercizio 454, frase 2 (p. 337)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale congiunzione complessa introduce un fine deliberato e concordato nel linguaggio formale o diplomatico?\n«Делегация прибыла в столицу (...) провести переговоры с руководством корпорации».',
    sentenceWithBlank: '«Делегация прибыла (...) провести переговоры».',
    options: [
      { label: 'A', text: 'с тем чтобы (congiunzione formale finalistica: con l\'obiettivo e allo scopo di)' },
      { label: 'B', text: 'с тем что' },
      { label: 'C', text: 'для того что' },
      { label: 'D', text: 'потому чтобы' }
    ],
    correctOption: 'A',
    hint: '«С тем чтобы» è la locuzione congiuntiva formale per «con l\'intento di / affinché».',
    explanation:
      'Risposta esatta: A (с тем чтобы). Glazunova p. 337, §454: «Сложный союз С ТЕМ ЧТОБЫ выражает намеренную цель действия в книжной и деловой речи: Он приехал с тем чтобы лично уладить недоразумение».',
    bookRuleRef: 'Glazunova §454, p. 337',
    tags: ['Придаточные цели', 'С тем чтобы', 'Книжная речь']
  },
  {
    id: 'q-s3-sub-concess-khot-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Словосочетание)',
    chapterId: 'sec3-sub-concessive',
    chapterTitle: 'Придаточные уступительные: союз «хоть»',
    topicName: 'Uso colloquiale ed espressivo di «хоть» col valore di «хотя»',
    exerciseSource: 'Sezione 3, Esercizio 471, frase 3 (p. 351)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale variante abbreviata ed espressiva di «хотя» introduce la concessione nel parlato o nella prosa viva?\n«(...) на улице стоял мороз, дети всё равно выбежали во двор играть в снежки».',
    sentenceWithBlank: '«(...) стоял мороз, дети выбежали во двор».',
    options: [
      { label: 'A', text: 'Хоть (variante colloquiale ed espressiva di «хотя»)' },
      { label: 'B', text: 'Раз' },
      { label: 'C', text: 'Будто' },
      { label: 'D', text: 'Как' }
    ],
    correctOption: 'A',
    hint: '«Хоть» (abbreviazione di «хотя») esprime valore concessivo («sebbene / per quanto»).',
    explanation:
      'Risposta esatta: A (Хоть). Glazunova p. 351, §471: «Союз ХОТЬ является разговорным и экспрессивным вариантом уступительного союза ХОТЯ: Хоть видит око, да зуб неймёт; Хоть тяжело было, никто не жаловался».',
    bookRuleRef: 'Glazunova §471, p. 351',
    tags: ['Придаточные уступительные', 'Хоть', 'Разговорный вариант']
  }
];
