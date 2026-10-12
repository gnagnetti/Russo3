import { Question } from '../../types';

export const QUESTIONS_BATCH_SECTION_3_PT4: Question[] = [
  // --- Serie 4 di approfondimento su Glazunova Sezione 3: La Frase Complessa ---
  {
    id: 'q-s3-sub-time-s-tekh-por-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Словосочетание)',
    chapterId: 'sec3-sub-time',
    chapterTitle: 'Придаточные времени: с тех пор как',
    topicName: 'Origine temporale di un processo: с тех пор как',
    exerciseSource: 'Sezione 3, Esercizio 432, frase 3 (p. 321)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale congiunzione complessa esprime il momento di inizio da cui ha preso avvio una situazione tuttora persistente?\n«(...) они расстались, прошло более десяти долгих лет».',
    sentenceWithBlank: '«(...) они расстались, прошло десять лет».',
    options: [
      { label: 'A', text: 'С тех пор как (da quando, dal momento in cui)' },
      { label: 'B', text: 'До тех пор пока' },
      { label: 'C', text: 'По мере того как' },
      { label: 'D', text: 'В то время как' }
    ],
    correctOption: 'A',
    hint: '«С тех пор как» indica il punto di partenza temporale nel passato («da quando»). «До тех пор пока» indica il termine fino a cui dura l\'azione.',
    explanation:
      'Risposta esatta: A (С тех пор как). Glazunova p. 321, §432: «Сложный союз С ТЕХ ПОР КАК указывает на начальный момент действия или состояния, продолжающегося до настоящего времени: С тех пор как мы познакомились, прошло много лет».',
    bookRuleRef: 'Glazunova §432, p. 321',
    tags: ['Придаточные времени', 'С тех пор как', 'Начальный момент']
  },
  {
    id: 'q-s3-sub-time-do-tekh-por-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Словосочетание)',
    chapterId: 'sec3-sub-time',
    chapterTitle: 'Придаточные времени: до тех пор пока',
    topicName: 'Limite finale correlativo: до тех пор, пока (не)',
    exerciseSource: 'Sezione 3, Esercizio 434, frase 1 (p. 322)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale correlativo nella principale anticipa e prepara il limite temporale finale introdotto da «пока не»?\n«Мы останемся в этом убежище (...) тех пор, пока не утихнет буря».',
    sentenceWithBlank: '«Останемся (...) пор, пока не утихнет буря».',
    options: [
      { label: 'A', text: 'до (до тех пор, пока не...)' },
      { label: 'B', text: 'с' },
      { label: 'C', text: 'в' },
      { label: 'D', text: 'к' }
    ],
    correctOption: 'A',
    hint: 'La formula correlativa per «fino a quando» è «до тех пор, пока (не)».',
    explanation:
      'Risposta esatta: A (до). Glazunova p. 322, §434: «Указательное сочетание ДО ТЕХ ПОР соотносится с союзом ПОКА (НЕ), обозначая предел протекания действия главной части: Он работал до тех пор, пока не стемнело».',
    bookRuleRef: 'Glazunova §434, p. 322',
    tags: ['Придаточные времени', 'До тех пор пока', 'Предел']
  },
  {
    id: 'q-s3-sub-attr-kakoi-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Словосочетание)',
    chapterId: 'sec3-sub-relative',
    chapterTitle: 'Определительные придаточные: слово «какой»',
    topicName: 'Pronome relativo di qualità «какой» correlato a «такой»',
    exerciseSource: 'Sezione 3, Esercizio 420, frase 2 (p. 312)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale connettivo relativo si abbina al dimostrativo di qualità «такой» nella principale?\n«В тот вечер стояла такая чудесная погода, (...) бывает только ранней осенью».',
    sentenceWithBlank: '«...такая погода, (...) бывает осенью».',
    options: [
      { label: 'A', text: 'какая (concordato in genere femminile con «погода»: такая..., какая...)' },
      { label: 'B', text: 'которая' },
      { label: 'C', text: 'что' },
      { label: 'D', text: 'чей' }
    ],
    correctOption: 'A',
    hint: 'La correlazione qualitativa tipica è «такой..., какой...» (concordato con il sostantivo determinato).',
    explanation:
      'Risposta esatta: A (какая). Glazunova p. 312, §420: «Союзное слово КАКОЙ согласуется с указательным местоимением ТАКОЙ и определяемым существительным, выражая качественную аналогию: Это была такая радость, какая выпадает редко в жизни».',
    bookRuleRef: 'Glazunova §420, p. 312',
    tags: ['Определительные придаточные', 'Такой какой', 'Качественная аналогия']
  },
  {
    id: 'q-s3-sub-place-vezde-gde-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Словосочетание)',
    chapterId: 'sec3-sub-place',
    chapterTitle: 'Придаточные места: везде... где, всюду... где',
    topicName: 'Subordinate di luogo con valore generalizzante',
    exerciseSource: 'Sezione 3, Esercizio 439, frase 3 (p. 325)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale pronome relativo di stato in luogo si collega all\'avverbio generalizzante «везде / всюду»?\n«Везде, (...) ступала нога исследователя, открывались новые виды флоры».',
    sentenceWithBlank: '«Везде, (...) ступала нога, открывались виды».',
    options: [
      { label: 'A', text: 'где (stato in luogo o ambito di presenza: везде, где...)' },
      { label: 'B', text: 'куда' },
      { label: 'C', text: 'откуда' },
      { label: 'D', text: 'когда' }
    ],
    correctOption: 'A',
    hint: '«Везде, где...» (ovunque... in cui...).',
    explanation:
      'Risposta esatta: A (где). Glazunova p. 325, §439: «При указательных определительных наречиях везде, всюду, отовсюду придаточная часть присоединяется союзным словом ГДЕ: Всюду, где протекала река, зеленели луга».',
    bookRuleRef: 'Glazunova §439, p. 325',
    tags: ['Придаточные места', 'Везде где', 'Обобщение']
  },
  {
    id: 'q-s3-sub-expl-kak-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Словосочетание)',
    chapterId: 'sec3-sub-explicative',
    chapterTitle: 'Изъяснительные придаточные: союз «как» vs «что»',
    topicName: 'Percezione diretta visiva/uditiva introdotta da «как»',
    exerciseSource: 'Sezione 3, Esercizio 414, frase 3 (p. 307)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale connettivo esprime la vivida percezione sensoriale immediata (ascoltare o guardare il processo in diretta svolgimento)?\n«Мы затаили дыхание и слушали, (...) в ночной тишине шумит прибой».',
    sentenceWithBlank: '«Слушали, (...) шумит прибой».',
    options: [
      { label: 'A', text: 'как (introduce la percezione sensoriale viva e diretta dell\'azione in corso)' },
      { label: 'B', text: 'что (introdurrebbe solo una nozione o constatazione di fatto astratta)' },
      { label: 'C', text: 'будто' },
      { label: 'D', text: 'чтобы' }
    ],
    correctOption: 'A',
    hint: 'Dopo verbi sensoriali (смотреть, слушать, чувствовать, видеть) «как» indica che il soggetto osserva o ascolta direttamente con i propri sensi la scena in azione.',
    explanation:
      'Risposta esatta: A (как). Glazunova p. 307, §414: «После глаголов восприятия (видеть, слышать, смотреть, чувствовать) союз КАК подчеркивает непосредственное чувственное восприятие процесса в динамике: Я видел, как они бежали (наблюдал за процессом); Сравните: Я видел, что они бежали (констатация факта)».',
    bookRuleRef: 'Glazunova §414, p. 307',
    tags: ['Изъяснительные придаточные', 'Союз как', 'Непосредственное восприятие']
  },
  {
    id: 'q-s3-sub-cond-kol-skoro-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Словосочетание)',
    chapterId: 'sec3-sub-conditional',
    chapterTitle: 'Придаточные условия: книжный союз «коль скоро»',
    topicName: 'Variante colta e formale di «раз»: коль скоро',
    exerciseSource: 'Sezione 3, Esercizio 466, frase 1 (p. 347)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Quale congiunzione condizionale colta e ufficiale equivale a «раз / если уж»?\n«(...) стороны подписали соглашение, его необходимо строго выполнять».',
    sentenceWithBlank: '«(...) стороны подписали договор, его надо выполнять».',
    options: [
      { label: 'A', text: 'Коль скоро (variante letteraria formale per «posto che / dal momento che»)' },
      { label: 'B', text: 'Как скоро' },
      { label: 'C', text: 'Только что' },
      { label: 'D', text: 'Лишь только' }
    ],
    correctOption: 'A',
    hint: '«Коль скоро» è una congiunzione classica colta per «dal momento che / se è vero che».',
    explanation:
      'Risposta esatta: A (Коль скоро). Glazunova p. 347, §466: «Книжный союз КОЛЬ СКОРО синонимичен союзу РАЗ и оформляет реальное условие, опирающееся на уже признанный факт: Коль скоро вы согласились, отступать поздно».',
    bookRuleRef: 'Glazunova §466, p. 347',
    tags: ['Придаточные условия', 'Коль скоро', 'Книжный стиль']
  },
  {
    id: 'q-s3-asyn-explan-colon-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Словосочетание)',
    chapterId: 'sec3-asyndetic',
    chapterTitle: 'Бессоюзные предложения: двоеточие пояснения (а именно)',
    topicName: 'Due punti per chiarimento esplicativo interno (а именно)',
    exerciseSource: 'Sezione 3, Esercizio 488, frase 4 (p. 370)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale punteggiatura separa le proposizioni asindetiche quando la seconda illustra nel dettaglio cosa significa o include la prima (equivalente ad «а именно»)?\n«У нас было только одно заветное желание (...) вернуться домой живыми и невредимыми».',
    sentenceWithBlank: '«Было одно желание (...) вернуться домой».',
    options: [
      { label: 'A', text: ': (двоеточие: esplicita il contenuto del termine generico «желание»)' },
      { label: 'B', text: '— (тире)' },
      { label: 'C', text: ', (запятая)' },
      { label: 'D', text: '; (точка с запятой)' }
    ],
    correctOption: 'A',
    hint: 'I due punti (двоеточие) si usano quando la seconda proposizione svela il contenuto concreto di parole come «желание, мысль, вопрос, одно» (si può inserire «a именно»).',
    explanation:
      'Risposta esatta: A (: двоеточие). Glazunova p. 370, §488: «ДВОЕТОЧИЕ ставится, если вторая часть раскрывает или поясняет содержание первой (между ними можно вставить А ИМЕННО): У меня есть мечта: увидеть весь мир своими глазами; В плане было одно упущение: не учли погоду».',
    bookRuleRef: 'Glazunova §488, p. 370',
    tags: ['Бессоюзные предложения', 'Двоеточие', 'Пояснение']
  },
  {
    id: 'q-s3-coord-grad-ne-stolko-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Словосочетание)',
    chapterId: 'sec3-compound-coord',
    chapterTitle: 'Сложносочинённые предложения: не столько... сколько',
    topicName: 'Gradazione e rettifica connettiva: не столько... сколько',
    exerciseSource: 'Sezione 3, Esercizio 370, frase 2 (p. 274)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale coppia connettiva esprime che la seconda motivazione è assai più rilevante o veritiera della prima («non tanto... quanto...»)?\n«Он огорчился не столько из-за проигрыша, (...) из-за несправедливости судей».',
    sentenceWithBlank: '«...не столько из-за проигрыша, (...) несправедливости».',
    options: [
      { label: 'A', text: 'сколько (la coppia fissa russa è «не столько..., сколько...»)' },
      { label: 'B', text: 'как' },
      { label: 'C', text: 'но' },
      { label: 'D', text: 'так' }
    ],
    correctOption: 'A',
    hint: 'La formula binaria correlativa per «non tanto... quanto...» in russo è indissolubilmente «не столько..., сколько...».',
    explanation:
      'Risposta esatta: A (сколько). Glazunova p. 274, §370: «Сопоставительно-градационный союз НЕ СТОЛЬКО..., СКОЛЬКО... указывает на то, что второй признак или фактор представляется говорящему более точным и существенным, чем первый».',
    bookRuleRef: 'Glazunova §370, p. 274',
    tags: ['Сложносочинённые', 'Не столько сколько', 'Градация']
  },
  {
    id: 'q-s3-coord-join-da-i-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Словосочетание)',
    chapterId: 'sec3-compound-coord',
    chapterTitle: 'Сложносочинённые: союз да и',
    topicName: 'Valore aggiuntivo conclusivo con «да и»',
    exerciseSource: 'Sezione 3, Esercizio 372, frase 4 (p. 276)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale congiunzione coordinativa aggiuntiva introduce una considerazione supplementare decisiva che chiude il discorso?\n«Идти в кино уже поздно, (...) билетов наверняка нет».',
    sentenceWithBlank: '«...поздно, (...) билетов нет».',
    options: [
      { label: 'A', text: 'да и (introduce un\'ulteriore motivazione aggiuntiva confermativa: «e del resto / e poi tra l\'altro»)' },
      { label: 'B', text: 'но и' },
      { label: 'C', text: 'а то' },
      { label: 'D', text: 'зато' }
    ],
    correctOption: 'A',
    hint: '«Да и» aggiunge un argomento conclusivo che chiude ogni discussione («e poi comunque...»).',
    explanation:
      'Risposta esatta: A (да и). Glazunova p. 276, §372: «Присоединительный союз ДА И вносит попутное добавочное замечание, усиливающее и подтверждающее предыдущую мысль: Он не любил спорить, да и не умел; Нам пора домой, да и холодно стало».',
    bookRuleRef: 'Glazunova §372, p. 276',
    tags: ['Сложносочинённые', 'Да и', 'Присоединительный союз']
  },
  {
    id: 'q-s3-sub-concess-puskai-dazhe-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Словосочетание)',
    chapterId: 'sec3-sub-concessive',
    chapterTitle: 'Придаточные уступительные: как ни / сколько ни',
    topicName: 'Intensità concessiva con «как ни + verbo»',
    exerciseSource: 'Sezione 3, Esercizio 474, frase 3 (p. 353)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Quale costrutto concessivo ad alta intensità esprime che l\'azione, per quanto reiterata o intensa, non produce il risultato sperato?\n«(...) мы ни старались, закончить отчёт до полуночи не удалось».',
    sentenceWithBlank: '«(...) мы ни старались, закончить не удалось».',
    options: [
      { label: 'A', text: 'Как (Как ни старались = per quanto ci sforzassimo / malgrado tutti i nostri sforzi)' },
      { label: 'B', text: 'Что' },
      { label: 'C', text: 'Если' },
      { label: 'D', text: 'Пусть' }
    ],
    correctOption: 'A',
    hint: 'La struttura «Как ни + verbo» (oppure «Сколько ни + verbo») con la particella «ни» (e non «не»!) esprime la concessione superlativa («per quanto si facesse...»).',
    explanation:
      'Risposta esatta: A (Как). Glazunova p. 353, §474: «Союзные сочетания КАК НИ, СКОЛЬКО НИ, КУДА НИ с усилительной частицей НИ выражают предельную степень уступки: Как мы ни спешили, на поезд опоздали; Сколько ни читай эту книгу, каждый раз находишь новое».',
    bookRuleRef: 'Glazunova §474, p. 353',
    tags: ['Придаточные уступительные', 'Как ни', 'Частица ни']
  }
];
