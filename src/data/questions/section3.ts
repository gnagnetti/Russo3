import { Question } from '../../types';

export const QUESTIONS_SECTION_3: Question[] = [
  // --- Coordinate (Сложносочинённые предложения) ---
  {
    id: 'q-s3-ex357-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Сложное предложение)',
    chapterId: 'sec3-compound-coord',
    chapterTitle: 'Сложносочинённые предложения',
    topicName: 'Congiunzione copulativa «да» col valore di «и»',
    exerciseSource: 'Sezione 3, Esercizio 357, frase б (p. 264)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Nel registro colloquiale o narrativo, quale congiunzione assume lo stesso valore di «и» in:\n«Было тихо, только за окном хлестал дождь (...) выл ветер»?',
    sentenceWithBlank: '«...хлестал дождь, (...) выл ветер».',
    options: [
      { label: 'A', text: 'да (in valore di congiunzione copulativa «и»)' },
      { label: 'B', text: 'но' },
      { label: 'C', text: 'а то' },
      { label: 'D', text: 'будто' }
    ],
    correctOption: 'A',
    hint: 'La congiunzione «да» nel parlato e nella prosa tradizionale unisce due proposizioni con valore connettivo identico a «и».',
    explanation:
      'Risposta esatta: A (да). Box a p. 264: «Союз ДА используется в качестве разговорного варианта союза И: Было тихо, только за окном хлестал дождь, да выл ветер (За окном хлестал дождь, а кроме того, выл ветер)».',
    bookRuleRef: 'Glazunova §357б, Box p. 264',
    tags: ['Сложносочинённые предложения', 'Союз да', 'Разговорный вариант']
  },
  {
    id: 'q-s3-ex364-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Сложное предложение)',
    chapterId: 'sec3-compound-coord',
    chapterTitle: 'Сложносочинённые предложения',
    topicName: 'Congiunzioni coordinate: а vs но',
    exerciseSource: 'Sezione 3, Esercizio 364, frase 1 (p. 270, chiave p. 401)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Scegli la congiunzione corretta tra «а» e «но» per collegare le due proposizioni:\n«Обед давно закончился, (...) гости продолжали сидеть за столом...»',
    sentenceWithBlank: '«Обед давно закончился, (...) гости продолжали сидеть за столом...»',
    options: [
      { label: 'A', text: 'но (segnala contraddizione con la fine logica del pranzo)' },
      { label: 'B', text: 'а (segnala solo pura simultaneità neutra)' },
      { label: 'C', text: 'ибо (congiunzione arcaica causale)' },
      { label: 'D', text: 'да и (congiunzione aggiuntiva)' }
    ],
    correctOption: 'A',
    hint: 'Se il pranzo è terminato, ci si aspetterebbe che gli ospiti se ne andassero; il fatto che continuino a stare a tavola contraddice l\'aspettativa logica.',
    explanation:
      'Risposta esatta: A (но). Glazunova a p. 270 chiarisce: «В отличие от союза но, обозначающего противоречие (несоответствие между ситуациями), союз а указывает на различие в них при сохранении логической автономности: Он шёл пешком, но добрался первым vs Он шёл пешком, а его брат ехал на велосипеде». Qui c\'è contraddizione: «но».',
    bookRuleRef: 'Glazunova §364, Box p. 270',
    tags: ['Сложносочинённое', 'Союз но', 'Противоречие']
  },
  {
    id: 'q-s3-ex364-7',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Сложное предложение)',
    chapterId: 'sec3-compound-coord',
    chapterTitle: 'Сложносочинённые предложения',
    topicName: 'Congiunzione avversativa «а»: parallelo autonomo',
    exerciseSource: 'Sezione 3, Esercizio 364, frase 7 (p. 270, chiave p. 401)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale congiunzione confronta due mezzi di trasporto autonomi senza contraddizione:\n«Поездом до Минска ехать двое суток, (...) на самолёте можно долететь за несколько часов»?',
    sentenceWithBlank: '«...ехать двое суток, (...) на самолёте можно долететь за несколько часов».',
    options: [
      { label: 'A', text: 'а (confronto/parallelo tra due situazioni autonome distinte)' },
      { label: 'B', text: 'но (contraddizione interna)' },
      { label: 'C', text: 'зато' },
      { label: 'D', text: 'будто' }
    ],
    correctOption: 'A',
    hint: 'Non c\'è contraddizione logica: si mettono semplicemente a confronto due opzioni parallele e distinte (treno vs aereo).',
    explanation:
      'Risposta esatta: A (а). Box p. 270: «Союз А указывает на различие в ситуациях сложного предложения при сохранении их логической автономности (независимости друг от друга): Поездом до Минска ехать двое суток, а на самолёте можно долететь за несколько часов» (chiave p. 401).',
    bookRuleRef: 'Glazunova §364, Box p. 270',
    tags: ['Союз а', 'Сопоставление', 'Сложносочинённое']
  },
  {
    id: 'q-s3-ex368-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Сложное предложение)',
    chapterId: 'sec3-compound-coord',
    chapterTitle: 'Сложносочинённые предложения',
    topicName: 'Congiunzioni avversative: однако vs зато',
    exerciseSource: 'Sezione 3, Esercizio 368, frase 1 (p. 274, chiave p. 402)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale congiunzione sinonimica di «но» si usa quando la seconda proposizione ha valore neutrale/negativo di riserva formale?\n«Оппозиция одобряет проведение переговоров с властью, (...) ждёт от неё конкретных решений».',
    sentenceWithBlank: '«...переговоров с властью, (...) ждёт от неё конкретных решений».',
    options: [
      { label: 'A', text: 'однако' },
      { label: 'B', text: 'зато' },
      { label: 'C', text: 'притом' },
      { label: 'D', text: 'тоже' }
    ],
    correctOption: 'A',
    hint: '«Зато» si usa solo quando la seconda frase introduce un vantaggio positivo («недорогой, зато вкусный»). «Однако» si usa in contesti formali o neutrali.',
    explanation:
      'Risposta esatta: A (однако). Box a p. 274: «Союз однако используется как синоним союза но в ситуациях, имеющих нейтральное или отрицательное значение. Союз зато, напротив, употребляется в ситуациях, имеющих положительное значение: Мы опоздали, зато прекрасно провели время».',
    bookRuleRef: 'Glazunova §368, Box p. 274',
    tags: ['Однако', 'Зато', 'Противительные союзы']
  },
  {
    id: 'q-s3-ex368-7',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Сложное предложение)',
    chapterId: 'sec3-compound-coord',
    chapterTitle: 'Сложносочинённые предложения',
    topicName: 'Compensazione positiva con la congiunzione «зато»',
    exerciseSource: 'Sezione 3, Esercizio 368, frase 7 (p. 274, chiave p. 402)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale congiunzione introduce il risvolto positivo che riscatta una difficoltà iniziale?\n«Я никогда бы не сдал обычный устный экзамен, (...) практические задания выполнил на отлично».',
    sentenceWithBlank: '«...не сдал обычный устный экзамен, (...) практические задания выполнил на отлично».',
    options: [
      { label: 'A', text: 'зато' },
      { label: 'B', text: 'однако' },
      { label: 'C', text: 'притом' },
      { label: 'D', text: 'то есть' }
    ],
    correctOption: 'A',
    hint: 'La seconda proposizione introduce una brillante riuscita che compensa l\'impossibilità della prima.',
    explanation:
      'Risposta esatta: A (зато). Box a p. 274: «Союз ЗАТО употребляется в качестве синонима союза но в ситуациях, имеющих положительное значение: На концерт мы опоздали, зато прекрасно провели время; Устный не сдал, зато практические задания выполнил на отлично» (chiave p. 402).',
    bookRuleRef: 'Glazunova §368, Box p. 274',
    tags: ['Зато', 'Компенсация', 'Противительные союзы']
  },
  {
    id: 'q-s3-ex371-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Сложное предложение)',
    chapterId: 'sec3-compound-coord',
    chapterTitle: 'Сложносочинённые предложения',
    topicName: 'La congiunzione enclitica «же»',
    exerciseSource: 'Sezione 3, Esercizio 371, frase 1 (p. 276, chiave p. 402)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Collega le due frasi mediante la congiunzione avversativa enclitica «же»:\n«Он наслаждался тем, что происходило на сцене. Я испытывал от всего увиденного невыразимую скуку».\n-> «Он наслаждался тем, что происходило на сцене; (...) испытывал невыразимую скуку».',
    sentenceWithBlank: '«...на сцене; (...) испытывал невыразимую скуку».',
    options: [
      { label: 'A', text: 'я же' },
      { label: 'B', text: 'же я' },
      { label: 'C', text: 'и я же' },
      { label: 'D', text: 'а же я' }
    ],
    correctOption: 'A',
    hint: 'La particella/congiunzione «же» non sta all\'inizio della proposizione, ma subito DOPO la prima parola che realizza la contrapposizione (dopo il pronome я).',
    explanation:
      'Risposta esatta: A (я же). Box a p. 276: «Союз ЖЕ указывает на противопоставление отдельных компонентов в составе этих ситуаций. Же стоит в начале второй части сложного предложения ПОСЛЕ слова, образующего противопоставление: Дома всё было хорошо, в институте же его по-прежнему преследовали неприятности; Он наслаждался, я же испытывал скуку» (chiave p. 402).',
    bookRuleRef: 'Glazunova §371, Box p. 276',
    tags: ['Союз же', 'Энклитика', 'Противопоставление']
  },
  {
    id: 'q-s3-ex378-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Сложное предложение)',
    chapterId: 'sec3-compound-coord',
    chapterTitle: 'Сложносочинённые предложения',
    topicName: 'Congiunzione avversativa «иначе» al posto di «если не»',
    exerciseSource: 'Sezione 3, Esercizio 378, frase 1 (p. 280, chiave p. 402)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Trasforma la subordinata «Если мы не придём вовремя, они подумают, что с нами что-то случилось» usando «иначе»:',
    sentenceWithBlank: '«Мы должны прийти вовремя, (...) они подумают, что с нами что-то случилось».',
    options: [
      { label: 'A', text: 'иначе (а то, не то)' },
      { label: 'B', text: 'зато' },
      { label: 'C', text: 'пока' },
      { label: 'D', text: 'поэтому' }
    ],
    correctOption: 'A',
    hint: '«Иначе» (o i suoi equivalenti colloquiali «а то», «не то») indica una conseguenza negativa che si verificherà se la condizione non viene rispettata.',
    explanation:
      'Risposta esatta: A (иначе). Box a p. 280: «Союз ИНАЧЕ указывает на негативную ситуацию, которая может произойти, если условие, выраженное в первой части с помощью императива или модальных слов, не будет выполнено: Я должен выполнить его просьбу, иначе он обидится; Мы должны прийти вовремя, иначе они подумают...» (chiave p. 402).',
    bookRuleRef: 'Glazunova §378, Box p. 280',
    tags: ['Иначе', 'А то', 'Условие и следствие']
  },
  {
    id: 'q-s3-ex384-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Сложное предложение)',
    chapterId: 'sec3-compound-coord',
    chapterTitle: 'Сложносочинённые предложения',
    topicName: 'Congiunzioni coordinative: причём vs притом',
    exerciseSource: 'Sezione 3, Esercizio 384, frase 1 (p. 284, chiave p. 403)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Quale congiunzione si usa per collegare due proposizioni tematicamente legate e simultanee:\n«Я его хорошо знаю, (...) знакомы мы с ним со школы»?',
    sentenceWithBlank: '«Я его хорошо знаю, (...) знакомы мы с ним со школы».',
    options: [
      { label: 'A', text: 'причём (con variante притом)' },
      { label: 'B', text: 'только бы' },
      { label: 'C', text: 'пока' },
      { label: 'D', text: 'разве что' }
    ],
    correctOption: 'A',
    hint: 'Regola a p. 284: «Причём» si usa quando le situazioni sono connesse tematicamente e avvengono nel medesimo quadro informativo.',
    explanation:
      'Risposta esatta: A (причём / притом). Box a p. 284: «Союз ПРИЧЁМ употребляется, если ситуации, выраженные в первой и второй частях предложения, связаны между собой тематически и происходят одновременно: Он хорошо играл в теннис, причём его партнёр ни в чём не уступал ему. Союз ПРИТОМ — если не связаны тематически: Денег не было, притом есть очень хотелось» (chiave p. 403).',
    bookRuleRef: 'Glazunova §384, Box p. 284',
    tags: ['Причём', 'Притом', 'Присоединительные союзы']
  },
  {
    id: 'q-s3-ex386-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Сложное предложение)',
    chapterId: 'sec3-compound-coord',
    chapterTitle: 'Сложносочинённые предложения',
    topicName: 'Congiunzioni aggiuntive: тоже vs также',
    exerciseSource: 'Sezione 3, Esercizio 386, frase 1 e 2 (p. 285, chiave p. 403)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Analizza la frase: «Константин уже не молод, его жена (...) пенсионерка».\nQuale congiunzione è più appropriata tra «тоже» e «также»?',
    sentenceWithBlank: '«Константин уже не молод, его жена (...) пенсионерка».',
    options: [
      { label: 'A', text: 'тоже (indica equivalenza di predicato fra due soggetti distinti)' },
      { label: 'B', text: 'solo также, perché c\'è una virgola' },
      { label: 'C', text: 'то же (staccato)' },
      { label: 'D', text: 'так же (staccato)' }
    ],
    correctOption: 'A',
    hint: '«Тоже» si impiega quando l\'identità semantica riguarda il predicato tra soggetti diversi (anche lei non è giovane / è in pensione).',
    explanation:
      'Risposta esatta: A (тоже). Regola p. 285: «Союз тоже используется при повторении (соотнесении по смыслу) предикатов первой и второй частей сложного предложения: Я был рад его видеть, он тоже обрадовался. Союз также используется при соотнесении по принципу "целое - часть": Вчера мы ходили в театр, мне также удалось посмотреть выставку». Nella chiave a p. 403 per l\'es. 386, punto 2 la risposta è: «тоже».',
    bookRuleRef: 'Glazunova §386, Box p. 285',
    tags: ['Тоже', 'Также', 'Присоединительные союзы']
  },
  {
    id: 'q-s3-ex388-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Сложное предложение)',
    chapterId: 'sec3-compound-coord',
    chapterTitle: 'Сложносочинённые предложения',
    topicName: 'Ortografia: причём (congiunzione) vs при чём (pronome interrogativo)',
    exerciseSource: 'Sezione 3, Esercizio 388, frase 1 (p. 287, chiave p. 403)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Distingui l\'ortografia: «Я спросил его, (...) здесь наши отношения» (che cosa c\'entrano i nostri rapporti?):',
    sentenceWithBlank: '«Я спросил его, (...) здесь наши отношения».',
    options: [
      { label: 'A', text: 'при чём (staccato, pronome interrogativo «что» con preposizione «при»)' },
      { label: 'B', text: 'причём (unito, congiunzione coordinativa)' },
      { label: 'C', text: 'притом' },
      { label: 'D', text: 'при том' }
    ],
    correctOption: 'A',
    hint: 'Nella domanda «Che cosa c\'entra?» la parola «что» è pronome ed è preceduta da «при»: si scrive staccato con accento su «чём».',
    explanation:
      'Risposta esatta: A (при чём). Box a p. 287: «Союзы причём, притом следует отличать от местоимений что, то с предлогом при, которые в предложении заменяют существительное: ПРИ ЧЁМ тут ваши опасения? (staccato); Я спросил его, при чём здесь наши отношения; Завод был основан при том директоре (staccato)» (chiave p. 403).',
    bookRuleRef: 'Glazunova §388, Box p. 287',
    tags: ['При чём vs причём', 'Орфография', 'Местоимения']
  },

  // --- Subordinate Esplicative (Изъяснительные придаточные) ---
  {
    id: 'q-s3-ex396-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Сложное предложение)',
    chapterId: 'sec3-sub-explicative',
    chapterTitle: 'Сложноподчинённые предложения: изъяснительные',
    topicName: 'Congiunzione «что» vs pronome relativo «что»',
    exerciseSource: 'Sezione 3, Esercizio 396, frase 1 (p. 292, chiave p. 404)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Nella frase «Сначала подумай, (...) ты хочешь сделать, а потом действуй»:\nChe ruolo sintattico svolge «что»?',
    sentenceWithBlank: '«Сначала подумай, (что) ты хочешь сделать...»',
    options: [
      { label: 'A', text: 'Союзное слово (pronome interrogativo/relativo all\'Accusativo: oggetto diretto di сделать)' },
      { label: 'B', text: 'Простой подчинительный союз (congiunzione neutra non declinabile)' },
      { label: 'C', text: 'Частица' },
      { label: 'D', text: 'Вводное слово' }
    ],
    correctOption: 'A',
    hint: 'La parola «что» può essere sostituita da un sostantivo («подумай, какое действие ты хочешь сделать»): funge da complemento oggetto dell\'infinito сделать.',
    explanation:
      'Risposta esatta: A. Box a p. 292: «Союзное слово ЧТО в отличие от союза что является субъектом или объектом придаточного изъяснительного и в соответствии с этим изменяется по падежам: Сначала подумай, что (вин. пад. объекта) ты хочешь сделать; Я не мог предположить, что (союз) всё так закончится» (chiave p. 404).',
    bookRuleRef: 'Glazunova §396, Box p. 292',
    tags: ['Союз vs союзное слово', 'Изъяснительные', 'Винительный падеж']
  },
  {
    id: 'q-s3-ex397-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Сложное предложение)',
    chapterId: 'sec3-sub-explicative',
    chapterTitle: 'Сложноподчинённые предложения: изъяснительные',
    topicName: 'Subordinate esplicative: что vs как',
    exerciseSource: 'Sezione 3, Esercizio 397, frase 1 (p. 293, chiave p. 404)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Scegli la congiunzione corretta per esprimere la percezione sensoriale di un processo dinamico in svolgimento:\n«Я видел, (...) постепенно гасла полоска зари и над рекой поднимался туман».',
    sentenceWithBlank: '«Я видел, (...) постепенно гасла полоска зари...»',
    options: [
      { label: 'A', text: 'как' },
      { label: 'B', text: 'что' },
      { label: 'C', text: 'будто' },
      { label: 'D', text: 'чтобы' }
    ],
    correctOption: 'A',
    hint: 'La congiunzione «как» dopo verbi di percezione (видеть, слышать) descrive il processo visivo o sonoro nel suo svolgimento temporale.',
    explanation:
      'Risposta esatta: A (как). Box a p. 293: «В придаточных изъяснительных союз КАК употребляется со словами, обозначающими восприятие внешнего мира (слышать, видеть). В отличие от союза что, союз как указывает на ПРОЦЕСС: Я видел, как гасла полоска зари» (chiave p. 404).',
    bookRuleRef: 'Glazunova §397, Box p. 293',
    tags: ['Изъяснительные', 'Союз как vs что', 'Восприятие']
  },
  {
    id: 'q-s3-ex398-3',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Сложное предложение)',
    chapterId: 'sec3-sub-explicative',
    chapterTitle: 'Сложноподчинённые предложения: изъяснительные',
    topicName: 'Verbi di sogno e immaginazione: congiunzione будто',
    exerciseSource: 'Sezione 3, Esercizio 398, frase 3 (p. 293-294, chiave p. 404)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale congiunzione si impiega per introdurre un contenuto onirico o immaginario:\n«Мне снилось, (...) началась война».',
    sentenceWithBlank: '«Мне снилось, (...) началась война».',
    options: [
      { label: 'A', text: 'будто (как будто)' },
      { label: 'B', text: 'что' },
      { label: 'C', text: 'чтобы' },
      { label: 'D', text: 'ли' }
    ],
    correctOption: 'A',
    hint: 'I verbi di sogno e illusione (сниться, казаться, воображать) introducono una realtà fittizia mediante «будто / как будто».',
    explanation:
      'Risposta esatta: A (будто / как будто). Box a p. 294: «Союзы БУДТО, КАК БУДТО употребляются при выражении ложного или предполагаемого представления. С глаголами сниться, воображать употребляются союзы: Мне снилось, будто (как будто) я дома; с глаголом казаться — только союз будто: Казалось, будто времени у нас нет» (chiave p. 404).',
    bookRuleRef: 'Glazunova §398, Box p. 294',
    tags: ['Будто', 'Как будто', 'Сны и воображение']
  },
  {
    id: 'q-s3-ex399-bulgakov',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Сложное предложение)',
    chapterId: 'sec3-sub-explicative',
    chapterTitle: 'Сложноподчинённые предложения: изъяснительные',
    topicName: 'Discorso indiretto con la particella ЛИ (M. Bulgakov)',
    exerciseSource: 'Sezione 3, Esercizio 399, frase 1 (p. 294-295, chiave p. 404)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Trasforma la battuta diretta tratta da Bulgakov in discorso indiretto:\n«— Вы написали роман? — строго осведомился Рудольфи».',
    sentenceWithBlank: '«Рудольфи строго осведомился, (...) роман».',
    options: [
      { label: 'A', text: 'написал ли я' },
      { label: 'B', text: 'если я написал' },
      { label: 'C', text: 'что я написал ли' },
      { label: 'D', text: 'как я написал' }
    ],
    correctOption: 'A',
    hint: 'Nelle interrogative indirette senza pronome interrogativo la particella «ли» si posiziona subito dopo il verbo.',
    explanation:
      'Risposta esatta: A (написал ли я). Box a p. 294: «Союз ЛИ используется при трансформации прямой речи в косвенную в вопросительных предложениях без вопросительного слова. Ли ставится после слова, на которое хотят получить ответ: Незнакомец спросил, хорошая ли сегодня погода. Рудольфи осведомился, написал ли я роман» (chiave p. 404).',
    bookRuleRef: 'Glazunova §399, Box p. 294 & Chiave p. 404',
    tags: ['Булгаков', 'Частица ли', 'Косвенная речь']
  },
  {
    id: 'q-s3-ex404-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Сложное предложение)',
    chapterId: 'sec3-sub-explicative',
    chapterTitle: 'Сложноподчинённые предложения: изъяснительные',
    topicName: 'Correlativo «то» con verbi che reggono caso preposizionale',
    exerciseSource: 'Sezione 3, Esercizio 404 (p. 298-299)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Con quali verbi il pronome correlativo «то» nella reggente è OBBLIGATORIO prima della subordinata con «что»?',
    sentenceWithBlank: '«Глаголы, требующие указательного местоимения то: (...)».',
    options: [
      { label: 'A', text: 'дискутировать о том, что; сомневаться в том, что; исходить из того, что' },
      { label: 'B', text: 'видеть, что; доказать, что; утверждать, что' },
      { label: 'C', text: 'сказать, что; просить, чтобы' },
      { label: 'D', text: 'понимать, что; чувствовать, что' }
    ],
    correctOption: 'A',
    hint: 'I verbi che non possono unirsi a un oggetto diretto all\'accusativo e richiedono un legame logico mediato esigono il pronome «то» al caso corrispondente (в том, о том, из того).',
    explanation:
      'Risposta esatta: A. Tabella a p. 298 e regola a p. 299: «Глаголы первой группы (видеть, доказать, объяснить) не допускают указательного местоимения; глаголы третьей группы со значением логических операций (дискутировать о том, спорить о том, задуматься о том, исходить из того, состоять в том) ТРЕБУЮТ посредника в виде указательного местоимения ТО в предложном падеже».',
    bookRuleRef: 'Glazunova §404, Tabella p. 298',
    tags: ['Указательное то', 'Изъяснительные', 'Обязательное то']
  },

  // --- Subordinate Relative (Определительные придаточные) ---
  {
    id: 'q-s3-ex417-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Сложное предложение)',
    chapterId: 'sec3-sub-relative',
    chapterTitle: 'Сложноподчинённые предложения: определительные',
    topicName: 'Concordanza del pronome relativo который',
    exerciseSource: 'Sezione 3, Esercizio 417, frase 1 (p. 309, chiave p. 406)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Completa con la forma corretta di «который»:\n«Мой друг, (...) произошла эта история, в то время работал на Севере».',
    sentenceWithBlank: '«Мой друг, (...) произошла эта история...»',
    options: [
      { label: 'A', text: 'с которым' },
      { label: 'B', text: 'который' },
      { label: 'C', text: 'которому' },
      { label: 'D', text: 'о котором' }
    ],
    correctOption: 'A',
    hint: 'La costruzione dell\'evento dice «произошла с кем?»: il pronome concorda col maschile «друг» al caso Strumentale preceduto da «с».',
    explanation:
      'Risposta esatta: A (с которым). Box p. 310: «Который (-ая, -ое, -ые) в придаточном предложении заменяет существительное и используется в функции субъекта или объекта: Мой друг, с которым произошла эта история...» (chiave p. 406).',
    bookRuleRef: 'Glazunova §417, Box p. 310',
    tags: ['Который', 'Определительные придаточные', 'Падеж']
  },
  {
    id: 'q-s3-ex418-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Сложное предложение)',
    chapterId: 'sec3-sub-relative',
    chapterTitle: 'Сложноподчинённые предложения: определительные',
    topicName: 'Pronome relativo possessivo ЧЕЙ',
    exerciseSource: 'Sezione 3, Esercizio 418, frase 1 (p. 310, chiave p. 406)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Quale forma del pronome relativo «чей» si accorda correttamente nella frase seguente?\n«У Эвелины были знакомства в самых разных кругах; среди тех, (...) присутствие она считала необходимым...»',
    sentenceWithBlank: '«...среди тех, (...) присутствие она считала необходимым...»',
    options: [
      { label: 'A', text: 'чьё' },
      { label: 'B', text: 'чьих' },
      { label: 'C', text: 'чья' },
      { label: 'D', text: 'чьему' }
    ],
    correctOption: 'A',
    hint: '«Чей» concorda in genere, numero e caso con il sostantivo che LO SEGUE nella subordinata («присутствие», neutro), NON con l\'antecedente («тех»).',
    explanation:
      'Risposta esatta: A (чьё). Box a p. 310: «Союзное слово чей согласуется в роде, числе и падеже с существительным, обозначающим в придаточной части предмет: среди тех, ЧЬЁ ПРИСУТСТВИЕ она считала необходимым» (chiave p. 406).',
    bookRuleRef: 'Glazunova §418, Box p. 310 & Chiave p. 406',
    tags: ['Определительные', 'Чей', 'Согласование']
  },
  {
    id: 'q-s3-ex421-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Сложное предложение)',
    chapterId: 'sec3-sub-relative',
    chapterTitle: 'Сложноподчинённые предложения: определительные',
    topicName: 'Correlazione dimostrativa: тот, кто vs все, кто',
    exerciseSource: 'Sezione 3, Esercizio 421, frase 1 (p. 312, chiave p. 406)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Scegli il pronome correlativo dimostrativo appropriato al singolare:\n«(...), к кому он обращался, имел свою точку зрения на происходящее».',
    sentenceWithBlank: '«(...), к кому он обращался, имел свою точку зрения...»',
    options: [
      { label: 'A', text: 'Каждый (Тот)' },
      { label: 'B', text: 'Все' },
      { label: 'C', text: 'Такие' },
      { label: 'D', text: 'Никто' }
    ],
    correctOption: 'A',
    hint: 'Il predicato della frase reggente è al singolare maschile («имел свою точку зрения»): richiede un soggetto singolare correlato a «кто».',
    explanation:
      'Risposta esatta: A (Каждый / Тот). Box p. 312: «Придаточные определительные предложения с союзными словами кто, что присоединяются к главному предложению с помощью слов: все, каждый, всякий, любой, тот, такой: Каждый (Тот), к кому он обращался, имел...» (chiave p. 406).',
    bookRuleRef: 'Glazunova §421, Box p. 312',
    tags: ['Тот кто', 'Определительные', 'Корреляция']
  },

  // --- Subordinate Temporali, Causali, Finali, Condizionali e Asindetiche ---
  {
    id: 'q-s3-ex428-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Сложное предложение)',
    chapterId: 'sec3-sub-time',
    chapterTitle: 'Сложноподчинённые предложения: времени',
    topicName: 'Aspetto verbale nelle temporali con когда (Il\'f & Petrov)',
    exerciseSource: 'Sezione 3, Esercizio 428, frase 1 (p. 318, chiave p. 407)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale aspetto verbale esprime la simultaneità processuale nel brano di Il\'f e Petrov («Il vitello d\'oro»)?\n«Когда Бендер с завхозом (...) по дому, двери салютовали страшными ударами».',
    sentenceWithBlank: '«Когда Бендер с завхозом (...) по дому...»',
    options: [
      { label: 'A', text: 'проходили (imperfettivo: durata del tragitto simultanea al rumore)' },
      { label: 'B', text: 'прошли (perfettivo: azione già conclusa)' },
      { label: 'C', text: 'пройдут' },
      { label: 'D', text: 'пройти' }
    ],
    correctOption: 'A',
    hint: 'Le porte sbattevano mentre i due stavano camminando lungo i corridoi: azione imperfettiva prolungata di sfondo.',
    explanation:
      'Risposta esatta: A (проходили). Box p. 318: «Одновременность совершения действий в главной и придаточной частях выражается с помощью глаголов несовершенного вида: Когда шёл дождь, все радовались; Когда Бендер с завхозом проходили по дому, двери салютовали...» (chiave p. 407).',
    bookRuleRef: 'Glazunova §428, Box p. 318',
    tags: ['Вид глагола', 'Придаточные времени', 'Одновременность']
  },
  {
    id: 'q-s3-ex429-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Сложное предложение)',
    chapterId: 'sec3-sub-time',
    chapterTitle: 'Сложноподчинённые предложения: времени',
    topicName: 'Subordinate temporali: пока vs в то время как',
    exerciseSource: 'Sezione 3, Esercizio 429, frase 1 (p. 319, chiave p. 407)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Scegli la congiunzione corretta: «(...) все дома, мы можем обсудить планы на выходные».',
    sentenceWithBlank: '«(...) все дома, мы можем обсудить планы на выходные».',
    options: [
      { label: 'A', text: 'Пока (può avere come sinonimo «Если»)' },
      { label: 'B', text: 'В то время как' },
      { label: 'C', text: 'С тех пор как' },
      { label: 'D', text: 'Прежде чем' }
    ],
    correctOption: 'A',
    hint: 'Le due azioni sono legate sia nel tempo che nello spazio («tutti a casa»).',
    explanation:
      'Risposta esatta: A (Пока / Если). Box p. 319: «Союз ПОКА чаще употребляется, если действия связаны по времени и по месту: Пока все дома, мы можем обсудить... Если в качестве синонима выступает если, замена на в то время как невозможна» (chiave p. 407).',
    bookRuleRef: 'Glazunova §429, Box p. 319',
    tags: ['Придаточные времени', 'Пока', 'В то время как']
  },
  {
    id: 'q-s3-ex434-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Сложное предложение)',
    chapterId: 'sec3-sub-time',
    chapterTitle: 'Сложноподчинённые предложения: времени',
    topicName: 'Intervallo temporale vs Prescrizione obbligatoria',
    exerciseSource: 'Sezione 3, Esercizio 434, frasi 1 e 2 (p. 322-323, chiave p. 407)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Confronta: «до того как» (intervallo di tempo oggettivo) vs «прежде чем» (prescrizione raccomandata prima di agire):\n«Не волнуйся, мы внимательно изучили документ, (...) поставили под ним свои подписи».',
    sentenceWithBlank: '«...изучили документ, (...) поставили под ним свои подписи».',
    options: [
      { label: 'A', text: 'прежде чем (перед тем как)' },
      { label: 'B', text: 'пока' },
      { label: 'C', text: 'с тех пор как' },
      { label: 'D', text: 'в то время как' }
    ],
    correctOption: 'A',
    hint: '«Прежде чем» introduce la raccomandazione o sequenza necessaria di prudenza prima di compiere l\'azione irrevocabile.',
    explanation:
      'Risposta esatta: A (прежде чем / перед тем как). Box p. 323: «Союз ДО ТОГО КАК употребляется, если между ситуациями есть интервал во времени. Союз ПРЕЖДЕ ЧЕМ, как правило, используется при описании обязательных или общепринятых ситуаций: Прежде чем вы дадите согласие, хорошенько подумайте; изучили документ, прежде чем подписали» (chiave p. 407).',
    bookRuleRef: 'Glazunova §434, Box p. 323',
    tags: ['Прежде чем', 'До того как', 'Придаточные времени']
  },
  {
    id: 'q-s3-ex441-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Сложное предложение)',
    chapterId: 'sec3-sub-cause-res',
    chapterTitle: 'Сложноподчинённые предложения: причины и следствия',
    topicName: 'Causali: потому что vs оттого что',
    exerciseSource: 'Sezione 3, Esercizio 441, frase 1 (p. 328, chiave p. 408)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Quale congiunzione causale è richiesta per indicare la causa fisica diretta naturale:\n«По берегам реки трава росла густая и изумрудно-зелёная, (...) здесь было достаточно влаги»?',
    sentenceWithBlank: '«...трава росла густая и изумрудно-зелёная, (...) здесь было достаточно влаги».',
    options: [
      { label: 'A', text: 'оттого что (causa fisica diretta naturale)' },
      { label: 'B', text: 'потому что (è l\'unica ammessa nel russo)' },
      { label: 'C', text: 'так что (conseguenza)' },
      { label: 'D', text: 'затем что' }
    ],
    correctOption: 'A',
    hint: 'La presenza di acqua è il fattore fisico oggettivo immediato che produce la crescita dell\'erba.',
    explanation:
      'Risposta esatta: A (оттого что). Box a p. 328: «Союз ОТТОГО ЧТО указывает на причину, которая непосредственно вызывает действие главной части (физическое явление: трава росла густая оттого, что было достаточно влаги). Союз потому что указывает на обстоятельства, которые лежат в основе действия».',
    bookRuleRef: 'Glazunova §441, Box p. 328 & Chiave p. 408',
    tags: ['Придаточные причины', 'Оттого что', 'Потому что']
  },
  {
    id: 'q-s3-ex442-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Сложное предложение)',
    chapterId: 'sec3-sub-cause-res',
    chapterTitle: 'Сложноподчинённые предложения: причины и следствия',
    topicName: 'Causali complesse: благодаря тому что vs из-за того что',
    exerciseSource: 'Sezione 3, Esercizio 442, frase 1 (p. 329, chiave p. 408)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Trasforma la proposizione causale positiva «потому что были найдены дополнительные источники»:\n«Снижение коммунальных тарифов в столице стало возможным (...) были найдены дополнительные источники...»',
    sentenceWithBlank: '«...стало возможным (...) были найдены дополнительные источники».',
    options: [
      { label: 'A', text: 'благодаря тому что' },
      { label: 'B', text: 'из-за того что' },
      { label: 'C', text: 'оттого что' },
      { label: 'D', text: 'так что' }
    ],
    correctOption: 'A',
    hint: 'La causa è valutata positivamente (riduzione delle tariffe e reperimento di fondi utili).',
    explanation:
      'Risposta esatta: A (благодаря тому что). Box p. 329: «БЛАГОДАРЯ ТОМУ ЧТО указывает на причину, имеющую положительное значение; ИЗ-ЗА ТОГО ЧТО указывает на то, что причина оценивается отрицательно: Снижение тарифов стало возможным благодаря тому, что...» (chiave p. 408).',
    bookRuleRef: 'Glazunova §442, Box p. 329',
    tags: ['Благодаря тому что', 'Положительная причина', 'Причинные союзы']
  },
  {
    id: 'q-s3-ex444-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Сложное предложение)',
    chapterId: 'sec3-sub-cause-res',
    chapterTitle: 'Сложноподчинённые предложения: причины и следствия',
    topicName: 'Subordinate consecutive: так что vs поэтому',
    exerciseSource: 'Sezione 3, Esercizio 444, frase 1 (p. 332, chiave p. 408)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Trasforma la frase causale in consecutiva oggettiva:\n«Сквозь ветви можно было без труда увидеть дальний конец леса, потому что листвы на деревьях не было».\n-> «Листвы на деревьях не было, (...) сквозь ветви можно было без труда увидеть дальний конец леса».',
    sentenceWithBlank: '«Листвы на деревьях не было, (...) сквозь ветви можно было увидеть дальний конец леса».',
    options: [
      { label: 'A', text: 'так что (подчинительный союз следствия)' },
      { label: 'B', text: 'потому что' },
      { label: 'C', text: 'будто' },
      { label: 'D', text: 'хотя' }
    ],
    correctOption: 'A',
    hint: 'La congiunzione «так что» esprime la conseguenza logica o naturale derivante da una situazione oggettiva.',
    explanation:
      'Risposta esatta: A (так что). Box a p. 332: «Придаточное следствия указывает на результат, итог, заключение, которые вытекают из объективной ситуации, выраженной главным предложением: Спички отсырели, так что мы не смогли разжечь костёр; Листвы не было, так что...» (chiave p. 408).',
    bookRuleRef: 'Glazunova §444, Box p. 332',
    tags: ['Придаточные следствия', 'Так что', 'Поэтому']
  },
  {
    id: 'q-s3-ex446-2',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Сложное предложение)',
    chapterId: 'sec3-sub-purpose',
    chapterTitle: 'Сложноподчинённые предложения: цели',
    topicName: 'Subordinate finali e concordanza del modo verbale',
    exerciseSource: 'Sezione 3, Esercizio 446, frase 2 (p. 333-334, chiave p. 409)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Unisci le due frasi tramite la congiunzione «чтобы»:\n«Спектакль решено было перенести на другое число. Мы хотели дать возможность посмотреть его всем желающим».\n-> «Спектакль решено было перенести на другое число, чтобы (...) возможность посмотреть его всем желающим».',
    sentenceWithBlank: '«...чтобы (...) возможность посмотреть его всем желающим».',
    options: [
      { label: 'A', text: 'дать' },
      { label: 'B', text: 'дали' },
      { label: 'C', text: 'дадут' },
      { label: 'D', text: 'давать' }
    ],
    correctOption: 'A',
    hint: 'Nella frase principale c\'è una forma impersonale che coincide con chi offre l\'opportunità: dopo «чтобы» si usa l\'infinito.',
    explanation:
      'Risposta esatta: A (дать). Regola a p. 334: quando il fine si riferisce allo stesso orientamento del soggetto, dopo «чтобы» si usa l\'infinito: «...чтобы дать возможность посмотреть его всем желающим» (chiave p. 409). Se i soggetti fossero stati diversi, si sarebbe usato il passato.',
    bookRuleRef: 'Glazunova §446, Box p. 334',
    tags: ['Придаточные цели', 'Чтобы', 'Инфинитив']
  },
  {
    id: 'q-s3-ex450-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Сложное предложение)',
    chapterId: 'sec3-sub-purpose',
    chapterTitle: 'Сложноподчинённые предложения: цели',
    topicName: 'Finali espressive: лишь бы vs чтобы',
    exerciseSource: 'Sezione 3, Esercizio 450, frase 1 e 2 (p. 337, chiave p. 409)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale congiunzione finale esprime l\'intento di raggiungere un obiettivo ad ogni costo / a qualsiasi prezzo?\n«Только ленивый и бездарный человек может жить по принципу: где бы ни работать, (...) не работать».',
    sentenceWithBlank: '«...где бы ни работать, (...) не работать».',
    options: [
      { label: 'A', text: 'лишь бы (только бы)' },
      { label: 'B', text: 'для того чтобы' },
      { label: 'C', text: 'затем чтобы' },
      { label: 'D', text: 'так как' }
    ],
    correctOption: 'A',
    hint: '«Союзы лишь бы, только бы подчеркивают сильное желание говорящего достичь цели любой ценой».',
    explanation:
      'Risposta esatta: A (лишь бы / только бы). Box a p. 337: «Союзы лишь бы (только бы) используются в разговорной речи для выражения цели, которую хотят достичь любой ценой: Чем бы дитя ни тешилось, лишь бы не плакало; где бы ни работать, лишь бы не работать» (chiave p. 409).',
    bookRuleRef: 'Glazunova §450, Box p. 337',
    tags: ['Лишь бы', 'Придаточные цели', 'Разговорная речь']
  },
  {
    id: 'q-s3-ex454-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Сложное предложение)',
    chapterId: 'sec3-sub-condition',
    chapterTitle: 'Сложноподчинённые предложения: условные',
    topicName: 'Subordinate condizionali: раз vs если',
    exerciseSource: 'Sezione 3, Esercizio 454, frase 1 (p. 340, chiave p. 410)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale congiunzione condizionale tipica del linguaggio colloquiale introduce una condizione che è un fatto ormai accertato da cui trarre una deduzione ovvia?\n«(...) дал слово, надо его сдержать, а то в следующий раз тебе никто не поверит».',
    sentenceWithBlank: '«(...) дал слово, надо его сдержать...»',
    options: [
      { label: 'A', text: 'Раз (sinonimo di «Если уж»)' },
      { label: 'B', text: 'Хотя' },
      { label: 'C', text: 'Лишь бы' },
      { label: 'D', text: 'Пока' }
    ],
    correctOption: 'A',
    hint: 'La parola significa "dal momento che / visto che": ha dato la parola, quindi ora la mantenga.',
    explanation:
      'Risposta esatta: A (Раз / Если). Box a p. 340: «Союз РАЗ, характерный для разговорной речи, обычно указывает на условие и вывод, который в главном предложении может обозначаться с помощью значит или то: Раз всё зависит от меня, я могу принимать любые решения; Раз дал слово, надо сдержать» (chiave p. 410).',
    bookRuleRef: 'Glazunova §454, Box p. 340',
    tags: ['Условные придаточные', 'Союз раз', 'Разговорная речь']
  },
  {
    id: 'q-s3-ex461-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Сложное предложение)',
    chapterId: 'sec3-sub-concession',
    chapterTitle: 'Сложноподчинённые предложения: уступительные',
    topicName: 'Subordinate concessive: пусть vs хотя',
    exerciseSource: 'Sezione 3, Esercizio 461, frasi 1 e 3 (p. 344, chiave p. 410)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Confronta le congiunzioni concessive:\n1) «(...) погода была прекрасная, мы остались дома» (fatto reale accertato neutro/positivo).\n2) «(...) он и не разделяет наших взглядов, препятствовать нам он не будет» (ammissione concessiva di un fatto negativo a cui si contrappone un esito positivo).',
    sentenceWithBlank: '1) «(...) погода была прекрасная». 2) «(...) он и не разделяет наших взглядов...»',
    options: [
      { label: 'A', text: '1) Хотя / 2) Пусть (Хотя)' },
      { label: 'B', text: '1) Пусть / 2) Потому что' },
      { label: 'C', text: '1) Если / 2) Так как' },
      { label: 'D', text: '1) Чтобы / 2) Хотя' }
    ],
    correctOption: 'A',
    hint: '«Пусть (пускай)» si usa prevalentemente per ammettere una circostanza negativa a cui si oppone una situazione positiva nella reggente. «Хотя» è la concessiva neutrale generale.',
    explanation:
      'Risposta esatta: A (Хотя / Пусть). Box a p. 344: «Союз ПУСТЬ (пускай) чаще всего указывает на негативную ситуацию, которой противопоставляется позитивная ситуация главного предложения: Пусть сейчас кризис, к концу года ситуация изменится. В случае нейтральной или позитивной ситуации используется союз ХОТЯ: Хотя погода была прекрасная, мы остались дома» (chiave p. 410).',
    bookRuleRef: 'Glazunova §461, Box p. 344',
    tags: ['Уступительные союзы', 'Хотя vs пусть', 'Противопоставление']
  },
  {
    id: 'q-s3-ex464-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Сложное предложение)',
    chapterId: 'sec3-sub-manner-degree',
    chapterTitle: 'Придаточные образа действия, меры и степени',
    topicName: 'Subordinate consecutive di grado: так... что vs настолько... что',
    exerciseSource: 'Sezione 3, Esercizio 464, frase 1 (p. 347, chiave p. 411)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale correlativo si combina con l\'avverbio di modo «тихо» per reggere la subordinata consecutiva «что мы с трудом его слышали»?\n«Он говорил (...) тихо, что мы с трудом его слышали».',
    sentenceWithBlank: '«Он говорил (...) тихо, что мы с трудом его слышали».',
    options: [
      { label: 'A', text: 'так' },
      { label: 'B', text: 'столько' },
      { label: 'C', text: 'такой' },
      { label: 'D', text: 'какой' }
    ],
    correctOption: 'A',
    hint: 'Con avverbi e aggettivi in forma breve si usa il correlativo «так... что».',
    explanation:
      'Risposta esatta: A (так). Box a p. 347: «ТАК сочетается с краткими прилагательными, причастиями и наречиями: так узок, так тихо, так много. С полными прилагательными употребляются до того, настолько: настолько узкий. Он говорил ТАК тихо, что...» (chiave p. 411).',
    bookRuleRef: 'Glazunova §464, Box p. 347',
    tags: ['Образ действия', 'Мера и степень', 'Так что']
  },
  {
    id: 'q-s3-ex470-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Сложное предложение)',
    chapterId: 'sec3-sub-manner-degree',
    chapterTitle: 'Придаточные образа действия, меры и степени',
    topicName: 'Subordinate comparative: как vs точно vs словно vs как будто',
    exerciseSource: 'Sezione 3, Esercizio 470, frasi 1 e 4 (p. 352-353, chiave p. 411)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Confronta la causa ipotetica comparativa vs l\'esattezza del paragone:\n1) «Он покраснел, (...) его обидели» (paragone con valore di supposizione causale).\n2) «Стало холодно, (...) открыли окно» (paragone di puntualità sensoriale).',
    sentenceWithBlank: '1) «Он покраснел, (...) его обидели». 2) «Стало холодно, (...) открыли окно».',
    options: [
      { label: 'A', text: '1) (как) будто / 2) точно (как будто)' },
      { label: 'B', text: '1) как / 2) что' },
      { label: 'C', text: '1) чтобы / 2) если' },
      { label: 'D', text: '1) пока / 2) когда' }
    ],
    correctOption: 'A',
    hint: '«Как будто» esprime la dipendenza causale ipotetica («arrossì come se lo avessero offeso»); «точно» si usa per chiarire la natura esatta della sensazione fisica.',
    explanation:
      'Risposta esatta: A. Box a p. 352: «Союз КАК БУДТО может указывать на причинно-следственную зависимость частей (Он остановился, как будто услышал приказ; Он покраснел, как будто его обидели). Союз ТОЧНО чаще используется при уточнении значения признака: Стало холодно, точно открыли окно» (chiave p. 411).',
    bookRuleRef: 'Glazunova §470, Box p. 352 & Chiave p. 411',
    tags: ['Сравнительные союзы', 'Точно', 'Как будто']
  },
  {
    id: 'q-s3-ex472-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Сложное предложение)',
    chapterId: 'sec3-asyndetic',
    chapterTitle: 'Бессоюзное сложное предложение',
    topicName: 'Punteggiatura nelle asindetiche: il trattino di contrapposizione',
    exerciseSource: 'Sezione 3, Esercizio 472, frase б (p. 354)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Nel proverbio asindetico «Лето припасает (...) зима поедает», quale segno di punteggiatura separa le proposizioni antitetiche?',
    sentenceWithBlank: '«Лето припасает (...) зима поедает».',
    options: [
      { label: 'A', text: 'Тире (-) — contrapposizione netta tra i due fatti (= а / но)' },
      { label: 'B', text: 'Двоеточие (:) — perché la seconda parte è una conseguenza' },
      { label: 'C', text: 'Точка с запятой (;)' },
      { label: 'D', text: 'Nessun segno di punteggiatura' }
    ],
    correctOption: 'A',
    hint: 'Nelle frasi asindetiche dove c\'è un contrasto netto equivalente a «а» o «но», si mette obbligatoriamente il trattino lungo (-).',
    explanation:
      'Risposta esatta: A (Тире, -). Regola p. 354 (punto б): «Бессоюзные предложения, выражающие отношения сопоставления или противопоставления: Ноги носят — руки кормят; Лето припасает — зима поедает. Между частями ставится ТИРЕ».',
    bookRuleRef: 'Glazunova §472б, p. 354',
    tags: ['Бессоюзное предложение', 'Тире', 'Противопоставление']
  },
  {
    id: 'q-s3-ex476-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Сложное предложение)',
    chapterId: 'sec3-asyndetic',
    chapterTitle: 'Бессоюзное сложное предложение',
    topicName: 'Punteggiatura nelle asindetiche: due punti causali',
    exerciseSource: 'Sezione 3, Esercizio 476, frase 2 (p. 357, chiave p. 412)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Quale segno di punteggiatura deve separare le due proposizioni asindetiche nel seguente enunciato?\n«Спать не стоит (...) скоро на завод».',
    sentenceWithBlank: '«Спать не стоит (...) скоро на завод».',
    options: [
      { label: 'A', text: 'Двоеточие (:) — la seconda proposizione indica la causa (= потому что скоро на завод)' },
      { label: 'B', text: 'Тире (-) — la seconda proposizione indica un contrasto improvviso' },
      { label: 'C', text: 'Запятая (,) — semplice elencazione' },
      { label: 'D', text: 'Точка с запятой (;) — frasi ampiamente autonome e articolate' }
    ],
    correctOption: 'A',
    hint: 'La seconda proposizione spiega il "perché" della prima: equivale a «потому что».',
    explanation:
      'Risposta esatta: A (Двоеточие, :). Regola p. 354-357 (chiave p. 412): «Если одна из частей бессоюзного сложного предложения поясняет значение второй части или указывает на ПРИЧИНУ (= потому что), между частями ставится двоеточие (:): Спать не стоит: скоро на завод; Я несчастлив: каждый день гости».',
    bookRuleRef: 'Glazunova §476, Box p. 356-357 & Chiave p. 412',
    tags: ['Бессоюзное предложение', 'Двоеточие', 'Причина']
  },
  {
    id: 'q-s3-ex476-8',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Сложное предложение)',
    chapterId: 'sec3-asyndetic',
    chapterTitle: 'Бессоюзное сложное предложение',
    topicName: 'Punteggiatura nelle asindetiche: due punti esplicativi',
    exerciseSource: 'Sezione 3, Esercizio 476, frase 8 (p. 357, chiave p. 412)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Nel brano narrativo:\n«Метель не унималась (...) снег слепил, глушил...»\nQuale segno di punteggiatura esplicita le manifestazioni della tormenta?',
    sentenceWithBlank: '«Метель не унималась (...) снег слепил, глушил».',
    options: [
      { label: 'A', text: 'Двоеточие (:) — la seconda parte illustra il modo in cui infuriava la tormenta' },
      { label: 'B', text: 'Тире (-)' },
      { label: 'C', text: 'Запятая (,)' },
      { label: 'D', text: 'Вопросительный знак (?)' }
    ],
    correctOption: 'A',
    hint: 'La seconda parte rivela e descrive in concreto che cosa significava il fatto che la tormenta non si placasse.',
    explanation:
      'Risposta esatta: A (Двоеточие, :). Testo di Glazunova a p. 357 (chiave p. 412, es. 476, n. 8): «Метель не унималась: снег слепил, глушил». I due punti introducono l\'illustrazione esplicativa del fenomeno enunciato nella prima frase.',
    bookRuleRef: 'Glazunova §476, p. 357 & Chiave p. 412',
    tags: ['Бессоюзное предложение', 'Двоеточие', 'Пояснение']
  },
  {
    id: 'q-s3-ex483-bulgakov',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Сложное предложение)',
    chapterId: 'sec3-lit-revision',
    chapterTitle: 'Материал для повторения: Раздел 3',
    topicName: 'Frase complessa in M. Bulgakov («Il maestro e Margherita»)',
    exerciseSource: 'Sezione 3, Esercizio 483, frase 7 (p. 363, chiave p. 413)',
    level: 'C1',
    type: 'case_scenario',
    prompt: 'Nel testo di Bulgakov (p. 363, frase 7):\n«Трое владельцев «Нимфы» стояли у своего заведения в тех же позах, (...) Ипполит Матвеевич оставил их утром».\nQuale pronome congiuntivo completa la subordinata?',
    sentenceWithBlank: '«...в тех же позах, (...) Ипполит Матвеевич оставил их утром».',
    options: [
      { label: 'A', text: 'в каких (в которых)' },
      { label: 'B', text: 'что' },
      { label: 'C', text: 'где' },
      { label: 'D', text: 'будто' }
    ],
    correctOption: 'A',
    hint: 'L\'antecedente è «в тех же позах»: la subordinata relativa concorda nella forma preposizionale plurale.',
    explanation:
      'Risposta esatta: A (в каких / в которых). Testo di Il\'f e Petrov citato da Glazunova a p. 363 (chiave p. 413, es. 483): «...в тех же позах, в каких (в которых) Ипполит Матвеевич оставил их утром». Il pronome relativo concorda con «позы» al preposizionale con в.',
    bookRuleRef: 'Glazunova §483, Testo d\'autore p. 363 & Chiave p. 413',
    tags: ['Ильф и Петров', 'Определительные придаточные', 'В каких']
  },
  {
    id: 'q-s3-ex363-2',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Сложное предложение)',
    chapterId: 'sec3-compound-coord',
    chapterTitle: 'Сложносочинённые предложения',
    topicName: 'Contrasto con la congiunzione «но»',
    exerciseSource: 'Sezione 3, Esercizio 363, frase б (p. 269)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale congiunzione avversativa unisce le due proposizioni in:\n«Был конец февраля, (...) в воздухе уже пахло весной»?',
    sentenceWithBlank: '«Был конец февраля, (...) в воздухе уже пахло весной».',
    options: [
      { label: 'A', text: 'но' },
      { label: 'B', text: 'ибо' },
      { label: 'C', text: 'чтобы' },
      { label: 'D', text: 'будто' }
    ],
    correctOption: 'A',
    hint: 'La fine di febbraio è ancora pieno inverno, ma l\'aria profumava già di primavera: tipico contrasto avversativo con «но».',
    explanation:
      'Risposta esatta: A (но). Regola a p. 269: «Союз НО выражает отношения противопоставления, несоответствия между частями сложного предложения: Был конец февраля, но в воздухе уже пахло весной; Мы облегчённо вздохнули, но главное испытание ждало нас впереди».',
    bookRuleRef: 'Glazunova §363б, p. 269',
    tags: ['Союз но', 'Сложносочинённое', 'Противопоставление']
  },
  {
    id: 'q-s3-ex373-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Сложное предложение)',
    chapterId: 'sec3-compound-coord',
    chapterTitle: 'Сложносочинённые предложения',
    topicName: 'Congiunzioni disgiuntive: либо... либо vs или',
    exerciseSource: 'Sezione 3, Esercizio 373, frase а (p. 277)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Nel registro formale o scientifico, quale congiunzione disgiuntiva binaria si usa in:\n«(...) ваша теория не верна, (...) опыты проводились без соблюдения техники безопасности»?',
    sentenceWithBlank: '«(...) ваша теория не верна, (...) опыты проводились без соблюдения техники безопасности».',
    options: [
      { label: 'A', text: 'Либо ... либо' },
      { label: 'B', text: 'То ... то' },
      { label: 'C', text: 'Не то ... не то' },
      { label: 'D', text: 'Как ... так и' }
    ],
    correctOption: 'A',
    hint: '«Либо... либо» è la variante disgiuntiva adatta al registro colto/scritto per esprimere una mutua esclusione rigorosa.',
    explanation:
      'Risposta esatta: A (Либо... либо). Box a p. 277: «В современном русском языке союз ЛИБО (либо... либо) чаще употребляется в книжных стилях речи: Либо ваша теория не верна, либо опыты проводились с нарушениями. В разговорной речи, как правило, используется союз ИЛИ».',
    bookRuleRef: 'Glazunova §373, Box p. 277',
    tags: ['Либо либо', 'Книжный стиль', 'Разделительные союзы']
  },
  {
    id: 'q-s3-ex382-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Сложное предложение)',
    chapterId: 'sec3-compound-coord',
    chapterTitle: 'Сложносочинённые предложения',
    topicName: 'Congiunzione aggiuntiva «причём»',
    exerciseSource: 'Sezione 3, Esercizio 382, frase а (p. 282)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale congiunzione esprime che la seconda azione aggiunge un dettaglio contestuale spontaneo:\n«Дети часто оставались дома одни, (...) делали это с большой охотой»?',
    sentenceWithBlank: '«...оставались дома одни, (...) делали это с большой охотой».',
    options: [
      { label: 'A', text: 'причём (притом)' },
      { label: 'B', text: 'будто' },
      { label: 'C', text: 'чтобы' },
      { label: 'D', text: 'как' }
    ],
    correctOption: 'A',
    hint: '«Причём / притом» aggiungono un\'informazione esplicativa collegata alla medesima situazione.',
    explanation:
      'Risposta esatta: A (причём / притом). Regola p. 282: «Союзы да и, притом, причём используются, если необходимо дополнить информацию, о которой говорится в первой части: Дети часто оставались одни, причём (притом) делали это с большой охотой».',
    bookRuleRef: 'Glazunova §382а, p. 282',
    tags: ['Причём', 'Пояснительные отношения', 'Сложносочинённые']
  },
  {
    id: 'q-s3-ex417-3',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Сложное предложение)',
    chapterId: 'sec3-sub-relative',
    chapterTitle: 'Сложноподчинённые предложения: определительные',
    topicName: 'Pronome relativo который per persone all\'Accusativo',
    exerciseSource: 'Sezione 3, Esercizio 417, frase 14 (p. 310, chiave p. 407)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Scegli la forma corretta del pronome relativo «который» riferito a «человеку» (animato, oggetto diretto della subordinata):\n«Стихотворение посвящено человеку, (...) никто из нас не знал».',
    sentenceWithBlank: '«...человеку, (...) никто из нас не знал».',
    options: [
      { label: 'A', text: 'которого (Accusativo animato maschile di знать)' },
      { label: 'B', text: 'который' },
      { label: 'C', text: 'которому' },
      { label: 'D', text: 'о котором' }
    ],
    correctOption: 'A',
    hint: 'Il verbo «знать» regge l\'oggetto diretto all\'Accusativo («не знал кого?»: persona animata maschile = которого).',
    explanation:
      'Risposta esatta: A (которого). Box p. 309-310: il pronome «который» sostituisce il sostantivo antecedente (человек) ma prende il CASO retto dal verbo nella subordinata (знать кого? -> винительный падеж одушевлённого: которого). Chiave p. 407.',
    bookRuleRef: 'Glazunova §417, p. 310 & Chiave p. 407',
    tags: ['Который', 'Одушевленность', 'Винительный падеж']
  },
  {
    id: 'q-s3-ex427-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Сложное предложение)',
    chapterId: 'sec3-sub-time',
    chapterTitle: 'Сложноподчинённые предложения: времени',
    topicName: 'Anteriorità dell\'azione: союз когда + perfettivo',
    exerciseSource: 'Sezione 3, Esercizio 427, frase б (p. 317)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale costrutto temporale esprime che l\'azione della principale avviene DOPO il compimento dell\'azione della subordinata?\n«Когда рассвело, перед нашими глазами открылся вид на крепость».',
    sentenceWithBlank: '«Когда рассвело, перед нашими глазами открылся вид на крепость».',
    options: [
      { label: 'A', text: 'Действие придаточной части предшествует действию в главной' },
      { label: 'B', text: 'Полная одновременность двух незаконченных действий' },
      { label: 'C', text: 'Действие главной предшествует придаточной' },
      { label: 'D', text: 'Причинная зависимость без временного значения' }
    ],
    correctOption: 'A',
    hint: '«Рассвело» è al passato perfettivo: l\'alba si è compiuta per prima, e di conseguenza si è aperta la vista.',
    explanation:
      'Risposta esatta: A. Regola p. 317 (punto б, 1): «Действие, выраженное придаточной частью, ПРЕДШЕСТВУЕТ действию в главной части: Когда рассвело, перед нашими глазами открылся вид на крепость; Когда началось представление, никому вокруг покоя нет».',
    bookRuleRef: 'Glazunova §427б, p. 317',
    tags: ['Придаточные времени', 'Предшествование', 'Совершенный вид']
  },
  {
    id: 'q-s3-ex438-1',
    sectionId: 3,
    sectionTitle: 'Sezione 3: La Frase Complessa (Сложное предложение)',
    chapterId: 'sec3-sub-relative',
    chapterTitle: 'Сложноподчинённые предложения: места',
    topicName: 'Subordinate di luogo: туда... куда vs там... где',
    exerciseSource: 'Sezione 3, Esercizio 438, frase 1 (p. 325, chiave p. 408)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Completa la frase con la coppia correlativa di moto a luogo corretta:\n«Всю ночь он шёл, не разбирая дороги, (...) направили его случайные попутчики».',
    sentenceWithBlank: '«...шёл, не разбирая дороги, туда, (...) направили его попутчики».',
    options: [
      { label: 'A', text: 'куда' },
      { label: 'B', text: 'где' },
      { label: 'C', text: 'откуда' },
      { label: 'D', text: 'когда' }
    ],
    correctOption: 'A',
    hint: 'Il verbo идти e l\'avverbio correlativo «туда» indicano direzione verso una meta (moto a luogo): richiedono «куда».',
    explanation:
      'Risposta esatta: A (куда). Box p. 324-325: «Союзные слова где, куда, откуда примыкают к предикату придаточного предложения: Она посмотрела туда, куда я показал (направление); Всю ночь он шёл туда, куда направили его попутчики» (chiave p. 408).',
    bookRuleRef: 'Glazunova §438, Box p. 325',
    tags: ['Придаточные места', 'Туда куда', 'Направление']
  }
];

