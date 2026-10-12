import { Question } from '../../types';

export const QUESTIONS_BATCH_SECTION_1: Question[] = [
  // --- Согласование с географическими названиями (p. 10-14, Es. 5-7) ---
  {
    id: 'q-s1-geo-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-coord',
    chapterTitle: 'Согласование: географические названия',
    topicName: 'Flessione del toponimo con nome generico «город»',
    exerciseSource: 'Sezione 1, Esercizio 5, frase 1 (p. 11)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Qual è la forma corretta del toponimo maschile dopo il sostantivo generico flesso «в городе»?\n«Они познакомились в городе (...) много лет назад».',
    sentenceWithBlank: '«Они познакомились в городе (...) много лет назад».',
    options: [
      { label: 'A', text: 'Саратове (il toponimo slavo/russo declinabile concorda nel caso col sostantivo generico)' },
      { label: 'B', text: 'Саратов (invariato al nominativo)' },
      { label: 'C', text: 'Саратову' },
      { label: 'D', text: 'Саратова' }
    ],
    correctOption: 'A',
    hint: 'I toponimi russi e slavi maschili terminanti in consonante concordano nel caso con la parola generica «город» (в городе Москве, в городе Саратове).',
    explanation:
      'Risposta esatta: A (Саратове). Glazunova p. 11, §5: I toponimi slavi e russi declinabili di genere maschile e femminile che designano città concordano col termine appositivo «город» nello stile standard («в городе Москве», «в городе Саратове»). Solo i toponimi neutri in -о/-е o stranieri indeclinabili mantengono il nominativo.',
    bookRuleRef: 'Glazunova §5, p. 11',
    tags: ['Согласование', 'Географические названия', 'Город Саратов']
  },
  {
    id: 'q-s1-geo-2',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-coord',
    chapterTitle: 'Согласование: географические названия',
    topicName: 'Toponimi con la parola «река»',
    exerciseSource: 'Sezione 1, Esercizio 6, frase 3 (p. 13)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Completa la frase con la concordanza corretta del nome del fiume:\n«Теплоход медленно плыл по реке (...)».',
    sentenceWithBlank: '«Теплоход медленно плыл по реке (...)».',
    options: [
      { label: 'A', text: 'Волге (concorda in dativo col termine «река»)' },
      { label: 'B', text: 'Волга (resta al nominativo)' },
      { label: 'C', text: 'Волгу' },
      { label: 'D', text: 'Волгой' }
    ],
    correctOption: 'A',
    hint: 'I nomi di fiumi femminili russi che terminano in -а/-я concordano regolarmente in genere, numero e caso con «река».',
    explanation:
      'Risposta esatta: A (Волге). Glazunova p. 13: i nomi di fiumi di declinazione russa comune (Волга, Ока, Нева) concordano obbligatoriamente col nome generico «река» («по реке Волге», «на реке Неве»).',
    bookRuleRef: 'Glazunova §6, p. 13',
    tags: ['Согласование', 'Географические названия', 'Река Волга']
  },
  {
    id: 'q-s1-app-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-coord',
    chapterTitle: 'Согласование с приложениями',
    topicName: 'Nomi di testate, romanzi e marchi tra virgolette',
    exerciseSource: 'Sezione 1, Esercizio 7, frase 2 (p. 14)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'In presenza del nome comune «газета» (o «журнал»), il titolo proprio tra virgolette va declinato o no?\n«Статья была опубликована в газете (...)».',
    sentenceWithBlank: '«Статья была опубликована в газете (...)».',
    options: [
      { label: 'A', text: '«Известия» (invariato al nominativo perché preceduto dal nome generico «газета»)' },
      { label: 'B', text: '«Известиях»' },
      { label: 'C', text: '«Известиям»' },
      { label: 'D', text: '«Известиями»' }
    ],
    correctOption: 'A',
    hint: 'Quando è presente il sostantivo generico (газета, журнал, роман, фильм), il nome proprio convenzionale tra virgolette resta sempre al nominativo.',
    explanation:
      'Risposta esatta: A («Известия»). Glazunova p. 14: «При наличии родового наименования (газета, журнал, теплоход, станция) название в кавычках сохраняет форму именительного падежа: в газете "Известия", на станции "Маяковская"». Senza il nome comune, si fletterebbe («в "Известиях"»).',
    bookRuleRef: 'Glazunova §7, p. 14',
    tags: ['Приложение', 'Кавычки', 'Именительный падеж']
  },

  // --- Verbi di privazione, separazione e Genitivo (p. 25-29, Es. 11-13) ---
  {
    id: 'q-s1-gov-deprive-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-noprep',
    chapterTitle: 'Беспредложное управление: лишать / лишиться',
    topicName: 'Reggenza del verbo «лишать / лишить» e forma riflessiva',
    exerciseSource: 'Sezione 1, Esercizio 11, frase 2 (p. 25)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale caso regge il verbo «лишиться» (perdere, rimanere privo di)?\n«В результате аварии он лишился (...)».',
    sentenceWithBlank: '«В результате аварии он лишился (...)».',
    options: [
      { label: 'A', text: 'зрения (Genitivo senza preposizione)' },
      { label: 'B', text: 'зрение (Accusativo)' },
      { label: 'C', text: 'зрением (Strumentale)' },
      { label: 'D', text: 'о зрении (Prepositivo)' }
    ],
    correctOption: 'A',
    hint: '«Лишать кого? чего?» regge Accusativo della persona e Genitivo della cosa privata; il riflessivo «лишиться» regge Genitivo.',
    explanation:
      'Risposta esatta: A (зрения). Glazunova p. 25: «Лишать / лишить кого чего (род. пад.) — лишиться чего (род. пад.): лишиться покоя, сна, надежды, зрения».',
    bookRuleRef: 'Glazunova §11, p. 25',
    tags: ['Управление', 'Родительный падеж', 'Лишиться']
  },
  {
    id: 'q-s1-gov-deserve-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-noprep',
    chapterTitle: 'Беспредложное управление: заслуживать',
    topicName: 'Reggenza di «заслуживать / заслужить»',
    exerciseSource: 'Sezione 1, Esercizio 12, frase 4 (p. 27)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale reggenza richiede «заслуживать» nel senso di essere degno di qualcosa?\n«Этот проект безусловно заслуживает (...)».',
    sentenceWithBlank: '«Этот проект безусловно заслуживает (...)».',
    options: [
      { label: 'A', text: 'внимания (Genitivo)' },
      { label: 'B', text: 'внимание (Accusativo)' },
      { label: 'C', text: 'к вниманию (Dativo)' },
      { label: 'D', text: 'вниманием (Strumentale)' }
    ],
    correctOption: 'A',
    hint: '«Заслуживать» (imperfettivo, essere degno di) regge il Genitivo: заслуживать уважения, внимания, похвалы.',
    explanation:
      'Risposta esatta: A (внимания). Glazunova p. 27: «Заслуживать кого/чего (род. пад.): этот поступок заслуживает похвалы; проект заслуживает внимания». Al perfettivo «заслужить» può reggere l\'Accusativo se si tratta di una ricompensa concreta («заслужить награду, доверие»).',
    bookRuleRef: 'Glazunova §12, p. 27',
    tags: ['Управление', 'Заслуживать', 'Родительный падеж']
  },
  {
    id: 'q-s1-gov-envy-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-noprep',
    chapterTitle: 'Беспредложное управление: завидовать',
    topicName: 'Reggenza del verbo «завидовать»',
    exerciseSource: 'Sezione 1, Esercizio 14, frase 6 (p. 31)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale caso regge il verbo «завидовать» (invidiare)?\n«Не стоит завидовать (...) чужим успехам».',
    sentenceWithBlank: '«Не стоит завидовать (...)».',
    options: [
      { label: 'A', text: 'чужим успехам (Dativo senza preposizione)' },
      { label: 'B', text: 'чужих успехов (Genitivo)' },
      { label: 'C', text: 'чужие успехи (Accusativo)' },
      { label: 'D', text: 'на чужие успехи' }
    ],
    correctOption: 'A',
    hint: 'Il verbo завидовать regge a chi/a cosa si porta invidia al caso Dativo (кому? чему?).',
    explanation:
      'Risposta esatta: A (чужим успехам). Glazunova p. 31: «Завидовать кому/чему (дат. пад.): завидовать чужому счастью, коллегам, успехам».',
    bookRuleRef: 'Glazunova §14, p. 31',
    tags: ['Управление', 'Дательный падеж', 'Завидовать']
  },
  {
    id: 'q-s1-gov-threat-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-noprep',
    chapterTitle: 'Беспредложное управление: угрожать',
    topicName: 'Doppia reggenza di «угрожать кому чем»',
    exerciseSource: 'Sezione 1, Esercizio 26, frase 3 (p. 49)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quali casi regge il verbo «угрожать» per indicare il destinatario della minaccia e l\'oggetto con cui si minaccia?\n«Опасность угрожает (...) полным разорением».',
    sentenceWithBlank: '«Опасность угрожает (...) полным разорением».',
    options: [
      { label: 'A', text: 'предприятию (Dativo della persona/ente + Strumentale del mezzo)' },
      { label: 'B', text: 'предприятие (Accusativo)' },
      { label: 'C', text: 'от предприятия' },
      { label: 'D', text: 'на предприятие' }
    ],
    correctOption: 'A',
    hint: 'Угрожать кому (Dativo) чем (Strumentale).',
    explanation:
      'Risposta esatta: A (предприятию). Glazunova p. 49: «Угрожать кому/чему (дат. пад.) чем (твор. пад.): угрожать безопасности, угрожать штрафом, разорением».',
    bookRuleRef: 'Glazunova §26, p. 49',
    tags: ['Управление', 'Угрожать', 'Дательный и творительный']
  },
  {
    id: 'q-s1-gov-possession-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-noprep',
    chapterTitle: 'Беспредложное управление: владеть vs обладать',
    topicName: 'Reggenza sinonimica: владеть / обладать',
    exerciseSource: 'Sezione 1, Esercizio 30, frase 2 (p. 54)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Scegli la forma corretta per il complemento retto da «обладать» (possedere doti naturali, qualità):\n«Этот учёный обладает (...) интуицией и феноменальной памятью».',
    sentenceWithBlank: '«Этот учёный обладает (...) интуицией...».',
    options: [
      { label: 'A', text: 'редкой (Strumentale: обладать чем)' },
      { label: 'B', text: 'редкую (Accusativo)' },
      { label: 'C', text: 'редкой от природы (Genitivo)' },
      { label: 'D', text: 'о редкой' }
    ],
    correctOption: 'A',
    hint: 'Sia «владеть» che «обладать» reggono il caso Strumentale (чем?).',
    explanation:
      'Risposta esatta: A (редкой). Glazunova p. 54: «Обладать чем (твор. пад.): обладать редким талантом, умом, интуицией. Владеть чем: владеть имуществом, языком, собой».',
    bookRuleRef: 'Glazunova §30, p. 54',
    tags: ['Управление', 'Обладать', 'Творительный падеж']
  },
  {
    id: 'q-s1-gov-sacrifice-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-noprep',
    chapterTitle: 'Беспредложное управление: жертвовать',
    topicName: 'Differenza di reggenza: жертвовать чем vs что',
    exerciseSource: 'Sezione 1, Esercizio 31, frase 5 (p. 56)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Cosa significa «жертвовать жизнью / временем» (Strumentale) rispetto a «жертвовать деньги» (Accusativo)?\n«Ради спасения друга он пожертвовал (...)».',
    sentenceWithBlank: '«Ради спасения друга он пожертвовал (...)».',
    options: [
      { label: 'A', text: 'своей карьерой (Strumentale: rinunciare a qualcosa di prezioso, sacrificare)' },
      { label: 'B', text: 'свою карьеру (Accusativo)' },
      { label: 'C', text: 'о своей карьере' },
      { label: 'D', text: 'для своей карьеры' }
    ],
    correctOption: 'A',
    hint: 'Glazunova specifica la differenza cruciale: sacrificare/rinunciare a qualcosa di astratto o prezioso richiede lo Strumentale (чем), mentre donare in beneficenza somme o beni materiali richiede l\'Accusativo (что).',
    explanation:
      'Risposta esatta: A (своей карьерой). Glazunova p. 56: «Жертвовать чем (твор. пад.) — поступиться чем-либо важным: жертвовать жизнью, временем, здоровьем, карьерой. Жертвовать что (вин. пад.) — отдавать в дар, на благотворительность: жертвовать крупные суммы, книги в библиотеку».',
    bookRuleRef: 'Glazunova §31, p. 56',
    tags: ['Управление', 'Жертвовать', 'Различие значений']
  },
  {
    id: 'q-s1-gov-guide-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-noprep',
    chapterTitle: 'Беспредложное управление: руководить vs управлять',
    topicName: 'Reggenza di verbi direttivi: руководить, заведовать',
    exerciseSource: 'Sezione 1, Esercizio 33, frase 1 (p. 58)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale caso reggono i verbi «руководить», «управлять», «заведовать»?\n«Он много лет заведовал (...) кафедрой славистики».',
    sentenceWithBlank: '«Он заведовал (...)».',
    options: [
      { label: 'A', text: 'университетской (Strumentale: чем)' },
      { label: 'B', text: 'университетскую (Accusativo)' },
      { label: 'C', text: 'университетской к (Dativo)' },
      { label: 'D', text: 'от университетской' }
    ],
    correctOption: 'A',
    hint: 'Tutti i verbi di guida, amministrazione e direzione (руководить, управлять, заведовать, командовать) reggono lo Strumentale.',
    explanation:
      'Risposta esatta: A (университетской). Glazunova p. 58: «Руководить, управлять, заведовать, командовать чем (твор. пад.): заведовать кафедрой, лабораторией; руководить коллективом».',
    bookRuleRef: 'Glazunova §33, p. 58',
    tags: ['Управление', 'Заведовать', 'Творительный падеж']
  },

  // --- Preposizioni di tempo dettagliate (p. 83-98, Es. 53-70) ---
  {
    id: 'q-s1-prep-time-za-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-prep',
    chapterTitle: 'Предлоги времени: за vs через',
    topicName: 'Tempo necessario per compiere un\'azione: за + Accusativo',
    exerciseSource: 'Sezione 1, Esercizio 58, frase 4 (p. 88)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale preposizione esprime il lasso di tempo impiegato per completare con successo l\'intera operazione?\n«Студент прочитал весь роман (...) три дня».',
    sentenceWithBlank: '«Студент прочитал весь роман (...) три дня».',
    options: [
      { label: 'A', text: 'за (tempo impiegato per portare a termine l\'azione perfettiva)' },
      { label: 'B', text: 'через (tempo dopo il quale ha inizio l\'azione)' },
      { label: 'C', text: 'в' },
      { label: 'D', text: 'на' }
    ],
    correctOption: 'A',
    hint: '«За + Accusativo» si usa con verbi perfettivi per indicare quanto tempo è stato necessario per compiere l\'azione («в течение какого времени завершилось действие»).',
    explanation:
      'Risposta esatta: A (за). Glazunova p. 88: «Предлог ЗА + вин. пад. обозначает время, в течение которого действие доводится до результата: построить дом за год, прочитать книгу за три дня. В отличие от ЧЕРЕЗ, который указывает на время, по истечении которого действие происходит: вернётся через три дня».',
    bookRuleRef: 'Glazunova §58, p. 88',
    tags: ['Предлоги времени', 'За + винительный', 'Результат']
  },
  {
    id: 'q-s1-prep-time-na-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-prep',
    chapterTitle: 'Предлоги времени: на + винительный падеж',
    topicName: 'Durata prevista del risultato: на + lasso di tempo',
    exerciseSource: 'Sezione 1, Esercizio 59, frase 2 (p. 90)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale preposizione esprime il tempo durante il quale deve persistere lo stato o il risultato conseguito?\n«Они уехали на каникулы за границу (...) две недели».',
    sentenceWithBlank: '«Они уехали за границу (...) две недели».',
    options: [
      { label: 'A', text: 'на (durata prevista della permanenza/risultato)' },
      { label: 'B', text: 'за' },
      { label: 'C', text: 'через' },
      { label: 'D', text: 'в' }
    ],
    correctOption: 'A',
    hint: '«На + Accusativo di tempo» esprime il periodo per cui è previsto o fissato un soggiorno, un prestito o un risultato.',
    explanation:
      'Risposta esatta: A (на). Glazunova p. 90: «Предлог НА + вин. пад. указывает на срок, на который рассчитан результат действия: взять книгу на неделю, уехать на две недели, опоздать на пять минут».',
    bookRuleRef: 'Glazunova §59, p. 90',
    tags: ['Предлоги времени', 'На + винительный', 'Срок результата']
  },
  {
    id: 'q-s1-prep-time-pod-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-prep',
    chapterTitle: 'Предлоги времени: под + винительный падеж',
    topicName: 'Prossimità temporale: под утро, под вечер, под Новый год',
    exerciseSource: 'Sezione 1, Esercizio 62, frase 1 (p. 93)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale preposizione indica l\'avvicinarsi imminente a un momento temporale o festività in espressioni idiomatiche?\n«Метель утихла только (...) самое утро».',
    sentenceWithBlank: '«Метель утихла только (...) самое утро».',
    options: [
      { label: 'A', text: 'под (avvicinamento al limite temporale: под утро)' },
      { label: 'B', text: 'перед' },
      { label: 'C', text: 'к' },
      { label: 'D', text: 'около' }
    ],
    correctOption: 'A',
    hint: 'L\'espressione russa per indicare «verso l\'alba/sul far del mattino» o «in prossimità di una festa» è «под утро», «под вечер», «под Новый год».',
    explanation:
      'Risposta esatta: A (под). Glazunova p. 93: «Предлог ПОД + вин. пад. указывает на время, непосредственно предшествующее какому-либо моменту: под утро (к рассвету), под вечер, под Новый год, под старость».',
    bookRuleRef: 'Glazunova §62, p. 93',
    tags: ['Предлоги времени', 'Под утро', 'Приближение во времени']
  },
  {
    id: 'q-s1-prep-cause-blagodarya-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-prep',
    chapterTitle: 'Предлоги причины: благодаря vs из-за',
    topicName: 'Causa favorevole vs sfavorevole',
    exerciseSource: 'Sezione 1, Esercizio 73, frase 3 (p. 104)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale preposizione di causa si usa esclusivamente quando la causa ha agevolato un esito favorevole/positivo?\n«(...) помощи друзей и поддержке семьи он успешно сдал все экзамены».',
    sentenceWithBlank: '«(...) помощи друзей он успешно сдал экзамены».',
    options: [
      { label: 'A', text: 'Благодаря (+ Dativo: causa favorevole/positiva)' },
      { label: 'B', text: 'Из-за (+ Genitivo: causa di ostacolo o esito negativo)' },
      { label: 'C', text: 'От (+ Genitivo: reazione fisica o involontaria)' },
      { label: 'D', text: 'Ввиду (+ Genitivo)' }
    ],
    correctOption: 'A',
    hint: '«Благодаря» si usa quando l\'evento ha favorito un esito positivo; «Из-за» esprime invece un impedimento o causa negativa.',
    explanation:
      'Risposta esatta: A (Благодаря). Glazunova p. 104: «Предлог БЛАГОДАРЯ (кому/чему, дат. пад.) употребляется при указании на причину, способствующую достижению положительного результата. ИЗ-ЗА (чего, род. пад.) — на причину, создающую препятствие или отрицательное последствие».',
    bookRuleRef: 'Glazunova §73, p. 104',
    tags: ['Предлоги причины', 'Благодаря', 'Дательный падеж']
  },
  {
    id: 'q-s1-prep-cause-po-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-prep',
    chapterTitle: 'Предлоги причины: по + дательный падеж',
    topicName: 'Causa dovuta a debolezza umana, distrazione o omissione',
    exerciseSource: 'Sezione 1, Esercizio 75, frase 2 (p. 106)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale preposizione si impiega tipicamente con sostantivi che indicano colpa o difetto umano involontario (ошибка, невнимательность, оплошность, рассеянность)?\n«Он пропустил нужный поворот исключительно (...) рассеянности».',
    sentenceWithBlank: '«Он пропустил поворот исключительно (...) рассеянности».',
    options: [
      { label: 'A', text: 'по (+ Dativo: по ошибке, по рассеянности, по глупости)' },
      { label: 'B', text: 'из-за' },
      { label: 'C', text: 'от' },
      { label: 'D', text: 'с' }
    ],
    correctOption: 'A',
    hint: 'La preposizione «по + Dativo» esprime la causa interna imputabile a un tratto, negligenza o stato transitorio del soggetto: по ошибке, по невнимательности, по болезни.',
    explanation:
      'Risposta esatta: A (по). Glazunova p. 106: «Предлог ПО + дат. пад. выражает внутреннюю причину действия, зависящую от свойств лица или его непреднамеренных действий: по ошибке, по невнимательности, по неосторожности, по привычке, по уважительной причине».',
    bookRuleRef: 'Glazunova §75, p. 106',
    tags: ['Предлоги причины', 'По + дательный', 'Внутренняя причина']
  },
  {
    id: 'q-s1-prep-cause-s-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-prep',
    chapterTitle: 'Предлоги причины: с + родительный падеж',
    topicName: 'Causa affettiva/emotiva colloquiale: со страху, с горя, со скуки',
    exerciseSource: 'Sezione 1, Esercizio 77, frase 1 (p. 108)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale preposizione regge il Genitivo partitivo arcaico in -у/-ю per indicare un impulso emotivo impulsivo?\n«Мальчик (...) испугу спрятался под кровать».',
    sentenceWithBlank: '«Мальчик (...) испугу спрятался под кровать».',
    options: [
      { label: 'A', text: 'со (со страху, с испугу, с горя, со скуки)' },
      { label: 'B', text: 'из' },
      { label: 'C', text: 'по' },
      { label: 'D', text: 'для' }
    ],
    correctOption: 'A',
    hint: 'Nelle locuzioni fisse di forte stato emotivo con desinenza in -у si impiega «с / со»: со страху, с испугу, со злости.',
    explanation:
      'Risposta esatta: A (со). Glazunova p. 108: «Предлог С / СО + род. пад. используется преимущественно в разговорной речи для указания на психологическое или физиологическое состояние как источник импульсивного поступка: со страху, с испугу, со злости, со скуки, с досады».',
    bookRuleRef: 'Glazunova §77, p. 108',
    tags: ['Предлоги причины', 'С испугу', 'Разговорная речь']
  },
  {
    id: 'q-s1-prep-purpose-dlya-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-prep',
    chapterTitle: 'Предлоги цели: для vs на',
    topicName: 'Scopo destinato a persone/enti vs destinazione d\'uso specifica',
    exerciseSource: 'Sezione 1, Esercizio 108, frase 4 (p. 115)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale preposizione introduce il beneficiario dello scopo in:\n«Эти учебные пособия предназначены специально (...) студентов-иностранцев».',
    sentenceWithBlank: '«Пособия предназначены (...) студентов».',
    options: [
      { label: 'A', text: 'для (+ Genitivo: beneficiario dell\'azione)' },
      { label: 'B', text: 'на (+ Accusativo)' },
      { label: 'C', text: 'ради' },
      { label: 'D', text: 'в целях' }
    ],
    correctOption: 'A',
    hint: 'Il complemento di destinazione/beneficiario della cosa è sempre retto da «для + Genitivo».',
    explanation:
      'Risposta esatta: A (для). Glazunova p. 115: «Предлог ДЛЯ + род. пад. указывает на лицо или предмет, в интересах или для обслуживания которого производится действие: книга для чтения, комната для гостей, подарок для друга».',
    bookRuleRef: 'Glazunova §108, p. 115',
    tags: ['Предлоги цели', 'Для + родительный', 'Назначение']
  },
  {
    id: 'q-s1-prep-purpose-radi-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-prep',
    chapterTitle: 'Предлоги цели: ради + родительный падеж',
    topicName: 'Scopo ideale supremo o interesse altrui: ради',
    exerciseSource: 'Sezione 1, Esercizio 110, frase 2 (p. 117)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale preposizione esprime uno scopo elevato, ideale o il sacrificio per qualcuno/qualcosa?\n«Они готовы пойти на всё (...) спасения близких».',
    sentenceWithBlank: '«Они готовы на всё (...) спасения близких».',
    options: [
      { label: 'A', text: 'ради (+ Genitivo: per amore di, a vantaggio di)' },
      { label: 'B', text: 'для' },
      { label: 'C', text: 'на' },
      { label: 'D', text: 'из' }
    ],
    correctOption: 'A',
    hint: '«Ради + Genitivo» sottolinea la devozione o l\'obiettivo morale superiore: ради мира, ради детей, ради правды.',
    explanation:
      'Risposta esatta: A (ради). Glazunova p. 117: «Предлог РАДИ + род. пад. выражает высокую цель, благо кого-либо или побудительный мотив: ради победы, ради науки, ради счастья детей, чего ради».',
    bookRuleRef: 'Glazunova §110, p. 117',
    tags: ['Предлоги цели', 'Ради', 'Высокая цель']
  },
  {
    id: 'q-s1-prep-cond-pri-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-prep',
    chapterTitle: 'Предлоги условия: при + предложный падеж',
    topicName: 'Condizione necessaria: при наличии, при условии',
    exerciseSource: 'Sezione 1, Esercizio 114, frase 3 (p. 120)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale preposizione introduce la circostanza condizionale in:\n«(...) правильном уходе эти растения цветут дважды в год».',
    sentenceWithBlank: '«(...) правильном уходе растения цветут дважды в год».',
    options: [
      { label: 'A', text: 'При (+ Prepositivo: in presenza di tale condizione)' },
      { label: 'B', text: 'Под' },
      { label: 'C', text: 'В' },
      { label: 'D', text: 'По' }
    ],
    correctOption: 'A',
    hint: 'La preposizione «при + Prepositivo» denota le circostanze condizionali concomitanti che rendono possibile un evento.',
    explanation:
      'Risposta esatta: A (При). Glazunova p. 120: «Предлог ПРИ + предл. пад. указывает на условие или сопутствующие обстоятельства: при желании, при соблюдении правил, при наличии документов, при первой возможности».',
    bookRuleRef: 'Glazunova §114, p. 120',
    tags: ['Предлоги условия', 'При + предложный', 'Условие']
  },
  {
    id: 'q-s1-adjunc-adv-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-adjunction',
    chapterTitle: 'Примыкание наречий к глаголам',
    topicName: 'Giustapposizione di avverbio a verbo finito',
    exerciseSource: 'Sezione 1, Esercizio 132, frase 5 (p. 123)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale tipologia di legame sintattico unisce il predicato e il determinante in «Он бегло говорит по-русски»?\n«Он бегло говорит».',
    sentenceWithBlank: '«Он бегло говорит».',
    options: [
      { label: 'A', text: 'Примыкание (Giustapposizione: l\'avverbio è indeclinabile e si unisce per contiguità semantica)' },
      { label: 'B', text: 'Согласование (Concordanza)' },
      { label: 'C', text: 'Управление (Reggenza)' },
      { label: 'D', text: 'Координация (Coordinazione)' }
    ],
    correctOption: 'A',
    hint: 'Quando la parola dipendente è indeclinabile (avverbio, infinito, gerundio), il legame subordinativo è per definizione «примыкание».',
    explanation:
      'Risposta esatta: A (Примыкание). Glazunova p. 123: «Примыкание — способ связи, при котором зависимое слово связывается с главным только по смыслу, поскольку не имеет форм словоизменения (наречия, инфинитив, деепричастия, сравнительная степень): быстро бежать, говорить вполголоса, желание учиться».',
    bookRuleRef: 'Glazunova §132, p. 123',
    tags: ['Примыкание', 'Типы связи', 'Наречие']
  }
];
