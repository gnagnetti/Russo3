import { Question } from '../../types';

export const QUESTIONS_BATCH_SECTION_2_PART3: Question[] = [
  // --- Esercizi d'autore sulla Frase Semplice (pp. 258-263, Es. 345-356) ---
  {
    id: 'q-s2-lit-chekhov-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-repetition-lit',
    chapterTitle: 'Материал для повторения: язык классической литературы',
    topicName: 'Accordo dell\'aggettivo predicativo nei testi di A.P. Čechov',
    exerciseSource: 'Sezione 2, Esercizio 348 (Anton Čechov, p. 259)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Dal testo di A.P. Čechov in Glazunova: quale forma assume l\'aggettivo predicativo breve per esprimere lo stato psicologico o d\'animo del personaggio?\n«Она была бледна и (...) глубокой печалью».',
    sentenceWithBlank: '«Она была бледна и (...) печалью».',
    options: [
      { label: 'A', text: 'охвачена (participio passivo breve femminile: согласуется с подлежащим «она»)' },
      { label: 'B', text: 'охваченной' },
      { label: 'C', text: 'охватила' },
      { label: 'D', text: 'охватившая' }
    ],
    correctOption: 'A',
    hint: 'Nelle strutture con predicati omogenei coordinati con copula «была», la forma breve concorda in genere femminile singolare («бледна и охвачена»).',
    explanation:
      'Risposta esatta: A (охвачена). Glazunova p. 259 (Es. 348, da Čechov): «Краткое страдательное причастие в роли именной части сказуемого согласуется с подлежащим в роде и числе: Она была бледна и охвачена печалью».',
    bookRuleRef: 'Glazunova §348, p. 259',
    tags: ['Чехов', 'Краткое причастие', 'Сказуемое']
  },
  {
    id: 'q-s2-lit-bunin-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-repetition-lit',
    chapterTitle: 'Материал для повторения: язык классической литературы',
    topicName: 'Membri isolati nella prosa lirica di Ivan Bunin',
    exerciseSource: 'Sezione 2, Esercizio 350 (Ivan Bunin, p. 260)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Nel brano di Ivan Bunin analizzato da Glazunova, quale funzione sintattica svolge il gerundio perfettivo anteposto al verbo principale?\n«(...) на крыльцо, он долго смотрел на угасающий закат».',
    sentenceWithBlank: '«(...) на крыльцо, он долго смотрел на закат».',
    options: [
      { label: 'A', text: 'Выйдя (circostanza temporale di anteriorità che introduce l\'azione preparatoria)' },
      { label: 'B', text: 'Выходя (azione contemporanea durativa prolungata)' },
      { label: 'C', text: 'Вышедший' },
      { label: 'D', text: 'Выйти' }
    ],
    correctOption: 'A',
    hint: 'Il gerundio perfettivo «выйдя» esprime l\'azione compiuta prima di iniziare a contemplare il tramonto.',
    explanation:
      'Risposta esatta: A (Выйдя). Glazunova p. 260 (Es. 350, da Bunin): «Деепричастие совершенного вида выражает предшествующее действие по отношению к глаголу-сказуемому: Выйдя на крыльцо (= когда он вышел), он посмотрел вокруг».',
    bookRuleRef: 'Glazunova §350, p. 260',
    tags: ['Бунин', 'Деепричастие', 'Предшествование']
  },
  {
    id: 'q-s2-lit-bulgakov-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-repetition-lit',
    chapterTitle: 'Материал для повторения: язык художественной литературы',
    topicName: 'Frasi nominali e atmosfera evocativa in M. Bulgakov',
    exerciseSource: 'Sezione 2, Esercizio 352 (Michail Bulgakov, p. 261)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Qual è il valore sintattico delle frasi nominali (назывные предложения) nel celebre incipit bulgakoviano analizzato nel testo?\n«Вечер. Патриаршие пруды. Ни ветерка».',
    sentenceWithBlank: '«Вечер. Патриаршие пруды».',
    options: [
      { label: 'A', text: 'Назывные предложения (frasi a un solo membro nominale che affermano l\'esistenza immediata e statica di cose o tempi nello spazio narrativo)' },
      { label: 'B', text: 'Неполные двусоставные с пропуском подлежащего' },
      { label: 'C', text: 'Обобщённо-личные' },
      { label: 'D', text: 'Безличные глагольные' }
    ],
    correctOption: 'A',
    hint: 'Le proposizioni costituite dal solo sostantivo al nominativo (senza verbo) che constatano la presenza o il momento sono le «назывные предложения».',
    explanation:
      'Risposta esatta: A (Назывные предложения). Glazunova p. 261: «Назывные предложения утверждают бытие предметов или явлений в настоящем времени: Ночь. Улица. Фонарь. Аптека (Блок); Вечер. Патриаршие пруды (Булгаков)».',
    bookRuleRef: 'Glazunova §352, p. 261',
    tags: ['Булгаков', 'Назывные предложения', 'Бытийность']
  },
  {
    id: 'q-s2-lit-solzhenitsyn-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-repetition-lit',
    chapterTitle: 'Материал для повторения: язык художественной литературы',
    topicName: 'Ordine delle parole e inversione stilistica in A. Solženicyn',
    exerciseSource: 'Sezione 2, Esercizio 354 (Aleksandr Solženicyn, p. 262)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Quale effetto stilistico produce l\'inversione del predicato verbale prima del soggetto nella prosa di A. Solženicyn?\n«Шёл этот день с пяти утра до поздней ночи...»',
    sentenceWithBlank: '«Шёл этот день с пяти утра...»',
    options: [
      { label: 'A', text: 'Enfatizza la durata del processo e focalizza l\'attenzione narrativa sull\'azione stessa prima di nominare l\'agente' },
      { label: 'B', text: 'Rende la frase interrogativa' },
      { label: 'C', text: 'È un errore grammaticale da correggere' },
      { label: 'D', text: 'Trasforma il verbo in passivo' }
    ],
    correctOption: 'A',
    hint: 'L\'inversione (predicato prima del soggetto) crea suspense, dinamismo narrativo e pone in primo piano lo svolgersi dell\'evento.',
    explanation:
      'Risposta esatta: A. Glazunova p. 262: «Инверсия сказуемого и подлежащего в повествовательном тексте (Шёл этот день...) служит средством художественной выразительности, подчеркивая динамику действия или эмоциональное напряжение».',
    bookRuleRef: 'Glazunova §354, p. 262',
    tags: ['Солженицын', 'Инверсия', 'Стилистический порядок']
  },

  // --- Costrutti con Negazione Rafforzata e Doppia Negazione (pp. 162-174) ---
  {
    id: 'q-s2-neg-ni-odin-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-negation',
    chapterTitle: 'Отрицательные предложения: ни один vs не один',
    topicName: 'Differenza cruciale tra «ни один» (nessuno) e «не один» (più di uno)',
    exerciseSource: 'Sezione 2, Esercizio 220, frase 1 (p. 164, chiave p. 388)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale differenza di significato sussiste tra «Ни один студент не опоздал» e «Не один студент опоздал»?\n«Ни один vs не один».',
    sentenceWithBlank: '«Ни один vs не один».',
    options: [
      { label: 'A', text: '«Ни один» significa «nessuno in assoluto», mentre «не один» significa «molti, parecchi, più di uno»' },
      { label: 'B', text: 'Sono esattamente identici' },
      { label: 'C', text: '«Не один» significa solo «esattamente uno»' },
      { label: 'D', text: '«Ни один» si usa solo per le donne' }
    ],
    correctOption: 'A',
    hint: '«Ни один» + verbo con «не» = negazione totale (nessuno); «Не один» senza negazione sul verbo = affermazione di pluralità (molti, più di uno!).',
    explanation:
      'Risposta esatta: A. Glazunova p. 164: «НИ ОДИН (с отрицанием при глаголе) означает "никто, нисколько": Ни один человек не пришёл (= никто). НЕ ОДИН означает "многие, не единственный": Не один раз я предупреждал тебя (= много раз); Не один студент сдал зачёт (= многие)».',
    bookRuleRef: 'Glazunova §220, p. 164',
    tags: ['Отрицание', 'Ни один vs не один', 'Различие смыслов']
  },
  {
    id: 'q-s2-neg-nelzya-ne-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-negation',
    chapterTitle: 'Двойное отрицание: нельзя не + инфинитив',
    topicName: 'Doppia negazione con valore affermativo necessario: нельзя не признать',
    exerciseSource: 'Sezione 2, Esercizio 224, frase 3 (p. 166)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale valore esprime la doppia negazione «нельзя не + infinito» (es. «Нельзя не согласиться с этим мнением»)?\n«Нельзя не согласиться».',
    sentenceWithBlank: '«Нельзя не согласиться».',
    options: [
      { label: 'A', text: 'Forte affermazione di necessità logica: «è impossibile non concordare / bisogna assolutamente concordare»' },
      { label: 'B', text: 'Divieto assoluto di essere d\'accordo' },
      { label: 'C', text: 'Dubbio scettico' },
      { label: 'D', text: 'Rifiuto categorico' }
    ],
    correctOption: 'A',
    hint: 'Due negazioni in russo (нельзя + не + infinito) si annullano a vicenda creando un\'affermazione categorica («dobbiamo per forza riconoscere che...»).',
    explanation:
      'Risposta esatta: A. Glazunova p. 166: «Конструкция НЕЛЬЗЯ НЕ + инфинитив выражает категорическую необходимость, неизбежность признания факта (двойное отрицание равно сильному утверждению): Нельзя не согласиться = совершенно необходимо согласиться; Нельзя не восхищаться = невозможно не восхищаться».',
    bookRuleRef: 'Glazunova §224, p. 166',
    tags: ['Двойное отрицание', 'Нельзя не', 'Категорическое утверждение']
  },
  {
    id: 'q-s2-neg-ne-mogu-ne-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-negation',
    chapterTitle: 'Двойное отрицание: не могу не отметить',
    topicName: 'Costrutto retorico «не могу не + infinito»',
    exerciseSource: 'Sezione 2, Esercizio 226, frase 2 (p. 167)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Nel discorso formale o accademico, cosa significa «Я не могу не сказать несколько слов по этому поводу»?\n«Не могу не сказать».',
    sentenceWithBlank: '«Я не могу не сказать несколько слов».',
    options: [
      { label: 'A', text: '«Sento il doveroso e irresistibile bisogno di dire qualche parola» (affermazione enfatica)' },
      { label: 'B', text: '«Mi è proibito parlare»' },
      { label: 'C', text: '«Non ho alcuna voglia di parlare»' },
      { label: 'D', text: '«Non sono capace di parlare»' }
    ],
    correctOption: 'A',
    hint: '«Не могу не...» è la formula retorica colta per esprimere l\'obbligo morale interiore a fare qualcosa.',
    explanation:
      'Risposta esatta: A. Glazunova p. 167: «Оборот НЕ МОГУ НЕ + инфинитив подчёркивает внутреннюю моральную потребность или эмоциональный долг говорящего: Не могу не выразить благодарность (= обязан и искренне хочу выразить благодарность)».',
    bookRuleRef: 'Glazunova §226, p. 167',
    tags: ['Двойное отрицание', 'Не могу не', 'Риторический оборот']
  },
  {
    id: 'q-s2-isol-connective-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-isolated',
    chapterTitle: 'Присоединительные конструкции: в том числе, особенно',
    topicName: 'Membri aggiuntivi introdotti da «в том числе», «особенно»',
    exerciseSource: 'Sezione 2, Esercizio 315, frase 3 (p. 238)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Come si punteggiano le costruzioni aggiuntive introdotte da locuzioni come «в том числе», «включая», «особенно»?\n«Все участники экспедиции, (...) опытные исследователи, были поражены увиденным».',
    sentenceWithBlank: '«...экспедиции, (...) опытные исследователи, были поражены».',
    options: [
      { label: 'A', text: 'в том числе (si isolano obbligatoriamente tra virgole come costrutti aggiuntivi-restrittivi)' },
      { label: 'B', text: 'в том числе и без запятых' },
      { label: 'C', text: 'с тем числом' },
      { label: 'D', text: 'по тому числу' }
    ],
    correctOption: 'A',
    hint: 'I costrutti aggiuntivi che precisano un sottogruppo all\'interno del tutto (в том числе, включая, главным образом) si isolano sempre con virgole.',
    explanation:
      'Risposta esatta: A (в том числе). Glazunova p. 238: «Присоединительные конструкции со словами в том числе, включая, в особенности, главным образом обособляются запятыми: На собрании были все, в том числе преподаватели; Мы любим классическую литературу, особенно русскую».',
    bookRuleRef: 'Glazunova §315, p. 238',
    tags: ['Присоединительные конструкции', 'В том числе', 'Обособление']
  },
  {
    id: 'q-s2-isol-except-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-isolated',
    chapterTitle: 'Обособленные дополнения: кроме, помимо, за исключением',
    topicName: 'Complementi di esclusione e inclusione con «кроме»',
    exerciseSource: 'Sezione 2, Esercizio 318, frase 1 (p. 240)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale caso reggono le preposizioni di eccezione ed esclusione «кроме», «помимо», «за исключением»?\n«Все собрались в зале вовремя, кроме (...) опоздавших из-за пробок».',
    sentenceWithBlank: '«...кроме (...) опоздавших».',
    options: [
      { label: 'A', text: 'двух (Genitivo: кроме кого? чего?)' },
      { label: 'B', text: 'двум' },
      { label: 'C', text: 'двумя' },
      { label: 'D', text: 'двое' }
    ],
    correctOption: 'A',
    hint: '«Кроме», «помимо», «за исключением», «сверх» reggono invariabilmente il Genitivo.',
    explanation:
      'Risposta esatta: A (двух). Glazunova p. 240: «Обособленные дополнения с предлогами кроме, помимо, за исключением, сверх, вместо требуют РОДИТЕЛЬНОГО падежа и выделяются запятыми: В комнате никого не было, кроме дежурного; Все, кроме двух студентов, сдали работу».',
    bookRuleRef: 'Glazunova §318, p. 240',
    tags: ['Обособленные дополнения', 'Кроме', 'Родительный падеж']
  },
  {
    id: 'q-s2-subj-num-fraction-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-subj-pred',
    chapterTitle: 'Подлежащее и сказуемое: дробные числительные',
    topicName: 'Accordo del predicato con frazioni (полтора, две трети)',
    exerciseSource: 'Sezione 2, Esercizio 198, frase 3 (p. 144)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale forma assume il predicato al passato quando il soggetto è espresso da «полтора года» o «две трети»?\n«С тех пор (...) полтора года».',
    sentenceWithBlank: '«С тех пор (...) полтора года».',
    options: [
      { label: 'A', text: 'прошло (singolare neutro)' },
      { label: 'B', text: 'прошли' },
      { label: 'C', text: 'прошёл' },
      { label: 'D', text: 'прошла' }
    ],
    correctOption: 'A',
    hint: 'Con «полтора / полторы» e frazioni al soggetto, il verbo al passato va al neutro singolare.',
    explanation:
      'Risposta esatta: A (прошло). Glazunova p. 144: «При подлежащем со словом ПОЛТОРА (полтора года, полтора часа) или дробном числительном сказуемое в прошедшем времени ставится в форме среднего рода единственного числа: Прошло полтора года; Было вспахано две трети поля».',
    bookRuleRef: 'Glazunova §198, p. 144',
    tags: ['Дробные числительные', 'Полтора года', 'Средний род']
  }
];
