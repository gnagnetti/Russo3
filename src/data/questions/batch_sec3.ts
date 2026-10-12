import { Question } from '../../types';

export const QUESTIONS_BATCH_SECTION_3: Question[] = [
  // --- Coordinate e Subordinate Esplicative / Interrogative Indirette (pp. 264-300) ---
  {
    id: 'q-s3-sub-expl-li-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Словосочетание)',
    chapterId: 'sec3-sub-explicative',
    chapterTitle: 'Изъяснительные придаточные: частица «ли»',
    topicName: 'Interrogativa indiretta con la particella enclitica «ли»',
    exerciseSource: 'Sezione 3, Esercizio 410, frase 2 (p. 302, chiave p. 405)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Qual è la corretta collocazione della particella interrogativa «ли» nell\'interrogativa indiretta?\n«Я спросил у дежурного, (...) поезд вовремя».',
    sentenceWithBlank: '«Я спросил, (...) поезд вовремя».',
    options: [
      { label: 'A', text: 'прибудет ли (si posiziona immediatamente dopo il verbo o la parola su cui cade la domanda)' },
      { label: 'B', text: 'ли прибудет' },
      { label: 'C', text: 'если прибудет' },
      { label: 'D', text: 'что прибудет ли' }
    ],
    correctOption: 'A',
    hint: 'La particella enclitica «ли» si colloca SEMPRE dopo la prima parola della proposizione subordinata su cui verte il dubbio o la domanda.',
    explanation:
      'Risposta esatta: A (прибудет ли). Glazunova p. 302: «Частица-союз ЛИ в косвенном вопросе ставится строго после слова, к которому относится вопрос: Мы не знали, придёт ли он; Он спросил, готов ли доклад. Сочетание *что... ли или постановка ли перед словом являются грубейшей ошибкой».',
    bookRuleRef: 'Glazunova §410, p. 302',
    tags: ['Косвенный вопрос', 'Частица ли', 'Порядок слов']
  },
  {
    id: 'q-s3-sub-expl-to-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Словосочетание)',
    chapterId: 'sec3-sub-explicative',
    chapterTitle: 'Изъяснительные придаточные: местоимение «то, что»',
    topicName: 'Uso del correlativo «то, что» vs semplice «что»',
    exerciseSource: 'Sezione 3, Esercizio 412, frase 5 (p. 305)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Quando è obbligatorio inserire il pronome correlativo «то» nella proposizione principale?\n«Всё дело заключалось в (...), что никто не ожидал такого поворота событий».',
    sentenceWithBlank: '«Всё заключалось в (...), что никто не ожидал».',
    options: [
      { label: 'A', text: 'том (obbligatorio quando il verbo principale regge una preposizione: заключаться в чём? -> в том, что)' },
      { label: 'B', text: 'то' },
      { label: 'C', text: 'этом' },
      { label: 'D', text: 'чему' }
    ],
    correctOption: 'A',
    hint: 'Se il verbo o l\'espressione della proposizione principale regge una specifica preposizione (настаивать на, сомневаться в, дело в), la presenza del pronome «то» nel caso richiesto è obbligatoria.',
    explanation:
      'Risposta esatta: A (том). Glazunova p. 305: «Указательное слово ТО в главной части обязательно, если глагол требует предложного управления или без него нарушается грамматическая связь: настаивать на том, что; сомневаться в том, что; всё дело в том, что; стремиться к тому, чтобы».',
    bookRuleRef: 'Glazunova §412, p. 305',
    tags: ['Изъяснительные придаточные', 'То что', 'Предложное управление']
  },
  {
    id: 'q-s3-sub-time-poka-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Словосочетание)',
    chapterId: 'sec3-sub-time',
    chapterTitle: 'Придаточные времени: пока vs пока не',
    topicName: 'Differenza semantica: «пока» (durata parallela) vs «пока не» (limite temporale)',
    exerciseSource: 'Sezione 3, Esercizio 430, frase 1 (p. 320)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale congiunzione esprime l\'attesa fino al verificarsi del limite temporale finale (azione che fa cessare l\'attesa)?\n«Сидите здесь тихо и ждите, (...) я вернусь».',
    sentenceWithBlank: '«Ждите здесь, (...) я вернусь».',
    options: [
      { label: 'A', text: 'пока не (fino a quando non accadrà l\'evento perfettivo che pone termine all\'azione)' },
      { label: 'B', text: 'пока (mentre, durante tutto il tempo in cui si svolge l\'azione)' },
      { label: 'C', text: 'в то время как' },
      { label: 'D', text: 'как только' }
    ],
    correctOption: 'A',
    hint: 'Glazunova distingue con rigore: «пока» + imperfettivo indica concomitanza continua («пока горит свет» = finché c\'è luce); «пока не» + perfettivo segna il termine conclusivo dell\'attesa («пока я не вернусь» = finché non ritorno).',
    explanation:
      'Risposta esatta: A (пока не). Glazunova p. 320: «Союз ПОКА указывает на продолжительность действия в главной части одновременно с придаточной: Читай, пока я готовлю обед. Союз ПОКА НЕ (+ совершенный вид) указывает на предел, до наступления которого длится действие главной части: Ждите, пока не придёт врач; Мы не уйдём, пока не закончим работу».',
    bookRuleRef: 'Glazunova §430, p. 320',
    tags: ['Придаточные времени', 'Пока не', 'Предел действия']
  },
  {
    id: 'q-s3-sub-time-edva-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Словосочетание)',
    chapterId: 'sec3-sub-time',
    chapterTitle: 'Придаточные времени: едва... как',
    topicName: 'Immediatezza della successione: едва... как / не успел... как',
    exerciseSource: 'Sezione 3, Esercizio 433, frase 4 (p. 322)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Quale congiunzione nella seconda parte della frase si combina con «едва» o «только» per segnalare che la seconda azione è scattata all\'istante?\n«Едва поезд тронулся, (...) в купе заглянул проводник».',
    sentenceWithBlank: '«Едва поезд тронулся, (...) заглянул проводник».',
    options: [
      { label: 'A', text: 'как (correlazione temporale di immediatezza: едва..., как... / только..., как...)' },
      { label: 'B', text: 'что' },
      { label: 'C', text: 'то' },
      { label: 'D', text: 'так' }
    ],
    correctOption: 'A',
    hint: 'La costruzione sintattica russa per l\'immediatezza temporale improvvisa usa la congiunzione «как»: едва..., как...; не успел он войти, как зазвонил телефон.',
    explanation:
      'Risposta esatta: A (как). Glazunova p. 322: «В сложных предложениях со значением моментального следования одного действия за другим используется союзная связь ЕДВА..., КАК; ТОЛЬКО..., КАК; НЕ УСПЕЛ..., КАК: Едва мы вышли из дома, как хлынул ливень».',
    bookRuleRef: 'Glazunova §433, p. 322',
    tags: ['Придаточные времени', 'Едва как', 'Моментальность']
  },
  {
    id: 'q-s3-sub-cause-tak-kak-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Словосочетание)',
    chapterId: 'sec3-sub-cause',
    chapterTitle: 'Придаточные причины: потому что vs так как vs ибо',
    topicName: 'Posizione sintattica di «потому что» rispetto a «так как»',
    exerciseSource: 'Sezione 3, Esercizio 442, frase 2 (p. 328)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale delle due congiunzioni causali può aprire indifferentemente la frase complessa posizionandosi all\'inizio assoluto?\n«(...) погода резко испортилась, экскурсию пришлось отложить».',
    sentenceWithBlank: '«(...) погода испортилась, экскурсию отложили».',
    options: [
      { label: 'A', text: 'Так как (può collocarsi sia all\'inizio sia a metà frase, mentre «потому что» sta solo dopo la principale nello stile neutro standard)' },
      { label: 'B', text: 'Потому что (non può aprire la frase in posizione iniziale neutra)' },
      { label: 'C', text: 'Ибо (solo posposta e di registro aulico arcaico)' },
      { label: 'D', text: 'Благодаря тому (solo a metà)' }
    ],
    correctOption: 'A',
    hint: 'Nella sintassi russa corretta una frase complessa causale non comincia con «Потому что» (che motiva a posteriori); all\'inizio assoluto si usa «Так как...».',
    explanation:
      'Risposta esatta: A (Так как). Glazunova p. 328: «Придаточное предложение с союзом ТАК КАК может находиться как перед главной частью, так и после неё: Так как шёл дождь, мы остались дома / Мы остались дома, так как шёл дождь. Союз ПОТОМУ ЧТО в нейтральной речи находится только ПОСЛЕ главной части».',
    bookRuleRef: 'Glazunova §442, p. 328',
    tags: ['Придаточные причины', 'Так как', 'Позиция союза']
  },
  {
    id: 'q-s3-sub-purp-chtoby-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Словосочетание)',
    chapterId: 'sec3-sub-purpose',
    chapterTitle: 'Придаточные цели: союз чтобы / чтоб',
    topicName: 'Uso del passato dopo «чтобы» in presenza di soggetti diversi',
    exerciseSource: 'Sezione 3, Esercizio 452, frase 3 (p. 336)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale forma assume obbligatoriamente il verbo nella subordinata finale con «чтобы», quando il soggetto della dipendente è diverso da quello della principale?\n«Отец говорил громче, чтобы все присутствующие (...) каждое его слово».',
    sentenceWithBlank: '«...чтобы все присутствующие (...) каждое слово».',
    options: [
      { label: 'A', text: 'услышали (forma del passato obbligatoria dopo «чтобы» con soggetto espresso)' },
      { label: 'B', text: 'услышат (futuro indicativo)' },
      { label: 'C', text: 'услышать (infinito)' },
      { label: 'D', text: 'услышав' }
    ],
    correctOption: 'A',
    hint: 'Dopo la congiunzione «чтобы», se il soggetto è diverso da quello della principale, il verbo va TASSATIVAMENTE alla forma del tempo passato (eredità del congiuntivo slavo).',
    explanation:
      'Risposta esatta: A (услышали). Glazunova p. 336: «В придаточных цели с союзом ЧТОБЫ при несовпадении субъектов в главной и придаточной частях глагол ВСЕГДА ставится в форме прошедшего времени: Я позвал брата, чтобы он помог мне. При совпадении субъектов используется инфинитив: Я пришёл, чтобы помочь».',
    bookRuleRef: 'Glazunova §452, p. 336',
    tags: ['Придаточные цели', 'Чтобы', 'Прошедшее время']
  },
  {
    id: 'q-s3-sub-cond-esli-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Словосочетание)',
    chapterId: 'sec3-sub-conditional',
    chapterTitle: 'Придаточные условия: если vs если бы',
    topicName: 'Periodo ipotetico dell\'irrealtà con «если бы» e forma verbale',
    exerciseSource: 'Sezione 3, Esercizio 460, frase 2 (p. 342)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale tempo verbale accompagna la particella «бы» sia nella protasi ipotetica irrealizzabile sia nell\'apodosi principale?\n«Если бы мы знали об этом заранее, мы (...) совсем иначе».',
    sentenceWithBlank: '«Если бы мы знали, мы (...) совсем иначе».',
    options: [
      { label: 'A', text: 'поступили бы (tempo passato + particella бы in entrambe le proposizioni)' },
      { label: 'B', text: 'поступим' },
      { label: 'C', text: 'поступали' },
      { label: 'D', text: 'поступить бы' }
    ],
    correctOption: 'A',
    hint: 'Nel periodo ipotetico dell\'irrealtà o possibilità ipotetica russa, sia nella subordinata (если бы) che nella principale si usa rigorosamente il passato seguito dalla particella «бы».',
    explanation:
      'Risposta esatta: A (поступили бы). Glazunova p. 342: «В условных предложениях нереального условия (сослагательное наклонение) в обеих частях сложного предложения используется глагол в форме прошедшего времени с частицей БЫ: Если бы погода была хорошей, мы поехали бы за город».',
    bookRuleRef: 'Glazunova §460, p. 342',
    tags: ['Придаточные условия', 'Если бы', 'Сослагательное наклонение']
  },
  {
    id: 'q-s3-sub-conc-khotya-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Словосочетание)',
    chapterId: 'sec3-sub-concessive',
    chapterTitle: 'Придаточные уступительные: несмотря на то что',
    topicName: 'Congiunzioni concessive: хотя vs несмотря на то что',
    exerciseSource: 'Sezione 3, Esercizio 470, frase 4 (p. 350)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale congiunzione complessa formale introduce una concessione oggettiva di forte contrasto con l\'esito della principale?\n«(...) все предупреждения синоптиков, альпинисты продолжили восхождение».',
    sentenceWithBlank: '«Несмотря (...) предупреждения, альпинисты продолжили восхождение».',
    options: [
      { label: 'A', text: 'на то что (+ proposizione / nonostante il fatto che)' },
      { label: 'B', text: 'в том что' },
      { label: 'C', text: 'к тому что' },
      { label: 'D', text: 'за то что' }
    ],
    correctOption: 'A',
    hint: 'La congiunzione complessa concessiva russa è «несмотря на то что» (oppure la preposizione semplice «несмотря на + Accusativo»).',
    explanation:
      'Risposta esatta: A (на то что). Glazunova p. 350: «Сложный союз НЕСМОТРЯ НА ТО ЧТО вносит значение уступки вопреки неблагоприятным обстоятельствам: Несмотря на то что шёл сильный снег, самолёты вылетали по расписанию».',
    bookRuleRef: 'Glazunova §470, p. 350',
    tags: ['Уступительные придаточные', 'Несмотря на то что', 'Уступка']
  },
  {
    id: 'q-s3-asyn-dash-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Словосочетание)',
    chapterId: 'sec3-asyndetic',
    chapterTitle: 'Бессоюзные сложные предложения: тире',
    topicName: 'Uso della linea orizzontale (тире -) per rapporto di condizione o rapida conseguenza',
    exerciseSource: 'Sezione 3, Esercizio 485, frase 3 (p. 368, chiave p. 414)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale segno di interpunzione collega due proposizioni asindetiche quando la prima esprime la condizione per la seconda («se... allora»)?\n«Любишь кататься (...) люби и саночки возить».',
    sentenceWithBlank: '«Любишь кататься (...) люби и саночки возить».',
    options: [
      { label: 'A', text: '— (тире: segnala rapporto di condizione ipotetica o conseguenza immediata senza congiunzioni)' },
      { label: 'B', text: ': (двоеточие: causale o esplicativo)' },
      { label: 'C', text: '; (точка с запятой)' },
      { label: 'D', text: ', (простая запятая)' }
    ],
    correctOption: 'A',
    hint: 'Nelle frasi complesse senza congiunzione, il trattino lungo (тире) si usa se la prima frase indica la condizione (se ami...) o una conseguenza improvvisa.',
    explanation:
      'Risposta esatta: A (— тире). Glazunova p. 368: «ТИРЕ в бессоюзном сложном предложении ставится, если первая часть указывает на условие (можно вставить союз ЕСЛИ) или время (КОГДА): Любишь кататься — люби и саночки возить; Настанет утро — двинемся в путь».',
    bookRuleRef: 'Glazunova §485, p. 368',
    tags: ['Бессоюзные предложения', 'Тире', 'Условие']
  },
  {
    id: 'q-s3-asyn-colon-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Словосочетание)',
    chapterId: 'sec3-asyndetic',
    chapterTitle: 'Бессоюзные сложные предложения: двоеточие',
    topicName: 'Uso dei due punti (двоеточие :) per rapporto di spiegazione e causa',
    exerciseSource: 'Sezione 3, Esercizio 488, frase 2 (p. 370)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale segno di punteggiatura separa le due parti asindetiche quando la seconda rivela la causa o il motivo della prima (sostituibile con «потому что / так как»)?\n«Я не мог уснуть (...) в соседней комнате не утихали споры».',
    sentenceWithBlank: '«Я не мог уснуть (...) в комнате спорили».',
    options: [
      { label: 'A', text: ': (двоеточие: esprime rapporto di motivazione o spiegazione causale)' },
      { label: 'B', text: '— (тире)' },
      { label: 'C', text: '; (точка с запятой)' },
      { label: 'D', text: ', (запятая)' }
    ],
    correctOption: 'A',
    hint: 'I due punti (двоеточие) si usano nella frase asindetica quando la seconda proposizione svela la causa (perché...) o spiega il contenuto della prima.',
    explanation:
      'Risposta esatta: A (: двоеточие). Glazunova p. 370: «ДВОЕТОЧИЕ в бессоюзном сложном предложении ставится, если вторая часть указывает на причину того, о чём говорится в первой (между ними можно вставить союз ПОТОМУ ЧТО, ТАК КАК): Печален я: со мною друга нет (Пушкин); Я не мог уснуть: в соседней комнате не утихали споры».',
    bookRuleRef: 'Glazunova §488, p. 370',
    tags: ['Бессоюзные предложения', 'Двоеточие', 'Причина']
  }
];
