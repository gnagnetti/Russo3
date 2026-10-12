import { Question } from '../../types';

export const QUESTIONS_BATCH_SECTION_3_PART2: Question[] = [
  // --- Coordinate con sfumature complesse: Не то... не то, То... то (pp. 275-295) ---
  {
    id: 'q-s3-coord-disj-to-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Словосочетание)',
    chapterId: 'sec3-compound-coord',
    chapterTitle: 'Сложносочинённые: то... то vs не то... не то',
    topicName: 'Alternanza ciclica con «то... то»',
    exerciseSource: 'Sezione 3, Esercizio 375, frase 2 (p. 278)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale coppia di congiunzioni coordinate esprime l\'alternanza regolare e ciclica di due fenomeni naturali o azioni?\n«Погода была переменчивой: (...) шёл мокрый снег, (...) выглядывало яркое солнце».',
    sentenceWithBlank: '«...переменчивой: (...) шёл снег, (...) выглядывало солнце».',
    options: [
      { label: 'A', text: 'то..., то... (alternanza regolare di stati o azioni che si susseguono)' },
      { label: 'B', text: 'или..., или... (disgiunzione esclusiva che esclude uno dei due)' },
      { label: 'C', text: 'ни..., ни... (negazione congiunta)' },
      { label: 'D', text: 'как..., так и...' }
    ],
    correctOption: 'A',
    hint: 'La formula «то..., то...» indica che prima accade una cosa, poi l\'altra, in continua alternanza temporale («ora l\'una, ora l\'altra»).',
    explanation:
      'Risposta esatta: A (то..., то...). Glazunova p. 278: «Разделительный повторяющийся союз ТО..., ТО... выражает чередование действий или явлений, сменяющих друг друга: То солнце выглянет, то пойдёт дождь; То послышатся шаги, то снова всё стихнет».',
    bookRuleRef: 'Glazunova §375, p. 278',
    tags: ['Сложносочинённые', 'То то', 'Чередование действий']
  },
  {
    id: 'q-s3-coord-disj-ne-to-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Словосочетание)',
    chapterId: 'sec3-compound-coord',
    chapterTitle: 'Сложносочинённые: не то... не то',
    topicName: 'Incertezza percettiva del parlante con «не то... не то»',
    exerciseSource: 'Sezione 3, Esercizio 377, frase 4 (p. 280)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale congiunzione disgiuntiva sottolinea l\'incertezza e il dubbio del parlante che non sa identificare con esattezza ciò che accade?\n«Вдали послышался глухой гул: (...) гремел гром, (...) грохотал поезд».',
    sentenceWithBlank: '«...послышался гул: (...) гремел гром, (...) грохотал поезд».',
    options: [
      { label: 'A', text: 'не то..., не то... (esprime esitazione o incapacità di discernere con chiarezza la situazione)' },
      { label: 'B', text: 'то..., то...' },
      { label: 'C', text: 'и..., и...' },
      { label: 'D', text: 'либо..., либо...' }
    ],
    correctOption: 'A',
    hint: '«Не то..., не то...» traduce «o... oppure... / non si capiva se... o se...», esprimendo l\'incertezza interpretativa di chi osserva.',
    explanation:
      'Risposta esatta: A (не то..., не то...). Glazunova p. 280: «Союз НЕ ТО..., НЕ ТО... указывает на неопределённость впечатления, неуверенность говорящего в правильности своего восприятия: Не то собака залаяла, не то ветер хлопнул дверью; Не то плачет кто-то, не то смеётся».',
    bookRuleRef: 'Glazunova §377, p. 280',
    tags: ['Сложносочинённые', 'Не то не то', 'Неуверенность']
  },
  {
    id: 'q-s3-coord-advers-zato-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Словосочетание)',
    chapterId: 'sec3-compound-coord',
    chapterTitle: 'Сложносочинённые: союз зато',
    topicName: 'Congiunzione avversativa compensativa «зато»',
    exerciseSource: 'Sezione 3, Esercizio 382, frase 3 (p. 284)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale congiunzione avversativa esprime un vantaggio che compensa un difetto o una difficoltà enunciata nella prima frase?\n«Дорога была трудной и утомительной, (...) вид с вершины открылся потрясающий».',
    sentenceWithBlank: '«Дорога была трудной, (...) вид открылся потрясающий».',
    options: [
      { label: 'A', text: 'зато (introduce un compenso, risarcimento o pregio a fronte dello svantaggio precedente)' },
      { label: 'B', text: 'а' },
      { label: 'C', text: 'да' },
      { label: 'D', text: 'ибо' }
    ],
    correctOption: 'A',
    hint: '«Зато» significa «in compenso, per contro, ma almeno», bilanciando un elemento negativo con uno positivo.',
    explanation:
      'Risposta esatta: A (зато). Glazunova p. 284: «Союз ЗАТО имеет противительно-возместительное значение: указывает на то, что недостаток первой части компенсируется положительным качеством во второй части: Гостиница была скромной, зато в самом центре города; Дорога трудна, зато цель прекрасна».',
    bookRuleRef: 'Glazunova §382, p. 284',
    tags: ['Сложносочинённые', 'Зато', 'Возмещение']
  },
  {
    id: 'q-s3-coord-advers-odnako-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Словосочетание)',
    chapterId: 'sec3-compound-coord',
    chapterTitle: 'Сложносочинённые: союз однако',
    topicName: 'Uso del connettore avversativo «однако» rispetto a «но»',
    exerciseSource: 'Sezione 3, Esercizio 385, frase 1 (p. 287)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale caratteristica stilistica e interpuntiva contraddistingue la congiunzione «однако» nel ruolo di congiunzione avversativa equivalente a «но»?\n«Все ожидали скорого завершения переговоров, (...) стороны так и не пришли к согласию».',
    sentenceWithBlank: '«Ожидали завершения, (...) стороны не пришли к согласию».',
    options: [
      { label: 'A', text: 'однако (funge da congiunzione avversativa equivalente a «но»; all\'inizio della seconda coordinata NON vuole virgola dopo di sé)' },
      { label: 'B', text: 'но хотя' },
      { label: 'C', text: 'и всё' },
      { label: 'D', text: 'несмотря' }
    ],
    correctOption: 'A',
    hint: 'Quando «однако» è all\'inizio di una coordinata con il significato di «но» (tuttavia/ma), dopo di esso NON si mette la virgola («...переговоров, однако стороны так и не...»). Si isola tra virgole solo se funge da parola incidentale interna.',
    explanation:
      'Risposta esatta: A (однако). Glazunova p. 287: «Союз ОДНАКО (синоним но) связывает части сложносочинённого предложения и не выделяется после себя запятой: Мы спешили, однако поезд уже ушёл. Как вводное слово в середине предложения обособляется с двух сторон: Поезд, однако, уже ушёл».',
    bookRuleRef: 'Glazunova §385, p. 287',
    tags: ['Сложносочинённые', 'Однако', 'Пунктуация']
  },
  {
    id: 'q-s3-sub-attr-chei-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Словосочетание)',
    chapterId: 'sec3-sub-relative',
    chapterTitle: 'Определительные придаточные: чей, чья, чьё, чьи',
    topicName: 'Accordo del relativo possessivo «чей»',
    exerciseSource: 'Sezione 3, Esercizio 418, frase 4 (p. 310)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Con che cosa concorda in genere, numero e caso il pronome relativo possessivo «чей» nella subordinata attributiva?\n«Мы подошли к автору, (...) книга вызвала столько споров».',
    sentenceWithBlank: '«...к автору, (...) книга вызвала столько споров».',
    options: [
      { label: 'A', text: 'чья (concorda col sostantivo «книга» della subordinata, mentre il possesso si riferisce ad «автору»)' },
      { label: 'B', text: 'чьего' },
      { label: 'C', text: 'чьей' },
      { label: 'D', text: 'которого' }
    ],
    correctOption: 'A',
    hint: 'Il pronome relativo possessivo «чей, чья, чьё, чьи» concorda SEMPRE in genere, numero e caso con il sostantivo che determina all\'interno della proposizione subordinata (здесь: чья книга).',
    explanation:
      'Risposta esatta: A (чья). Glazunova p. 310: «Союзное слово ЧЕЙ (чья, чьё, чьи) согласуется в роде, числе и падеже с существительным в ПРИДАТОЧНОЙ части: писатель, чья книга вышла (жен. род, им. пад.); учёный, чьими трудами мы восхищаемся (мн. ч., твор. пад.)».',
    bookRuleRef: 'Glazunova §418, p. 310',
    tags: ['Определительные придаточные', 'Чей чья', 'Согласование']
  },
  {
    id: 'q-s3-sub-degree-nastolko-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Словосочетание)',
    chapterId: 'sec3-sub-degree',
    chapterTitle: 'Придаточные меры и степени: настолько... что',
    topicName: 'Subordinate di misura e grado correlative: настолько... что',
    exerciseSource: 'Sezione 3, Esercizio 475, frase 2 (p. 354)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale connettore apre la proposizione consecutiva di grado dopo l\'avverbio quantitativo correlativo «настолько»?\n«Он устал настолько, (...) не мог даже вымолвить слова».',
    sentenceWithBlank: '«Он устал настолько, (...) не мог вымолвить слова».',
    options: [
      { label: 'A', text: 'что (coppia correlativa fissa di grado: настолько..., что... / так..., что...)' },
      { label: 'B', text: 'как' },
      { label: 'C', text: 'будто' },
      { label: 'D', text: 'чтобы' }
    ],
    correctOption: 'A',
    hint: 'La correlazione per esprimere intensità seguita dalla conseguenza effettiva è «настолько..., что...» (o «так..., что...»).',
    explanation:
      'Risposta esatta: A (что). Glazunova p. 354: «В придаточных меры, степени и следствия союз ЧТО соотносится с указательными словами так, настолько, до такой степени в главной части: Мороз был настолько сильным, что занятия в школах отменили; Он так изменился, что я его не узнал».',
    bookRuleRef: 'Glazunova §475, p. 354',
    tags: ['Придаточные меры и степени', 'Настолько что', 'Следствие']
  },
  {
    id: 'q-s3-sub-comp-kak-budto-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Словосочетание)',
    chapterId: 'sec3-sub-comparative',
    chapterTitle: 'Придаточные сравнительные: как будто vs словно',
    topicName: 'Subordinate comparative con valore di verosimiglianza/ipotesi',
    exerciseSource: 'Sezione 3, Esercizio 480, frase 3 (p. 360)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale congiunzione comparativa introduce una similitudine con sfumatura di apparenza o finzione («come se»)?\n«В лесу стояла такая тишина, (...) вся природа затаила дыхание».',
    sentenceWithBlank: '«...тишина, (...) природа затаила дыхание».',
    options: [
      { label: 'A', text: 'будто / как будто / словно (congiunzioni comparative ipotetiche: «come se»)' },
      { label: 'B', text: 'что' },
      { label: 'C', text: 'хотя' },
      { label: 'D', text: 'потому что' }
    ],
    correctOption: 'A',
    hint: 'Le congiunzioni «будто», «как будто», «словно», «точно» esprimono una comparazione ipotetica o soggettiva («come se»).',
    explanation:
      'Risposta esatta: A (будто / как будто). Glazunova p. 360: «Сравнительные союзы КАК БУДТО, БУДТО, СЛОВНО, ТОЧНО вносят оттенок предположительности, кажущегося или нереального сходства (значение \'как если бы\'): Он посмотрел на меня так, будто видел впервые в жизни».',
    bookRuleRef: 'Glazunova §480, p. 360',
    tags: ['Сравнительные придаточные', 'Как будто', 'Сравнение']
  },
  {
    id: 'q-s3-sub-place-otkuda-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Словосочетание)',
    chapterId: 'sec3-sub-place',
    chapterTitle: 'Придаточные места: оттуда... откуда',
    topicName: 'Coppia correlativa di provenienza spaziale: оттуда... откуда',
    exerciseSource: 'Sezione 3, Esercizio 440, frase 2 (p. 326)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale pronome connettivo di moto da luogo si unisce ad «оттуда» nella frase complessa di luogo?\n«Ветер дул оттуда, (...) надвигалась огромная грозовая туча».',
    sentenceWithBlank: '«Ветер дул оттуда, (...) надвигалась туча».',
    options: [
      { label: 'A', text: 'откуда (correlazione di provenienza: оттуда..., откуда...)' },
      { label: 'B', text: 'где' },
      { label: 'C', text: 'куда' },
      { label: 'D', text: 'покуда' }
    ],
    correctOption: 'A',
    hint: 'Per il moto da luogo la coppia correlativa obbligatoria è «оттуда..., откуда...».',
    explanation:
      'Risposta esatta: A (откуда). Glazunova p. 326: «Союзное слово ОТКУДА соотносится с указательным словом ОТТУДА в главной части для обозначения исходного пункта движения: Мы вернулись оттуда, откуда ушли утром; Дым шёл оттуда, откуда доносились звуки выстрелов».',
    bookRuleRef: 'Glazunova §440, p. 326',
    tags: ['Придаточные места', 'Оттуда откуда', 'Исходный пункт']
  },
  {
    id: 'q-s3-asyn-contrast-dash-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Словосочетание)',
    chapterId: 'sec3-asyndetic',
    chapterTitle: 'Бессоюзные сложные предложения: противопоставление',
    topicName: 'Uso del trattino (тире) per netto contrasto avversativo asindetico',
    exerciseSource: 'Sezione 3, Esercizio 486, frase 1 (p. 369)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale segno di punteggiatura si colloca tra due proposizioni asindetiche in netto e brusco contrasto (sostituibile con «а» o «но»)?\n«Чин следовал ему (...) он службу вдруг оставил» (Грибоедов).',
    sentenceWithBlank: '«Чин следовал ему (...) он службу вдруг оставил».',
    options: [
      { label: 'A', text: '— (тире: esprime netto contrasto avversativo o svolta inaspettata tra le due proposizioni)' },
      { label: 'B', text: ': (двоеточие)' },
      { label: 'C', text: ', (semplice virgola senza rilievo contrastivo)' },
      { label: 'D', text: '; (punto e virgola)' }
    ],
    correctOption: 'A',
    hint: 'Nelle frasi asindetiche, quando le due parti sono contrapposte (si potrebbe inserire «а» o «но»), si pone obbligatoriamente il trattino lungo (тире).',
    explanation:
      'Risposta esatta: A (— тире). Glazunova p. 369: «ТИРЕ ставится между частями бессоюзного сложного предложения при противопоставлении их содержания (между частями можно вставить союзы А, НО): Лето припасает — зима поедает; Дуб держится — клён падает; Чин следовал ему — он службу вдруг оставил».',
    bookRuleRef: 'Glazunova §486, p. 369',
    tags: ['Бессоюзные предложения', 'Тире', 'Противопоставление']
  },
  {
    id: 'q-s3-asyn-result-dash-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Словосочетание)',
    chapterId: 'sec3-asyndetic',
    chapterTitle: 'Бессоюзные сложные предложения: следствие',
    topicName: 'Trattino (тире) per conseguenza o conclusione rapida',
    exerciseSource: 'Sezione 3, Esercizio 487, frase 2 (p. 369)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale punteggiatura si usa se la seconda proposizione asindetica esprime la conseguenza o il risultato rapido della prima (sostituibile con «так что / поэтому»)?\n«Солнце взошло (...) туман рассеялся».',
    sentenceWithBlank: '«Солнце взошло (...) туман рассеялся».',
    options: [
      { label: 'A', text: '— (тире: indica la conseguenza immediata dell\'azione precedente)' },
      { label: 'B', text: ': (двоеточие)' },
      { label: 'C', text: ', (semplice virgola)' },
      { label: 'D', text: '; (punto e virgola)' }
    ],
    correctOption: 'A',
    hint: 'Quando la seconda parte illustra il risultato immediato o la deduzione scaturita dalla prima, si usa la linea lunga (тире).',
    explanation:
      'Risposta esatta: A (— тире). Glazunova p. 369: «ТИРЕ ставится, если вторая часть содержит следствие, результат или вывод из того, о чём говорилось в первой (можно вставить ПОЭТОМУ, ТАК ЧТО): Солнце взошло — туман рассеялся; Ударил гром — земля задрожала».',
    bookRuleRef: 'Glazunova §487, p. 369',
    tags: ['Бессоюзные предложения', 'Тире', 'Следствие']
  }
];
