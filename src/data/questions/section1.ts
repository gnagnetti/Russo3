import { Question } from '../../types';

export const QUESTIONS_SECTION_1: Question[] = [
  // --- Concordanza (Согласование) ---
  {
    id: 'q-s1-ex2-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-concordance',
    chapterTitle: 'Подчинительная связь: согласование',
    topicName: 'Concordanza di aggettivo e ordinale al Preposizionale',
    exerciseSource: 'Sezione 1, Esercizio 2, frase 1 (p. 9)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Completa la frase inserendo le corrette desinenze concordate per «соседний» e «первый»:',
    sentenceWithBlank: '«В соседн(...) доме на перв(...) этаже горел свет».',
    options: [
      { label: 'A', text: '-ем / -ом (соседнем / первом)' },
      { label: 'B', text: '-им / -ем (соседним / первом)' },
      { label: 'C', text: '-ем / -ем (соседнем / первом)' },
      { label: 'D', text: '-ом / -ом (соседном / первом)' }
    ],
    correctOption: 'A',
    hint: '«Дом» ed «этаж» sono maschili singolari al caso Preposizionale con «в/на». «Соседний» ha tema dolce (-ем), «первый» ha tema duro (-ом).',
    explanation:
      'Risposta esatta: A (-ем / -ом). Regola p. 7-9: gli aggettivi concordano in genere, numero e caso col sostantivo. Al Preposizionale maschile singolare gli aggettivi a tema duro prendono -ом (первом этаже), quelli a tema dolce -ем (соседнем доме).',
    bookRuleRef: 'Glazunova §2, p. 9',
    tags: ['Согласование', 'Прилагательные', 'Предложный падеж']
  },
  {
    id: 'q-s1-ex3-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-concordance',
    chapterTitle: 'Подчинительная связь: согласование',
    topicName: 'Concordanza pronomi e negazione',
    exerciseSource: 'Sezione 1, Esercizio 3, frase 1 (p. 10, chiave p. 373)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Completa la frase scegliendo la corretta forma del pronome dimostrativo «это»:',
    sentenceWithBlank: '«(...) решения я от вас никак не ожидал».',
    options: [
      { label: 'A', text: 'Этого' },
      { label: 'B', text: 'Эту' },
      { label: 'C', text: 'Этим' },
      { label: 'D', text: 'Этому' }
    ],
    correctOption: 'A',
    hint: 'Il verbo transitivo «ожидать» con la particella negativa «не» e con un sostantivo astratto come «решение» (neutro) richiede il caso Genitivo singolare.',
    explanation:
      'Risposta esatta: A (Этого). Nel manuale di O.I. Glazunova (Sezione 1, Es. 3 e chiave a p. 373), il verbo ожидать con sostantivi astratti e in presenza di negazione regge il Genitivo singolare. Poiché «решение» è sostantivo neutro al genitivo (решения), il pronome determinativo concorda al genitivo singolare neutro: «этого решения».',
    bookRuleRef: 'Glazunova §3, Note box p. 10',
    tags: ['Согласование', 'Родительный падеж', 'Отрицание']
  },
  {
    id: 'q-s1-ex3-2',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-concordance',
    chapterTitle: 'Подчинительная связь: согласование',
    topicName: 'Pronomi determinativi: сам vs самый',
    exerciseSource: 'Sezione 1, Esercizio 3, frase 2 (p. 10)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale forma del pronome enfatico «сам» concorda con «президентом» nello Strumentale?',
    sentenceWithBlank: '«Я с (...) президентом за руку здоровался».',
    options: [
      { label: 'A', text: 'самим' },
      { label: 'B', text: 'самым' },
      { label: 'C', text: 'самого' },
      { label: 'D', text: 'самому' }
    ],
    correctOption: 'A',
    hint: '«Сам» significa "in persona", mentre «самый» significa "il più / proprio quello". Al caso Strumentale maschile, «сам» fa «самим», mentre «самый» fa «самым».',
    explanation:
      'Risposta esatta: A (самим). Regola p. 10: il pronome «сам» (di persona, in persona) allo Strumentale singolare maschile fa «самим» (con accento sulla radice: с са́мим президентом), mentre «самым» è la forma di «самый» (il più grande / lo stesso).',
    bookRuleRef: 'Glazunova §3, Box p. 10',
    tags: ['Согласование', 'Сам vs самый', 'Творительный падеж']
  },
  {
    id: 'q-s1-ex3-3',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-concordance',
    chapterTitle: 'Подчинительная связь: согласование',
    topicName: 'Concordanza pronome negativo ничей',
    exerciseSource: 'Sezione 1, Esercizio 3, frase 3 (p. 10)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Scegli la forma corretta del pronome negativo «ничей»:',
    sentenceWithBlank: '«Он никогда не слушает (...) советов».',
    options: [
      { label: 'A', text: 'ничьих' },
      { label: 'B', text: 'ничьи' },
      { label: 'C', text: 'ничьих-то' },
      { label: 'D', text: 'никому' }
    ],
    correctOption: 'A',
    hint: '«Советов» è al Genitivo plurale, retto dal verbo «слушать» con negazione («не слушает советов»). Il pronome deve concordare.',
    explanation:
      'Risposta esatta: A (ничьих). Il sostantivo «советов» è al Genitivo plurale maschile. Il pronome possessivo negativo «ничей» al Genitivo plurale fa «ничьих».',
    bookRuleRef: 'Glazunova §3, Box p. 10',
    tags: ['Согласование', 'Ничей', 'Родительный падеж']
  },
  {
    id: 'q-s1-ex3-5',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-concordance',
    chapterTitle: 'Подчинительная связь: согласование',
    topicName: 'Concordanza pronomi determinativi',
    exerciseSource: 'Sezione 1, Esercizio 3, frase 5 (p. 10)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale forma del pronome «весь» completa correttamente la frase?',
    sentenceWithBlank: '«В этот день мы поехали (...) компанией за город».',
    options: [
      { label: 'A', text: 'все' },
      { label: 'B', text: 'всей' },
      { label: 'C', text: 'всех' },
      { label: 'D', text: 'всю' }
    ],
    correctOption: 'B',
    hint: 'Il sostantivo «компания» è femminile ed è retto nello strumentale («компанией»). Il pronome concorda in genere, numero e caso.',
    explanation:
      'Risposta esatta: B (всей). La frase presenta «компанией» allo Strumentale singolare femminile. Il pronome «весь» al femminile singolare strumentale è «всей компанией» (Glazunova, Es. 3, n. 5).',
    bookRuleRef: 'Glazunova §1, Box p. 8 & 10',
    tags: ['Согласование', 'Местоимения', 'Творительный падеж']
  },
  {
    id: 'q-s1-ex4-4',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-concordance',
    chapterTitle: 'Подчинительная связь: согласование',
    topicName: 'Uso del numerale один al plurale',
    exerciseSource: 'Sezione 1, Esercizio 4, frase 4 (p. 10)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Completa il proverbio con la corretta forma del numerale «один» col valore di "soltanto":',
    sentenceWithBlank: '«(...) обещаниями сыт не будешь».',
    options: [
      { label: 'A', text: 'Одними' },
      { label: 'B', text: 'Одним' },
      { label: 'C', text: 'Одни' },
      { label: 'D', text: 'Одного' }
    ],
    correctOption: 'A',
    hint: '«Обещаниями» è sostantivo neutro plurale al caso Strumentale. «Один» al plurale assume il valore restrittivo di "soltanto / esclusivamente".',
    explanation:
      'Risposta esatta: A (Одними). Nel riquadro a p. 10, Glazunova spiega che le desinenze di один (одна, одно, одни) coincidono con quelle degli aggettivi. Con «обещаниями» (Strumentale plurale) la forma corretta è «одними обещаниями» ("con le sole promesse non ci si sazia").',
    bookRuleRef: 'Glazunova §4, Box p. 10',
    tags: ['Числительные', 'Один', 'Творительный падеж']
  },
  {
    id: 'q-s1-ex6-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-concordance',
    chapterTitle: 'Подчинительная связь: согласование',
    topicName: 'Nomi geografici con nome generico',
    exerciseSource: 'Sezione 1, Esercizio 6, frase 1 (p. 11, chiave p. 373)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Individua la forma corretta secondo le regole di concordanza dei nomi geografici nel russo normativo:',
    sentenceWithBlank: '«В (...) проживает около девяти миллионов жителей».',
    options: [
      { label: 'A', text: 'город Москва' },
      { label: 'B', text: 'городе Москве' },
      { label: 'C', text: 'городе Москва' },
      { label: 'D', text: 'город Москве' }
    ],
    correctOption: 'B',
    hint: 'Quando un nome geografico noto è preceduto da «город, река, деревня», entrambi i termini si declinano concordando nel caso richiesto dalla preposizione.',
    explanation:
      'Risposta esatta: B (городе Москве). Come spiega la nota a p. 11: se come elemento dipendente c\'è un toponimo comune (Mosca, Parigi), la sua forma casuale concorda con la parola reggente («в городе Москве»).',
    bookRuleRef: 'Glazunova §6, Box p. 11',
    tags: ['Географические названия', 'Согласование', 'Предложный падеж']
  },
  {
    id: 'q-s1-ex6-4',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-concordance',
    chapterTitle: 'Подчинительная связь: согласование',
    topicName: 'Nomi propri tra virgolette',
    exerciseSource: 'Sezione 1, Esercizio 6, frase 4 (p. 11, chiave p. 373)',
    level: 'B2',
    type: 'true_false',
    prompt: 'Valuta l\'esattezza della seguente frase secondo le regole del manuale:\n«На станцию «Горьковская» поезд прибудет через полчаса».',
    sentenceWithBlank: '«На станцию «Горьковская» поезд прибудет через полчаса».',
    options: [
      { label: 'Vero', text: 'Vero - Il nome tra virgolette rimane al nominativo invariato.' },
      { label: 'Falso', text: 'Falso - Deve concordare obbligatoriamente: «на станцию «Горьковскую»».' }
    ],
    correctOption: 'Vero',
    hint: 'Verifica la regola delle eccezioni a p. 11: come si comportano i nomi propri tra virgolette preceduti da «станция», «аэропорт», «гостиница»?',
    explanation:
      'Risposta esatta: Vero. La regola a p. 11 specifica: «Исключения составляют имена собственные, названия, данные в кавычках: из аэропорта Пулково, на станции «Горьковская»». Il termine tra virgolette rimane al nominativo.',
    bookRuleRef: 'Glazunova §6, Regola p. 11',
    tags: ['Кавычки', 'Согласование', 'Имена собственные']
  },
  {
    id: 'q-s1-ex6-19',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-concordance',
    chapterTitle: 'Подчинительная связь: согласование',
    topicName: 'Composti con il sostantivo «река»',
    exerciseSource: 'Sezione 1, Esercizio 6, frase 19 (p. 12, chiave p. 373)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Come si declina il composto con trattino «Луга-река» al Preposizionale?',
    sentenceWithBlank: '«О (...) часто упоминается в художественных произведениях».',
    options: [
      { label: 'A', text: 'Луге-реке' },
      { label: 'B', text: 'Луга-реке' },
      { label: 'C', text: 'Луге-река' },
      { label: 'D', text: 'Луги-реки' }
    ],
    correctOption: 'A',
    hint: 'Controlla l\'eccezione specifica a p. 11 sui composti con la parola «река»: entrambi i componenti si flettono.',
    explanation:
      'Risposta esatta: A (Луге-реке). Box a p. 11: «Исключение составляют словосочетания со словом река: на Москва-реке, Волгой-рекой, о Луге-реке». Entrambi i termini si declinano al caso retto dalla preposizione (chiave p. 373).',
    bookRuleRef: 'Glazunova §6, Eccezione p. 11',
    tags: ['Слово река', 'Согласование', 'Исключения']
  },

  // --- Reggenza senza preposizioni (Управление без предлогов) ---
  {
    id: 'q-s1-ex11-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-verbal-gov',
    chapterTitle: 'Управление глаголов',
    topicName: 'Reggenza verbale senza preposizioni',
    exerciseSource: 'Sezione 1, Esercizio 11, frase 1 (p. 15)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale caso regge il verbo «отличаться» (distinguersi per qc)?',
    sentenceWithBlank: '«Он всегда отличался (...), но имел достаточно такта...»',
    options: [
      { label: 'A', text: 'храбрость (Accusativo)' },
      { label: 'B', text: 'храбрости (Genitivo)' },
      { label: 'C', text: 'храбростью (Strumentale)' },
      { label: 'D', text: 'храбрости (Dativo)' }
    ],
    correctOption: 'C',
    hint: 'Il verbo отличаться / отличиться regge il complemento di caratteristica o virtù nello Strumentale (чем).',
    explanation:
      'Risposta esatta: C (храбростью). Nella tabella delle reggenze di Glazunova (p. 13, punto г), il verbo «отличаться / отличиться (чем)» regge lo Strumentale: «отличаться храбростью, умом, талантом».',
    bookRuleRef: 'Glazunova §8г, Tabella p. 13',
    tags: ['Управление глаголов', 'Творительный падеж']
  },
  {
    id: 'q-s1-ex11-2',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-verbal-gov',
    chapterTitle: 'Управление глаголов',
    topicName: 'Reggenza del verbo завидовать',
    exerciseSource: 'Sezione 1, Esercizio 11, frase 2 (p. 15)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale caso regge il verbo «завидовать» (invidiare)?',
    sentenceWithBlank: '«Завидовать (...) другого человека может только неудачник...»',
    options: [
      { label: 'A', text: 'успеху (Dativo)' },
      { label: 'B', text: 'успех (Accusativo)' },
      { label: 'C', text: 'успеха (Genitivo)' },
      { label: 'D', text: 'успехом (Strumentale)' }
    ],
    correctOption: 'A',
    hint: 'In russo si invidia "a qualcuno o a qualcosa": завидовать regge il Dativo (кому / чему).',
    explanation:
      'Risposta esatta: A (успеху). Regola a p. 12 (punto б): «Глагол + дательный падеж существительного: верить людям, радоваться встрече, завидовать успехам (кому? чему?)».',
    bookRuleRef: 'Glazunova §8б, Tabella p. 12',
    tags: ['Завидовать', 'Дательный падеж', 'Управление глаголов']
  },
  {
    id: 'q-s1-ex11-6',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-verbal-gov',
    chapterTitle: 'Управление глаголов',
    topicName: 'Reggenza del verbo руководить',
    exerciseSource: 'Sezione 1, Esercizio 11, frase 6 (p. 15)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale caso regge il verbo «руководить» (dirigere, guidare persone)?',
    sentenceWithBlank: '«...руководить (...) так, чтобы им было приятно...»',
    options: [
      { label: 'A', text: 'подчинёнными (Strumentale)' },
      { label: 'B', text: 'подчинённых (Accusativo/Genitivo)' },
      { label: 'C', text: 'подчинённым (Dativo)' },
      { label: 'D', text: 'о подчинённых (Preposizionale)' }
    ],
    correctOption: 'A',
    hint: 'I verbi di direzione e comando (руководить, командовать, управлять) reggono lo Strumentale senza preposizione.',
    explanation:
      'Risposta esatta: A (подчинёнными). Tabella p. 13 (punto г): i verbi di comando e guida reggono lo Strumentale (кем / чем): «руководить людьми / подчинёнными, управлять заводом».',
    bookRuleRef: 'Glazunova §8г, p. 13',
    tags: ['Руководить', 'Творительный падеж', 'Глаголы управления']
  },
  {
    id: 'q-s1-ex12-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-verbal-gov',
    chapterTitle: 'Управление глаголов',
    topicName: 'Verbi di timore e cautela',
    exerciseSource: 'Sezione 1, Esercizio 12, frase 1 (p. 16)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Scegli la forma corretta retta dal verbo «остерегаться» (guardarsi da):',
    sentenceWithBlank: '«В моём положении мне надо остерегаться (...)».',
    options: [
      { label: 'A', text: 'простуду' },
      { label: 'B', text: 'простуды' },
      { label: 'C', text: 'простуде' },
      { label: 'D', text: 'простудой' }
    ],
    correctOption: 'B',
    hint: 'I verbi di timore, cautela ed evitamento (бояться, пугаться, опасаться, остерегаться) reggono il Genitivo senza preposizione.',
    explanation:
      'Risposta esatta: B (простуды). Regola p. 12 (punto а): «Глагол + родительный падеж: бояться темноты, опасаться мышей, остерегаться простуды (чего?)».',
    bookRuleRef: 'Glazunova §8а, Regola p. 12',
    tags: ['Управление глаголов', 'Родительный падеж', 'Глаголы опасения']
  },
  {
    id: 'q-s1-ex12-4',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-verbal-gov',
    chapterTitle: 'Управление глаголов',
    topicName: 'Reggenza del verbo поступиться',
    exerciseSource: 'Sezione 1, Esercizio 12, frase 4 (p. 16)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Quale caso regge il verbo «поступиться» (rinunciare a qc, derogare a):',
    sentenceWithBlank: '«Я не могу поступиться (...)».',
    options: [
      { label: 'A', text: 'принципами (Strumentale)' },
      { label: 'B', text: 'принципы (Accusativo)' },
      { label: 'C', text: 'принципов (Genitivo)' },
      { label: 'D', text: 'к принципам (Dativo con к)' }
    ],
    correctOption: 'A',
    hint: 'Il verbo поступиться (sacrificare qc, scendere a compromessi su qc) regge lo Strumentale (чем).',
    explanation:
      'Risposta esatta: A (принципами). Regola p. 13-16: il verbo «поступиться (чем)» regge lo Strumentale: «поступиться принципами, своими интересами».',
    bookRuleRef: 'Glazunova §12, p. 16',
    tags: ['Поступиться', 'Творительный падеж', 'Словарное управление']
  },
  {
    id: 'q-s1-ex12-8',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-verbal-gov',
    chapterTitle: 'Управление глаголов',
    topicName: 'Reggenza del verbo жаждать',
    exerciseSource: 'Sezione 1, Esercizio 12, frase 8 (p. 16)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Quale caso regge il verbo elevato «жаждать» (bramare, essere assetato di)?',
    sentenceWithBlank: '«...я никогда не жаждал (...)».',
    options: [
      { label: 'A', text: 'крови (Genitivo)' },
      { label: 'B', text: 'кровь (Accusativo)' },
      { label: 'C', text: 'кровью (Strumentale)' },
      { label: 'D', text: 'о крови (Preposizionale)' }
    ],
    correctOption: 'A',
    hint: 'I verbi di forte brama o sete metaforica (жаждать, желать) reggono il Genitivo (чего).',
    explanation:
      'Risposta esatta: A (крови). Nel russo colto e letterario «жаждать чего» regge il Genitivo: «жаждать крови, славы, мести, справедливости» (Glazunova p. 16).',
    bookRuleRef: 'Glazunova §12, p. 16',
    tags: ['Жаждать', 'Родительный падеж', 'Книжная речь']
  },
  {
    id: 'q-s1-ex18-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-nominal-gov',
    chapterTitle: 'Управление существительных',
    topicName: 'Reggenza dei deverbali da verbi transitivi',
    exerciseSource: 'Sezione 1, Esercizio 18, frase 1 (p. 19)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale caso regge il sostantivo «чувство» quando si unisce al sintagma «своя вина»?',
    sentenceWithBlank: '«Он всегда очень остро чувствовал (...) вину. Чувство (...) вины не оставляло его ни на минуту».',
    options: [
      { label: 'A', text: 'свою / своей' },
      { label: 'B', text: 'своей / своей' },
      { label: 'C', text: 'свою / свою' },
      { label: 'D', text: 'своей / свою' }
    ],
    correctOption: 'A',
    hint: 'Il verbo чувствовать regge l\'oggetto diretto all\'Accusativo («чувствовал свою вину»), mentre il sostantivo deverbale («чувство чего?») regge il Genitivo.',
    explanation:
      'Risposta esatta: A (свою / своей). Box p. 19: il sostantivo deverbale o astratto si combina con parole dipendenti al Genitivo («чувство своей вины»). Al contrario, il verbo personale finito regge l\'Accusativo («чувствовал свою вину»).',
    bookRuleRef: 'Glazunova §18, Box p. 19',
    tags: ['Управление существительных', 'Отглагольные существительные']
  },
  {
    id: 'q-s1-ex19-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-nominal-gov',
    chapterTitle: 'Управление существительных',
    topicName: 'Destinatario dell\'azione vs Destinazione d\'uso (Dativo vs для)',
    exerciseSource: 'Sezione 1, Esercizio 19, frase 1 (p. 20)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Distingui tra il destinatario diretto dell\'azione e la funzione di destinazione/scopo del farmaco:',
    sentenceWithBlank: '«Врач выписал лекарство (...). Это лекарство (...)».',
    options: [
      { label: 'A', text: 'больному / для больного' },
      { label: 'B', text: 'для больного / больному' },
      { label: 'C', text: 'больному / больному' },
      { label: 'D', text: 'для больного / для больного' }
    ],
    correctOption: 'A',
    hint: 'L\'oggetto a cui è rivolta l\'azione del verbo sta al Dativo senza preposizione. Nella funzione di specificazione/destinazione del nome si usa «для + Genitivo».',
    explanation:
      'Risposta esatta: A (больному / для больного). Box a p. 20: «Если зависимое слово выступает как объект действия или состояния, оно чаще употребляется в дательном падеже без предлога (выписал лекарство больному). При описании предмета в функции определения, как правило, используется предлог для (лекарство для больного)».',
    bookRuleRef: 'Glazunova §19, Box p. 20',
    tags: ['Дательный vs для', 'Определительное значение', 'Объект действия']
  },
  {
    id: 'q-s1-ex21-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-nominal-gov',
    chapterTitle: 'Управление существительных',
    topicName: 'Sostantivi di sentimento con preposizione «к»',
    exerciseSource: 'Sezione 1, Esercizio 21 (p. 21)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Trasforma il verbo «уважать старших» nel rispettivo sostantivo deverbale con reggenza corretta:',
    sentenceWithBlank: '«уважать старших» -> «уважение (...)».',
    options: [
      { label: 'A', text: 'к старшим (к + Dativo)' },
      { label: 'B', text: 'старших (Genitivo)' },
      { label: 'C', text: 'старшими (Strumentale)' },
      { label: 'D', text: 'о старших (Preposizionale)' }
    ],
    correctOption: 'A',
    hint: 'I sostantivi di sentimento e attitudine verso persone (любовь, уважение, сочувствие, интерес, доверие) richiedono la preposizione «к» + Dativo.',
    explanation:
      'Risposta esatta: A (к старшим). Regola a p. 21: «От данных глагольных словосочетаний образуйте именные. Запомните существительные, которые требуют после себя дательного падежа с предлогом К: уважение к старшим, любовь к матери, сочувствие к близким, интерес к живописи».',
    bookRuleRef: 'Glazunova §21, p. 21',
    tags: ['Предлог к', 'Отглагольные существительные', 'Дательный падеж']
  },
  {
    id: 'q-s1-ex24-4',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-nominal-gov',
    chapterTitle: 'Управление существительных',
    topicName: 'Sostantivi причина, возможность, необходимость',
    exerciseSource: 'Sezione 1, Esercizio 24, frase 4 (p. 22-23, chiave p. 374)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Scegli la reggenza corretta per il sostantivo «причина» in una frase con negazione esistenziale:',
    sentenceWithBlank: '«Поверь мне, у тебя нет причин для (...)».',
    options: [
      { label: 'A', text: 'беспокойство' },
      { label: 'B', text: 'беспокойству' },
      { label: 'C', text: 'беспокойства' },
      { label: 'D', text: 'беспокойством' }
    ],
    correctOption: 'C',
    hint: 'Con i sostantivi причина, возможность, необходимость nelle frasi con есть / нет si usa la preposizione «для» seguita dal Genitivo.',
    explanation:
      'Risposta esatta: C (беспокойства). Regola a p. 22: «С существительными причина, возможность, необходимость конструкции с предлогами для (в) употребляются в предложениях со словами есть, нет, было, будет...». La preposizione «для» regge il Genitivo: «нет причин для беспокойства».',
    bookRuleRef: 'Glazunova §24, Box p. 22',
    tags: ['Причина', 'Предлог для', 'Родительный падеж']
  },
  {
    id: 'q-s1-ex27-3',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-double-gov',
    chapterTitle: 'Двойное управление',
    topicName: 'Doppia reggenza: Accusativo + Strumentale di strumento',
    exerciseSource: 'Sezione 1, Esercizio 27 (p. 24)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Inserisci le corrette forme casuali per «бельё» e «утюг» con il verbo «гладить»:',
    sentenceWithBlank: '«Гладить (...) (...)».',
    options: [
      { label: 'A', text: 'бельё (Acc.) / утюгом (Str.)' },
      { label: 'B', text: 'бельём (Str.) / утюг (Acc.)' },
      { label: 'C', text: 'белья (Gen.) / утюгу (Dat.)' },
      { label: 'D', text: 'бельё (Acc.) / утюг (Acc.)' }
    ],
    correctOption: 'A',
    hint: 'L\'oggetto dell\'azione va all\'Accusativo; lo strumento con cui si compie l\'azione va allo Strumentale senza preposizione.',
    explanation:
      'Risposta esatta: A (бельё утюгом). Regola a p. 23-24: nella doppia reggenza verbale si combinano Accusativo dell\'oggetto diretto e Strumentale dello strumento: «гладить бельё утюгом; нарезать колбасу ножом; пилить дерево пилой».',
    bookRuleRef: 'Glazunova §25б, p. 23-24',
    tags: ['Двойное управление', 'Инструмент действия', 'Творительный падеж']
  },
  {
    id: 'q-s1-ex28-10',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-double-gov',
    chapterTitle: 'Двойное управление',
    topicName: 'Doppia reggenza: добиться чего чем',
    exerciseSource: 'Sezione 1, Esercizio 28, frase 10 (p. 25)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Quale combinazione di casi regge il costrutto «добиться (...) (...)»?',
    sentenceWithBlank: '«Ты можешь добиться (...) только (...)».',
    options: [
      { label: 'A', text: 'успеха (Genitivo) / упорным трудом (Strumentale)' },
      { label: 'B', text: 'успех (Accusativo) / упорный труд (Accusativo)' },
      { label: 'C', text: 'успеху (Dativo) / упорным трудом (Strumentale)' },
      { label: 'D', text: 'об успехе (Prep.) / через труд (Acc.)' }
    ],
    correctOption: 'A',
    hint: 'Il verbo добиться regge l\'obiettivo al Genitivo (чего?) e il mezzo con cui si consegue allo Strumentale (чем?).',
    explanation:
      'Risposta esatta: A. Regola a p. 23 (punto в): «Глагол + родительный падеж + творительный падеж: Добиваться/добиться (достигать/достичь) чего? (чем?) повышения хорошей работой; добиться успеха упорным трудом».',
    bookRuleRef: 'Glazunova §25в, p. 23',
    tags: ['Добиться', 'Двойное управление', 'Родительный и творительный']
  },
  {
    id: 'q-s1-ex35-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-adj-gov',
    chapterTitle: 'Управление прилагательных',
    topicName: 'Reggenza di aggettivi con ambito limitato',
    exerciseSource: 'Sezione 1, Esercizio 35, frase 1 (p. 28, chiave p. 374)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Completa la frase con la corretta reggenza di «высокий» rispetto all\'attività sportiva:',
    sentenceWithBlank: '«Этот молодой человек кажется слишком высоким (...)».',
    options: [
      { label: 'A', text: 'для тенниса' },
      { label: 'B', text: 'теннису' },
      { label: 'C', text: 'в теннис' },
      { label: 'D', text: 'теннисом' }
    ],
    correctOption: 'A',
    hint: 'Quando l\'aggettivo esprime una proprietà la cui validità è limitata a un ambito o scopo specifico («troppo alto per...»), si usa la preposizione «для + Genitivo».',
    explanation:
      'Risposta esatta: A (для тенниса). Box a p. 28: «При уточнении значения признака зависимое слово употребляется в родительном падеже с предлогом ДЛЯ, если сфера распространения прилагательного ограничена: трудный для ребёнка; высокий для тенниса» (chiave p. 374).',
    bookRuleRef: 'Glazunova §35, Box p. 28',
    tags: ['Прилагательные', 'Предлог для', 'Ограничение сферы']
  },
  {
    id: 'q-s1-ex38-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-quant-gov',
    chapterTitle: 'Управление количественных числительных',
    topicName: 'Numerali 2, 3, 4 e concordanza aggettivale femminile',
    exerciseSource: 'Sezione 1, Esercizio 38, frase 1 (p. 30)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Inserisci le parole tra parentesi nella forma corretta dopo il numerale «2»:\n«Впереди нас бежали 2 (большая собака) по кличке Фрам и Рекс».',
    sentenceWithBlank: '«Впереди нас бежали две (...) по кличке Фрам и Рекс».',
    options: [
      { label: 'A', text: 'больших собаки' },
      { label: 'B', text: 'большие собаки' },
      { label: 'C', text: 'большие собак' },
      { label: 'D', text: 'больших собак' }
    ],
    correctOption: 'B',
    hint: 'Regola di Glazunova (p. 30): dopo два, три, четыре al nominativo, gli aggettivi concordati con sostantivi FEMMINILI vanno al Nominativo plurale, mentre il sostantivo va al Genitivo singolare.',
    explanation:
      'Risposta esatta: B (большие собаки). Regola a p. 30: «После числительных два, три, четыре... согласованные определения женского рода употребляются в именительном падеже множественного числа: две большие берёзы; мужского и среднего рода — в родительном падеже множественного числа: два больших дома». Poiché собака è femminile: «две большие собаки».',
    bookRuleRef: 'Glazunova §38, Box p. 30',
    tags: ['Числительные', 'Согласование определений', 'Женский род']
  },
  {
    id: 'q-s1-ex38-2',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-quant-gov',
    chapterTitle: 'Управление количественных числительных',
    topicName: 'Numerali 2, 3, 4 e aggettivi maschili/neutri',
    exerciseSource: 'Sezione 1, Esercizio 38, frase 2 (p. 30)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Come si concordano «сливочное мороженое» (neutro) e «молочный коктейль» (maschile) con «2» all\'Accusativo inanimato?',
    sentenceWithBlank: '«Я купил два (...) и два (...)».',
    options: [
      { label: 'A', text: 'сливочных мороженых / молочных коктейля' },
      { label: 'B', text: 'сливочные мороженых / молочные коктейли' },
      { label: 'C', text: 'сливочных мороженое / молочных коктейлей' },
      { label: 'D', text: 'сливочное мороженого / молочный коктейля' }
    ],
    correctOption: 'A',
    hint: 'Con sostantivi maschili e neutri, l\'aggettivo va al Genitivo plurale (-ых/-их), mentre il sostantivo va al Genitivo singolare.',
    explanation:
      'Risposta esatta: A. Regola p. 30: per sostantivi maschili e neutri, l\'aggettivo dipendente assume la desinenza del Genitivo plurale: «два сливочных мороженых» (sostantivo sostantivato neutro), «два молочных коктейля» (maschile).',
    bookRuleRef: 'Glazunova §38, Box p. 30',
    tags: ['Числительные', 'Родительный падеж', 'Мужской и средний род']
  },

  // --- Preposizioni di Luogo e Direzione ---
  {
    id: 'q-s1-ex41-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-prep-place',
    chapterTitle: 'Предлоги места и направления',
    topicName: 'Superficie fluviale: по vs в',
    exerciseSource: 'Sezione 1, Esercizio 41, frase 1 (p. 32, chiave p. 374)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale preposizione esprime il movimento sulla superficie dell\'acqua in:\n«(...) плыли жёлтые и красные листья»?',
    sentenceWithBlank: '«(...) плыли жёлтые и красные листья».',
    options: [
      { label: 'A', text: 'По реке' },
      { label: 'B', text: 'В реке' },
      { label: 'C', text: 'У реки' },
      { label: 'D', text: 'Под реку' }
    ],
    correctOption: 'A',
    hint: 'La preposizione «по» + dativo esprime il moto su una superficie aperta («плыть по реке», «гулять по парку»).',
    explanation:
      'Risposta esatta: A (По реке). A pagina 32 Glazunova spiega che per il movimento su una superficie aperta si usa «по + dativo» («По реке плыли листья»). Si usa «в реке» per la presenza statica immersa nell\'acqua («зимой вода в реке не замерзает») e «в реку» per la direzione d\'ingresso («выпустить рыбу в реку»).',
    bookRuleRef: 'Glazunova §41, p. 32 & Chiave p. 374',
    tags: ['Предлоги места', 'По реке', 'Дательный падеж']
  },
  {
    id: 'q-s1-ex42-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-prep-place',
    chapterTitle: 'Предлоги места и направления',
    topicName: 'Vicinanza spaziale: у vs около',
    exerciseSource: 'Sezione 1, Esercizio 42, frase 1 (p. 33)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Scegli la preposizione appropriata per indicare vicinanza immediata/contatto con la riva:',
    sentenceWithBlank: '«Мы оставили лодку (...) берега и пошли в город».',
    options: [
      { label: 'A', text: 'у' },
      { label: 'B', text: 'около' },
      { label: 'C', text: 'при' },
      { label: 'D', text: 'под' }
    ],
    correctOption: 'A',
    hint: 'La preposizione «у» indica prossimità immediata con contatto o attracco diretto («у берега», «у стола»).',
    explanation:
      'Risposta esatta: A (у). Box a p. 33: «Конструкция с предлогом у + род. падеж указывает на непосредственную близость к объекту (часто соприкосновение с этим объектом): сидеть у стола; предлог около + род. падеж обозначает расположение вблизи или вокруг объекта, на некотором расстоянии от него».',
    bookRuleRef: 'Glazunova §42, Box p. 33',
    tags: ['Предлоги места', 'Предлог у', 'Предлог около']
  },
  {
    id: 'q-s1-ex43-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-prep-place',
    chapterTitle: 'Предлоги места и направления',
    topicName: 'Luogo di incontro: у vs около vs рядом с',
    exerciseSource: 'Sezione 1, Esercizio 43, frase 1 (p. 34, chiave p. 374)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale preposizione si usa di preferenza per fissare un punto di ritrovo presso un edificio?\n«Давай встретимся (...) (университет)».',
    sentenceWithBlank: '«Давай встретимся (...) университета».',
    options: [
      { label: 'A', text: 'около (у)' },
      { label: 'B', text: 'рядом с' },
      { label: 'C', text: 'при' },
      { label: 'D', text: 'под' }
    ],
    correctOption: 'A',
    hint: 'Per darsi appuntamento nei pressi di un edificio pubblico si usa «около» o «у» + Genitivo.',
    explanation:
      'Risposta esatta: A (около / у). Regola p. 33-34: per incontrarsi nei dintorni di un edificio si usa «около университета / у университета» (chiave p. 374). «Рядом с» si usa invece quando si indicano due edifici omologhi («наш дом рядом с университетом»).',
    bookRuleRef: 'Glazunova §43, p. 34',
    tags: ['Около', 'У', 'Предлоги места']
  },
  {
    id: 'q-s1-ex46-7',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-prep-place',
    chapterTitle: 'Предлоги места и направления',
    topicName: 'Ufficio/Istituzione vs Persona: в vs у',
    exerciseSource: 'Sezione 1, Esercizio 46, frase 7 (p. 36)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Confronta la reggenza: «Узнай (...) кассе / (...) кассира, есть ли билеты на этот спектакль».',
    sentenceWithBlank: '«Узнай (...) кассе / (...) кассира...»',
    options: [
      { label: 'A', text: 'в / у' },
      { label: 'B', text: 'у / в' },
      { label: 'C', text: 'на / около' },
      { label: 'D', text: 'от / из' }
    ],
    correctOption: 'A',
    hint: 'Con un locale o istituzione inanimata si usa «в/на + preposizionale», con una persona animata si usa «у + genitivo».',
    explanation:
      'Risposta esatta: A (в кассе / у кассира). Regola p. 36: con sostantivi inanimati indicanti istituzioni o locali si usa «в / на + предложный» («в кассе, в деканате»); con sostantivi animati si usa «у + родительный» («у кассира, у секретаря»).',
    bookRuleRef: 'Glazunova §46, Box p. 36',
    tags: ['Предлоги места', 'Одушевленность', 'В vs у']
  },
  {
    id: 'q-s1-ex47-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-prep-place',
    chapterTitle: 'Предлоги места и направления',
    topicName: 'Struttura annessa: предлог при',
    exerciseSource: 'Sezione 1, Esercizio 47, frase 1 (p. 36)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Quale preposizione denota un corso o dipartimento annesso/istituito presso un\'università?\n«(...) университете работают курсы для поступающих».',
    sentenceWithBlank: '«(...) университете работают курсы для поступающих».',
    options: [
      { label: 'A', text: 'При' },
      { label: 'B', text: 'Около' },
      { label: 'C', text: 'У' },
      { label: 'D', text: 'Под' }
    ],
    correctOption: 'A',
    hint: 'La preposizione «при + preposizionale» indica un ente o servizio annesso a un\'istituzione centrale («presso l\'università»).',
    explanation:
      'Risposta esatta: A (При). Box a p. 36: «Предлог ПРИ + предл. падеж обозначает структуру, которая не входит в основной состав учреждения, но связана с ним территориально, финансово и так далее: курсы при университете, аптека при больнице».',
    bookRuleRef: 'Glazunova §47, Box p. 36',
    tags: ['Предлог при', 'Учреждение', 'Предложный падеж']
  },

  // --- Preposizioni di Tempo ---
  {
    id: 'q-s1-ex54-2',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-prep-time',
    chapterTitle: 'Предлоги времени',
    topicName: 'Tempo: до vs перед',
    exerciseSource: 'Sezione 1, Esercizio 54, frase 2 (p. 40)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale coppia di preposizioni distingue tra intervallo antecedente e limite temporale estremo?',
    sentenceWithBlank: '«Обычно я всегда читаю (...) сном сыну сказки. Ты всё успеешь сделать (...) сна, если постараешься».',
    options: [
      { label: 'A', text: 'перед / до' },
      { label: 'B', text: 'до / перед' },
      { label: 'C', text: 'к / перед' },
      { label: 'D', text: 'накануне / под' }
    ],
    correctOption: 'A',
    hint: '«Перед» esprime l\'intervallo immediatamente precedente nel corso del quale si compie l\'azione; «до» segna il limite finale entro cui concludere.',
    explanation:
      'Risposta esatta: A (перед / до). Regola p. 40: «Предлог перед обозначает интервал времени, в течение которого происходит действие (перед сном). Предлог до обозначает временной предел, до наступления которого должно произойти действие (до сна)».',
    bookRuleRef: 'Glazunova §54, Box p. 40',
    tags: ['Предлоги времени', 'Предлог перед', 'Предлог до']
  },
  {
    id: 'q-s1-ex56-2',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-prep-time',
    chapterTitle: 'Предлоги времени',
    topicName: 'Uso di накануне vs перед',
    exerciseSource: 'Sezione 1, Esercizio 56, frase 2 (p. 42)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'In quale dei seguenti casi la preposizione «перед» può essere sostituita da «накануне»?',
    sentenceWithBlank: '«(...) праздниками в магазинах всегда много народу».',
    options: [
      { label: 'A', text: 'Sì, perché si tratta di giorni festivi («накануне праздников»)' },
      { label: 'B', text: 'No, накануне si usa solo con le ore' },
      { label: 'C', text: 'No, накануне regge solo il caso strumentale' },
      { label: 'D', text: 'No, накануне si usa esclusivamente con i verbi di moto' }
    ],
    correctOption: 'A',
    hint: '«Накануне» significa "nel giorno/nei giorni immediatamente precedenti" ed è ideale con feste, esami o matrimoni.',
    explanation:
      'Risposta esatta: A. Regola p. 42: «Предлог накануне имеет значение \'за день до\' (\'в предыдущий день\') и употребляется с существительными: день свадьбы — накануне свадьбы; дни сдачи экзаменов — накануне экзаменов; накануне праздников».',
    bookRuleRef: 'Glazunova §56, Box p. 42',
    tags: ['Предлоги времени', 'Накануне']
  },
  {
    id: 'q-s1-ex57-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-prep-time',
    chapterTitle: 'Предлоги времени',
    topicName: 'Approssimazione poetica: предлог под',
    exerciseSource: 'Sezione 1, Esercizio 57, frase 1 (p. 42)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Quale preposizione temporale forma espressioni poetiche idiomatiche come «(...) вечер» o «(...) утро»?',
    sentenceWithBlank: '«К вечеру тучи рассеялись...» -> «(...) вечер тучи рассеялись».',
    options: [
      { label: 'A', text: 'Под' },
      { label: 'B', text: 'При' },
      { label: 'C', text: 'В' },
      { label: 'D', text: 'За' }
    ],
    correctOption: 'A',
    hint: 'La preposizione «под + Accusativo» si usa in contesti letterari con una rosa ristretta di parole: вечер, утро, Новый год.',
    explanation:
      'Risposta esatta: A (Под). Box a p. 42: «Предлог ПОД встречается преимущественно в художественной литературе. По значению близок к предлогу к, но сочетается с узким кругом существительных: вечер, утро, с названиями праздников (под вечер, под утро, под Новый год)».',
    bookRuleRef: 'Glazunova §57, Box p. 42',
    tags: ['Предлог под', 'Предлоги времени', 'Художественный стиль']
  },
  {
    id: 'q-s1-ex59-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-prep-time',
    chapterTitle: 'Предлоги времени',
    topicName: 'Partecipazione attiva vs evento parallelo: на vs во время',
    exerciseSource: 'Sezione 1, Esercizio 59, frase 1 (p. 44)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Confronta: «ответить (...) экзамене» (partecipare attivamente) vs «войти в аудиторию (...) экзамена» (fatto parallelo):',
    sentenceWithBlank: '«ответить (...) экзамене / войти в аудиторию (...) экзамена».',
    options: [
      { label: 'A', text: 'на / во время' },
      { label: 'B', text: 'во время / на' },
      { label: 'C', text: 'в / под' },
      { label: 'D', text: 'при / за' }
    ],
    correctOption: 'A',
    hint: '«На + Preposizionale» si usa quando il soggetto è coinvolto nell\'evento; «во время + Genitivo» quando l\'azione accade sullo sfondo dell\'evento.',
    explanation:
      'Risposta esatta: A (на / во время). Box a p. 44: «Если предмет принимает участие в событии, используется предлог НА + предл. пад. (ответить на экзамене). Если действие проходит на фоне события или параллельно с ним: предлог ВО ВРЕМЯ + род. пад. (войти в аудиторию во время экзамена)».',
    bookRuleRef: 'Glazunova §59, Box p. 44',
    tags: ['На vs во время', 'Предлоги времени']
  },
  {
    id: 'q-s1-ex67-2',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-prep-time',
    chapterTitle: 'Предлоги времени',
    topicName: 'Arco temporale di date: с... по vs с... до',
    exerciseSource: 'Sezione 1, Esercizio 67, frase 2 (p. 47)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale coppia di preposizioni si usa con le date del calendario per includere entrambi gli estremi?',
    sentenceWithBlank: '«Меня не будет в городе (...) 15 ноября (...) 24 ноября».',
    options: [
      { label: 'A', text: 'с ... по (по + Accusativo include l\'ultimo giorno)' },
      { label: 'B', text: 'от ... до' },
      { label: 'C', text: 'из ... в' },
      { label: 'D', text: 'к ... перед' }
    ],
    correctOption: 'A',
    hint: 'Nel computo ufficiale delle date (giorni, mesi, anni) si usa la correlazione «с + Genitivo ... по + Accusativo» per indicare l\'inclusione della data finale.',
    explanation:
      'Risposta esatta: A (с ... по). Box a p. 47: «Предлог ПО употребляется в сочетании с предлогом С при обозначении даты: числа, месяца, года, дня недели (с 15 ноября по 24 ноября включительно). Сочетание С... ДО употребляется при обозначении времени суток (с десяти до двенадцати)».',
    bookRuleRef: 'Glazunova §67, Box p. 47',
    tags: ['С... по', 'Даты', 'Предлоги времени']
  },

  // --- Preposizioni di Causa, Scopo e Altre ---
  {
    id: 'q-s1-ex72-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-prep-cause',
    chapterTitle: 'Предлоги причины',
    topicName: 'Preposizioni di causa: от vs из vs из-за',
    exerciseSource: 'Sezione 1, Esercizio 72, frase 1 (p. 50, chiave p. 375)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Scegli la preposizione corretta per esprimere una reazione fisica involontaria del corpo:\n«Когда он узнал о твоём приходе, его лицо побелело (...) страха».',
    sentenceWithBlank: '«...его лицо побелело (...) страха».',
    options: [
      { label: 'A', text: 'из' },
      { label: 'B', text: 'от' },
      { label: 'C', text: 'из-за' },
      { label: 'D', text: 'по' }
    ],
    correctOption: 'B',
    hint: 'La preposizione «от» indica una causa che provoca direttamente un cambiamento fisiologico immediato.',
    explanation:
      'Risposta esatta: B (от). Commento a p. 50: «Предлог ОТ обозначает причину, непосредственно вызывающую изменение состояния объекта: побелеть от страха, дрожать от холода. Предлог ИЗ выражает чувства-мотивы (прийти из любопытства). Предлог ИЗ-ЗА указывает на причину негативного характера».',
    bookRuleRef: 'Glazunova §72, Box p. 50',
    tags: ['Предлоги причины', 'Предлог от', 'Физиологическая реакция']
  },
  {
    id: 'q-s1-ex72-2',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-prep-cause',
    chapterTitle: 'Предлоги причины',
    topicName: 'Preposizioni di causa: movente psicologico vs ostacolo',
    exerciseSource: 'Sezione 1, Esercizio 72, frase 2 (p. 50)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Completa la frase: «Адвокат настаивал на том, что убийство произошло (...) ревности».',
    sentenceWithBlank: '«...убийство произошло (...) ревности».',
    options: [
      { label: 'A', text: 'из' },
      { label: 'B', text: 'от' },
      { label: 'C', text: 'из-за' },
      { label: 'D', text: 'благодаря' }
    ],
    correctOption: 'A',
    hint: 'La gelosia ha funto da impulso cosciente che ha spinto il colpevole all\'azione.',
    explanation:
      'Risposta esatta: A (из). Glazunova specifica che «из» esprime il sentimento interno soggettivo che muove l\'azione cosciente: «убийство произошло из ревности» (chiave p. 375).',
    bookRuleRef: 'Glazunova §72, Regola p. 50',
    tags: ['Предлоги причины', 'Предлог из', 'Психологический мотив']
  },
  {
    id: 'q-s1-ex72-9',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-prep-cause',
    chapterTitle: 'Предлоги причины',
    topicName: 'Movente soggettivo vs Conseguenza negativa (из vs из-за)',
    exerciseSource: 'Sezione 1, Esercizio 72, frase 9 (p. 50)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Confronta la duplice sfumatura: 1) «Он промолчал (...) трусости». 2) «(...) твоей трусости произошли непоправимые вещи».',
    sentenceWithBlank: '1) «Он промолчал (...) трусости». 2) «(...) твоей трусости произошли непоправимые вещи».',
    options: [
      { label: 'A', text: '1) из / 2) из-за' },
      { label: 'B', text: '1) из-за / 2) из' },
      { label: 'C', text: '1) от / 2) благодаря' },
      { label: 'D', text: '1) по / 2) от' }
    ],
    correctOption: 'A',
    hint: 'Nel primo caso la viltà è il movente del silenzio (из); nel secondo caso è la causa nefasta di conseguenze irreparabili (из-за).',
    explanation:
      'Risposta esatta: A (из / из-за). Regola p. 50: «из трусости» esprime il movente interiore per cui il soggetto ha taciuto; «из-за твоей трусости» esprime la causa esterna deleteria da cui sono scaturiti danni oggettivi.',
    bookRuleRef: 'Glazunova §72, Box p. 50',
    tags: ['Из vs из-за', 'Причина', 'Негативное последствие']
  },
  {
    id: 'q-s1-ex76-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-prep-cause',
    chapterTitle: 'Предлоги причины',
    topicName: 'Preposizione «по» nel registro colloquiale vs formale',
    exerciseSource: 'Sezione 1, Esercizio 76 (p. 52)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Trasforma la formula burocratica «Уехать в соответствии с советом врачей» nel registro neutro/colloquiale:',
    sentenceWithBlank: '«Уехать в соответствии с советом врачей» -> «Уехать (...) врачей».',
    options: [
      { label: 'A', text: 'по совету' },
      { label: 'B', text: 'из-за совета' },
      { label: 'C', text: 'от совета' },
      { label: 'D', text: 'при совете' }
    ],
    correctOption: 'A',
    hint: 'La preposizione «по + Dativo» esprime la conformità a un consiglio, norma o indicazione («по совету, по закону, по правилам»).',
    explanation:
      'Risposta esatta: A (по совету). Box a p. 52: «Предлог ПО + дат. падеж чаще употребляется в разговорной речи (уехать по совету врачей). Конструкции "в соответствии с чем", "основанный на чём" свойственны письменным стилям речи».',
    bookRuleRef: 'Glazunova §76, Box p. 52',
    tags: ['Предлог по', 'Разговорная речь', 'Дательный падеж']
  },
  {
    id: 'q-s1-ex80-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-prep-cause',
    chapterTitle: 'Предлоги причины',
    topicName: 'Preposizione благодаря + Dativo',
    exerciseSource: 'Sezione 1, Esercizio 80, frase 1 (p. 53, chiave p. 375)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Trasforma la causale usando la preposizione «благодаря»:\n«Начальство его любило, потому что он был талантлив и трудолюбив».',
    sentenceWithBlank: '«Начальство его любило (...) его таланту и трудолюбию».',
    options: [
      { label: 'A', text: 'благодаря' },
      { label: 'B', text: 'из-за' },
      { label: 'C', text: 'согласно' },
      { label: 'D', text: 'ввиду' }
    ],
    correctOption: 'A',
    hint: 'La causa è positiva e propizia al successo del soggetto («talento e laboriosità»).',
    explanation:
      'Risposta esatta: A (благодаря). Glazunova sottolinea che «благодаря» (+ Dativo) si usa esclusivamente per circostanze che hanno portato a un esito positivo. «Из-за» al contrario indicherebbe un esito sfavorevole.',
    bookRuleRef: 'Glazunova §80, Chiave p. 375',
    tags: ['Благодаря', 'Дательный падеж', 'Положительная причина']
  },
  {
    id: 'q-s1-ex83-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-prep-attrib',
    chapterTitle: 'Предлоги с определительным значением',
    topicName: 'Abbigliamento: в + preposizionale vs с + strumentale',
    exerciseSource: 'Sezione 1, Esercizio 83, frasi 1 e 2 (p. 55)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Come si esprime sintatticamente un dettaglio di un capo d\'abbigliamento rispetto all\'indossare l\'intero capo?\n1) «Она надевала белое платье (...) (волан)». 2) «Он был (...) (серый летний костюм)».',
    sentenceWithBlank: '1) «белое платье (...) воланом». 2) «Он был (...) сером летнем костюме».',
    options: [
      { label: 'A', text: '1) с (воланом) / 2) в (сером летнем костюме)' },
      { label: 'B', text: '1) в / 2) с' },
      { label: 'C', text: '1) на / 2) под' },
      { label: 'D', text: '1) без / 2) за' }
    ],
    correctOption: 'A',
    hint: 'Indossare l\'intero abito/copricapo richiede «в + preposizionale»; il dettaglio ornamentale dell\'abito usa «с + strumentale».',
    explanation:
      'Risposta esatta: A. Regola p. 55: «При описании одежды, обуви или головного убора употребляется конструкция с предлогом В: человек в пиджаке (в кепке); при указании на ДЕТАЛИ одежды используется предлог С: платье с воротником, с воланом».',
    bookRuleRef: 'Glazunova §83, Box p. 55',
    tags: ['Определительное значение', 'Одежда', 'Предлог в vs с']
  },
  {
    id: 'q-s1-ex84-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-prep-attrib',
    chapterTitle: 'Предлоги с определительным значением',
    topicName: 'Rivestimento e decorazione: с + strumentale vs в + preposizionale',
    exerciseSource: 'Sezione 1, Esercizio 84, frasi 1 e 7 (p. 56)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Confronta: 1) «макароны (...) (сыр)» (ingrediente misto/parziale). 2) «сапоги (...) (грязь)» (ricoperti totalmente da ogni lato).',
    sentenceWithBlank: '1) «макароны (...) сыром». 2) «сапоги (...) грязи».',
    options: [
      { label: 'A', text: '1) с (сыром) / 2) в (грязи)' },
      { label: 'B', text: '1) в / 2) с' },
      { label: 'C', text: '1) под / 2) из' },
      { label: 'D', text: '1) без / 2) на' }
    ],
    correctOption: 'A',
    hint: 'Se una sostanza si mescola o copre parzialmente si usa «с + Strumentale»; se circonda l\'oggetto da ogni lato si usa «в + Preposizionale».',
    explanation:
      'Risposta esatta: A. Box a p. 56: «Если вещество покрывает предмет частично или смешивается с ним: предлог С + твор. пад. (макароны с сыром); если вещество окружает предмет со всех сторон: предлог В + предл. пад. (сапоги в грязи)».',
    bookRuleRef: 'Glazunova §84, Box p. 56',
    tags: ['Вещество', 'Предлог с vs в', 'Определительное значение']
  },
  {
    id: 'q-s1-ex89-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-prep-attrib',
    chapterTitle: 'Предлоги с определительным значением',
    topicName: 'Ripararsi dal fenomeno: от vs против',
    exerciseSource: 'Sezione 1, Esercizio 89, frase 1 (p. 58)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Scegli la preposizione adatta per indicare riparo passivo/barriera da un fenomeno indesiderato:\n«Укрыться (...) дождя было негде, и мы промокли до нитки».',
    sentenceWithBlank: '«Укрыться (...) дождя было негде...»',
    options: [
      { label: 'A', text: 'от' },
      { label: 'B', text: 'против' },
      { label: 'C', text: 'из-за' },
      { label: 'D', text: 'без' }
    ],
    correctOption: 'A',
    hint: '«От» indica una barriera o difesa passiva che ferma l\'azione indesiderata (одежда от холода, очки от солнца). «Против» indica una lotta attiva contro un avversario.',
    explanation:
      'Risposta esatta: A (от). Box a p. 58: «Предлог ОТ употребляется, если речь идёт о преграде на пути нежелательного явления: одежда от холода, укрыться от дождя. Предлог ПРОТИВ употребляется при активной борьбе (выступить против войны)».',
    bookRuleRef: 'Glazunova §89, Box p. 58',
    tags: ['Предлог от', 'Предлог против', 'Преграда']
  },
  {
    id: 'q-s1-ex101-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-prep-indirect',
    chapterTitle: 'Предлоги со значением непрямого объекта',
    topicName: 'Sostituzione di persona: за vs вместо',
    exerciseSource: 'Sezione 1, Esercizio 101, frasi 1 e 7 (p. 66)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Confronta «за» e «вместо» per la sostituzione:\n1) «Сдай (...) меня деньги на экскурсию». 2) «Когда начальник уехал, (...) него работал заместитель».',
    sentenceWithBlank: '1) «Сдай (...) меня деньги». 2) «(...) него работал заместитель».',
    options: [
      { label: 'A', text: '1) за / 2) вместо' },
      { label: 'B', text: '1) вместо / 2) за' },
      { label: 'C', text: '1) за / 2) за' },
      { label: 'D', text: '1) для / 2) про' }
    ],
    correctOption: 'A',
    hint: '«За + Accusativo» = compiere un atto al posto di un altro; «Вместо + Genitivo» = sostituire qu nel suo ruolo formale o mansione.',
    explanation:
      'Risposta esatta: A (за / вместо). Box a p. 66: «Предлог ЗА + вин. пад. употребляется в значении "делая то, что должен был делать другой": сдай за меня деньги. Предлог ВМЕСТО + род. пад. — "заменяя кого-то на его месте": работать вместо начальника».',
    bookRuleRef: 'Glazunova §101, Box p. 66',
    tags: ['Предлог за', 'Предлог вместо', 'Непрямой объект']
  },
  {
    id: 'q-s1-ex103-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-prep-indirect',
    chapterTitle: 'Предлоги со значением непрямого объекта',
    topicName: 'Verbi di superiorità/beffa: предлог над',
    exerciseSource: 'Sezione 1, Esercizio 103, frase 1 (p. 67, chiave p. 377)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale reggenza richiede il verbo «смеяться» quando esprime ironia rivolta a qualcuno?',
    sentenceWithBlank: '«Почему ты всё время смеёшься (...) ? Разве я говорю что-то смешное?»',
    options: [
      { label: 'A', text: 'надо мной (над + Strumentale)' },
      { label: 'B', text: 'мне (Dativo)' },
      { label: 'C', text: 'меня (Accusativo)' },
      { label: 'D', text: 'обо мне (Preposizionale)' }
    ],
    correctOption: 'A',
    hint: 'I verbi che esprimono scherno, derisione o senso di superiorità (смеяться, издеваться, подшучивать) reggono «над + Strumentale».',
    explanation:
      'Risposta esatta: A (надо мной). Box a p. 67: «Глаголы, указывающие на чувство превосходства (смеяться, издеваться, сжалиться), требуют после себя существительного в творительном падеже с предлогом НАД: смеяться надо мной, издеваться над слабыми» (chiave p. 377).',
    bookRuleRef: 'Glazunova §103, Box p. 67',
    tags: ['Смеяться над', 'Предлог над', 'Творительный падеж']
  },
  {
    id: 'q-s1-ex104-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-prep-indirect',
    chapterTitle: 'Предлоги со значением непрямого объекта',
    topicName: 'Verbi di pensiero: думать над vs думать о',
    exerciseSource: 'Sezione 1, Esercizio 104, frase 1 e 2 (p. 68)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Confronta: 1) «Я советую тебе подумать (...) моим предложением» (esaminare a fondo una proposta esistente). 2) «В то время я часто думал (...) смысле жизни» (riflessione esistenziale generale).',
    sentenceWithBlank: '1) «подумать (...) моим предложением». 2) «думал (...) смысле жизни».',
    options: [
      { label: 'A', text: '1) над / 2) о' },
      { label: 'B', text: '1) о / 2) над' },
      { label: 'C', text: '1) при / 2) про' },
      { label: 'D', text: '1) за / 2) в' }
    ],
    correctOption: 'A',
    hint: '«Думать над + Strumentale» si usa quando l\'oggetto esiste già e viene vagliato analiticamente da diversi punti di vista. «Думать о + Preposizionale» si usa per l\'oggetto generale dei propri pensieri.',
    explanation:
      'Risposta esatta: A (над / о). Box a p. 68: «С глаголами мыслительного процесса существительные употребляются с предлогом НАД, если объект размышлений существует и рассматривается с разных точек зрения (думать над темой диссертации); предлог О употребляется, если процесс мышления находится на начальной стадии (думать о диссертации)».',
    bookRuleRef: 'Glazunova §104, Box p. 68',
    tags: ['Думать над vs о', 'Предложный падеж', 'Творительный падеж']
  },
  {
    id: 'q-s1-ex111-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-prep-goal',
    chapterTitle: 'Предлоги со значением цели',
    topicName: 'Scopo: в качестве vs ради',
    exerciseSource: 'Sezione 1, Esercizio 111, frase 1 (p. 73, chiave p. 377)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale costrutto esprime l\'equivalente funzionale "a titolo di esempio"?\n«Приведу тебе (...) случай из своей практики».',
    sentenceWithBlank: '«Приведу тебе (...) случай из своей практики».',
    options: [
      { label: 'A', text: 'в качестве примера (или как пример)' },
      { label: 'B', text: 'ради примера' },
      { label: 'C', text: 'для случая' },
      { label: 'D', text: 'на пример' }
    ],
    correctOption: 'A',
    hint: '«В качестве + Genitivo» indica che una cosa viene impiegata come equivalente o ruolo di un\'altra.',
    explanation:
      'Risposta esatta: A (в качестве примера). Box a p. 73: «Предлог В КАЧЕСТВЕ + род. падеж (и союз как + им./вин. пад.) употребляется при указании на то, что одно явление используется как эквивалент другого: использовать что-то в качестве наказания / как наказание; в качестве примера» (chiave p. 377).',
    bookRuleRef: 'Glazunova §111, Box p. 73',
    tags: ['В качестве', 'Цель', 'Эквивалент']
  },
  {
    id: 'q-s1-ex114-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-concordance',
    chapterTitle: 'Предлоги со значением условия',
    topicName: 'Condizione potenziale: при vs из-за',
    exerciseSource: 'Sezione 1, Esercizio 114, frase 1 (p. 75)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Scegli la preposizione appropriata per una raccomandazione ipotetica generale:\n«(...) сильном кашле вам лучше не выходить на улицу».',
    sentenceWithBlank: '«(...) сильном кашле вам лучше не выходить на улицу».',
    options: [
      { label: 'A', text: 'При' },
      { label: 'B', text: 'Из-за' },
      { label: 'C', text: 'Под' },
      { label: 'D', text: 'Благодаря' }
    ],
    correctOption: 'A',
    hint: 'La preposizione «при + preposizionale» si usa per esprimere condizioni generali, ipotetiche o raccomandazioni («in caso di»).',
    explanation:
      'Risposta esatta: A (При). Box a p. 75: «Предлог ПРИ + предл. падеж употребляется в потенциальном значении в предложениях рекомендательного характера: При плохих оценках ты не поступишь; При сильном кашле...».',
    bookRuleRef: 'Glazunova §114, Box p. 75',
    tags: ['Предлог при', 'Условие', 'Предложный падеж']
  },
  {
    id: 'q-s1-ex116-4',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-concordance',
    chapterTitle: 'Предлоги со значением условия',
    topicName: 'Condizione con preposizione «под»',
    exerciseSource: 'Sezione 1, Esercizio 116, frasi 3 e 4 (p. 76, chiave p. 378)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Confronta lo stato statico rispetto al passaggio a un nuovo stato con «под»:\n1) «находиться (...) влиянием матери» (stato attuale). 2) «взять (...) контроль» (passaggio a nuovo stato).',
    sentenceWithBlank: '1) «под влиянием» (Str.) / 2) «взять (...) контроль» (Acc.)',
    options: [
      { label: 'A', text: '1) под + Strumentale / 2) под + Accusativo' },
      { label: 'B', text: '1) под + Accusativo / 2) под + Strumentale' },
      { label: 'C', text: 'Entrambi allo Strumentale' },
      { label: 'D', text: 'Entrambi al Preposizionale' }
    ],
    correctOption: 'A',
    hint: 'Lo stato duraturo di controllo usa il Preposizionale/Strumentale («быть под контролем»); i verbi di transizione usano l\'Accusativo («взять под контроль»).',
    explanation:
      'Risposta esatta: A. Box a p. 76: «Предлог ПОД употребляется с предложным/творительным падежом в значении \'быть в каком-то состоянии\': быть под контролем; и с винительным падежом с глаголами перехода в другое состояние: взять под контроль».',
    bookRuleRef: 'Glazunova §116, Box p. 76',
    tags: ['Предлог под', 'Условия', 'Переход в состояние']
  },
  {
    id: 'q-s1-ex120-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-quant-gov',
    chapterTitle: 'Предлоги со значением количества',
    topicName: 'Espressione dell\'età: con e senza preposizione',
    exerciseSource: 'Sezione 1, Esercizio 120, frase 1 (p. 78-79, chiave p. 378)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale costrutto esprime l\'età attributiva di un bambino («un bambino di sei anni»)?',
    sentenceWithBlank: '«Обычно ребёнок (...) умеет уже читать».',
    options: [
      { label: 'A', text: 'в шесть лет' },
      { label: 'B', text: 'шесть лет' },
      { label: 'C', text: 'под шесть лет' },
      { label: 'D', text: 'из шести лет' }
    ],
    correctOption: 'A',
    hint: 'L\'età determinativa si esprime con «в + Accusativo»: мальчик в пять лет, ребёнок в шесть лет.',
    explanation:
      'Risposta esatta: A (в шесть лет). Box a p. 79: «При выражении возраста употребляется конструкция без предлога (обычно с глаголом быть): Ему (было) пять лет; или предлог В + вин. падеж: мальчик в пять лет; ребёнок в шесть лет умеет читать».',
    bookRuleRef: 'Glazunova §120, Box p. 79',
    tags: ['Возраст', 'Предлог в', 'Винительный падеж']
  },
  {
    id: 'q-s1-ex123-3',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-quant-gov',
    chapterTitle: 'Предлоги со значением количества',
    topicName: 'Comparativi: «на» vs «в»',
    exerciseSource: 'Sezione 1, Esercizio 123, frasi 1 e 3 (p. 81)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Confronta la differenza quantitativa vs la moltiplicazione nei comparativi:\n1) «Он на два года старше» (differenza di 2 anni).\n2) «Этот путь (...) длиннее, чем вчера» (il percorso è 3 volte più lungo).',
    sentenceWithBlank: '«...путь (...) длиннее, чем вчера».',
    options: [
      { label: 'A', text: 'в три раза' },
      { label: 'B', text: 'на три раза' },
      { label: 'C', text: 'за три раза' },
      { label: 'D', text: 'по три раза' }
    ],
    correctOption: 'A',
    hint: '«На + Accusativo» indica la differenza additiva o sottrattiva (на 5 см, на 2 года); «в + Accusativo» indica il rapporto di moltiplicazione o frazione (в два раза, в три раза).',
    explanation:
      'Risposta esatta: A (в три раза). Box a p. 81: «В сочетании со сравнительной степенью предлог НА указывает на РАЗНИЦУ в количестве (на год младше); предлог В указывает на СООТНОШЕНИЕ между объёмами (в два раза старше; в три раза длиннее)».',
    bookRuleRef: 'Glazunova §123, Box p. 81',
    tags: ['Сравнительная степень', 'В три раза vs на три', 'Количество']
  },
  {
    id: 'q-s1-ex126-2',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-quant-gov',
    chapterTitle: 'Предлоги со значением количества',
    topicName: 'Frazione di oggetti: предлог на vs в',
    exerciseSource: 'Sezione 1, Esercizio 126, frase 2 (p. 83)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale preposizione si usa con il verbo «разрезать» per dividere un elemento in porzioni?',
    sentenceWithBlank: '«Мне надо разрезать это мясо (...) несколько кусков».',
    options: [
      { label: 'A', text: 'на' },
      { label: 'B', text: 'в' },
      { label: 'C', text: 'под' },
      { label: 'D', text: 'по' }
    ],
    correctOption: 'A',
    hint: 'I verbi di divisione, taglio e rottura (разделить, разрезать, разорвать, разбить) reggono la preposizione «на + Accusativo».',
    explanation:
      'Risposta esatta: A (на). Box a p. 83: «С глаголами сложить, согнуть, свернуть употребляется предлог В + вин. пад. (сложить вдвое); с глаголами разделить, разрезать, разорвать, разбить — предлог НА + вин. падеж: разрезать мясо на куски».',
    bookRuleRef: 'Glazunova §126, Box p. 83',
    tags: ['Разрезать на', 'Предлог на', 'Количество']
  },
  {
    id: 'q-s1-ex129-6',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-adjoining',
    chapterTitle: 'Примыкание к глаголу',
    topicName: 'Verbi di fase e aspetto verbale all\'infinito',
    exerciseSource: 'Sezione 1, Esercizio 129, frase 6 (p. 85, chiave p. 378)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale forma verbale deve seguire obbligatoriamente il verbo di fase «перестать»?',
    sentenceWithBlank: '«(Переставать/перестать, спорить/поспорить), все уже устали от бесконечных конфликтов!»',
    options: [
      { label: 'A', text: 'Перестаньте спорить' },
      { label: 'B', text: 'Перестаньте поспорить' },
      { label: 'C', text: 'Переставайте поспорить' },
      { label: 'D', text: 'Перестань поспорить' }
    ],
    correctOption: 'A',
    hint: 'I verbi di fase (начать, стать, перестать, прекратить) si combinano SOLO con l\'infinito imperfettivo.',
    explanation:
      'Risposta esatta: A (Перестаньте спорить). Box a p. 85: «Фазовые глаголы не сочетаются с формами совершенного вида!». Di conseguenza dopo перестаньте è ammesso solo l\'infinito imperfettivo «спорить».',
    bookRuleRef: 'Glazunova §129, Box p. 85',
    tags: ['Фазовые глаголы', 'Вид глагола', 'Инфинитив']
  },
  {
    id: 'q-s1-ex130-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-adjoining',
    chapterTitle: 'Примыкание к глаголу',
    topicName: 'Infinito di scopo: con o senza «чтобы»',
    exerciseSource: 'Sezione 1, Esercizio 130, frase 1 (p. 86, chiave p. 379)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'È necessaria la congiunzione «чтобы» nella frase:\n«Я сделал эту работу, (...) отчитаться перед начальством»?',
    sentenceWithBlank: '«Я сделал эту работу, (...) отчитаться перед начальством».',
    options: [
      { label: 'A', text: 'Sì, è obbligatorio «чтобы»' },
      { label: 'B', text: 'No, è vietato «чтобы»' },
      { label: 'C', text: 'Solo se il verbo è al futuro' },
      { label: 'D', text: 'Dipende dal genere del soggetto' }
    ],
    correctOption: 'A',
    hint: 'Se il verbo reggente non è un verbo di moto immediato ma un\'azione compiuta autonoma («сделал работу»), l\'infinito finale richiede la congiunzione «чтобы».',
    explanation:
      'Risposta esatta: A (чтобы отчитаться). Box a p. 86: «В конструкциях со значением цели союз чтобы употребляется, если главное слово выражает самостоятельное (а не промежуточное) действие: Мы едим, чтобы жить; Я сделал эту работу, чтобы отчитаться» (chiave p. 379).',
    bookRuleRef: 'Glazunova §130, Box p. 86',
    tags: ['Примыкание', 'Союз чтобы', 'Инфинитив цели']
  },
  {
    id: 'q-s1-ex134-2',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-adjoining',
    chapterTitle: 'Примыкание к глаголу',
    topicName: 'Verbi di volontà: infinito vs чтобы',
    exerciseSource: 'Sezione 1, Esercizio 134, frase 2 (p. 89)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quando il soggetto della volontà e il soggetto dell\'azione differiscono:\n«Он захотел, (...) мы ушли».',
    sentenceWithBlank: '«Он захотел, (...) мы ушли».',
    options: [
      { label: 'A', text: 'чтобы' },
      { label: 'B', text: 'что' },
      { label: 'C', text: 'как' },
      { label: 'D', text: 'будто' }
    ],
    correctOption: 'A',
    hint: 'Con verbi di desiderio e intenzione riferiti a un soggetto terzo diverso, si usa «чтобы» + verbo al passato.',
    explanation:
      'Risposta esatta: A (чтобы). Box a p. 89: «В конструкциях со значением желания или намерения употребляется инфинитив, если действие относится к одному субъекту (Я хочу уйти), и союз ЧТОБЫ, если действия относятся к разным субъектам: Я хочу, чтобы вы ушли; Он захотел, чтобы мы ушли».',
    bookRuleRef: 'Glazunova §134, Box p. 89',
    tags: ['Конструкции желания', 'Чтобы', 'Разные субъекты']
  },
  {
    id: 'q-s1-ex148-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-adjoining',
    chapterTitle: 'Примыкание к прилагательному',
    topicName: 'Avverbi di grado: совершенно vs совсем',
    exerciseSource: 'Sezione 1, Esercizio 148, frase 1 (p. 99, chiave p. 381)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Analizza la differenza tra «совершенно» e «совсем»:\n«Потолок в этой комнате был (...) низкий, и можно было, встав на цыпочки, дотянуться до него рукой». Quale avverbio è preferibile?',
    sentenceWithBlank: '«Потолок в этой комнате был (...) низкий...»',
    options: [
      { label: 'A', text: 'совсем (indica caratteristiche fisiche ed esteriori tangibili)' },
      { label: 'B', text: 'совершенно (indica solo misure geometriche assolute)' },
      { label: 'C', text: 'слишком (è obbligatorio con i soffitti)' },
      { label: 'D', text: 'очень (l\'unico ammesso con низкий)' }
    ],
    correctOption: 'A',
    hint: 'Quale dei due avverbi si lega agli attributi fisici esteriori visibili di un oggetto?',
    explanation:
      'Risposta esatta: A. A p. 99 Glazunova chiarisce: «Совершенно сочетается с признаковыми словами, обозначающими внутренние качества предмета; совсем — со словами, указывающими на внешние стороны проявления признака». Per l\'altezza fisica visibile: «совсем низкий».',
    bookRuleRef: 'Glazunova §148, Box p. 99',
    tags: ['Наречия меры и степени', 'Совсем vs совершенно']
  },
  {
    id: 'q-s1-ex150-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-adjoining',
    chapterTitle: 'Примыкание к прилагательному',
    topicName: 'Avverbio «слишком» e ostacolo al fine',
    exerciseSource: 'Sezione 1, Esercizio 150, frase 1 (p. 100, chiave p. 381)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale avverbio esprime che l\'intensità del sintomo impedisce al parlante di agire?\n«Сегодня я чувствую себя (...) уставшим, чтобы принимать решения».',
    sentenceWithBlank: '«Сегодня я чувствую себя (...) уставшим, чтобы принимать решения».',
    options: [
      { label: 'A', text: 'слишком' },
      { label: 'B', text: 'очень' },
      { label: 'C', text: 'совершенно' },
      { label: 'D', text: 'достаточно' }
    ],
    correctOption: 'A',
    hint: 'L\'avverbio «слишком» indica un eccesso negativo che funge da ostacolo al raggiungimento di un obiettivo.',
    explanation:
      'Risposta esatta: A (слишком). Box a p. 100: «Слишком в отличие от очень и совершенно выражает отрицательную оценку признака, то есть указывает на превышение степени его проявления, которое препятствует осуществлению действий: Он слишком общительный (от разговора с ним быстро устаёшь); слишком уставшим, чтобы принимать решения».',
    bookRuleRef: 'Glazunova §150, Box p. 100',
    tags: ['Слишком', 'Отрицательная оценка', 'Препятствие действию']
  },
  {
    id: 'q-s1-ex155-pelevin',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-lit-revision',
    chapterTitle: 'Материал для повторения: Раздел 1',
    topicName: 'Sintagma nei testi contemporanei (V. Pelevin)',
    exerciseSource: 'Sezione 1, Esercizio 16 (p. 18) / Materiale letterario p. 104',
    level: 'C1',
    type: 'case_scenario',
    prompt: 'Nel brano letterario di Viktor Pelevin («Для Ники сахарница была просто усечённым конусом из блестящего материала...»), quale tipo di legame sintattico unisce «усечённым конусом» e «из блестящего материала»?',
    sentenceWithBlank: '«...была просто усечённым конусом (каким?) из блестящего материала...»',
    options: [
      { label: 'A', text: 'Управление с предлогом из с определительным значением (materiale di cui è fatto)' },
      { label: 'B', text: 'Согласование в творительном падеже' },
      { label: 'C', text: 'Примыкание наречия' },
      { label: 'D', text: 'Двойное управление без предлогов' }
    ],
    correctOption: 'A',
    hint: 'La preposizione «из» seguita dal Genitivo esprime la materia costitutiva dell\'oggetto.',
    explanation:
      'Risposta esatta: A. Il sintagma «из блестящего материала» è un complemento retto con preposizione avente valore determinativo/attributivo (определительное значение), specificando la materia.',
    bookRuleRef: 'Glazunova §81, p. 53',
    tags: ['Пелевин', 'Предлоги с определительным значением', 'Материал']
  },
  {
    id: 'q-s1-ex158-shalamov',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-lit-revision',
    chapterTitle: 'Материал для повторения: Раздел 1',
    topicName: 'Reggenza su brano d\'autore: V. Šalamov',
    exerciseSource: 'Sezione 1, Esercizio 16 (p. 18)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Nel testo di Varlam Šalamov sui Racconti di Kolyma:\n«В этом вогнутом зеркале отражаются вполнe реальные виселицы... Здесь играют (...) войну». Quale reggenza richiede «играть» per un gioco/simulazione?',
    sentenceWithBlank: '«Здесь играют (...) войну».',
    options: [
      { label: 'A', text: 'в' },
      { label: 'B', text: 'на' },
      { label: 'C', text: 'с' },
      { label: 'D', text: 'про' }
    ],
    correctOption: 'A',
    hint: 'Il verbo играть con i giochi sportivi, infantili o simulazioni richiede «в + Accusativo» (играть в футбол, в карты, в войну).',
    explanation:
      'Risposta esatta: A (в). Regola a p. 60: il verbo играть con giochi e simulazioni regge «в + винительный падеж»: «играть в войну, играть в шахматы». Se fosse uno strumento musicale, reggerebbe «на + предложный» (играть на скрипке).',
    bookRuleRef: 'Glazunova §93н, p. 60',
    tags: ['Шаламов', 'Играть в', 'Винительный падеж']
  },
  {
    id: 'q-s1-ex40-2',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-prep-place',
    chapterTitle: 'Предлоги места и направления',
    topicName: 'Movimento sulla superficie: предлог по vs на',
    exerciseSource: 'Sezione 1, Esercizio 40, frase 4 (p. 32)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale preposizione esprime la pioggia che picchietta sulla superficie del tetto?\n«Всю ночь (...) крыше барабанил дождь».',
    sentenceWithBlank: '«Всю ночь (...) крыше барабанил дождь».',
    options: [
      { label: 'A', text: 'по' },
      { label: 'B', text: 'на' },
      { label: 'C', text: 'в' },
      { label: 'D', text: 'у' }
    ],
    correctOption: 'A',
    hint: 'Il contatto reiterato e diffuso sulla superficie esterna di un oggetto richiede «по + Dativo» (барабанить по крыше, гладить по голове).',
    explanation:
      'Risposta esatta: A (по). Box a p. 32: «Конструкция с предлогом ПО + дат. падеж употребляется при описании механического движения по поверхности какого-нибудь объекта: барабанил по крыше; по лицу струился пот».',
    bookRuleRef: 'Glazunova §40, Box p. 32',
    tags: ['Предлог по', 'Движение по поверхности', 'Дательный падеж']
  },
  {
    id: 'q-s1-ex52-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-prep-place',
    chapterTitle: 'Предлоги места и направления',
    topicName: 'Luogo di conoscenza o interesse comune: предлог по',
    exerciseSource: 'Sezione 1, Esercizio 52, frase 1 (p. 39)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Come si esprime la provenienza o ambito di frequentazione in «amici dell\'università»?\n«Друзей (...) у меня было немного».',
    sentenceWithBlank: '«Друзей (...) у меня было немного».',
    options: [
      { label: 'A', text: 'по университету (из университета)' },
      { label: 'B', text: 'в университете' },
      { label: 'C', text: 'к университету' },
      { label: 'D', text: 'при университете' }
    ],
    correctOption: 'A',
    hint: 'Per specificare dove è avvenuta la conoscenza («знакомый по институту, друг по университету») si usa «по + Dativo» collocato dopo il sostantivo.',
    explanation:
      'Risposta esatta: A (по университету / из университета). Box a p. 39: «При указании на место, где произошло знакомство, или на область общих интересов предлог ПО + дат. пад. имеет определительное значение и стоит после главного слова: знакомый по институту; товарищ по школе; друзья по университету».',
    bookRuleRef: 'Glazunova §52, Box p. 39',
    tags: ['Знакомство', 'Предлог по', 'Определительное значение']
  },
  {
    id: 'q-s1-ex58-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-prep-time',
    chapterTitle: 'Предлоги времени',
    topicName: 'Fenomeni naturali concomitanti: предлог в + Accusativo',
    exerciseSource: 'Sezione 1, Esercizio 58, frase 1 (p. 42)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Trasforma la subordinata «Когда на улице дождь, не стоит выходить из дома» usando una preposizione temporale:',
    sentenceWithBlank: '«Когда на улице дождь...» -> «(...) не стоит выходить из дома без зонтика».',
    options: [
      { label: 'A', text: 'В дождь' },
      { label: 'B', text: 'На дожде' },
      { label: 'C', text: 'При дожде' },
      { label: 'D', text: 'По дождю' }
    ],
    correctOption: 'A',
    hint: 'Con i fenomeni naturali concomitanti (метель, гроза, дождь, жара) si usa «в + Accusativo» (в дождь, в жару, в мороз).',
    explanation:
      'Risposta esatta: A (В дождь). Box p. 42: «При указании на сопутствующие событию природные явления (метель, гроза, дождь, мороз, жара) употребляется предлог В + вин. падеж: в дождь, в жару, в грозу» (chiave p. 374).',
    bookRuleRef: 'Glazunova §58, Box p. 42',
    tags: ['Природные явления', 'Предлог в', 'Винительный падеж']
  },
  {
    id: 'q-s1-ex75-4',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-prep-cause',
    chapterTitle: 'Предлоги причины',
    topicName: 'Causa di punizione o riconoscimento: предлог за + Accusativo',
    exerciseSource: 'Sezione 1, Esercizio 75, frase 4 (p. 51)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale preposizione esprime il motivo di una sanzione o di una lode?\n«Его лишили водительских прав (...) превышение скорости».',
    sentenceWithBlank: '«...водительских прав (...) превышение скорости».',
    options: [
      { label: 'A', text: 'за' },
      { label: 'B', text: 'из-за' },
      { label: 'C', text: 'от' },
      { label: 'D', text: 'по' }
    ],
    correctOption: 'A',
    hint: 'La punizione o la ricompensa per una specifica condotta (лишить прав, наградить медалью) regge la preposizione «за + Accusativo».',
    explanation:
      'Risposta esatta: A (за). Box p. 51: «Если говорится о признании чьих-то заслуг, недовольстве чьим-то поведением или наказании, непосредственная причина выражается с помощью предлога ЗА + вин. падеж: благодарить за помощь; наказать за опоздание; лишить прав за превышение скорости» (chiave p. 375).',
    bookRuleRef: 'Glazunova §75, Box p. 51',
    tags: ['Предлог за', 'Наказание и награда', 'Винительный падеж']
  },
  {
    id: 'q-s1-ex95-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-prep-indirect',
    chapterTitle: 'Предлоги со значением непрямого объекта',
    topicName: 'Costrutti di richiesta: просить vs спросить',
    exerciseSource: 'Sezione 1, Esercizio 95, frase 1 (p. 62)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale preposizione regge la persona a cui si chiede un consiglio o aiuto con il verbo «просить»?\n«Попроси совета (...) своего друга».',
    sentenceWithBlank: '«Попроси совета (...) своего друга».',
    options: [
      { label: 'A', text: 'у (у своего друга)' },
      { label: 'B', text: 'от' },
      { label: 'C', text: 'к' },
      { label: 'D', text: 'с' }
    ],
    correctOption: 'A',
    hint: 'In russo chiedere qc a qu si esprime con «просить / попросить что-то у кого-то» (у + Genitivo).',
    explanation:
      'Risposta esatta: A (у). Box a p. 62: «Запомните следующие конструкции: просить/попросить кого о чём; просить/попросить У КОГО что: попросить совета у своего друга; попросить помощи у коллег» (chiave p. 376).',
    bookRuleRef: 'Glazunova §95, Box p. 62',
    tags: ['Просить у кого', 'Предлог у', 'Непрямой объект']
  },
  {
    id: 'q-s1-ex102-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-prep-indirect',
    chapterTitle: 'Предлоги со значением непрямого объекта',
    topicName: 'Reazione di risposta: предлог на vs в ответ на',
    exerciseSource: 'Sezione 1, Esercizio 102, frase 1 (p. 67, chiave p. 376)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Quale formula esprime la reazione a una battuta scherzosa se il verbo «рассмеяться» non include di per sé l\'idea di risposta?\n«Она (...) рассмеялась (...) его шутку».',
    sentenceWithBlank: '«Она (...) рассмеялась (...) его шутку».',
    options: [
      { label: 'A', text: 'в ответ на' },
      { label: 'B', text: 'на' },
      { label: 'C', text: 'из' },
      { label: 'D', text: 'от' }
    ],
    correctOption: 'A',
    hint: 'Se il verbo non ha intrinsecamente il significato di replica (come реагировать, отвечать), si usa la locuzione preposizionale «в ответ на + Accusativo».',
    explanation:
      'Risposta esatta: A (в ответ на его шутку). Box a p. 67: «Ответная реакция со стороны субъекта выражается с помощью предлога НА (если семантика главного слова уже включает значение ответного действия: реагировать на письмо) или конструкцией В ОТВЕТ НА ЧТО (если это значение отсутствует: закричать в ответ на обвинения; рассмеялась в ответ на его шутку)» (chiave p. 376).',
    bookRuleRef: 'Glazunova §102, Box p. 67',
    tags: ['В ответ на', 'Реакция', 'Винительный падеж']
  },
  {
    id: 'q-s1-ex108-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-prep-goal',
    chapterTitle: 'Предлоги со значением цели',
    topicName: 'Destinazione nel calendario: предлог на + Accusativo',
    exerciseSource: 'Sezione 1, Esercizio 108, frase 1 (p. 71, chiave p. 377)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale preposizione indica il mese a cui è destinato l\'orario degli esami?\n«...нам надо составить расписание экзаменов (...) январь».',
    sentenceWithBlank: '«...расписание экзаменов (...) январь».',
    options: [
      { label: 'A', text: 'на' },
      { label: 'B', text: 'в' },
      { label: 'C', text: 'для' },
      { label: 'D', text: 'к' }
    ],
    correctOption: 'A',
    hint: 'Nelle costruzioni attributive per intervalli di tempo programmati (orario per la settimana, per gennaio) si usa «на + Accusativo».',
    explanation:
      'Risposta esatta: A (на). Box a p. 71: «В определительных конструкциях при выражении отрезка времени употребляется предлог НА + вин. падеж: расписание на неделю; расписание экзаменов на январь» (chiave p. 377).',
    bookRuleRef: 'Glazunova §108, Box p. 71',
    tags: ['Предлог на', 'Отрезок времени', 'Винительный падеж']
  }
];

