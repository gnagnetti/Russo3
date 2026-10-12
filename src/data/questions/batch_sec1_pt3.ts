import { Question } from '../../types';

export const QUESTIONS_BATCH_SECTION_1_PART3: Question[] = [
  // --- Esercizi di Sintassi da Brani d'Autore Contemporanei (Glazunova pp. 124-126) ---
  {
    id: 'q-s1-lit-pelevin-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-repetition-lit',
    chapterTitle: 'Материал для повторения: язык художественной литературы',
    topicName: 'Reggenza nominale e sintagma preposizionale in V. Pelevin',
    exerciseSource: 'Sezione 1, Esercizio 156 (Viktor Pelevin, p. 124, chiave p. 378)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Dal testo di Viktor Pelevin nel manuale di Glazunova: quale reggenza preposizionale corretta esprime l\'immersione meditativa o contemplativa in un\'attività mentale?\n«Он погрузился (...) размышления о природе человеческого сознания».',
    sentenceWithBlank: '«Он погрузился (...) размышления».',
    options: [
      { label: 'A', text: 'в (+ Accusativo: погрузиться в размышления, в сон, в работу)' },
      { label: 'B', text: 'к' },
      { label: 'C', text: 'на' },
      { label: 'D', text: 'под' }
    ],
    correctOption: 'A',
    hint: 'Il verbo «погружаться / погрузиться» regge la meta dell\'immersione fisica o figurata con «в + Accusativo».',
    explanation:
      'Risposta esatta: A (в). Glazunova p. 124, Esercizio 156 (da V. Pelevin): «Погружаться / погрузиться во что (вин. пад.): погрузиться в воспоминания, в раздумья, в глубокий сон».',
    bookRuleRef: 'Glazunova §156, p. 124',
    tags: ['Пелевин', 'Погрузиться в', 'Управление']
  },
  {
    id: 'q-s1-lit-shalamov-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-repetition-lit',
    chapterTitle: 'Материал для повторения: язык художественной литературы',
    topicName: 'Sintassi dello spazio e dell\'isolamento in V. Šalamov',
    exerciseSource: 'Sezione 1, Esercizio 158 (Varlam Šalamov, p. 125)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Dal testo di Varlam Šalamov («I racconti della Kolyma») presente negli esercizi di Glazunova: quale preposizione esprime la lontananza e il distacco da ogni centro abitato?\n«Барак стоял далеко (...) человеческого жилья и дорог».',
    sentenceWithBlank: '«Стоял далеко (...) жилья».',
    options: [
      { label: 'A', text: 'от (+ Genitivo: далеко от чего)' },
      { label: 'B', text: 'из' },
      { label: 'C', text: 'с' },
      { label: 'D', text: 'до' }
    ],
    correctOption: 'A',
    hint: '«Далеко» richiede il punto di riferimento con «от + Genitivo» (далеко от города, от дома).',
    explanation:
      'Risposta esatta: A (от). Glazunova p. 125, Es. 158 (da V. Šalamov): «Далеко от кого/чего (род. пад.): далеко от людей, от берега, от цивилизации».',
    bookRuleRef: 'Glazunova §158, p. 125',
    tags: ['Шаламов', 'Далеко от', 'Предлоги']
  },
  {
    id: 'q-s1-lit-trifonov-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-repetition-lit',
    chapterTitle: 'Материал для повторения: язык художественной литературы',
    topicName: 'Reggenza del verbo «тосковать» in Jurij Trifonov',
    exerciseSource: 'Sezione 1, Esercizio 160 (Jurij Trifonov, p. 126)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Negli estratti di Jurij Trifonov analizzati da Glazunova, quale reggenza assume il verbo «тосковать» (provare nostalgia) con pronomi di 1ª e 2ª persona plurale nello stile letterario classico?\n«Он искренне тосковал (...)».',
    sentenceWithBlank: '«Он тосковал (...)».',
    options: [
      { label: 'A', text: 'по нас / по вас (Prepositivo arcaico-letterario preservato nei classici e citato nel box di Glazunova) o по нам / по вам (Dativo moderno)' },
      { label: 'B', text: 'о нас' },
      { label: 'C', text: 'за нас' },
      { label: 'D', text: 'для нас' }
    ],
    correctOption: 'A',
    hint: 'Glazunova evidenzia a p. 126 la particolarità del verbo «тосковать/скучать по ком/чём (родному дому)» e con i pronomi personali di 1ª e 2ª plurale («по нас / по вас»).',
    explanation:
      'Risposta esatta: A. Glazunova p. 126 nota: «Глаголы скучать, тосковать, грустить традиционно сочетаются с предложным падежом личных местоимений 1-го и 2-го лица мн. ч.: скучаем по вас, тоскует по нас, хотя в современной разговорной речи допустим и дательный: по вам, по нам».',
    bookRuleRef: 'Glazunova §160, p. 126',
    tags: ['Трифонов', 'Тосковать по', 'Литературная норма']
  },
  {
    id: 'q-s1-lit-aitmatov-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-repetition-lit',
    chapterTitle: 'Материал для повторения: язык художественной литературы',
    topicName: 'Sintagmi attributivi e metaforici in Čyngyz Ajtmatov',
    exerciseSource: 'Sezione 1, Esercizio 162 (Čyngyz Ajtmatov, p. 126)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Nel brano di Čyngyz Ajtmatov, quale accordo e caso richiede l\'aggettivo sostantivato che funge da complemento retto da «привыкнуть к»?\n«Он давно привык ко всему (...) и не удивлялся превратностям судьбы».',
    sentenceWithBlank: '«Привык ко всему (...)».',
    options: [
      { label: 'A', text: 'необычному (Dativo neutro: привыкнуть к чему? -> ко всему необычному)' },
      { label: 'B', text: 'необычный' },
      { label: 'C', text: 'необычным' },
      { label: 'D', text: 'о необычном' }
    ],
    correctOption: 'A',
    hint: '«Привыкать / привыкнуть к кому/чему» regge il caso Dativo: ко всему необычному.',
    explanation:
      'Risposta esatta: A (необычному). Glazunova p. 126 (Es. 162, testo di Č. Ajtmatov): «Привыкать / привыкнуть к кому/чему (дат. пад.): привыкнуть к трудностям, к тишине, ко всему новому/необычному».',
    bookRuleRef: 'Glazunova §162, p. 126',
    tags: ['Айтматов', 'Привыкнуть к', 'Дательный падеж']
  },

  // --- Reggenze Verbali Specifiche e Falsi Amici Sintattici (pp. 35-50) ---
  {
    id: 'q-s1-gov-reproach-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-noprep',
    chapterTitle: 'Глагольное управление: упрекать / упрекнуть',
    topicName: 'Reggenza del verbo «упрекать кого в чём»',
    exerciseSource: 'Sezione 1, Esercizio 27, frase 2 (p. 50)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale reggenza preposizionale richiede il verbo «упрекать» (rimproverare / rinfacciare)?\n«Друзья никогда не упрекали его (...) минутной слабости».',
    sentenceWithBlank: '«Не упрекали его (...) слабости».',
    options: [
      { label: 'A', text: 'в (+ Prepositivo: упрекать кого в чём)' },
      { label: 'B', text: 'за (+ Accusativo)' },
      { label: 'C', text: 'о (+ Prepositivo)' },
      { label: 'D', text: 'для' }
    ],
    correctOption: 'A',
    hint: 'La costruzione russa standard è «упрекать кого (Acc.) в чём (Prepos.)» (in italiano spesso tradotto con «rimproverare qualcuno per qualcosa»).',
    explanation:
      'Risposta esatta: A (в). Glazunova p. 50: «Упрекать / упрекнуть кого (вин. пад.) в ком/чём (предл. пад.): упрекать в неблагодарности, во лжи, в равнодушии».',
    bookRuleRef: 'Glazunova §27, p. 50',
    tags: ['Управление', 'Упрекать в чём', 'Предложный падеж']
  },
  {
    id: 'q-s1-gov-trust-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-noprep',
    chapterTitle: 'Глагольное управление: доверять vs верить',
    topicName: 'Reggenza di «верить кому vs верить во что»',
    exerciseSource: 'Sezione 1, Esercizio 22, frase 5 (p. 43)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Qual è la differenza tra «верить другу» (Dativo) e «верить в победу» (в + Accusativo)?\n«Верить другу vs верить в победу».',
    sentenceWithBlank: '«Верить другу vs верить в успех».',
    options: [
      { label: 'A', text: '«Верить кому» (Dativo) significa prestare fede a una persona/parola; «верить во что» (в + Accusativo) esprime fede ideale o profonda convinzione nell\'esistenza/riuscita di qualcosa' },
      { label: 'B', text: 'Sono sinonimi identici senza alcuna differenza d\'uso' },
      { label: 'C', text: '«В + Accusativo» si usa solo in contesti religiosi antichi' },
      { label: 'D', text: 'Il Dativo si usa solo con le cose inanimate' }
    ],
    correctOption: 'A',
    hint: 'Glazunova analizza nel box di p. 43 la netta differenza semantica tra credere a una notizia/persona (Dativo) e avere fede/speranza nel trionfo di un ideale (в + Accusativo).',
    explanation:
      'Risposta esatta: A. Glazunova p. 43: «Верить кому/чему (дат. пад.) — доверять словам, считать правдой: верить обещаниям, верить рассказчику. Верить в кого/что (в + вин. пад.) — иметь непоколебимую убеждённость в осуществлении или идеале: верить в победу, в человека, в справедливость».',
    bookRuleRef: 'Glazunova §22, p. 43',
    tags: ['Управление', 'Верить', 'Различие смыслов']
  },
  {
    id: 'q-s1-gov-care-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-noprep',
    chapterTitle: 'Глагольное управление: заботиться vs беспокоиться',
    topicName: 'Reggenza di «заботиться» e «тревожиться»',
    exerciseSource: 'Sezione 1, Esercizio 24, frase 1 (p. 46)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale reggenza preposizionale richiede il verbo «заботиться» (prendersi cura / preoccuparsi operosamente)?\n«Родители постоянно заботятся (...) будущем своих детей».',
    sentenceWithBlank: '«Заботятся (...) будущем детей».',
    options: [
      { label: 'A', text: 'о (+ Prepositivo: заботиться о ком/чём)' },
      { label: 'B', text: 'за' },
      { label: 'C', text: 'для' },
      { label: 'D', text: 'насчёт' }
    ],
    correctOption: 'A',
    hint: '«Заботиться о ком/чём» (о здоровье, о детях, о порядке).',
    explanation:
      'Risposta esatta: A (о). Glazunova p. 46: «Заботиться о ком/чём (предл. пад.): заботиться о родителях, о чистоте, о безопасности. В отличие от печься о ком / беспокоиться о ком / тревожиться за кого».',
    bookRuleRef: 'Glazunova §24, p. 46',
    tags: ['Управление', 'Заботиться о', 'Предложный падеж']
  },
  {
    id: 'q-s1-gov-influence-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-noprep',
    chapterTitle: 'Глагольное управление: влиять vs воздействовать',
    topicName: 'Reggenza del verbo «влиять / повлиять»',
    exerciseSource: 'Sezione 1, Esercizio 34, frase 3 (p. 60)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale reggenza richiede «влиять / повлиять» (influenzare)?\n«Резкая смена климата может существенно повлиять (...) здоровье пожилых людей».',
    sentenceWithBlank: '«Повлиять (...) здоровье».',
    options: [
      { label: 'A', text: 'на (+ Accusativo: влиять / повлиять на кого/что)' },
      { label: 'B', text: 'в' },
      { label: 'C', text: 'к' },
      { label: 'D', text: 'над' }
    ],
    correctOption: 'A',
    hint: 'Sia «влиять» sia «оказывать влияние» reggono «на + Accusativo».',
    explanation:
      'Risposta esatta: A (на). Glazunova p. 60: «Влиять / повлиять на кого/что (вин. пад.): влиять на ход событий, на настроение, на здоровье человека».',
    bookRuleRef: 'Glazunova §34, p. 60',
    tags: ['Управление', 'Влиять на', 'Винительный падеж']
  },
  {
    id: 'q-s1-gov-prevent-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-noprep',
    chapterTitle: 'Глагольное управление: препятствовать vs мешать',
    topicName: 'Reggenza di «препятствовать / воспрепятствовать»',
    exerciseSource: 'Sezione 1, Esercizio 36, frase 2 (p. 62)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale caso regge il verbo transitivo/intransitivo colto «препятствовать» (ostacolare)?\n«Густой снегопад препятствовал (...) спасательной операции».',
    sentenceWithBlank: '«Препятствовал (...) операции».',
    options: [
      { label: 'A', text: 'проведению (Dativo senza preposizione: кому/чему)' },
      { label: 'B', text: 'проведение (Accusativo)' },
      { label: 'C', text: 'проведением (Strumentale)' },
      { label: 'D', text: 'к проведению' }
    ],
    correctOption: 'A',
    hint: 'Sia «мешать» sia «препятствовать» reggono il Dativo puro (кому/чему).',
    explanation:
      'Risposta esatta: A (проведению). Glazunova p. 62: «Препятствовать / воспрепятствовать кому/чему (дат. пад.): препятствовать движению, переговорам, осуществлению планов».',
    bookRuleRef: 'Glazunova §36, p. 62',
    tags: ['Управление', 'Препятствовать', 'Дательный падеж']
  },
  {
    id: 'q-s1-gov-accustom-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-noprep',
    chapterTitle: 'Глагольное управление: приучать / приучить',
    topicName: 'Doppia reggenza di «приучать кого к чему»',
    exerciseSource: 'Sezione 1, Esercizio 38, frase 4 (p. 64)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale reggenza esprime l\'abitudine a cui si educa qualcuno con «приучать»?\n«Учитель с первых дней приучал школьников (...) строгой дисциплине и порядку».',
    sentenceWithBlank: '«Приучал школьников (...) дисциплине».',
    options: [
      { label: 'A', text: 'к (+ Dativo: приучать кого к чему)' },
      { label: 'B', text: 'в' },
      { label: 'C', text: 'на' },
      { label: 'D', text: 'для' }
    ],
    correctOption: 'A',
    hint: '«Приучать кого (Acc.) к чему (Dat.)» (к труду, к чтению, к самостоятельности).',
    explanation:
      'Risposta esatta: A (к). Glazunova p. 64: «Приучать / приучить кого (вин. пад.) к кому/чему (к + дат. пад.): приучать детей к труду, к порядку, к аккуратности».',
    bookRuleRef: 'Glazunova §38, p. 64',
    tags: ['Управление', 'Приучать к', 'Дательный падеж']
  }
];
