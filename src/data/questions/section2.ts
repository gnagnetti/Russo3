import { Question } from '../../types';

export const QUESTIONS_SECTION_2: Question[] = [
  // --- Soggetto e Predicato (Подлежащее и субъект) ---
  {
    id: 'q-s2-ex180-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-subject-pred',
    chapterTitle: 'Способы выражения подлежащего и субъекта',
    topicName: 'Sostantivazione dell\'aggettivo come soggetto',
    exerciseSource: 'Sezione 2, Esercizio 180, frase б (p. 127)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Nel celebre proverbio «Сытый голодного не разумеет», quale parte del discorso funge da soggetto grammaticale?',
    sentenceWithBlank: '«Сытый голодного не разумеет».',
    options: [
      { label: 'A', text: 'Un aggettivo sostantivato al Nominativo («сытый»)' },
      { label: 'B', text: 'Un pronome indefinito' },
      { label: 'C', text: 'Un avverbio predicativo' },
      { label: 'D', text: 'Il sostantivo al Genitivo «голодного»' }
    ],
    correctOption: 'A',
    hint: 'L\'aggettivo maschile «сытый» ("il sazio") è sostantivato ed esegue l\'azione del verbo al caso Nominativo.',
    explanation:
      'Risposta esatta: A. Regola p. 127 (punto б): «Подлежащее выражается любой частью речи в значении существительного: Сытый голодного не разумеет (прилагательное в функции существительного); Три — нечётное число (числительное)».',
    bookRuleRef: 'Glazunova §180б, p. 127',
    tags: ['Субъект', 'Субстантивация', 'Именительный падеж']
  },
  {
    id: 'q-s2-ex184-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-subject-pred',
    chapterTitle: 'Способы выражения подлежащего и субъекта',
    topicName: 'Soggetto logico al Dativo',
    exerciseSource: 'Sezione 2, Esercizio 184, frase 1 (p. 129, chiave p. 384)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Trasforma la frase con soggetto e aggettivo «Дети весёлые» in una costruzione con soggetto al Dativo:',
    sentenceWithBlank: '«Дети весёлые» -> «(...)».',
    options: [
      { label: 'A', text: 'Детям весело' },
      { label: 'B', text: 'У детей весело' },
      { label: 'C', text: 'Для детей весело' },
      { label: 'D', text: 'Детям веселье' }
    ],
    correctOption: 'A',
    hint: 'Lo stato psicologico interiore del soggetto si esprime con il Dativo del nome + avverbio predicativo in -о.',
    explanation:
      'Risposta esatta: A (Детям весело). Box p. 129: «Дательный падеж субъекта употребляется в сочетании с наречиями, передающими внутреннее эмоциональное состояние: Ноги холодные -> Ногам холодно; Дети весёлые -> Детям весело».',
    bookRuleRef: 'Glazunova §184, Box p. 129',
    tags: ['Дательный субъекта', 'Безличные предложения', 'Предикативные наречия']
  },
  {
    id: 'q-s2-ex184-4',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-subject-pred',
    chapterTitle: 'Способы выражения подлежащего и субъекта',
    topicName: 'Stato fisico con Dativo del soggetto',
    exerciseSource: 'Sezione 2, Esercizio 184, frase 4 (p. 129, chiave p. 384)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Trasforma: «Спортсмены страдают от жары» in una frase impersonale con soggetto logico al Dativo:',
    sentenceWithBlank: '«Спортсмены страдают от жары» -> «(...)».',
    options: [
      { label: 'A', text: 'Спортсменам жарко' },
      { label: 'B', text: 'У спортсменов жара' },
      { label: 'C', text: 'Для спортсменов жарко' },
      { label: 'D', text: 'Спортсмены в жаре' }
    ],
    correctOption: 'A',
    hint: 'La sensazione termica corporea subita dal soggetto umano richiede il Dativo + l\'avverbio di stato «жарко».',
    explanation:
      'Risposta esatta: A (Спортсменам жарко). Box a p. 129: la percezione fisica esterna subita dal corpo viene trasformata nella costruzione con soggetto al Dativo + наречие: «Спортсменам жарко» (chiave p. 384).',
    bookRuleRef: 'Glazunova §184, Box p. 129 & Chiave p. 384',
    tags: ['Дательный падеж', 'Безличное состояние', 'Физическое состояние']
  },
  {
    id: 'q-s2-ex188-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-subject-pred',
    chapterTitle: 'Способы выражения подлежащего и субъекта',
    topicName: 'Costrutto infinitivo: necessità oggettiva programmata',
    exerciseSource: 'Sezione 2, Esercizio 188, frase 1 (p. 131)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Confronta: «Нам долго идти, ты можешь устать» vs «Нам надо долго идти».\nCosa esprime la frase con infinito puro senza «надо»?',
    sentenceWithBlank: '«Нам долго идти...»',
    options: [
      { label: 'A', text: 'Un\'azione inevitabile già stabilita dalle circostanze future' },
      { label: 'B', text: 'Una blanda raccomandazione facoltativa' },
      { label: 'C', text: 'Un divieto perentorio' },
      { label: 'D', text: 'Un dubbio dell\'interlocutore' }
    ],
    correctOption: 'A',
    hint: 'L\'infinito indipendente con soggetto al Dativo esprime una decisione inevitabile, un destino o un compito già fissato.',
    explanation:
      'Risposta esatta: A. Box a p. 131: «Инфинитивные конструкции употребляются, если речь идёт о конкретном действии, решение о котором ПРИНЯТО и которое обязательно произойдёт в будущем: Нам долго идти; Тебе сдавать экзамен во вторник. Конструкции со словами надо, необходимо имеют потенциально-рекомендательное значение».',
    bookRuleRef: 'Glazunova §188, Box p. 131',
    tags: ['Инфинитивные конструкции', 'Модальность', 'Неизбежность']
  },
  {
    id: 'q-s2-ex194-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-subject-pred',
    chapterTitle: 'Способы выражения подлежащего и субъекта',
    topicName: 'Modalità: мочь vs уметь vs можно/нельзя',
    exerciseSource: 'Sezione 2, Esercizio 194, frasi 1 e 11 (p. 134)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Confronta: 1) «Я (...) говорить громче» (possibilità fisica contingente). 2) «Он (...) плавать» (abilità appresa/competenza tecnica).',
    sentenceWithBlank: '1) «Я (...) говорить громче». 2) «Он (...) плавать».',
    options: [
      { label: 'A', text: '1) могу / 2) умеет' },
      { label: 'B', text: '1) умею / 2) может' },
      { label: 'C', text: '1) можно / 2) нельзя' },
      { label: 'D', text: '1) умею / 2) умею' }
    ],
    correctOption: 'A',
    hint: '«Мочь» esprime la facoltà o possibilità fisica/mentale contingente; «уметь» esprime l\'abilità appresa con l\'esercizio (saper fare qc: плавать, читать).',
    explanation:
      'Risposta esatta: A (могу / умеет). Box p. 134: «Глагол мочь указывает на физическую возможность: Я могу говорить громче; глагол уметь указывает, что субъект обучен совершать действие (обладает навыком): Он умеет плавать».',
    bookRuleRef: 'Glazunova §194, Box p. 134',
    tags: ['Мочь vs уметь', 'Модальные глаголы', 'Предикат']
  },
  {
    id: 'q-s2-ex196-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-subject-pred',
    chapterTitle: 'Способы выражения подлежащего и субъекта',
    topicName: 'Pronomi negativi: никто vs некому',
    exerciseSource: 'Sezione 2, Esercizio 196, frase 1 (p. 135, chiave p. 385)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Scegli la forma corretta del pronome per completare la frase:\n«К сожалению, (...) не может помочь мне в этой ситуации».',
    sentenceWithBlank: '«К сожалению, (...) не может помочь мне в этой ситуации».',
    options: [
      { label: 'A', text: 'никто' },
      { label: 'B', text: 'некому' },
      { label: 'C', text: 'никому' },
      { label: 'D', text: 'никого' }
    ],
    correctOption: 'A',
    hint: 'Il predicato è una forma verbale personale («не может помочь»): richiede un soggetto grammaticale al Nominativo.',
    explanation:
      'Risposta esatta: A (никто). Regola p. 135: «В предложениях со словами никто, ничто форма субъекта зависит от предиката: субъект стоит в именительном падеже, если предикат выражен личной формой глагола (никто не может помочь), и в дательном падеже, если предикат выражен наречием, инфинитивом (некому помочь)».',
    bookRuleRef: 'Glazunova §196, Box p. 135',
    tags: ['Отрицательные местоимения', 'Подлежащее', 'Именительный падеж']
  },
  {
    id: 'q-s2-ex196-2',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-subject-pred',
    chapterTitle: 'Способы выражения подлежащего и субъекта',
    topicName: 'Pronome negativo con не- + infinito: некому винить',
    exerciseSource: 'Sezione 2, Esercizio 196, frase 2 (p. 135, chiave p. 385)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale forma del pronome personale richiede il predicato infinitivo «некого винить»?',
    sentenceWithBlank: '«(...) некого винить в том, что произошло».',
    options: [
      { label: 'A', text: 'Тебе (Dativo)' },
      { label: 'B', text: 'Ты (Nominativo)' },
      { label: 'C', text: 'Тебя (Accusativo)' },
      { label: 'D', text: 'Тобой (Strumentale)' }
    ],
    correctOption: 'A',
    hint: 'Nelle frasi negative con некого/нечего + infinito il soggetto logico va sempre al caso Dativo.',
    explanation:
      'Risposta esatta: A (Тебе). Box p. 135: «Слова с частицей не- (некого, нечто, негде, некогда) имеют отрицательное значение и употребляются в безличных предложениях с предикатом, выраженным инфинитивом, и субъектом в дательном падеже: ТЕБЕ некого винить; МНЕ некуда пойти» (chiave p. 385).',
    bookRuleRef: 'Glazunova §196, Box p. 135',
    tags: ['Некого винить', 'Дательный субъекта', 'Безличный инфинитив']
  },
  {
    id: 'q-s2-ex200-2',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-subject-pred',
    chapterTitle: 'Способы выражения подлежащего и субъекта',
    topicName: 'Assenza di proprietà interna vs situazione esterna',
    exerciseSource: 'Sezione 2, Esercizio 200, frase 2 (p. 138, chiave p. 385)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Confronta la sintassi con «нет»:\n«Он уже один раз провалил дело, теперь (...) нет доверия» (il soggetto non gode più di fiducia da parte degli altri).',
    sentenceWithBlank: '«...теперь (...) нет доверия».',
    options: [
      { label: 'A', text: 'ему (Dativo: situazione esterna dei sentimenti altrui verso di lui)' },
      { label: 'B', text: 'у него (Genitivo con у: sua proprietà interiore)' },
      { label: 'C', text: 'им' },
      { label: 'D', text: 'он' }
    ],
    correctOption: 'A',
    hint: 'La fiducia manca negli altri verso di lui: la situazione esterna verso di lui richiede il Dativo.',
    explanation:
      'Risposta esatta: A (ему). Box p. 138: «Конструкция У КОГО ЕСТЬ/НЕТ указывает на принадлежность качества субъекту (У него нет сомнений). Если объект выражает ситуацию внешнего мира, употребляется конструкция КОМУ ЕСТЬ/НЕТ: Ему нет спасения; теперь ЕМУ нет доверия» (chiave p. 385).',
    bookRuleRef: 'Glazunova §200, Box p. 138',
    tags: ['Кому нет vs у кого нет', 'Дательный субъекта', 'Синтаксис']
  },
  {
    id: 'q-s2-ex202-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-subject-pred',
    chapterTitle: 'Способы выражения подлежащего и субъекта',
    topicName: 'Costrutto не хватает: bisogno interiore vs parte mancante',
    exerciseSource: 'Sezione 2, Esercizio 202, frasi 1 e 3 (p. 139, chiave p. 385)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Confronta: 1) «Мне кажется, (...) не хватит смелости» (bisogno interiore). 2) «(...) не хватает пуговицы» (componente mancante di un capo d\'abbigliamento).',
    sentenceWithBlank: '1) «(...) не хватит смелости». 2) «(...) не хватает пуговицы».',
    options: [
      { label: 'A', text: '1) ей (Dat.) / 2) у рубашки (Gen. con у)' },
      { label: 'B', text: '1) у неё / 2) рубашке' },
      { label: 'C', text: '1) ей / 2) на рубашке' },
      { label: 'D', text: '1) она / 2) рубашку' }
    ],
    correctOption: 'A',
    hint: 'Il bisogno interiore soggettivo vuole il Dativo (кому?); l\'assenza di un componente materiale esteriore usa «у + Genitivo» (у рубашки).',
    explanation:
      'Risposta esatta: A (ей / у рубашки). Box p. 139: «В конструкциях с глаголами не хватает/не хватит субъект стоит в дательном падеже (кому?): если речь идёт о его внутренней потребности (ей не хватит смелости). Если указывается на отсутствие необходимых предметов или деталей, употребляется форма родительного с у: У рубашки (На рубашке) не хватает пуговицы» (chiave p. 385).',
    bookRuleRef: 'Glazunova §202, Box p. 139',
    tags: ['Не хватает', 'Дательный падеж', 'Родительный с у']
  },
  {
    id: 'q-s2-ex210-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-subject-pred',
    chapterTitle: 'Способы выражения подлежащего и субъекта',
    topicName: 'Soggetto allo Strumentale per il periodo di vita passato',
    exerciseSource: 'Sezione 2, Esercizio 210, frase 1 (p. 143, chiave p. 386)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Quale costrutto sintattico esprime l\'età o status passato del soggetto:\n«В шестнадцать лет они шли на войну» -> «(...) шли на войну».',
    sentenceWithBlank: '«(...) шли на войну».',
    options: [
      { label: 'A', text: 'Шестнадцатилетними (Strumentale plurale)' },
      { label: 'B', text: 'Шестнадцатилетние (Nominativo plurale)' },
      { label: 'C', text: 'Шестнадцатилетним (Dativo)' },
      { label: 'D', text: 'Шестнадцатилетних (Genitivo)' }
    ],
    correctOption: 'A',
    hint: 'Allo Strumentale, l\'aggettivo d\'età informa sullo status del soggetto nel passato («quando avevano 16 anni»).',
    explanation:
      'Risposta esatta: A (Шестнадцатилетними). Box p. 143: «При указании на возраст в качестве разговорных вариантов используются конструкции с субъектом в творительном падеже: В шестнадцать лет шли на войну -> Шестнадцатилетними шли на войну; Ребёнком он потерял родителей (когда был ребёнком)» (chiave p. 386).',
    bookRuleRef: 'Glazunova §210, Box p. 143',
    tags: ['Творительный возраста', 'Субъект', 'Синтаксис возраста']
  },

  // --- Predicato verbale e nominale ---
  {
    id: 'q-s2-ex215-4',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-verbal-pred',
    chapterTitle: 'Способы выражения сказуемого и предиката',
    topicName: 'Infinito al posto del verbo personale',
    exerciseSource: 'Sezione 2, Esercizio 215, frase 4 (p. 147)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Quale sfumatura stilistica acquisisce l\'infinito quando sostituisce il verbo finito in:\n«Так ты со мной шутки шутить?!» (anziché «вздумал шутить»)?',
    sentenceWithBlank: '«Так ты со мной шутки шутить?!»',
    options: [
      { label: 'A', text: 'Indica un\'azione inattesa, energica o emotivamente intensa del soggetto' },
      { label: 'B', text: 'Indica un\'azione passata abituale neutra' },
      { label: 'C', text: 'Indica un\'impossibilità fisica oggettiva' },
      { label: 'D', text: 'Indica una subordinata concessiva elisa' }
    ],
    correctOption: 'A',
    hint: 'L\'infinito indipendente nel predicato della lingua colloquiale esprime intensità e disappunto inatteso.',
    explanation:
      'Risposta esatta: A. Box a p. 147: «Инфинитив в позиции сказуемого указывает на слишком высокую интенсивность действия или на его неожиданность для говорящего: Не успели мы войти, он сразу ругаться; Так ты со мной шутки шутить?!». Sostituisce formule come «начал/вздумал».',
    bookRuleRef: 'Glazunova §215, Box p. 147',
    tags: ['Инфинитив в роли сказуемого', 'Разговорная речь', 'Экспрессивность']
  },
  {
    id: 'q-s2-ex221-5',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-verbal-pred',
    chapterTitle: 'Способы выражения сказуемого и предиката',
    topicName: 'Verbi di cessazione: перестать vs бросить',
    exerciseSource: 'Sezione 2, Esercizio 221, frasi 2 e 5 (p. 151, chiave p. 386)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale verbo colloquiale si usa nell\'imperativo per intimare di smettere una sciocchezza o piagnisteo?\n«(...) болтать всякую ерунду!»',
    sentenceWithBlank: '«(...) болтать всякую ерунду!»',
    options: [
      { label: 'A', text: 'Брось(те) / Перестань(те)' },
      { label: 'B', text: 'Закончи(те)' },
      { label: 'C', text: 'Начни(те)' },
      { label: 'D', text: 'Откажись(тесь)' }
    ],
    correctOption: 'A',
    hint: 'I verbi «бросить» e «перестать» all\'imperativo fungono da sinonimi colloquiali per ordinare la cessazione cosciente di un comportamento.',
    explanation:
      'Risposta esatta: A (Бросьте / Перестаньте). Box p. 151: «Глагол бросать/бросить употребляется в качестве разговорного варианта глаголов перестать, прекратить в императиве: Брось (перестань, прекрати) говорить глупости; Бросьте болтать ерунду» (chiave p. 386).',
    bookRuleRef: 'Glazunova §221, Box p. 151',
    tags: ['Бросить', 'Перестать', 'Императив']
  },
  {
    id: 'q-s2-ex232-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-nominal-pred',
    chapterTitle: 'Именное сказуемое',
    topicName: 'Accordo della copula essere con soggetto dimostrativo «это»',
    exerciseSource: 'Sezione 2, Esercizio 232, frase 1 (p. 159, chiave p. 388)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Coniuga la copula «быть» al passato: «Всё это (...) пустяки» (con soggetto «пустяки» al plurale):',
    sentenceWithBlank: '«Всё это (...) пустяки».',
    options: [
      { label: 'A', text: 'были (concorda col predicato nominale plurale)' },
      { label: 'B', text: 'было (neutro singolare per colpa di это)' },
      { label: 'C', text: 'был' },
      { label: 'D', text: 'была' }
    ],
    correctOption: 'A',
    hint: 'Nelle frasi con il pronome dimostrativo «это» la forma del verbo essere al passato concorda con il sostantivo al nominativo che lo segue.',
    explanation:
      'Risposta esatta: A (были). Box a p. 159: «В конструкциях с субъектом, выраженным указательным местоимением ЭТО, форма глагола-связки определяется существительным в именительном падеже: Это (вчера) был вторник; Была суббота; Всё это были пустяки» (chiave p. 388).',
    bookRuleRef: 'Glazunova §232, Box p. 159',
    tags: ['Это было vs были', 'Глагол-связка', 'Согласование']
  },
  {
    id: 'q-s2-ex235-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-nominal-pred',
    chapterTitle: 'Именное сказуемое',
    topicName: 'Comparativi: похож на кого vs подобен кому',
    exerciseSource: 'Sezione 2, Esercizio 235, frasi 1 e 7 (p. 161, chiave p. 388)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Confronta: 1) somiglianza esteriore visiva («похож на кого»). 2) corrispondenza di qualità intrinseche o funzionali («подобен кому»):\n«Жизнь чаще похожа (...) (роман), чем наши романы на жизнь».\nQuale reggenza ha «похож»?',
    sentenceWithBlank: '«Жизнь чаще похожа (...) роман...»',
    options: [
      { label: 'A', text: 'на (роман) — Accusativo' },
      { label: 'B', text: 'роману — Dativo' },
      { label: 'C', text: 'с романом — Strumentale' },
      { label: 'D', text: 'от романа — Genitivo' }
    ],
    correctOption: 'A',
    hint: '«Похож» richiede la preposizione «на + Accusativo»; «подобен» regge il Dativo senza preposizione.',
    explanation:
      'Risposta esatta: A (на роман). Box a p. 161: «Конструкция похож на кого/что употребляется, если сравнение двух предметов происходит на основе ВНЕШНЕГО сходства. Конструкция подобен кому/чему используется при сопоставлении внутренних качеств или функциональных характеристик предметов: Спокойный человек подобен самовару» (chiave p. 388).',
    bookRuleRef: 'Glazunova §235, Box p. 161',
    tags: ['Похож на vs подобен', 'Именное сказуемое', 'Сравнение']
  },
  {
    id: 'q-s2-ex236-7',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-nominal-pred',
    chapterTitle: 'Именное сказуемое',
    topicName: 'Verbi semipieni: оказаться прав vs правым',
    exerciseSource: 'Sezione 2, Esercizio 236, frase 7 (p. 162, chiave p. 388)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale forma dell\'aggettivo completa la frase con il verbo «оказаться»:\n«Врач (...) прав».',
    sentenceWithBlank: '«Врач (...) прав».',
    options: [
      { label: 'A', text: 'оказался (con forma breve прав)' },
      { label: 'B', text: 'является (con forma breve è vietato)' },
      { label: 'C', text: 'делается' },
      { label: 'D', text: 'считается' }
    ],
    correctOption: 'A',
    hint: 'I verbi copulativi semipieni come «оказаться» possono unirsi sia a forme brevi sia allo Strumentale («оказался прав / оказался правым»).',
    explanation:
      'Risposta esatta: A (оказался). Nel testo di Glazunova a p. 162-163 (chiave p. 388), «Врач оказался прав». Con «являться» e «считаться» la forma breve non è ammessa, si usa solo lo Strumentale.',
    bookRuleRef: 'Glazunova §236, p. 162',
    tags: ['Полузнаменательные глаголы', 'Оказаться', 'Краткая форма']
  },
  {
    id: 'q-s2-ex238-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-nominal-pred',
    chapterTitle: 'Именное сказуемое',
    topicName: 'Copula быть: Nominativo vs Strumentale',
    exerciseSource: 'Sezione 2, Esercizio 238, frase 1 (p. 164, chiave p. 388)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Nel predicato nominale «Утро было (солнечное / солнечным)», quale forma è preferibile secondo Glazunova?',
    sentenceWithBlank: '«Утро было (...)».',
    options: [
      { label: 'A', text: 'солнечное (anche se è ammesso солнечным)' },
      { label: 'B', text: 'solo солнечным, il nominativo è sempre vietato' },
      { label: 'C', text: 'только солнечно' },
      { label: 'D', text: 'в солнечной форме' }
    ],
    correctOption: 'A',
    hint: 'A p. 164 si spiega che con «быть» al passato per stati atmosferici e qualità oggettive permanenti si usa spesso il Nominativo, con variante allo Strumentale.',
    explanation:
      'Risposta esatta: A (солнечное / солнечным). Come indicato a p. 164 e confermato dalla chiave di p. 388: con il verbo быть al passato, gli aggettivi che descrivono un valore oggettivo naturale prediligono il nominativo («Утро было солнечное»), pur ammettendo lo strumentale («солнечным»).',
    bookRuleRef: 'Glazunova §238, Box p. 164 & Chiave p. 388',
    tags: ['Именное сказуемое', 'Быть в прошедшем времени', 'Согласование']
  },

  // --- Infinito come soggetto e predicato ---
  {
    id: 'q-s2-ex243-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-infinitive-role',
    chapterTitle: 'Инфинитив в позиции подлежащего и сказуемого',
    topicName: 'Infinito soggetto: avverbio di valutazione esterna vs sostantivo di sentimento',
    exerciseSource: 'Sezione 2, Esercizio 243, frase 1 (p. 167, chiave p. 388)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Confronta la valutazione esterna oggettiva con il sentimento del parlante:\n«Оставлять детей без присмотра (...) (опасно / опасность)». Quale parola si usa per dare una valutazione obiettiva dell\'azione?',
    sentenceWithBlank: '«Оставлять детей без присмотра (...)».',
    options: [
      { label: 'A', text: 'опасно (avverbio predicativo: valutazione oggettiva dell\'azione)' },
      { label: 'B', text: 'опасность (sostantivo: esprime il sentimento o qualità interna)' },
      { label: 'C', text: 'было опасность' },
      { label: 'D', text: 'в опасности' }
    ],
    correctOption: 'A',
    hint: 'L\'avverbio predicativo in -о valuta l\'azione dell\'infinito dall\'esterno («спорить глупо, оставлять опасно»).',
    explanation:
      'Risposta esatta: A (опасно). Box a p. 167: «При подлежащем, выраженном инфинитивом: наречие в позиции сказуемого характеризует действие инфинитива (внешняя оценка): Спорить глупо; Оставлять детей без присмотра опасно. Существительное сказуемое характеризует субъект или его отношение к действию (внутренняя оценка): Видеть вас — удовольствие» (chiave p. 388).',
    bookRuleRef: 'Glazunova §243, Box p. 167',
    tags: ['Инфинитив-подлежащее', 'Наречие vs существительное', 'Внешняя оценка']
  },
  {
    id: 'q-s2-ex249-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-infinitive-role',
    chapterTitle: 'Инфинитив в позиции подлежащего и сказуемого',
    topicName: 'Connettivi tra infiniti: значит vs означает',
    exerciseSource: 'Sezione 2, Esercizio 249, frase 1 (p. 170, chiave p. 389)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Quale connettivo si usa per spiegare il significato essenziale di un secondo infinito:\n«Быть терпеливым — (...) уметь молча переносить все трудности»?',
    sentenceWithBlank: '«Быть терпеливым — (...) уметь молча переносить все трудности».',
    options: [
      { label: 'A', text: 'значит' },
      { label: 'B', text: 'означает' },
      { label: 'C', text: 'называется' },
      { label: 'D', text: 'всё равно что' }
    ],
    correctOption: 'A',
    hint: '«Значит» si impiega quando il secondo infinito rivela e definisce il contenuto logico del primo («Кивнуть головой — значит согласиться»).',
    explanation:
      'Risposta esatta: A (значит). Box a p. 170: «В предложении с подлежащим и сказуемым, выраженными инфинитивами, ЗНАЧИТ употребляется, если второй инфинитив раскрывает значение первого: Кивнуть головой — значит согласиться. ОЗНАЧАЕТ употребляется, если одно из действий имеет ритуальное значение: Обменяться кольцами означает дать клятву в любви» (chiave p. 389).',
    bookRuleRef: 'Glazunova §249, Box p. 170',
    tags: ['Значит vs означает', 'Инфинитив', 'Связка']
  },

  // --- Accordo quantitativo del predicato ---
  {
    id: 'q-s2-ex251-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-quant-agreement',
    chapterTitle: 'Сказуемое при подлежащем с количественным значением',
    topicName: 'Accordo con soggetto composto con «с»',
    exerciseSource: 'Sezione 2, Esercizio 251, frase 1 (p. 171)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Confronta la concordanza: «Брат с сестрой (...) рано» vs «Я с отцом (...) на рыбалку»:',
    sentenceWithBlank: '1) «Брат с сестрой (...) рано». 2) «Я с отцом (...) на рыбалку».',
    options: [
      { label: 'A', text: '1) ушли (plurale) / 2) отправился (singolare concordato con я)' },
      { label: 'B', text: '1) ушёл / 2) отправились' },
      { label: 'C', text: 'Entrambi al plurale' },
      { label: 'D', text: 'Entrambi al singolare' }
    ],
    correctOption: 'A',
    hint: 'Se il primo soggetto è un pronome di 1ª singolare (я), il verbo concorda al singolare («я отправился»); se sono due sostantivi di pari grado (брат с сестрой) il verbo va al plurale («ушли»).',
    explanation:
      'Risposta esatta: A. Regola p. 171 (punto а): «Брат с сестрой ушли рано (множественное число). Если первое подлежащее выражено местоимением, форма сказуемого определяется местоимением: Я с отцом отправился на рыбалку (единственное число); Мы с отцом отправились (множественное число)».',
    bookRuleRef: 'Glazunova §251а, p. 171',
    tags: ['Согласование сказуемого', 'Брат с сестрой', 'Местоимение я']
  },
  {
    id: 'q-s2-ex254-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-quant-agreement',
    chapterTitle: 'Сказуемое при подлежащем с количественным значением',
    topicName: 'Accordo del verbo con numerale quantitativo',
    exerciseSource: 'Sezione 2, Esercizio 254, frase 1 (p. 173, chiave p. 389)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Confronta le due frasi:\n1) «В авиакатастрофе (...) сто двадцать человек» (verbo prima del soggetto).\n2) «Сто двадцать человек (...) напрасно» (soggetto attivo animato prima del verbo).\nQual è la concordanza raccomandata per il verbo «погибнуть»?',
    sentenceWithBlank: '1) «В авиакатастрофе (...) сто двадцать человек».\n2) «Сто двадцать человек (...) напрасно».',
    options: [
      { label: 'A', text: '1) погибло (sing. neutro) / 2) погибли (plurale)' },
      { label: 'B', text: '1) погибли / 2) погибло' },
      { label: 'C', text: '1) погибли / 2) погибли (solo plurale)' },
      { label: 'D', text: '1) погибло / 2) погибло (solo singolare)' }
    ],
    correctOption: 'A',
    hint: 'Il singolare neutro accentua il totale quantitativo indistinto; il plurale focalizza le singole persone come soggetti attivi.',
    explanation:
      'Risposta esatta: A. Regola p. 173-174 (chiave p. 389): «Единственное число сказуемого акцентирует внимание на нём самом, представляя подлежащее в обобщённом абстрактном значении (погибло сто двадцать человек); множественное число — на значении подлежащего: с одушевлёнными лицами (сто двадцать человек погибли напрасно)».',
    bookRuleRef: 'Glazunova §254, Box p. 173-174',
    tags: ['Согласование сказуемого', 'Количественные числительные', 'Единственное vs множественное']
  },
  {
    id: 'q-s2-ex257-7',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-quant-agreement',
    chapterTitle: 'Сказуемое при подлежащем с количественным значением',
    topicName: 'Accordo con numerale collettivo e pronome нас',
    exerciseSource: 'Sezione 2, Esercizio 257, frase 7 (p. 175, chiave p. 386)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Qual è l\'accordo verbale corretto nella costruzione con numerale collettivo preceduto da «нас / их»:\n«Нас пятеро не (...) на экскурсию».',
    sentenceWithBlank: '«Нас пятеро не (...) на экскурсию».',
    options: [
      { label: 'A', text: 'поехало (singolare neutro)' },
      { label: 'B', text: 'поехали (plurale)' },
      { label: 'C', text: 'поехал (maschile)' },
      { label: 'D', text: 'поехала (femminile)' }
    ],
    correctOption: 'A',
    hint: 'Quando il numerale collettivo (двое, трое, пятеро) è preceduto dal pronome al Genitivo «нас / вас / их», il verbo va al neutro singolare.',
    explanation:
      'Risposta esatta: A (поехало). Box p. 175: «При подлежащем, выраженном собирательным числительным + существительное/местоимение в родительном падеже, сказуемое в единственном числе имеет форму СРЕДНЕГО РОДА: Их двое пришло; Нас трое осталось; Нас пятеро не поехало» (chiave p. 386).',
    bookRuleRef: 'Glazunova §257, Box p. 175',
    tags: ['Собирательные числительные', 'Средний род', 'Согласование']
  },

  // --- Membri Omogenei (Однородные члены) ---
  {
    id: 'q-s2-ex264-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-homogeneous',
    chapterTitle: 'Связи между однородными членами',
    topicName: 'Congiunzioni coordinanti: и vs но',
    exerciseSource: 'Sezione 2, Esercizio 264, frase 1 (p. 180, chiave p. 390)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale congiunzione unisce i membri omogenei «красивые» e «болезненные» nella frase:\n«У неё были красивые (...) болезненные черты лица»?',
    sentenceWithBlank: '«У неё были красивые (...) болезненные черты лица».',
    options: [
      { label: 'A', text: 'но (segnala contraddizione tra i due tratti)' },
      { label: 'B', text: 'и (segnala piena corrispondenza)' },
      { label: 'C', text: 'да (forma antiquata)' },
      { label: 'D', text: 'то есть' }
    ],
    correctOption: 'A',
    hint: '«Красивый» è positivo, «болезненный» è negativo: tra i due concetti si crea una contraddizione logica.',
    explanation:
      'Risposta esatta: A (но). Nel riquadro di p. 180: «Союз И соединяет однородные члены, соответствующие друг другу (большое и спелое яблоко). Союз НО соединяет однородные члены, значения которых противоречат друг другу: большое, но неспелое яблоко; красивые, но болезненные черты лица».',
    bookRuleRef: 'Glazunova §264, Box p. 180',
    tags: ['Однородные члены', 'Союз но', 'Противопоставление']
  },
  {
    id: 'q-s2-ex265-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-homogeneous',
    chapterTitle: 'Связи между однородными членами',
    topicName: 'Connettivi: и вместе с тем vs и тем не менее',
    exerciseSource: 'Sezione 2, Esercizio 265, frase 1 (p. 181, chiave p. 390)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Confronta la combinazione di sentimenti opposti inattesi ma coesistenti:\n«Признавшись во всём, он почувствовал стыд (...) облегчение...»',
    sentenceWithBlank: '«...почувствовал стыд (...) облегчение...»',
    options: [
      { label: 'A', text: 'и вместе с тем (и в то же время)' },
      { label: 'B', text: 'но тем не менее' },
      { label: 'C', text: 'а скорее' },
      { label: 'D', text: 'то ли' }
    ],
    correctOption: 'A',
    hint: '«И вместе с тем» esprime la coesistenza simultanea sorprendente di due sentimenti o qualità («vergogna e insieme sollievo»).',
    explanation:
      'Risposta esatta: A (и вместе с тем / и в то же время). Box a p. 181: «Союз И со словами вместе с тем (в то же время) указывает на то, что сочетание данных признаков необычно, но ВОЗМОЖНО: спелое и вместе с тем твёрдое яблоко; стыд и вместе с тем облегчение» (chiave p. 390).',
    bookRuleRef: 'Glazunova §265, Box p. 181',
    tags: ['И вместе с тем', 'Однородные члены', 'Совмещение признаков']
  },
  {
    id: 'q-s2-ex267-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-homogeneous',
    chapterTitle: 'Связи между однородными членами',
    topicName: 'Congiunzioni: а главное vs а особенно',
    exerciseSource: 'Sezione 2, Esercizio 267, frase 1 (p. 182, chiave p. 390)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Confronta: «а особенно» (il secondo elemento fa parte dell\'insieme del primo) vs «а главное» (il secondo elemento è un fattore indipendente e primario):\n«Опытные врачи, хороший уход, (...) вера больного в собственные силы ускорили выздоровление».',
    sentenceWithBlank: '«...хороший уход, (...) вера больного в собственные силы...»',
    options: [
      { label: 'A', text: 'а главное (il fattore morale non rientra nell\'assistenza medica esterna)' },
      { label: 'B', text: 'а особенно (perché la fede è una medicina)' },
      { label: 'C', text: 'то есть' },
      { label: 'D', text: 'или' }
    ],
    correctOption: 'A',
    hint: 'La fede nelle proprie forze è un fattore qualitativamente autonomo rispetto all\'assistenza medica: non fa parte dell\'insieme delle cure, ma è l\'elemento supremo.',
    explanation:
      'Risposta esatta: A (а главное). Box a p. 182: «Союз А ОСОБЕННО употребляется, если значение второго однородного члена входит во множество значений первого: Все растения, а особенно комнатные. Союз А ГЛАВНОЕ употребляется, если значение второго однородного члена НЕ пересекается со значением первого: Отличная погода, а главное, приятная компания; хороший уход, а главное, вера больного» (chiave p. 390).',
    bookRuleRef: 'Glazunova §267, Box p. 182',
    tags: ['А главное vs а особенно', 'Однородные члены']
  },
  {
    id: 'q-s2-ex271-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-homogeneous',
    chapterTitle: 'Связи между однородными членами',
    topicName: 'Congiunzione correlativa: не то что... а скорее',
    exerciseSource: 'Sezione 2, Esercizio 271, frase 1 (p. 187, chiave p. 391)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Unisci i membri omogenei «красавец» e «очень симпатичный молодой человек» usando la congiunzione di parziale rettifica:\n«— Какой он красавец!?\n— Он (...), а скорее очень симпатичный молодой человек».',
    sentenceWithBlank: '«Он (...), а скорее очень симпатичный молодой человек».',
    options: [
      { label: 'A', text: 'не то что красавец' },
      { label: 'B', text: 'не только красавец' },
      { label: 'C', text: 'не столько красавец' },
      { label: 'D', text: 'хотя красавец' }
    ],
    correctOption: 'A',
    hint: 'La congiunzione «не то что... а скорее» nega l\'affermazione assoluta sostituendola con una più realistica.',
    explanation:
      'Risposta esatta: A (не то что красавец). Box p. 186: «Союз НЕ ТО ЧТО... А СКОРЕЕ употребляется при частичном отрицании: Мы с ним не то что друзья, а приятели; Он не то что красавец, а скорее очень симпатичный молодой человек» (chiave p. 391).',
    bookRuleRef: 'Glazunova §271, Box p. 186',
    tags: ['Не то что а скорее', 'Однородные члены', 'Коррелятивные союзы']
  },
  {
    id: 'q-s2-ex278-2',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-homogeneous',
    chapterTitle: 'Связи между однородными членами',
    topicName: 'Alternanza temporale: то... то vs или... или',
    exerciseSource: 'Sezione 2, Esercizio 278, frase 2 (p. 192, chiave p. 391)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale coppia di congiunzioni esprime l\'alternanza ripetuta nel tempo degli eventi:\n«Зима была ужасной: (...) мороз, (...) оттепель — мы постоянно болели».',
    sentenceWithBlank: '«Зима была ужасной: (...) мороз, (...) оттепель...»',
    options: [
      { label: 'A', text: 'то... то' },
      { label: 'B', text: 'или... или' },
      { label: 'C', text: 'либо... либо' },
      { label: 'D', text: 'ни... ни' }
    ],
    correctOption: 'A',
    hint: 'Si tratta del ripetersi alternato nel tempo di due condizioni atmosferiche opposte.',
    explanation:
      'Risposta esatta: A (то... то). Box p. 192: «Двойной союз ТО... ТО вводит в предложение однородные члены, повторяющиеся во времени: То мороз, то оттепель; То взлёт, то посадка».',
    bookRuleRef: 'Glazunova §278, Box p. 192',
    tags: ['То то', 'Чередование во времени', 'Однородные члены']
  },

  // --- Membri Isolati: Participi, Gerundi e Apposizioni ---
  {
    id: 'q-s2-ex284-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-isolated-attrib',
    chapterTitle: 'Обособленные члены: определения',
    topicName: 'Isolamento del participio: parte del predicato vs attributo',
    exerciseSource: 'Sezione 2, Esercizio 284, frase 1 (p. 196, chiave p. 391)',
    level: 'B2',
    type: 'true_false',
    prompt: 'Valuta l\'esattezza della punteggiatura:\n«Проект был многообещающий, и не требовал особых затрат».\nÈ corretta l\'assenza di virgole attorno a «многообещающий»?',
    sentenceWithBlank: '«Проект был многообещающий, и не требовал особых затрат».',
    options: [
      { label: 'Vero', text: 'Vero - «Многообещающий» fa parte del predicato nominale composto con «был» e non si isola.' },
      { label: 'Falso', text: 'Falso - I participi vanno sempre isolati da virgole in ogni posizione.' }
    ],
    correctOption: 'Vero',
    hint: 'Quando l\'aggettivo o participio entra nella composizione del predicato nominale con la copula «быть», non costituisce un attributo isolato.',
    explanation:
      'Risposta esatta: Vero. Box a p. 197: «Не выделяются запятыми прилагательные и причастия, которые входят в состав именного сказуемого: Он стоял обиженный; Проект был многообещающий» (chiave p. 391).',
    bookRuleRef: 'Glazunova §284, Box p. 197',
    tags: ['Обособленные определения', 'Именное сказуемое', 'Пунктуация']
  },
  {
    id: 'q-s2-ex286-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-isolated-attrib',
    chapterTitle: 'Обособленные члены: определения',
    topicName: 'Concordanza del participio',
    exerciseSource: 'Sezione 2, Esercizio 286, frase 1 (p. 198, chiave p. 391)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Concorda il costrutto participiale tra parentesi con il sostantivo «вопросов»:\n«Я не хочу касаться вопросов, (не имеющий прямого отношения к данной проблеме)».',
    sentenceWithBlank: '«Я не хочу касаться вопросов, (...) к данной проблеме».',
    options: [
      { label: 'A', text: 'не имеющих прямого отношения' },
      { label: 'B', text: 'не имеющие прямого отношения' },
      { label: 'C', text: 'не имеющим прямого отношения' },
      { label: 'D', text: 'не имевшими прямого отношения' }
    ],
    correctOption: 'A',
    hint: 'Il sostantivo è «вопросов» (Genitivo plurale retto da касаться). Il participio concorda in genere, numero e caso.',
    explanation:
      'Risposta esatta: A (не имеющих прямого отношения). Il participio presente attivo del verbo иметь concorda con «вопросов» (Genitivo plurale maschile) assumendo la desinenza -их: «вопросов (каких?), не имеющих прямого отношения» (chiave p. 391).',
    bookRuleRef: 'Glazunova §286, Regola p. 198',
    tags: ['Причастный оборот', 'Согласование причастий', 'Родительный падеж']
  },
  {
    id: 'q-s2-ex294-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-isolated-adverb',
    chapterTitle: 'Обособленные обстоятельства',
    topicName: 'Trasformazione temporale in costrutto gerundiale',
    exerciseSource: 'Sezione 2, Esercizio 294, frase 1 (p. 205, chiave p. 392)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Trasforma la subordinata temporale «Когда он сочинял, он шевелил губами» in costrutto gerundiale imperfettivo:',
    sentenceWithBlank: '«Когда он сочинял, он шевелил губами» -> «(...), он шевелил губами».',
    options: [
      { label: 'A', text: 'Сочиняя' },
      { label: 'B', text: 'Сочинив' },
      { label: 'C', text: 'Сочинявший' },
      { label: 'D', text: 'Сочинить' }
    ],
    correctOption: 'A',
    hint: 'L\'azione di comporre musica o versi è simultanea al movimento delle labbra: si usa il gerundio imperfettivo con suffisso -я.',
    explanation:
      'Risposta esatta: A (Сочиняя). Box a p. 205: «Деепричастия несовершенного вида образуются с помощью суффикса -а (-я) и обозначают действие, которое происходит ОДНОВРЕМЕННО с действием сказуемого: Сочиняя, он шевелил губами» (chiave p. 392).',
    bookRuleRef: 'Glazunova §294, Box p. 205',
    tags: ['Деепричастие несовершенного вида', 'Одновременность']
  },
  {
    id: 'q-s2-ex298-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-isolated-adverb',
    chapterTitle: 'Обособленные обстоятельства',
    topicName: 'Errore sintattico nel costrutto gerundiale',
    exerciseSource: 'Sezione 2, Esercizio 298, frase 1 e 2 (p. 209, chiave p. 394)',
    level: 'C1',
    type: 'case_scenario',
    prompt: 'Considera la frase d\'esame:\n«*Читая книгу, мне стало грустно».\nPerché questa frase contiene un errore sintattico grave secondo Glazunova?',
    sentenceWithBlank: '«*Читая книгу, мне стало грустно».',
    options: [
      { label: 'A', text: 'Perché la frase principale è impersonale («мне стало грустно») e non c\'è coincidenza tra soggetto del gerundio e soggetto della reggente' },
      { label: 'B', text: 'Perché «читая» doveva essere al perfetto «прочитав»' },
      { label: 'C', text: 'Perché il gerundio non può mai trovarsi all\'inizio di una frase' },
      { label: 'D', text: 'Perché il verbo грустно richiede la preposizione о' }
    ],
    correctOption: 'A',
    hint: 'L\'azione espressa dal gerundio deve riferirsi allo stesso identico soggetto grammaticale che compie l\'azione del predicato principale.',
    explanation:
      'Risposta esatta: A. Regola fondamentale a p. 209: «Действия сказуемого и деепричастия ВСЕГДА относятся к одному и тому же лицу!». In «мне стало грустно» il predicato è impersonale con soggetto logico al Dativo; la frase corretta deve essere: «Когда я читал книгу, мне стало грустно» (chiave p. 394).',
    bookRuleRef: 'Glazunova §298, Box p. 209',
    tags: ['Деепричастный оборот', 'Синтаксическая ошибка', 'Безличные предложения']
  },
  {
    id: 'q-s2-ex301-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-apposition',
    chapterTitle: 'Обособленные приложения',
    topicName: 'Apposizione isolata con nome proprio',
    exerciseSource: 'Sezione 2, Esercizio 301, frase б (p. 210)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Individua l\'apposizione isolata (обособленное приложение) nella frase:\n«Иван Иванович, наш преподаватель, каждое занятие начинает с проверки домашнего задания».',
    sentenceWithBlank: '«Иван Иванович, наш преподаватель, каждое занятие начинает...»',
    options: [
      { label: 'A', text: 'наш преподаватель' },
      { label: 'B', text: 'каждое занятие' },
      { label: 'C', text: 'Иван Иванович' },
      { label: 'D', text: 'с проверки' }
    ],
    correctOption: 'A',
    hint: 'L\'apposizione è un sostantivo che ridenomina o precisa il soggetto indicandone la professione o il ruolo.',
    explanation:
      'Risposta esatta: A (наш преподаватель). Regola p. 210: «Приложение — это существительное, которое дублирует подлежащее или дополнение, обозначая выраженный предмет ещё одним способом (по специальности, должности). Обособляются приложения, дублирующие имя собственное: Иван Иванович, наш преподаватель...».',
    bookRuleRef: 'Glazunova §301, p. 210',
    tags: ['Обособленное приложение', 'Имя собственное']
  },
  {
    id: 'q-s2-ex309-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-clarification',
    chapterTitle: 'Обособленные уточнения',
    topicName: 'Precisazioni isolate (уточнения)',
    exerciseSource: 'Sezione 2, Esercizio 309, frase 1 (p. 217, chiave p. 394)',
    level: 'B2',
    type: 'true_false',
    prompt: 'Nella frase «В мае мы собираемся поехать в Париж, на симпозиум»:\nIl complemento «на симпозиум» è un\'apposizione o una precisazione isolata di scopo/evento (уточнение)?',
    sentenceWithBlank: '«В мае мы собираемся поехать в Париж, на симпозиум».',
    options: [
      { label: 'Vero', text: 'Vero - È una precisazione isolata (уточнение) che restringe e specifica il motivo del viaggio a Parigi.' },
      { label: 'Falso', text: 'Falso - È un complemento d\'agente obbligatorio privo di valore di precisazione.' }
    ],
    correctOption: 'Vero',
    hint: 'La precisazione isolata (уточнение) circoscrive e spiega il fine o luogo preciso del viaggio.',
    explanation:
      'Risposta esatta: Vero. Box p. 217: «Уточнением называется слово или группа слов, которые в предложении детализируют значение обстоятельств места и времени. Перед ними можно подставить слова: точнее, а именно (в Париж, а именно на симпозиум)».',
    bookRuleRef: 'Glazunova §308-309, p. 217',
    tags: ['Уточнение', 'Пунктуация']
  },

  // --- Frasi a un solo membro (Односоставные предложения) ---
  {
    id: 'q-s2-ex313-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-one-member',
    chapterTitle: 'Односоставные предложения',
    topicName: 'Classificazione: определенно-личные',
    exerciseSource: 'Sezione 2, Esercizio 313, frase 1 (p. 222, chiave p. 395)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'A quale tipo di frase a un solo membro appartiene:\n«Выпей воды, отдохни, а то совсем заработался»?',
    sentenceWithBlank: '«Выпей воды, отдохни...»',
    options: [
      { label: 'A', text: 'Определенно-личное предложение (soggetto «ты» identificato dalla 2ª singolare)' },
      { label: 'B', text: 'Безличное предложение' },
      { label: 'C', text: 'Неопределенно-личное предложение' },
      { label: 'D', text: 'Номинативное предложение' }
    ],
    correctOption: 'A',
    hint: 'Il predicato è espresso all\'imperativo di 2ª persona singolare rivolto a un interlocutore preciso.',
    explanation:
      'Risposta esatta: A (Определенно-личное предложение). Regola p. 220-222: quando il verbo è alla 1ª o 2ª persona singolare o plurale del presente/futuro o all\'imperativo, il soggetto è determinato inequivocabilmente dalla desinenza («ты», «вы», «я», «мы»).',
    bookRuleRef: 'Glazunova §312, p. 220-221',
    tags: ['Односоставные предложения', 'Определенно-личное']
  },
  {
    id: 'q-s2-ex313-2',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-one-member',
    chapterTitle: 'Односоставные предложения',
    topicName: 'Classificazione: обобщенно-личные',
    exerciseSource: 'Sezione 2, Esercizio 313, frase 2 (p. 222, chiave p. 395)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'A quale classe appartiene il proverbio «Подальше положишь — поближе возьмёшь»?',
    sentenceWithBlank: '«Подальше положишь — поближе возьмёшь».',
    options: [
      { label: 'A', text: 'Обобщенно-личное предложение (massima proverbiale valida per tutti)' },
      { label: 'B', text: 'Определенно-личное предложение' },
      { label: 'C', text: 'Неопределенно-личное предложение' },
      { label: 'D', text: 'Безличное предложение' }
    ],
    correctOption: 'A',
    hint: 'Anche se il verbo è alla 2ª persona singolare, non si rivolge a un singolo individuo specifico, bensì a chiunque (verità universale).',
    explanation:
      'Risposta esatta: A (Обобщенно-личное предложение). Box a p. 221-222: «Обобщённо-личными называются предложения, в которых обозначаемое глаголом действие относится к любому лицу: Без труда не вытащишь и рыбку из пруда; Подальше положишь — поближе возьмёшь» (chiave p. 395).',
    bookRuleRef: 'Glazunova §312, p. 221-222',
    tags: ['Обобщенно-личное', 'Пословицы', 'Односоставные предложения']
  },
  {
    id: 'q-s2-ex313-3',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-one-member',
    chapterTitle: 'Односоставные предложения',
    topicName: 'Classificazione: неопределенно-личные',
    exerciseSource: 'Sezione 2, Esercizio 313, frase 3 (p. 222, chiave p. 395)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Qual è la tipologia della proposizione:\n«Ну сказали ему, что неправ, ничего страшного»?',
    sentenceWithBlank: '«Ну сказали ему, что неправ...»',
    options: [
      { label: 'A', text: 'Неопределенно-личное (3ª persona plurale al passato senza soggetto)' },
      { label: 'B', text: 'Определенно-личное' },
      { label: 'C', text: 'Безличное' },
      { label: 'D', text: 'Двусоставное неполное' }
    ],
    correctOption: 'A',
    hint: 'Il verbo è alla forma plurale del passato e l\'azione è compiuta da persone non precisate o non rilevanti per il parlante.',
    explanation:
      'Risposta esatta: A (Неопределенно-личное). Regola p. 221: «Неопределённо-личными называются предложения, в которых глагол стоит в форме 3-го лица множественного числа (настоящего или прошедшего времени): В дверь постучали; Сказали ему... Внимание сосредотачивается на действии, а не на лице».',
    bookRuleRef: 'Glazunova §312, p. 221',
    tags: ['Неопределенно-личное', 'Односоставные предложения']
  },
  {
    id: 'q-s2-ex317-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-one-member',
    chapterTitle: 'Односоставные предложения',
    topicName: 'Trasformazione in безличное предложение: fenomeni naturali',
    exerciseSource: 'Sezione 2, Esercizio 317, frasi 1 e 2 (p. 226, chiave p. 395)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Trasforma «Наступает вечер» in una proposizione impersonale:',
    sentenceWithBlank: '«Наступает вечер» -> «(...)».',
    options: [
      { label: 'A', text: 'Вечереет' },
      { label: 'B', text: 'Вечер' },
      { label: 'C', text: 'Вечером' },
      { label: 'D', text: 'На вечер' }
    ],
    correctOption: 'A',
    hint: 'I verbi impersonali che esprimono fenomeni naturali o momenti della giornata terminano in -ет al presente (смеркается, вечереет, светает).',
    explanation:
      'Risposta esatta: A (Вечереет). Regola p. 225-226: «Безличные предложения выражают явления природы или физическое состояние: Наступает вечер -> Вечереет; Наступает рассвет -> Рассветает; За окном становится светло -> Светлеет» (chiave p. 395).',
    bookRuleRef: 'Glazunova §316-317, p. 225-226',
    tags: ['Безличные глаголы', 'Явления природы', 'Вечереет']
  },

  // --- Ordine delle parole e Articolazione attuale (Актуальное членение) ---
  {
    id: 'q-s2-ex330-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-word-order',
    chapterTitle: 'Порядок слов (Актуальное членение)',
    topicName: 'Posizione neutra di Tema e Rema',
    exerciseSource: 'Sezione 2, Esercizio 330 (p. 236)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Nell\'ordine neutro della lingua russa scritta, come sono disposte la «Тема» (informazione nota) e la «Рема» (informazione nuova)?',
    sentenceWithBlank: '«Студенты третьего курса (Тема) / уехали на практику (Рема)».',
    options: [
      { label: 'A', text: 'La Tema precede la Rema (Тема -> Рема)' },
      { label: 'B', text: 'La Rema precede sempre la Tema' },
      { label: 'C', text: 'Non esiste alcuna regola, l\'ordine è casuale' },
      { label: 'D', text: 'La Rema sta al centro tra soggetto e verbo' }
    ],
    correctOption: 'A',
    hint: 'Nel registro neutrale non emotivo l\'elemento già noto apre l\'enunciato, mentre l\'informazione nuova e focale chiude la frase ricevendo l\'accento logico.',
    explanation:
      'Risposta esatta: A. Regola fondamentale a p. 235-236: «В стилистически нейтральной речи в коммуникативно-расчленённых предложениях ТЕМА предшествует РЕМЕ: Студенты третьего курса / уехали на практику; Дождь / прекратился. В конце предложения обычно стоит слово, несущее новую информацию».',
    bookRuleRef: 'Glazunova §330, Box p. 236',
    tags: ['Актуальное членение', 'Тема и рема', 'Порядок слов']
  },
  {
    id: 'q-s2-ex330-dostoevsky',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-lit-revision',
    chapterTitle: 'Материал для повторения: Раздел 2',
    topicName: 'Brano d\'autore: F.M. Dostoevskij («Le notti bianche»)',
    exerciseSource: 'Sezione 2, Esercizio 345 (p. 251-252, chiave p. 399)',
    level: 'C1',
    type: 'case_scenario',
    prompt: 'Nel brano di Dostoevskij («Белые ночи», p. 251):\n«С самого утра (...) стала мучить какая-то удивительная тоска».\nQuale forma del pronome personale di 1ª persona richiede il verbo transitivo «мучить»?',
    sentenceWithBlank: '«С самого утра (я) стала мучить какая-то удивительная тоска».',
    options: [
      { label: 'A', text: 'меня (Accusativo retto da мучить: тоска мучила кого?)' },
      { label: 'B', text: 'мне (Dativo)' },
      { label: 'C', text: 'мной (Strumentale)' },
      { label: 'D', text: 'обо мне (Preposizionale)' }
    ],
    correctOption: 'A',
    hint: 'Il verbo «мучить» è transitivo e regge l\'Accusativo dell\'essere che soffre il tormento.',
    explanation:
      'Risposta esatta: A (меня). Nel testo di Dostoevskij e nella chiave a p. 399: «С самого утра меня стала мучить какая-то удивительная тоска». Il soggetto grammaticale è «тоска» (nominativo f.), che tormenta l\'oggetto all\'Accusativo: «кого? -> меня».',
    bookRuleRef: 'Glazunova §345, Testo d\'autore p. 251 & Chiave p. 399',
    tags: ['Достоевский', 'Белые ночи', 'Управление глаголов', 'Винительный падеж']
  },
  {
    id: 'q-s2-ex214-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-verbal-pred',
    chapterTitle: 'Способы выражения сказуемого и предиката',
    topicName: 'Interiezione verbale in funzione di predicato',
    exerciseSource: 'Sezione 2, Esercizio 214, frase б (p. 146)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Quale valore sintattico ed espressivo assume l\'interiezione verbale «прыг» in:\n«Кот прыг на дерево и затих»?',
    sentenceWithBlank: '«Кот прыг на дерево и затих».',
    options: [
      { label: 'A', text: 'Funzione di predicato verbale (esprime un salto istantaneo ed energico)' },
      { label: 'B', text: 'Funzione di complemento di moto' },
      { label: 'C', text: 'Semplice interiezione esclamativa priva di ruolo sintattico' },
      { label: 'D', text: 'Soggetto della frase' }
    ],
    correctOption: 'A',
    hint: 'Le interiezioni verbali (прыг, скок, хлоп, бах) fungono da predicati verbali che sostituiscono forme verbali di azione repentina (прыгнул).',
    explanation:
      'Risposta esatta: A. Regola p. 146: «Простое глагольное сказуемое может выражаться глагольным междометием со значением энергичного начала действия или мгновенного действия: Он прыг в трамвай; Кот прыг на дерево».',
    bookRuleRef: 'Glazunova §214б, p. 146',
    tags: ['Глагольное междометие', 'Сказуемое', 'Экспрессивность']
  },
  {
    id: 'q-s2-ex226-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-verbal-pred',
    chapterTitle: 'Способы выражения сказуемого и предиката',
    topicName: 'Aggettivi brevi modali: обязан, должен, готов + infinito',
    exerciseSource: 'Sezione 2, Esercizio 226, frase 1 (p. 155, chiave p. 387)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Completa con la corretta struttura: «Вы не должны (...) своей жизнью».',
    sentenceWithBlank: '«Вы не должны (...) своей жизнью».',
    options: [
      { label: 'A', text: 'рисковать (infinito imperfettivo)' },
      { label: 'B', text: 'чтобы вы рисковали' },
      { label: 'C', text: 'рискуете' },
      { label: 'D', text: 'рисковавши' }
    ],
    correctOption: 'A',
    hint: 'Gli aggettivi brevi con significato di dovere, intenzione o capacità (должен, обязан, готов, согласен, намерен) si uniscono direttamente all\'infinito.',
    explanation:
      'Risposta esatta: A (рисковать). Box a p. 155: «В позиции составного глагольного сказуемого краткие прилагательные со значением намерения (должен, обязан, согласен, намерен, готов) употребляются с ИНФИНИТИВОМ: Вы не должны рисковать своей жизнью» (chiave p. 387).',
    bookRuleRef: 'Glazunova §226, Box p. 155',
    tags: ['Краткие прилагательные', 'Составное сказуемое', 'Инфинитив']
  },
  {
    id: 'q-s2-ex232-13',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-nominal-pred',
    chapterTitle: 'Именное сказуемое',
    topicName: 'Copula al passato con il pronome «это» e sostantivo femminile',
    exerciseSource: 'Sezione 2, Esercizio 232, frase 13 (p. 159, chiave p. 388)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale forma della copula «быть» è corretta in:\n«Это (...) случайная ошибка»?',
    sentenceWithBlank: '«Это (...) случайная ошибка».',
    options: [
      { label: 'A', text: 'была (femminile, concordato con ошибка)' },
      { label: 'B', text: 'было (neutro)' },
      { label: 'C', text: 'был (maschile)' },
      { label: 'D', text: 'были (plurale)' }
    ],
    correctOption: 'A',
    hint: 'La copula passata essere concorda con il sostantivo al nominativo che definisce il predicato nominale («ошибка», femminile singolare).',
    explanation:
      'Risposta esatta: A (была). Box p. 159: «В конструкциях с субъектом ЭТО форма глагола-связки определяется существительным в именительном падеже: Это была случайная ошибка; Это был вторник» (chiave p. 388).',
    bookRuleRef: 'Glazunova §232, Box p. 159',
    tags: ['Это была', 'Согласование связки', 'Именное сказуемое']
  },
  {
    id: 'q-s2-ex258-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-quant-agreement',
    chapterTitle: 'Сказуемое при подлежащем с количественным значением',
    topicName: 'Accordo con слова большинство, часть, множество',
    exerciseSource: 'Sezione 2, Esercizio 258, frase а (p. 176)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Qual è l\'accordo ammesso per «Большинство присутствующих (...)»?',
    sentenceWithBlank: '«Большинство присутствующих (...)».',
    options: [
      { label: 'A', text: 'Sia осталось (sing. neutro) sia остались (plurale)' },
      { label: 'B', text: 'Solo осталось, il plurale è errore grammaticale grave' },
      { label: 'C', text: 'Solo остались' },
      { label: 'D', text: 'Solo остался al maschile' }
    ],
    correctOption: 'A',
    hint: 'Quando il soggetto include «большинство, множество, часть» ed è seguito dal verbo, sono ammesse entrambe le forme.',
    explanation:
      'Risposta esatta: A. Box p. 176: «При подлежащем, включающем слова большинство, множество, часть, возможны варианты: если сказуемое следует за подлежащим, оно употребляется в единственном или во множественном числе: Большинство присутствующих осталось / остались. Но если сказуемое стоит ПЕРЕД подлежащим: только единственное число: Осталось большинство присутствующих».',
    bookRuleRef: 'Glazunova §258, Box p. 176',
    tags: ['Большинство', 'Согласование сказуемого', 'Варианты']
  },
  {
    id: 'q-s2-ex270-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-homogeneous',
    chapterTitle: 'Связи между однородными членами',
    topicName: 'Congiunzione correlativa: как... так и',
    exerciseSource: 'Sezione 2, Esercizio 270 (p. 184-185)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Quale congiunzione correlativa unisce due membri omogenei di pari valore informativo e peso qualitativo:\n«От этого лекарства (...) польза, (...) вред»?',
    sentenceWithBlank: '«От этого лекарства (...) польза, (...) вред».',
    options: [
      { label: 'A', text: 'как ... так и' },
      { label: 'B', text: 'не столько ... сколько' },
      { label: 'C', text: 'то ли ... то ли' },
      { label: 'D', text: 'хотя ... но' }
    ],
    correctOption: 'A',
    hint: '«Как... так и» unisce due termini equipollenti considerandoli da due prospettive di pari peso.',
    explanation:
      'Risposta esatta: A (как... так и). Box a p. 185: «Союз КАК... ТАК И соединяет равнозначные однородные члены: От этого лекарства как польза, так и вред. Союзы НЕ СТОЛЬКО... СКОЛЬКО соединяют количественно неравнозначные члены: не столько пользы, сколько вреда» (chiave p. 391).',
    bookRuleRef: 'Glazunova §270, Box p. 185',
    tags: ['Как так и', 'Однородные члены', 'Равнозначность']
  },
  {
    id: 'q-s2-ex284-5',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-isolated-attrib',
    chapterTitle: 'Обособленные члены: определения',
    topicName: 'Attributo isolato postposto',
    exerciseSource: 'Sezione 2, Esercizio 284, frase 5 (p. 196, chiave p. 391)',
    level: 'B2',
    type: 'multiple_choice',
    prompt: 'Come si punteggia l\'attributo participiale postposto:\n«Голос другого человека (...) слегка простуженный (...) показался мне знакомым»?',
    sentenceWithBlank: '«Голос другого человека (...) слегка простуженный (...) показался мне знакомым».',
    options: [
      { label: 'A', text: 'Si isola tra due virgole: «, слегка простуженный, »' },
      { label: 'B', text: 'Nessuna virgola' },
      { label: 'C', text: 'Solo una virgola prima' },
      { label: 'D', text: 'Tra due trattini' }
    ],
    correctOption: 'A',
    hint: 'L\'attributo aggettivale/participiale collocato dopo il sostantivo determinato («голос») si isola con virgole.',
    explanation:
      'Risposta esatta: A. Regola p. 194-196: gli attributi concordati posti dopo il sostantivo a cui si riferiscono si isolano da virgole: «Голос другого человека, слегка простуженный, показался мне знакомым» (chiave p. 391).',
    bookRuleRef: 'Glazunova §284, Box p. 196',
    tags: ['Обособленные определения', 'Пунктуация', 'Запятые']
  },
  {
    id: 'q-s2-ex335-1',
    sectionId: 2,
    sectionTitle: 'Sezione 2: La Frase Semplice (Простое предложение)',
    chapterId: 'sec2-word-order',
    chapterTitle: 'Порядок слов (Актуальное членение)',
    topicName: 'Determinante di tempo e di luogo in apertura di frase',
    exerciseSource: 'Sezione 2, Esercizio 335, frase 1 (p. 242, chiave p. 396)',
    level: 'C1',
    type: 'multiple_choice',
    prompt: 'Quando in apertura di frase sono presenti due determinanti (uno di luogo e uno di tempo), quale si colloca per primo secondo l\'ordine neutrale?',
    sentenceWithBlank: '«(...) выпал первый снег».',
    options: [
      { label: 'A', text: '«В городе в начале октября...» (il determinante col significato più generale e ampio precede quello più specifico)' },
      { label: 'B', text: '«В начале октября в городе...»' },
      { label: 'C', text: 'Entrambi devono stare tassativamente a fine frase' },
      { label: 'D', text: 'Il tempo precede sempre inderogabilmente il luogo' }
    ],
    correctOption: 'A',
    hint: 'Regola a p. 237 e 242: se sono presenti due determinanti, al primo posto si mette il termine con significato più generale e ampio.',
    explanation:
      'Risposta esatta: A. Box a p. 242: «Если в предложении два детерминанта места или два детерминанта времени, на первое место ставится слово с более общим значением: В городе в начале октября выпал первый снег; В центре города на Дворцовой площади установили сцену» (chiave p. 396).',
    bookRuleRef: 'Glazunova §335, Box p. 242',
    tags: ['Детерминанты', 'Порядок слов', 'Общее значение']
  }
];

