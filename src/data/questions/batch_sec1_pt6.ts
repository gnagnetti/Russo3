import { Question } from '../../types';

export const QUESTIONS_BATCH_SECTION_1_PT6: Question[] = [
  // --- Serie 6 di approfondimento su Glazunova Sezione 1: Sintagma e Reggenze ---
  {
    id: 'q-s1-prep-po-lineage-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-prep',
    chapterTitle: 'Определительные отношения: родство и связи',
    topicName: 'Parentela per linea materna o paterna: по материнской линии / по отцу',
    exerciseSource: 'Sezione 1, Esercizio 86, frase 3 (p. 111)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale preposizione esprime la linea genealogica o il ramo di parentela familiare?\n«Они приходились друг другу двоюродными братьями (...) материнской линии».',
    sentenceWithBlank: '«...братьями (...) материнской линии».',
    options: [
      { label: 'A', text: 'по (+ Dativo: по линии, по матери, по отцу)' },
      { label: 'B', text: 'в' },
      { label: 'C', text: 'из' },
      { label: 'D', text: 'с' }
    ],
    correctOption: 'A',
    hint: 'La linea di discendenza o parentela si esprime costantemente con «по + Dativo»: по матери, по отцу, по мужской линии.',
    explanation:
      'Risposta esatta: A (по). Glazunova p. 111, §86: «Предлог ПО + дат. пад. используется для обозначения линии родства и происхождения: родственники по матери, дядя по отцу, бабушка по материнской линии».',
    bookRuleRef: 'Glazunova §86, p. 111',
    tags: ['Определительные отношения', 'По линии', 'Родство']
  },
  {
    id: 'q-s1-prep-po-analogy-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-prep',
    chapterTitle: 'Предлоги соответствия: по аналогии, по примеру',
    topicName: 'Modello o conformità: по аналогии, по образу',
    exerciseSource: 'Sezione 1, Esercizio 87, frase 2 (p. 112)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale reggenza preposizionale esprime l\'imitazione o il modello conforme in:\n«Новый закон был разработан (...) зарубежным образцам».',
    sentenceWithBlank: '«Закон разработан (...) образцам».',
    options: [
      { label: 'A', text: 'по (+ Dativo: по аналогии, по образцу, по примеру)' },
      { label: 'B', text: 'для' },
      { label: 'C', text: 'на' },
      { label: 'D', text: 'в' }
    ],
    correctOption: 'A',
    hint: '«По + Dativo» esprime la conformità al modello: по образцу, по подобию, по примеру старших.',
    explanation:
      'Risposta esatta: A (по). Glazunova p. 112, §87: «Предлог ПО + дат. пад. обозначает образец, пример или ориентир действия: делать по образцу, действовать по аналогии, шить по выкройке, жить по совести».',
    bookRuleRef: 'Glazunova §87, p. 112',
    tags: ['Предлог по', 'По образцу', 'Соответствие']
  },
  {
    id: 'q-s1-prep-vmesto-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-prep',
    chapterTitle: 'Предлоги замещения: вместо vs взамен',
    topicName: 'Sostituzione di persona o mansione: вместо кого',
    exerciseSource: 'Sezione 1, Esercizio 96, frase 1 (p. 114)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale preposizione regge il Genitivo per indicare la supplenza o la sostituzione di un agente?\n«Сегодня урок в десятом классе проведёт завуч (...) заболевшего учителя».',
    sentenceWithBlank: '«Проведёт завуч (...) заболевшего учителя».',
    options: [
      { label: 'A', text: 'вместо (+ Genitivo: al posto di, in sostituzione di)' },
      { label: 'B', text: 'за (+ Accusativo)' },
      { label: 'C', text: 'взамен (usato più spesso per scambio materiale o risarcimento di cose)' },
      { label: 'D', text: 'напротив' }
    ],
    correctOption: 'A',
    hint: '«Вместо + Genitivo» è la preposizione di sostituzione di persone e ruoli per eccellenza.',
    explanation:
      'Risposta esatta: A (вместо). Glazunova p. 114, §96: «Предлог ВМЕСТО + род. пад. обозначает замещение одного лица или предмета другим: выйти на работу вместо коллеги, пить чай вместо кофе. ВЗАМЕН чаще сочетается с неодушевлёнными предметами при компенсации или обмене: получить компенсацию взамен утраченного имущества».',
    bookRuleRef: 'Glazunova §96, p. 114',
    tags: ['Предлоги замещения', 'Вместо', 'Родительный падеж']
  },
  {
    id: 'q-s1-gov-blush-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-noprep',
    chapterTitle: 'Беспредложное и предложное управление: краснеть',
    topicName: 'Causa emotiva involontaria: краснеть от чего vs за кого',
    exerciseSource: 'Sezione 1, Esercizio 76, frase 4 (p. 107)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale preposizione esprime la vergogna provata verso terzi per la condotta altrui?\n«Родителям нередко приходилось краснеть (...) своего непослушного сына».',
    sentenceWithBlank: '«Краснеть (...) сына».',
    options: [
      { label: 'A', text: 'за (+ Accusativo: краснеть / стыдиться за кого)' },
      { label: 'B', text: 'от (+ Genitivo: per reazione fisiologica: краснеть от стыда/жары)' },
      { label: 'C', text: 'из-за' },
      { label: 'D', text: 'о' }
    ],
    correctOption: 'A',
    hint: 'La reazione corporea si esprime con «от + Genitivo» (краснеть от смущения), ma vergognarsi del comportamento di un\'altra persona si esprime con «краснеть за кого (Acc.)».',
    explanation:
      'Risposta esatta: A (за). Glazunova p. 107, §76: «Различайте: краснеть ОТ чего (род. пад.) — физиологическая реакция: краснеть от стыда, от гнева, от жары. Краснеть ЗА кого (вин. пад.) — испытывать неловкость или стыд за действия другого человека: краснеть за поведение сына, за товарища».',
    bookRuleRef: 'Glazunova §76, p. 107',
    tags: ['Управление', 'Краснеть за', 'Винительный падеж']
  },
  {
    id: 'q-s1-gov-quarrel-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-noprep',
    chapterTitle: 'Глагольное управление: спорить vs ссориться',
    topicName: 'Oggetto della lite o disputa: ссориться из-за чего vs спорить о чём',
    exerciseSource: 'Sezione 1, Esercizio 78, frase 2 (p. 108)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale reggenza preposizionale esprime il motivo di attrito per cui due persone litigano?\n«Братья часто ссорились по пустякам и обижались друг на друга (...) каждого пустяка».',
    sentenceWithBlank: '«Ссорились (...) каждого пустяка».',
    options: [
      { label: 'A', text: 'из-за (+ Genitivo: motivo di contesa e disaccordo litigioso)' },
      { label: 'B', text: 'по' },
      { label: 'C', text: 'от' },
      { label: 'D', text: 'через' }
    ],
    correctOption: 'A',
    hint: '«Ссориться из-за кого/чего» (litigare a causa di / per colpa di qualcosa o qualcuno).',
    explanation:
      'Risposta esatta: A (из-за). Glazunova p. 108, §78: «Глагол ССОРИТЬСЯ управляет предлогом ИЗ-ЗА с родительным падежом: ссориться из-за ерунды, из-за денег, из-за пустяка. Глагол СПОРИТЬ чаще требует предлога О с предложным падежом (спорить о науке, о политике) или ИЗ-ЗА (спорить из-за места)».',
    bookRuleRef: 'Glazunova §78, p. 108',
    tags: ['Управление', 'Ссориться из-за', 'Родительный падеж']
  },
  {
    id: 'q-s1-gov-taste-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-noprep',
    chapterTitle: 'Определительные отношения: вкус, запах',
    topicName: 'Odore e sapore di una sostanza: запах / вкус чего vs чем',
    exerciseSource: 'Sezione 1, Esercizio 89, frase 4 (p. 113)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale caso regge il sostantivo «запах» (o «вкус») rispetto al verbo «пахнуть»?\n«В воздухе стоял свежий запах (...) хвои и смолы».',
    sentenceWithBlank: '«Запах (...) хвои».',
    options: [
      { label: 'A', text: 'сосновой (Genitivo con il sostantivo: запах чего)' },
      { label: 'B', text: 'сосновой хвоей (Strumentale con il sostantivo: errore per confusione col verbo)' },
      { label: 'C', text: 'на сосновую хвою' },
      { label: 'D', text: 'о сосновой хвое' }
    ],
    correctOption: 'A',
    hint: 'Attenzione alla distinzione di Glazunova: il verbo «пахнуть» regge lo Strumentale (пахнет хвоей), ma il sostantivo «запах» regge il Genitivo (запах хвои)!',
    explanation:
      'Risposta esatta: A (сосновой). Glazunova p. 113, §89: «Существительные ЗАПАХ, ВКУС управляют РОДИТЕЛЬНЫМ падежом: запах сирени, вкус яблока. В отличие от глаголов пахнуть, пахнет, веять, которые требуют ТВОРИТЕЛЬНОГО падежа: пахнет сиренью, веет прохладой».',
    bookRuleRef: 'Glazunova §89, p. 113',
    tags: ['Определительные отношения', 'Запах чего', 'Родительный vs Творительный']
  },
  {
    id: 'q-s1-gov-cure-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-noprep',
    chapterTitle: 'Глагольное управление: лечить vs вылечить',
    topicName: 'Reggenza di «лечить от чего» vs «лечить чем»',
    exerciseSource: 'Sezione 1, Esercizio 29, frase 1 (p. 52)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale reggenza preposizionale esprime la malattia da cui si guarisce qualcuno con «лечить / излечить»?\n«Опытный врач успешно лечил пациентов (...) тяжёлой формы пневмонии».',
    sentenceWithBlank: '«Лечил пациентов (...) пневмонии».',
    options: [
      { label: 'A', text: 'от (+ Genitivo: лечить / вылечить кого от чего)' },
      { label: 'B', text: 'из' },
      { label: 'C', text: 'с' },
      { label: 'D', text: 'против' }
    ],
    correctOption: 'A',
    hint: 'La malattia da cui si cura qualcuno richiede la preposizione «от + Genitivo» (лечить от простуды, от гриппа); il medicinale o mezzo usato richiede invece lo Strumentale (лечить травами, антибиотиками).',
    explanation:
      'Risposta esatta: A (от). Glazunova p. 52, §29: «Лечить / вылечить кого от чего (от + род. пад.): вылечить от ангины, от кашля. Способ лечения выражается творительным падежом (чем): лечить травами, процедурами, гимнастикой».',
    bookRuleRef: 'Glazunova §29, p. 52',
    tags: ['Управление', 'Лечить от', 'Родительный падеж']
  },
  {
    id: 'q-s1-prep-predel-do-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-prep',
    chapterTitle: 'Предлоги предела: до + родительный падеж',
    topicName: 'Limite estremo di uno stato o azione: до слез, до упада, до предела',
    exerciseSource: 'Sezione 1, Esercizio 64, frase 3 (p. 95)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale preposizione esprime il grado o il limite estremo a cui giunge un\'azione emotiva in locuzioni fisse?\n«Комедия оказалась настолько смешной, что зрители смеялись (...) слёз».',
    sentenceWithBlank: '«Смеялись (...) слёз».',
    options: [
      { label: 'A', text: 'до (+ Genitivo: до слёз, до упаду, до глубины души)' },
      { label: 'B', text: 'к' },
      { label: 'C', text: 'в' },
      { label: 'D', text: 'по' }
    ],
    correctOption: 'A',
    hint: 'Il raggiungimento del culmine o grado estremo si esprime con «до + Genitivo»: смеяться до слёз, устать до изнеможения.',
    explanation:
      'Risposta esatta: A (до). Glazunova p. 95, §64: «Предлог ДО + род. пад. обозначает предельную степень проявления действия или признака: смеяться до слёз, промокнуть до нитки, любить до безумия, спорить до хрипоты».',
    bookRuleRef: 'Glazunova §64, p. 95',
    tags: ['Предлог до', 'Предельная степень', 'До слёз']
  },
  {
    id: 'q-s1-prep-po-price-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-prep',
    chapterTitle: 'Предлоги количества и цены: по цене, по тарифу',
    topicName: 'Tariffa o prezzo unitario: по какой цене',
    exerciseSource: 'Sezione 1, Esercizio 124, frase 2 (p. 122)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale preposizione regge il Dativo nelle indicazioni di valore monetario e tariffario standard?\n«Товар продавался строго (...) фиксированной государственной цене».',
    sentenceWithBlank: '«Продавался (...) фиксированной цене».',
    options: [
      { label: 'A', text: 'по (+ Dativo: по цене, по тарифу, по курсу)' },
      { label: 'B', text: 'в' },
      { label: 'C', text: 'на' },
      { label: 'D', text: 'под' }
    ],
    correctOption: 'A',
    hint: 'La tariffa unitaria, il corso di cambio o il prezzo di vendita si introducono con «по + Dativo».',
    explanation:
      'Risposta esatta: A (по). Glazunova p. 122, §124: «Предлог ПО + дат. пад. выражает оценку, стоимость или расчётную единицу: продавать по себестоимости, менять по официальному курсу, оплачивать по тарифу».',
    bookRuleRef: 'Glazunova §124, p. 122',
    tags: ['Предлог по', 'По цене', 'Стоимость']
  },
  {
    id: 'q-s1-prep-na-measure-1',
    sectionId: 1,
    sectionTitle: 'Sezione 1: Il Sintagma (Словосочетание)',
    chapterId: 'sec1-gov-prep',
    chapterTitle: 'Предлоги меры различия: на + винительный падеж',
    topicName: 'Differenza quantitativa comparativa: на сколько больше / моложе',
    exerciseSource: 'Sezione 1, Esercizio 126, frase 1 (p. 123)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale preposizione esprime il differenziale numerico di misura tra due termini comparati?\n«Старший брат был выше младшего ростом ровно (...) десять сантиметров».',
    sentenceWithBlank: '«Выше ростом (...) десять сантиметров».',
    options: [
      { label: 'A', text: 'на (+ Accusativo: на сколько больше, на два года моложе)' },
      { label: 'B', text: 'в (+ Accusativo: indica invece rapporto moltiplicativo: в два раза больше)' },
      { label: 'C', text: 'по' },
      { label: 'D', text: 'до' }
    ],
    correctOption: 'A',
    hint: 'La differenza additiva/sottrattiva («di quanti cm / anni») si esprime con «на + Accusativo». Il fattore moltiplicativo («di quante volte») si esprime con «в + Accusativo».',
    explanation:
      'Risposta esatta: A (на). Glazunova p. 123, §126: «Предлог НА + вин. пад. указывает на меру разности при сравнительной степени: старше на три года, дороже на сто рублей, длиннее на пять метров. Предлог В указывает на кратность: в два раза быстрее, в три раза больше».',
    bookRuleRef: 'Glazunova §126, p. 123',
    tags: ['Предлог на', 'Мера различия', 'Сравнительная степень']
  }
];
