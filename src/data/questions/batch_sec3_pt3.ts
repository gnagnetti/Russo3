import { Question } from '../../types';

export const QUESTIONS_BATCH_SECTION_3_PART3: Question[] = [
  // --- Esercizi d'autore sulla Frase Complessa (Glazunova pp. 363-366, Es. 482-484) ---
  {
    id: 'q-s3-lit-ilf-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Словосочетание)',
    chapterId: 'sec3-repetition-lit',
    chapterTitle: 'Материал для повторения: язык сатирической классики',
    topicName: 'Subordinate nella satira di Il\'f e Petrov',
    exerciseSource: 'Sezione 3, Esercizio 483 (Il\'ja Il\'f ed Evgenij Petrov, p. 363, chiave p. 413)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Dal testo de «Le dodici sedie» di Il\'f e Petrov presente in Glazunova: quale connettivo introduce la circostanza temporale di simultaneità tra le due azioni comiche?\n«В то время как Остап Бендер вдохновенно вещал, Воробьянинов (...)».',
    sentenceWithBlank: '«(...) Остап вещал, Воробьянинов дрожал».',
    options: [
      { label: 'A', text: 'В то время как (congiunzione complessa di simultaneità temporale parallela e contrastiva)' },
      { label: 'B', text: 'Покуда не' },
      { label: 'C', text: 'Как скоро' },
      { label: 'D', text: 'Едва только' }
    ],
    correctOption: 'A',
    hint: '«В то время как» collega due situazioni che avvengono nello stesso identico momento, spesso con sfumatura di contrapposizione (mentre... al tempo stesso...).',
    explanation:
      'Risposta esatta: A (В то время как). Glazunova p. 363 (Es. 483, Il\'f e Petrov): «Союз В ТО ВРЕМЯ КАК оформляет временную одновременность двух процессов с частым оттенком сопоставления или противопоставления субъектов».',
    bookRuleRef: 'Glazunova §483, p. 363',
    tags: ['Ильф и Петров', 'В то время как', 'Одновременность']
  },
  {
    id: 'q-s3-lit-dovlatov-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Словосочетание)',
    chapterId: 'sec3-repetition-lit',
    chapterTitle: 'Материал для повторения: язык современной литературы',
    topicName: 'Sintassi sintetica e paratassi in Sergej Dovlatov',
    exerciseSource: 'Sezione 3, Esercizio 484 (Sergej Dovlatov, p. 364)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Nella prosa laconica di Sergej Dovlatov, quale struttura sintattica asindetica riflette il ritmo serrato e l\'umorismo distaccato?\n«Он посмотрел на часы: до поезда оставалось десять минут».',
    sentenceWithBlank: '«Он посмотрел на часы (...) до поезда оставалось десять минут».',
    options: [
      { label: 'A', text: ': (i due punti segnalano che la seconda parte esplicita ciò che il soggetto ha visto o scoperto guardando l\'orologio, sottintendendo «и увидел, что»)' },
      { label: 'B', text: '— (тире)' },
      { label: 'C', text: '; (точка с запятой)' },
      { label: 'D', text: ', (простая запятая)' }
    ],
    correctOption: 'A',
    hint: 'Dopo verbi di percezione (посмотреть, оглянуться, прислушаться) i due punti indicano che si omette «e vide/e udì che...».',
    explanation:
      'Risposta esatta: A (: двоеточие). Glazunova p. 364 (da S. Dovlatov): «Двоеточие ставится в бессоюзном предложении, если в первой части содержатся глаголы восприятия (посмотреть, оглянуться, услышать), предупреждающие о том, что далее следует изложение увиденного/услышанного (можно вставить "и увидел, что")».',
    bookRuleRef: 'Glazunova §484, p. 364',
    tags: ['Довлатов', 'Двоеточие', 'Глаголы восприятия']
  },
  {
    id: 'q-s3-sub-consec-tak-chto-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Словосочетание)',
    chapterId: 'sec3-sub-consecutive',
    chapterTitle: 'Придаточные следствия: так что',
    topicName: 'Punteggiatura e valore della congiunzione consecutiva «так что»',
    exerciseSource: 'Sezione 3, Esercizio 448, frase 2 (p. 332)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Qual è la regola di interpunzione fondamentale per la congiunzione consecutiva «так что» quando esprime il risultato dell\'intera frase reggente?\n«Дождь лил как из ведра (...) выйти на улицу было совершенно невозможно».',
    sentenceWithBlank: '«...как из ведра, (...) выйти было невозможно».',
    options: [
      { label: 'A', text: ', так что (la virgola si pone prima dell\'intera congiunzione «так что», senza spezzarla, quando l\'effetto discende dall\'intero enunciato)' },
      { label: 'B', text: 'так, что (solo se «так» funge da avverbio di modo correlato a un aggettivo/verbo)' },
      { label: 'C', text: 'поэтому что' },
      { label: 'D', text: 'ибо так' }
    ],
    correctOption: 'A',
    hint: 'La congiunzione di conseguenza pura «так что» NON si spezza: la virgola va prima di «так che» (, так что...).',
    explanation:
      'Risposta esatta: A (, так что). Glazunova p. 332: «Союз ТАК ЧТО выражает следствие, вытекающее из всего содержания главной части. Запятая ставится ПЕРЕД всем союзом (а не между так и что): Снег валил хлопьями, так что видимость была нулевой. Сравните с расчленённым союзом меры: Он устал так, что с трудом держался на ногах».',
    bookRuleRef: 'Glazunova §448, p. 332',
    tags: ['Придаточные следствия', 'Так что', 'Пунктуация']
  },
  {
    id: 'q-s3-sub-reason-blagodarya-tomu-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Словосочетание)',
    chapterId: 'sec3-sub-cause',
    chapterTitle: 'Придаточные причины: благодаря тому что',
    topicName: 'Congiunzione causale favorevole complessa: благодаря тому что',
    exerciseSource: 'Sezione 3, Esercizio 444, frase 3 (p. 330)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale congiunzione complessa introduce una proposizione causale il cui evento ha determinato un beneficio positivo?\n«Пациент быстро пошёл на поправку (...) операцию провели вовремя».',
    sentenceWithBlank: '«...на поправку (...) операцию провели вовремя».',
    options: [
      { label: 'A', text: 'благодаря тому что (causale di circostanza favorevole)' },
      { label: 'B', text: 'из-за того что (causale di ostacolo o esito infausto)' },
      { label: 'C', text: 'несмотря на то что (concessiva)' },
      { label: 'D', text: 'для того чтобы (finale)' }
    ],
    correctOption: 'A',
    hint: '«Благодаря тому что» si usa rigorosamente quando la causa è benefica o fruttuosa.',
    explanation:
      'Risposta esatta: A (благодаря тому что). Glazunova p. 330: «Сложный союз БЛАГОДАРЯ ТОМУ ЧТО оформляет причинную связь с положительным следствием: Мы успели вовремя благодаря тому, что выехали ранним утром. Союз ИЗ-ЗА ТОГО ЧТО оформляет отрицательную причину: Опоздали из-за того, что поезд задержался».',
    bookRuleRef: 'Glazunova §444, p. 330',
    tags: ['Придаточные причины', 'Благодаря тому что', 'Положительное следствие']
  },
  {
    id: 'q-s3-sub-reason-iz-za-togo-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Словосочетание)',
    chapterId: 'sec3-sub-cause',
    chapterTitle: 'Придаточные причины: из-за того что',
    topicName: 'Causale con esito sfavorevole: из-за того что',
    exerciseSource: 'Sezione 3, Esercizio 446, frase 1 (p. 331)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Completa la frase complessa causale che indica la ragione di un contrattempo spiacevole:\n«Концерт пришлось отменить (...) певец внезапно потерял голос».',
    sentenceWithBlank: '«Концерт отменили (...) певец потерял голос».',
    options: [
      { label: 'A', text: 'из-за того что (introduce la causa di un danno o impedimento subito)' },
      { label: 'B', text: 'благодаря тому что' },
      { label: 'C', text: 'с тем чтобы' },
      { label: 'D', text: 'будто бы' }
    ],
    correctOption: 'A',
    hint: 'Per danni, ritardi o contrattempi spiacevoli il nesso causale corretto è «из-за того что».',
    explanation:
      'Risposta esatta: A (из-за того что). Glazunova p. 331: «ИЗ-ЗА ТОГО ЧТО — причинный союз со значением помехи, неблагоприятного обстоятельства, вызвавшего срыв планов или негативный результат: Матч не состоялся из-за того, что поле размыло дождём».',
    bookRuleRef: 'Glazunova §446, p. 331',
    tags: ['Придаточные причины', 'Из-за того что', 'Помеха']
  },
  {
    id: 'q-s3-sub-cond-raz-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Словосочетание)',
    chapterId: 'sec3-sub-conditional',
    chapterTitle: 'Придаточные условия: союз «раз»',
    topicName: 'Congiunzione condizionale-causale di evidenza: раз... то...',
    exerciseSource: 'Sezione 3, Esercizio 464, frase 3 (p. 346)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale valore assume la congiunzione «раз» all\'inizio della proposizione subordinata?\n«Раз ты дал обещание, то должен его сдержать».',
    sentenceWithBlank: '«Раз ты дал обещание, (...) должен его сдержать».',
    options: [
      { label: 'A', text: 'Condizionale fondata su un fatto già accertato e reale («dal momento che / una volta che») correlata a «то»' },
      { label: 'B', text: 'Temporale equivalente a «quando»' },
      { label: 'C', text: 'Concessiva equivalente a «sebbene»' },
      { label: 'D', text: 'Finale equivalente a «affinché»' }
    ],
    correctOption: 'A',
    hint: '«Раз» introduce una condizione che è già un dato di fatto indubitabile («dal momento che / visto che ormai...»).',
    explanation:
      'Risposta esatta: A. Glazunova p. 346: «Союз РАЗ вносит значение реального условия, основанного на непреложном, уже совершившемся факте или очевидной предпосылке (синоним "коль скоро", "если уж"): Раз взялся за дело, доведи его до конца; Раз мы здесь, давайте всё осмотрим».',
    bookRuleRef: 'Glazunova §464, p. 346',
    tags: ['Придаточные условия', 'Союз раз', 'Очевидное условие']
  },
  {
    id: 'q-s3-sub-conc-pust-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Словосочетание)',
    chapterId: 'sec3-sub-concessive',
    chapterTitle: 'Придаточные уступительные: союз пусть / пускай',
    topicName: 'Valore concessivo di «пусть» nella lingua viva',
    exerciseSource: 'Sezione 3, Esercizio 472, frase 2 (p. 352)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Nel registro colloquiale ed espressivo, quale particella-congiunzione assume valore concessivo equivalente a «хотя» (sebbene / anche se)?\n«(...) это трудно, но мы обязательно справимся».',
    sentenceWithBlank: '«(...) это трудно, но мы справимся».',
    options: [
      { label: 'A', text: 'Пусть (valore concessivo: «anche se è difficile / ammettiamo pure che sia difficile, tuttavia...»)' },
      { label: 'B', text: 'Раз' },
      { label: 'C', text: 'Будто' },
      { label: 'D', text: 'Словно' }
    ],
    correctOption: 'A',
    hint: '«Пусть / Пускай» all\'inizio di una frase seguito da «но / зато» esprime una concessione franca: «Anche se... ma...».',
    explanation:
      'Risposta esatta: A (Пусть). Glazunova p. 352: «Частица-союз ПУСТЬ / ПУСКАЙ в сложноподчинённом предложении выражает допущение или уступку (синоним хотя): Пусть дорога трудна, но мы дойдём; Пускай он ошибся, зато искренне раскаялся».',
    bookRuleRef: 'Glazunova §472, p. 352',
    tags: ['Уступительные придаточные', 'Пусть', 'Допущение']
  },
  {
    id: 'q-s3-sub-purp-daby-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Словосочетание)',
    chapterId: 'sec3-sub-purpose',
    chapterTitle: 'Придаточные цели: архаичный союз «дабы»',
    topicName: 'Sfumature stilistiche di congiunzioni finali: дабы vs с тем чтобы',
    exerciseSource: 'Sezione 3, Esercizio 455, frase 4 (p. 338)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Nel commento stilistico di Glazunova a p. 338, come viene classificata la congiunzione finale «дабы» rispetto allo standard «чтобы»?\n«Он упорно трудился, дабы не посрамить честь своего рода».',
    sentenceWithBlank: '«...трудился, дабы не посрамить честь рода».',
    options: [
      { label: 'A', text: 'Arcaismo solenne e libresco (устаревший книжный союз), usato per conferire tono epico, ironico o elevato' },
      { label: 'B', text: 'Gergo giovanile contemporaneo' },
      { label: 'C', text: 'Errore ortografico dialettale' },
      { label: 'D', text: 'Forma mutuata dal francese' }
    ],
    correctOption: 'A',
    hint: '«Дабы» è la congiunzione finale slava ecclesiastica e arcaica («affinché»), usata oggi nella letteratura colta o in chiave satirica.',
    explanation:
      'Risposta esatta: A. Glazunova p. 338: «Союз ДАБЫ является устаревшим, книжным вариантом союза ЧТОБЫ. Он используется в исторической стилизации, в высоком стиле или с ироническим оттенком: Учитесь, дабы принести пользу отечеству».',
    bookRuleRef: 'Glazunova §455, p. 338',
    tags: ['Придаточные цели', 'Дабы', 'Книжный стиль']
  },
  {
    id: 'q-s3-asyn-interrog-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Словосочетание)',
    chapterId: 'sec3-asyndetic',
    chapterTitle: 'Бессоюзные сложные предложения: вопрос в первой части',
    topicName: 'Trattino dopo domanda retorica nella prima proposizione',
    exerciseSource: 'Sezione 3, Esercizio 489, frase 4 (p. 371)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Quale punteggiatura separa le due parti asindetiche quando la prima pone una domanda o introduce un dubbio a cui la seconda risponde risolutamente?\n«Хочешь мира (...) готовься к войне».',
    sentenceWithBlank: '«Хочешь мира (...) готовься к войне».',
    options: [
      { label: 'A', text: '— (тире: unisce la condizione/domanda implicita alla conclusione categorica)' },
      { label: 'B', text: ': (двоеточие)' },
      { label: 'C', text: ', (semplice virgola)' },
      { label: 'D', text: '; (punto e virgola)' }
    ],
    correctOption: 'A',
    hint: 'La struttura paremiologica «Хочешь... — делай...» richiede sempre la linea orizzontale (тире).',
    explanation:
      'Risposta esatta: A (— тире). Glazunova p. 371: «ТИРЕ ставится в бессоюзном предложении, если первая часть имеет форму вопроса или побуждения, служащих условием для второй: Хочешь быть счастливым — учись быть терпеливым; Назвался груздём — полезай в кузов».',
    bookRuleRef: 'Glazunova §489, p. 371',
    tags: ['Бессоюзные предложения', 'Тире', 'Хочешь мира']
  },
  {
    id: 'q-s3-multi-sub-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Словосочетание)',
    chapterId: 'sec3-complex-multi',
    chapterTitle: 'Многочленные сложные предложения: соподчинение',
    topicName: 'Subordinazione omogenea senza ripetizione del connettore «что»',
    exerciseSource: 'Sezione 3, Esercizio 495, frase 2 (p. 372)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Quando due subordinate omogenee congiunte da «и» dipendono dallo stesso verbo della principale, la congiunzione «что» può essere omessa nella seconda proposizione e NON si mette la virgola prima di «и»?\n«Он объявил, что конференция переносится и (...) все заседания отменяются».',
    sentenceWithBlank: '«...что конференция переносится и (...) заседания отменяются».',
    options: [
      { label: 'A', text: 'Vero: nelle subordinate omogenee coordinate da «и» il secondo «что» può essere sottinteso e la virgola prima di «и» NON si mette (regola dell\'omogeneità)' },
      { label: 'B', text: 'Falso: la virgola prima di «и» è sempre obbligatoria tra proposizioni' },
      { label: 'C', text: 'Falso: il «что» deve essere sempre ripetuto tre volte' },
      { label: 'D', text: 'Si può usare solo se il predicato è al futuro' }
    ],
    correctOption: 'A',
    hint: 'Come per i membri omogenei della frase semplice, se due subordinate dello stesso tipo sono unite dalla congiunzione «и», prima di «и» NON si mette alcuna virgola!',
    explanation:
      'Risposta esatta: A (Vero). Glazunova p. 372: «При однородном соподчинении придаточных частей, соединённых одиночным союзом И, запятая ПЕРЕД И НЕ СТАВИТСЯ, а подчинительный союз во второй части может опускаться: Он сказал, что мы скоро приедем и (что) нас встретят на вокзале».',
    bookRuleRef: 'Glazunova §495, p. 372',
    tags: ['Многочленные предложения', 'Однородное соподчинение', 'Запятая перед и']
  }
];
