import { GrammarRule } from '../types';

export const GRAMMAR_RULES: GrammarRule[] = [
  // SEZIONE 1
  {
    id: 'rule-concordance',
    sectionId: 1,
    sectionName: 'Sezione 1: Il Sintagma',
    category: 'Согласование (Concordanza)',
    title: 'Concordanza di aggettivi, pronomi determinativi e nomi geografici',
    russianHeading: 'Подчинительная связь: согласование (с. 7–11)',
    ruleExplanationIt:
      'Nella concordanza, l\'elemento dipendente concorda con il sostantivo in genere, numero e caso. Con i pronomi determinativi (этот, всякий, весь, наш) la desinenza segue quella degli aggettivi. Particolare attenzione va posta ai nomi geografici preceduti da un nome generico (город, река, деревня): di norma il toponimo si declina concordando (в городе Москве), MA se si tratta di nomi propri tra virgolette o nomi di stazioni/aeroporti, rimangono invariati al nominativo (на станции «Горьковская», из аэропорта Пулково). Se il nome geografico precede il sostantivo generico, non varia (в Иван-городе). Eccezione: composti con река (на Москва-реке).',
    warningNote:
      '! Исключения составляют имена собственные в кавычках (станция «Горьковская», аэропорт «Шереметьево») и случаи препозиции (в Сапун-гору, к Ильмень-озеру). Со словом река: на Москва-реке, Волгой-рекой.',
    bookPage: 11,
    examples: [
      { ru: 'В городе Москве проживает около девяти миллионов жителей.', it: 'Nella città di Mosca vivono circa nove milioni di abitanti.', analysis: 'Il toponimo concorda: городе Москве' },
      { ru: 'На станции «Горьковская» поезд прибудет через полчаса.', it: 'Alla stazione "Gor\'kovskaja" il treno arriverà tra mezz\'ora.', analysis: 'Invariato al nominativo tra virgolette dopo "станция"' },
      { ru: 'Этого решения я от вас никак не ожидал.', it: 'Questa decisione non me la sarei mai aspettata da voi.', analysis: 'Genitivo retto da negazione con verbo ожидать' }
    ]
  },
  {
    id: 'rule-verbal-gov',
    sectionId: 1,
    sectionName: 'Sezione 1: Il Sintagma',
    category: 'Управление без предлогов (Reggenza verbale)',
    title: 'Reggenza dei verbi senza preposizioni (Genitivo, Dativo, Accusativo, Strumentale)',
    russianHeading: 'Управление глаголов (с. 12–16)',
    ruleExplanationIt:
      'I verbi possono reggere un sostantivo direttamente senza preposizione:\n• Genitivo: verbi di desiderio/attesa di entità astratte (хотеть счастья, ждать решения), privazione o timore (бояться темноты, остерегаться простуды, жаждать крови, не заслуживать уважения).\n• Dativo: verbi di sentimento verso persone (сочувствовать другу, завидовать успеху, доверять людям, вредить здоровью).\n• Accusativo: oggetto diretto concreto (читать книгу, учить слова).\n• Strumentale: gestione, controllo o vanto (руководить людьми, гордиться знаниями, отличаться умом/храбростью, жертвовать жизнью).',
    warningNote:
      '! Хотеть, просить, ждать con concetti astratti reggono il Genitivo (хотеть счастья), con concetti concreti reggono l\'Accusativo (хотеть конфету).',
    bookPage: 12,
    examples: [
      { ru: 'Он всегда отличался храбростью.', it: 'Si distingueva sempre per il coraggio.', analysis: 'Отличаться + Strumentale (чем)' },
      { ru: 'В моем положении надо остерегаться простуды.', it: 'Nella mia situazione bisogna stare attenti ai raffreddori.', analysis: 'Остерегаться + Genitivo (чего)' },
      { ru: 'Завидовать чужому успеху нельзя.', it: 'Non si deve invidiare il successo altrui.', analysis: 'Завидовать + Dativo (чему/кому)' }
    ]
  },
  {
    id: 'rule-nominal-gov',
    sectionId: 1,
    sectionName: 'Sezione 1: Il Sintagma',
    category: 'Управление существительных (Reggenza nominale)',
    title: 'Reggenza dei sostantivi deverbali e sostantivi astratti',
    russianHeading: 'Управление существительных (с. 16–22)',
    ruleExplanationIt:
      'I sostantivi derivati da verbi spesso conservano la reggenza del verbo (достигать вершины -> достижение вершины; сочувствовать другу -> сочувствие другу; руководить людьми -> руководство людьми). Quando l\'oggetto di un verbo transitivo è all\'accusativo, il sostantivo deverbale regge il Genitivo (читать книгу -> чтение книги; изучать язык -> изучение языка). I sostantivi причина, возможность, необходимость in contesti di esistenza usano per lo più le costruzioni preposizionali per (для/в): нет причин для беспокойства, необходимость в объяснении.',
    warningNote:
      '! Il sostantivo non ammette la reggenza all\'Accusativo senza preposizione: si dice sempre "чтение романа" (Genitivo), mai "*чтение роман".',
    bookPage: 16,
    examples: [
      { ru: 'Изучение русского языка требует усилий.', it: 'Lo studio della lingua russa richiede impegno.', analysis: 'Изучать язык (Acc.) -> Изучение языка (Gen.)' },
      { ru: 'Нет причин для беспокойства.', it: 'Non ci sono motivi di preoccupazione.', analysis: 'Причина + для + Genitivo in frasi negative/esistenziali' }
    ]
  },
  {
    id: 'rule-double-gov',
    sectionId: 1,
    sectionName: 'Sezione 1: Il Sintagma',
    category: 'Двойное управление (Doppia reggenza)',
    title: 'Verbi con duplice reggenza casuale',
    russianHeading: 'Двойное управление (с. 22–24)',
    ruleExplanationIt:
      'Molti verbi russi reggono contemporaneamente due complementi distinti:\n1. Accusativo + Dativo: dare/dire/consacrare qc a qu (дать студенту книгу; посвятить доклад творчеству Пушкина).\n2. Accusativo + Strumentale: nominare/considerare/premiare qu con qc (считать врача лучшим специалистом; наградить победителя медалью; накормить ребёнка кашей; пилить дерево пилой).\n3. Genitivo + Strumentale: добиваться/достичь чего чем (добиться успеха упорной работой).\n4. Dativo + Strumentale: надоедать кому чем (надоедать окружающим жалобами).',
    warningNote:
      '! L\'ordine delle parole è flessibile, ma alla fine si colloca l\'informazione nuova (il rema): "дать книгу студенту" vs "дать студенту книгу".',
    bookPage: 22,
    examples: [
      { ru: 'Его назначили старостой группы.', it: 'Lo hanno nominato capoclasse.', analysis: 'Назначить кого (Acc.) кем (Strumentale)' },
      { ru: 'Удивить родителей своим решением.', it: 'Sorprendere i genitori con la propria decisione.', analysis: 'Удивить кого (Acc.) чем (Strumentale)' }
    ]
  },
  {
    id: 'rule-adj-gov',
    sectionId: 1,
    sectionName: 'Sezione 1: Il Sintagma',
    category: 'Управление прилагательных (Reggenza aggettivi)',
    title: 'Reggenza di aggettivi e participi con e senza preposizioni',
    russianHeading: 'Управление прилагательных и причастий (с. 24–28)',
    ruleExplanationIt:
      '• Aggettivo + Genitivo: полный любви (astratto), полон воды (concreto); достоин уважения.\n• Aggettivo + Dativo senza preposizione: верный идее, понятный слушателям, полезный детям, чуждый обществу, предан науке. Forma breve: достоин уважения, верен долгу.\n• Aggettivo + Strumentale: довольный успехами, богатый полезными ископаемыми, больной ангиной.\n• Dativo vs per (для): se la sfera di validità è circoscritta, si usa per (для + Gen): "трудный для ребёнка" vs "верный другу". Per impressione soggettiva: "необходимый мне" oppure "необходимый для меня".',
    warningNote:
      '! Полный: con concetti astratti prevale il Genitivo (полный любви), con concetti concreti lo Strumentale (полный водой / грибами).',
    bookPage: 24,
    examples: [
      { ru: 'Этот поступок достоин всяческого уважения.', it: 'Questo gesto è degno di ogni rispetto.', analysis: 'Достоин + Genitivo' },
      { ru: 'Препарат полезен больным / полезен для больных.', it: 'Il farmaco è utile ai malati / per i malati.', analysis: 'Dativo di destinazione o для + Genitivo' }
    ]
  },
  {
    id: 'rule-quant-gov',
    sectionId: 1,
    sectionName: 'Sezione 1: Il Sintagma',
    category: 'Числительные (Reggenza dei numerali)',
    title: 'Reggenza dei numerali quantitativi e concordanza dell\'aggettivo',
    russianHeading: 'Управление количественных числительных (с. 28–30)',
    ruleExplanationIt:
      '• ДВА, ТРИ, ЧЕТЫРЕ all\'indicativo e accusativo inanimato reggono il sostantivo al Genitivo singolare (два часа, три страницы).\n• ПЯТЬ, ШЕСТЬ, ... ДВАДЦАТЬ reggono il Genitivo plurale (пять часов, двадцать рублей).\n• Regola per gli aggettivi con два, три, четыре: con sostantivi maschili e neutri l\'aggettivo va al GENITIVO PLURALE (два больших дома, три белых здания); con sostantivi femminili l\'aggettivo va preferibilmente al NOMINATIVO PLURALE (две большие берёзы, три новые книги). Sostantivi sostantivati: две столовые (femm.), два прохожих (masch.).',
    warningNote:
      '! Maschile/Neutro: два высоких дерева (Gen. plur.). Femminile: две высокие сосны (Nom. plur.)!',
    bookPage: 30,
    examples: [
      { ru: 'Впереди нас бежали две большие собаки.', it: 'Davanti a noi correvano due grossi cani.', analysis: 'Femminile собака -> две большие (Nom. pl.) собаки (Gen. sing.)' },
      { ru: 'Я купил два сливочных мороженых.', it: 'Ho comprato due gelati alla panna.', analysis: 'Neutro мороженое -> два сливочных мороженых (Gen. pl.)' }
    ]
  },
  {
    id: 'rule-prep-place',
    sectionId: 1,
    sectionName: 'Sezione 1: Il Sintagma',
    category: 'Предлоги места (Preposizioni di luogo)',
    title: 'Preposizioni di luogo e vicinanza: у vs около vs рядом с; в vs на',
    russianHeading: 'Предлоги со значением места и направления (с. 30–39)',
    ruleExplanationIt:
      '• У + Genitivo indica vicinanza immediata, spesso contatto o prossimità a un punto di riferimento specifico (сидеть у окна, стоять у стола, жить у моря).\n• ОКОЛО + Genitivo indica prossimità spaziale generica nell\'area circostante ("nei pressi di", "intorno a": бегать около дома, около музея).\n• РЯДОМ С + Strumentale richiede preferibilmente oggetti della stessa tipologia spaziale (дом рядом с магазином - edifici; девушка рядом с молодым человеком - persone animate) oppure oggetti coordinati sulla medesima superficie (на столике рядом с телефоном).\n• Con esseri animati (persone): "находиться" usa У (быть у врача, у родителей); "остановиться" (alloggiare) ammette anche около.',
    warningNote:
      '! Рядом с + тв. п. implica elementi omologhi (palazzo vicino a palazzo, persona vicino a persona) o unificati da criterio locale.',
    bookPage: 33,
    examples: [
      { ru: 'Не стойте у двери, проходите!', it: 'Non sostate vicino alla porta, entrate!', analysis: 'У двери: vicinanza immediata/contatto con l\'uscio' },
      { ru: 'Мы сняли дачу рядом с озером.', it: 'Abbiamo preso una dacia accanto al lago.', analysis: 'Рядом с + Strumentale' }
    ]
  },
  {
    id: 'rule-prep-time',
    sectionId: 1,
    sectionName: 'Sezione 1: Il Sintagma',
    category: 'Предлоги времени (Preposizioni di tempo)',
    title: 'Preposizioni temporali: до vs перед vs к; во время vs на; под; накануне',
    russianHeading: 'Предлоги со значением времени (с. 39–48)',
    ruleExplanationIt:
      '• ДО indica il limite temporale estremo entro cui o prima di cui avviene l\'azione (приехать до обеда, дожить до ста лет).\n• ПЕРЕД indica l\'intervallo immediatamente precedente a un evento (перед сном, перед экзаменом). Non si usa con numerali ed unità di misura assolute (si dice до субботы, non перед субботой; ma перед выходным днём).\n• К indica avvicinamento a un termine temporale (к вечеру, к пяти часам) o adempimento orientato a un evento (к обеду приготовить пирог).\n• НАКАНУНЕ significa "il giorno prima" e si combina con sostantivi che indicano giorni o scadenze solenni (накануне свадьбы, накануне экзаменов).\n• ПОД + Accusativo indica approssimazione poetica/stilistica ristretta a: под утро, под вечер, под Новый год.\n• ВО ВРЕМЯ + Genitivo: azione parallela a un processo (во время войны, во время лекции).\n• НА + Accusativo con eventi: pianificazione anticipata per una certa data (планы на завтра, билеты на пятницу).',
    warningNote:
      '! Перед указывает на событие и не сочетается с единицами времени (до января, до субботы, перед майскими праздниками). Под сочетается только с узким кругом: вечер, утро, Новый год.',
    bookPage: 40,
    examples: [
      { ru: 'К вечеру тучи рассеялись и похолодало.', it: 'Verso sera le nuvole si sono diradate e ha rinfrescato.', analysis: 'К вечеру: approssimazione temporale verso la sera' },
      { ru: 'Накануне экзаменов студенты мало спали.', it: 'Alla vigilia degli esami gli studenti dormivano poco.', analysis: 'Накануне = il giorno prima' },
      { ru: 'Во время грозы нельзя прятаться под деревьями.', it: 'Durante il temporale non ci si deve riparare sotto gli alberi.', analysis: 'Во время + Genitivo di evento' }
    ]
  },
  {
    id: 'rule-prep-cause',
    sectionId: 1,
    sectionName: 'Sezione 1: Il Sintagma',
    category: 'Предлоги причины (Preposizioni di causa)',
    title: 'Preposizioni di causa: от vs из vs из-за vs по vs благодаря vs ради',
    russianHeading: 'Предлоги со значением причины (с. 48–53)',
    ruleExplanationIt:
      '• ОТ + Genitivo: causa fisiologica immediata o riflesso involontario del corpo (дрожать от холода, побледнеть от страха, умереть от болезни, кричать от боли).\n• ИЗ + Genitivo: movente psicologico interno o sentimento rivolto verso altri (помочь из сострадания, промолчать из вежливости, сделать из зависти, из любопытства).\n• ИЗ-ЗА + Genitivo: causa esterna a carattere NEGATIVO o di ostacolo (опоздать из-за пробок, проиграть из-за предательства, отменить из-за дождя).\n• БЛАГОДАРЯ + Dativo: causa positiva favorevole ("grazie a": выздороветь благодаря заботе, успеть благодаря другу).\n• ПО + Dativo: causa dovuta a imperizia, involontarietà o errore soggettivo (сделать по ошибке, по невнимательности, по глупости, пропустить по болезни).\n• РАДИ + Genitivo: fine benefico superiore per cui si compie un sacrificio (ради детей, ради справедливости).',
    warningNote:
      '! ОТ: reazione corporea/involontaria (глаза раскрылись от любопытства). ИЗ: movente intenzionale dell\'azione (прийти из любопытства). ИЗ-ЗА: impedimento negativo (поссорились из-за ерунды).',
    bookPage: 50,
    examples: [
      { ru: 'Он побледнел от страха.', it: 'Impallidì dalla paura.', analysis: 'ОТ: reazione fisiologica immediata' },
      { ru: 'Она сделала это из вежливости.', it: 'Lo ha fatto per cortesia.', analysis: 'ИЗ: motivazione morale cosciente' },
      { ru: 'Поезд задержался из-за метели.', it: 'Il treno ha ritardato a causa della tormenta.', analysis: 'ИЗ-ЗА: causa esterna con esito negativo' }
    ]
  },
  {
    id: 'rule-adjoining',
    sectionId: 1,
    sectionName: 'Sezione 1: Il Sintagma',
    category: 'Примыкание (Giustapposizione)',
    title: 'Giustapposizione: infinito con verbi di fase, modali, congiunzione чтобы',
    russianHeading: 'Подчинительная связь: примыкание (с. 83–102)',
    ruleExplanationIt:
      'Nel legame di giustapposizione (примыкание) la parola dipendente non varia morfologicamente (infiniti, avverbi, gerundi):\n1. Verbi di fase (начинать, продолжать, переставать) si uniscono ESCLUSIVAMENTE all\'infinito imperfettivo (перестать курить, бросить курить).\n2. Con verbi di movimento, l\'infinito perfettivo indica il fine immediato (пошёл проверить / пошёл, чтобы проверить).\n3. La congiunzione ЧТОБЫ necessaria se l\'infinito introduce un secondo attore o una finalità complessa non immediata (прийти, чтобы помочь).\n4. Avverbi di grado: ОЧЕНЬ si usa con aggettivi qualitativi (очень умный); СОВЕРШЕННО con concetti di grado assoluto o prefisso bez-/ne- (совершенно бесплатно, совершенно верно); СОВСЕМ per aspetti esteriori tangibili (совсем старый, совсем темно); СЛИШКОМ esprime un eccesso negativo (слишком горячий, слишком поздно).',
    warningNote:
      '! Фазовые глаголы (начать, стать, кончить, перестать) НЕ сочетаются с совершенным видом: solo несовершенный вид! Verbi potere al futuro: solo "смогу" (forma perfettiva), non esiste futuro analitico di мочь.',
    bookPage: 85,
    examples: [
      { ru: 'Он перестал курить три года назад.', it: 'Ha smesso di fumare tre anni fa.', analysis: 'Перестать + infinito imperfettivo obbligatorio' },
      { ru: 'Я совершенно не согласен с вами.', it: 'Non sono affatto d\'accordo con voi.', analysis: 'Совершенно: grado assoluto intellettuale' }
    ]
  },

  // SEZIONE 2
  {
    id: 'rule-subject-pred',
    sectionId: 2,
    sectionName: 'Sezione 2: La Frase Semplice',
    category: 'Подлежащее и субъект (Soggetto)',
    title: 'Modi di espressione del soggetto e soggetto logico al Dativo',
    russianHeading: 'Способы выражения подлежащего и субъекта (с. 127–145)',
    ruleExplanationIt:
      'In russo il soggetto grammaticale è al Nominativo, ma il soggetto logico (esperiente di uno stato fisico, psichico o di necessità) è spessissimo espresso al DATIVO:\n• Stati fisici/ambientali: Мне холодно, Детям весело, Больному лучше.\n• Modalità con infinito: Нам надо уходить, Тебе вставать в семь утра (valore di inevitabilità/obbligo futuro programmato).\n• Frasi con non c\'è/non c\'era: У меня нет времени (Genitivo di negazione).\n• Strutture con НЕКОГО / НЕЧЕГО: Мне некому верить, Нам некуда спешить (Dativo del soggetto logico + pronome negativo prefisso не- + infinito).',
    warningNote:
      '! Differenza tra "Никому нельзя верить" (predicato con нельзя) e "Некому верить" (predicato all\'infinito con pronome negativo accentato né-).',
    bookPage: 129,
    examples: [
      { ru: 'Ногам было очень холодно.', it: 'I piedi erano gelati.', analysis: 'Soggetto logico al Dativo: ногам' },
      { ru: 'Ему завтра вставать рано утром.', it: 'Domani deve alzarsi presto la mattina.', analysis: 'Costrutto infinitivo con soggetto al Dativo che esprime destino/programma' }
    ]
  },
  {
    id: 'rule-nominal-pred',
    sectionId: 2,
    sectionName: 'Sezione 2: La Frase Semplice',
    category: 'Сказуемое (Predicato nominale)',
    title: 'Predicato nominale con copula быть: Nominativo vs Strumentale',
    russianHeading: 'Именное сказуемое (с. 158–166)',
    ruleExplanationIt:
      'Nel predicato nominale al passato con la copula БЫТЬ la parte nominale può stare al Nominativo o allo Strumentale:\n• Sostantivo: lo Strumentale indica uno status temporaneo, una professione o una trasformazione (Он был врачом; Он стал героем). Il Nominativo si usa per qualità permanenti o stile colloquiale diretto (Он был хороший человек).\n• Aggettivi: al passato con БЫТЬ, l\'aggettivo relativo o oggettivo permanente sta preferibilmente al Nominativo (Дом был кирпичный, Погода была отличная), mentre l\'aggettivo che descrive percezione soggettiva, stato temporaneo o limitato nel tempo/spazio sta allo Strumentale (Решение было правильным, Он был спокойным). Con verbi copulativi semipieni (казаться, являться, становиться) si usa SEMPRE lo Strumentale (казался умным, стал известным).',
    warningNote:
      '! С глаголами казаться, стать, являться, оказаться sostantivo e aggettivo richiedono obbligatoriamente lo Strumentale!',
    bookPage: 165,
    examples: [
      { ru: 'В молодости он был бедным студентом.', it: 'In gioventù era un povero studente.', analysis: 'Strumentale di stato temporaneo limitato nel tempo' },
      { ru: 'Этот ответ показался мне странным.', it: 'Questa risposta mi è parsa strana.', analysis: 'Показаться + Strumentale obbligatorio' }
    ]
  },
  {
    id: 'rule-quant-agreement',
    sectionId: 2,
    sectionName: 'Sezione 2: La Frase Semplice',
    category: 'Согласование сказуемого (Accordo quantitativo)',
    title: 'Accordo del predicato con soggetti quantitativi e collettivi',
    russianHeading: 'Сказуемое при подлежащем с количественным значением (с. 171–177)',
    ruleExplanationIt:
      'Quando il soggetto contiene un numerale quantitativo o parole come большинство, множество, часть:\n1. Singolare neutro (прошло десять минут; большинство присутствующих проголосовало): focalizza sulla totalità quantitativa astratta come misura indistinta, oppure se il verbo precede il soggetto nel tempo.\n2. Plurale (прошли десять минут; большинство студентов сдали): focalizza sui singoli individui o agenti attivi specifici, specialmente con verbi d\'azione animata o in presenza di parole come все, эти (Все три человека остались).\n3. Con numerali collettivi (двое, трое): se c\'è pronome genitivo in testa (Нас трое) il verbo va al neutro singolare (Нас трое осталось); se il soggetto è autonomo può concordare al plurale (Трое друзей уехали).',
    warningNote:
      '! Se il verbo precede un\'espressione di tempo, di norma è al singolare: "Прошло десять минут". Se il soggetto ha "все", "эти" -> sempre plurale: "Все десять минут прошли незаметно".',
    bookPage: 173,
    examples: [
      { ru: 'Большинство студентов успешно сдали сессию.', it: 'La maggior parte degli studenti ha superato la sessione.', analysis: 'Accordo al plurale per valore attivo/animato' },
      { ru: 'Прошло около двадцати лет.', it: 'Sono trascorsi circa vent\'anni.', analysis: 'Singolare neutro con preposizione около + numerale' }
    ]
  },
  {
    id: 'rule-homogeneous',
    sectionId: 2,
    sectionName: 'Sezione 2: La Frase Semplice',
    category: 'Однородные члены (Membri omogenei)',
    title: 'Congiunzioni coordinanti tra membri omogenei: и vs но; не только... но и; то... то',
    russianHeading: 'Связи между однородными членами (с. 177–194)',
    ruleExplanationIt:
      'I membri omogenei sono uniti da diverse categorie di congiunzioni:\n• Connettive: И, ДА (colloquiale), И... И (ripetuta enfatica), НИ... НИ (con negazione), НЕ ТОЛЬКО... НО И (gradazione ascendente di rilievo).\n• Correlative di restrizione: НЕ СТОЛЬКО... СКОЛЬКО ("non tanto... quanto"), НЕ ТО ЧТО... А СКОРЕС ("non che... ma piuttosto").\n• Avversative: А (differenziazione/contrapposizione netta senza inclusione), НО (contrasto inatteso), ОДНАКО (tono formale), ЗАТО (compensazione positiva: недорогой, зато вкусный).\n• Disgiuntive: ИЛИ, ЛИБО (scelta esclusiva reciproca), ТО... ТО (alternanza nel tempo), ТО ЛИ... ТО ЛИ (incertezza del parlante).',
    warningNote:
      '! Con membri omogenei antonimici o con predicato negativo si usa la correlativa "ни... ни": "В этом нет ни вреда, ни пользы". Tra definizioni eterogenee non si mette virgola né congiunzione.',
    bookPage: 178,
    examples: [
      { ru: 'Обед был недорогой, зато очень вкусный.', it: 'Il pranzo era economico, ma in compenso molto gustoso.', analysis: 'Зато: compensazione positiva di un limite' },
      { ru: 'Он не столько рассердился, сколько удивился.', it: 'Non si è tanto arrabbiato, quanto meravigliato.', analysis: 'Не столько... сколько' }
    ]
  },
  {
    id: 'rule-isolated-attrib',
    sectionId: 2,
    sectionName: 'Sezione 2: La Frase Semplice',
    category: 'Обособленные члены (Participi e attributi isolati)',
    title: 'Attributi isolati e il costrutto participiale (Причастный оборот)',
    russianHeading: 'Обособленные определения (с. 194–204)',
    ruleExplanationIt:
      'Il costrutto participiale (причастный оборот) è isolato da virgole quando:\n1. Si trova DOPO il sostantivo a cui si riferisce: «Книга, прочитанная мной, лежала на столе». Se precede il sostantivo, non si isola: «Прочитанная мной книга лежала на столе».\n2. Si riferisce a un pronome personale (я, ты, он, мы, вы, они): è SEMPRE isolato da virgole in QUALSIASI posizione: «Уставший после работы, он сразу уснул».\n3. Se ha valore causale o concessivo aggiuntivo anche prima del sostantivo.\n4. Attenzione al participio presente attivo (-ущ/-ющ, -ащ/-ящ) formato solo da verbi imperfettivi, e participio passato attivo (-вш/-ш).',
    warningNote:
      '! Se l\'attributo si riferisce a un pronome personale, è sempre separato da virgola, sia che preceda sia che segua!',
    bookPage: 198,
    examples: [
      { ru: 'Статья, опубликованная в журнале, вызвала интерес.', it: 'L\'articolo, pubblicato sulla rivista, ha suscitato interesse.', analysis: 'Isolato perché postposto al sostantivo' },
      { ru: 'Разбуженные на рассвете, мы двинулись в путь.', it: 'Svegliati all\'alba, ci siamo messi in cammino.', analysis: 'Isolato perché riferito al pronome personale мы' }
    ]
  },
  {
    id: 'rule-isolated-adverb',
    sectionId: 2,
    sectionName: 'Sezione 2: La Frase Semplice',
    category: 'Деепричастный оборот (Gerundio)',
    title: 'Il costrutto gerundiale (Деепричастный оборот) e la regola del soggetto unico',
    russianHeading: 'Обособленные обстоятельства (с. 204–210)',
    ruleExplanationIt:
      'Il gerundio (деепричастие) esprime un\'azione secondaria e richiede inderogabilmente che il suo soggetto sia ESATTAMENTE LO STESSO del predicato principale!\n• Errore classico grave: «*Подъезжая к станции, у меня слетела шляпа» (errata, perché il cappello non stava guidando verso la stazione!). Corretta: «Когда я подъезжал к станции, у меня слетела шляпа» oppure «Подъезжая к станции, я потерял шляпу».\n• Non si isolano gerundi che hanno valore di semplice avverbio di modo uniti strettamente al verbo (сидеть молча, читать лёжа, бежать сломя голову).\n• Gerundio imperfettivo (-а/-я): simultaneità. Gerundio perfettivo (-в, -вши, -ши): anteriorità.',
    warningNote:
      '! Действия сказуемого и деепричастия ВСЕГДА относятся к одному и тому же лицу! In frasi impersonali il gerundio è vietato, tranne con infiniti di norma generale (надо, следует).',
    bookPage: 209,
    examples: [
      { ru: 'Вернувшись домой, он сразу сел за работу.', it: 'Tornato a casa, si è subito messo al lavoro.', analysis: 'Anteriorità (perfettivo -в) con stesso soggetto (он)' },
      { ru: 'Не зная точного адреса, мы долго блуждали по городу.', it: 'Non conoscendo l\'indirizzo esatto, abbiamo vagato a lungo.', analysis: 'Simultaneità (imperfettivo -я) con valore causale' }
    ]
  },
  {
    id: 'rule-one-member',
    sectionId: 2,
    sectionName: 'Sezione 2: La Frase Semplice',
    category: 'Односоставные предложения (Frasi a un membro)',
    title: 'Frasi monovarianti: definite, indefinite, generalizzanti, impersonali, nominali',
    russianHeading: 'Односоставные предложения (с. 220–235)',
    ruleExplanationIt:
      'Nelle frasi a un solo membro (односоставные) è presente un solo elemento principale:\n1. Определенно-личные: verbo alla 1ª o 2ª persona singolare/plurale (Люблю грозу в начале мая; Пойдём в кино).\n2. Неопределенно-личные: verbo alla 3ª persona plurale (presente/futuro) o plurale al passato; l\'agente è indefinito o non rilevante (В дверь стучат; Нам сообщили об этом).\n3. Обобщенно-личные: valore proverbiale o di massima valida per chiunque, solitamente 2ª singolare (Без труда не вытащишь и рыбку из пруда).\n4. Безличные: senza soggetto né agente possibile (Смеркается; Мне не спится; В комнате тихо).\n5. Номинативные: sostantivo al nominativo che constata l\'esistenza (Ночь. Улица. Фонарь).',
    warningNote:
      '! Se il verbo è al passato singolare maschile o femminile senza pronome espresso (es. "Посмотрел на часы и вышел"), la frase è двусоставная неполная (omissione del pronome), NON определенно-личная, perché il passato non marca la persona!',
    bookPage: 221,
    examples: [
      { ru: 'В коридоре громко разговаривают.', it: 'Nel corridoio parlano ad alta voce.', analysis: 'Неопределенно-личное: 3ª plurale senza soggetto espresso' },
      { ru: 'Мне сегодня не работается.', it: 'Oggi non riesco a lavorare.', analysis: 'Безличное con verbo riflessivo e soggetto al Dativo' }
    ]
  },
  {
    id: 'rule-word-order',
    sectionId: 2,
    sectionName: 'Sezione 2: La Frase Semplice',
    category: 'Актуальное членение (Tema e Rema)',
    title: 'Ordine delle parole e articolazione attuale dell\'enunciato',
    russianHeading: 'Порядок слов: Актуальное членение (с. 235–250)',
    ruleExplanationIt:
      'In russo l\'ordine delle parole è sintatticamente libero ma vincolato alla struttura comunicativa:\n• TEMA (Тема): informazione già nota, data o presupposta dal contesto. Si colloca all\'INIZIO della frase neutrale.\n• REMA (Рема): l\'informazione nuova, essenziale, che risponde alla domanda implicita dell\'ascoltatore. Si colloca alla FINE della frase neutrale e riceve l\'accento logico.\n• Confronto: «Брат купил книгу» (Cosa ha fatto il fratello? Ha comprato il libro - rema: купил книгу) vs «Книгу купил брат» (Chi ha comprato il libro? Il fratello - rema: брат).\n• I determinanti di luogo e tempo aprono solitamente l\'enunciato descrittivo: «Вчера в центре города открылась новая выставка».',
    warningNote:
      '! Il rema (informazione nuova) si trova all\'estrema destra in un registro neutro, mentre nello stile enfatico/espressivo può essere anticipato all\'inizio.',
    bookPage: 236,
    examples: [
      { ru: 'В саду пел соловей.', it: 'Nel giardino cantava un usignolo.', analysis: 'Tema: в саду; Rema: соловей (appare qualcosa di nuovo)' },
      { ru: 'Соловей пел в саду.', it: 'L\'usignolo cantava nel giardino.', analysis: 'Tema: l\'usignolo di cui si parla; Rema: nel giardino (dove cantava)' }
    ]
  },

  // SEZIONE 3
  {
    id: 'rule-compound-coord',
    sectionId: 3,
    sectionName: 'Sezione 3: La Frase Complessa',
    category: 'Сложносочинённые предложения (Coordinate)',
    title: 'Congiunzioni coordinate: а vs но; однако vs зато; тоже vs также',
    russianHeading: 'Сложносочинённые предложения (с. 264–290)',
    ruleExplanationIt:
      '• А vs НО: НО esprime contraddizione o violazione di un\'aspettativa logica (Шёл дождь, но мы пошли гулять); А esprime pura differenza o parallelo tra due situazioni autonome (Брат читает, а сестра пишет) oppure una correzione dopo negazione (Он приехал не в субботу, а в воскресенье).\n• ОДНАКО ha valore neutrale/negativo simile a но, mentre ЗАТО introduce un risvolto positivo che riscatta il negativo precedente (Устали, зато закончили проект).\n• ТОЖЕ vs ТАКЖЕ: ТОЖЕ si usa per identità di azione/predicato tra soggetti diversi (Я рад, и он тоже рад); ТАКЖЕ aggiunge una nuova azione dello stesso soggetto o un fatto supplementare (Он преподаёт в университете, а также пишет научные статьи).',
    warningNote:
      '! Не путать союзы ТОЖЕ/ТАКЖЕ (scritti uniti) con pronome + particella: ТО ЖЕ САМОЕ, ТАК ЖЕ КАК (scritti staccati)!',
    bookPage: 285,
    examples: [
      { ru: 'Он устал, но продолжал идти.', it: 'Era stanco, ma continuava a camminare.', analysis: 'НО: azione in contrasto con la stanchezza' },
      { ru: 'Фильм был длинный, зато очень интересный.', it: 'Il film era lungo, ma in compenso molto interessante.', analysis: 'ЗАТО: valore compensativo positivo' }
    ]
  },
  {
    id: 'rule-sub-explicative',
    sectionId: 3,
    sectionName: 'Sezione 3: La Frase Complessa',
    category: 'Изъяснительные придаточные (Subordinate esplicative)',
    title: 'Subordinate esplicative: что vs как vs будто vs ли; uso del correlativo то',
    russianHeading: 'Подчинительная связь с изъяснительной частью (с. 291–308)',
    ruleExplanationIt:
      'Le subordinate oggettive/esplicative completano verbi di pensiero, parola, percezione o volontà:\n• ЧТО: enuncia un fatto reale accertato (Я знаю, что он пришёл).\n• КАК: descrive la percezione visiva o uditiva di un processo in svolgimento (Я видел, как гасла полоска зари; Слышал, как он пел).\n• БУДТО / КАК БУДТО: indicano supposizione, incertezza o informazione falsa/immaginata (Ему казалось, будто кто-то стучит; Он говорит так, как будто всё знает).\n• ЛИ: trasforma una domanda diretta senza pronome interrogativo in interrogativa indiretta (Я не знаю, придёт ли он; Он спросил, написали ли мы статью). Si posiziona subito dopo la parola focalizzata.\n• Correlativo ТО (в том, о том, тому): obbligatorio quando il verbo o sostantivo principale regge un caso preposizionale che non può essere omesso (сомневаться в том, что; настаивать на том, чтобы; радоваться тому, что).',
    warningNote:
      '! La particella ЛИ nelle interrogative indirette non ammette la congiunzione ЕСЛИ: non si dice "*Я не знаю, если он придёт", bensì "Я не знаю, придёт ли он"!',
    bookPage: 295,
    examples: [
      { ru: 'Я видел, как поезд медленно отходил от перрона.', it: 'Ho visto il treno che si allontanava lentamente dal binario.', analysis: 'КАК: percezione visiva del processo' },
      { ru: 'Он спросил, готовы ли мы к экзамену.', it: 'Ha chiesto se fossimo pronti per l\'esame.', analysis: 'ЛИ postposta all\'elemento interrogato' },
      { ru: 'Мы не сомневались в том, что он победит.', it: 'Non dubitavamo del fatto che avrebbe vinto.', analysis: 'Correlativo "в том" obbligatorio con сомневаться' }
    ]
  },
  {
    id: 'rule-sub-relative',
    sectionId: 3,
    sectionName: 'Sezione 3: La Frase Complessa',
    category: 'Определительные придаточные (Subordinate relative)',
    title: 'Subordinate relative: который vs какой vs чей; dove e quando',
    russianHeading: 'Подчинительная связь с определительной частью (с. 308–316)',
    ruleExplanationIt:
      '• КОТОРЫЙ: sostituisce il sostantivo antecedente; assume il genere e il numero dell\'antecedente, mentre il CASO dipende unicamente dal suo ruolo sintattico nella subordinata (Дом, в котором я живу; Студент, которому я помог).\n• КАКОЙ: descrive la qualità, natura o somiglianza ("tale che", "del tipo che": Наступила жара, какая редко бывает в этих местах).\n• ЧЕЙ: pronome possessivo relativo, concorda in genere, numero e caso con il sostantivo DIPENDENTE che si trova nella subordinata, non con l\'antecedente (Человек, чьё имя известно всем; Писатель, чьими книгами мы восхищаемся).\n• ГДЕ, КУДА, ОТКУДА: usati quando l\'antecedente è un sostantivo con significato spaziale (город, где я родился; комната, куда мы вошли).',
    warningNote:
      '! ЧЕЙ concorda con il sostantivo che lo segue nella proposizione subordinata: "писатель (m.), чья книга (f.) стала бестселлером"!',
    bookPage: 311,
    examples: [
      { ru: 'Учёный, чьи труды получили всемирное признание.', it: 'Lo scienziato le cui opere hanno ricevuto riconoscimento mondiale.', analysis: 'Чьи concorda con труды (plur. nom.)' },
      { ru: 'Это тот город, в котором я провёл детство.', it: 'Questa è la città in cui ho trascorso l\'infanzia.', analysis: 'Который al preposizionale con в' }
    ]
  },
  {
    id: 'rule-sub-cause-res',
    sectionId: 3,
    sectionName: 'Sezione 3: La Frase Complessa',
    category: 'Причина и следствие (Causa e Conseguenza)',
    title: 'Subordinate causali e consecutive: потому что vs оттого что vs так что',
    russianHeading: 'Подчинительная связь с придаточной причины и следствия (с. 327–333)',
    ruleExplanationIt:
      '• ПОТОМУ ЧТО: congiunzione causale generale neutrale; indica la motivazione logica o l\'azione cosciente che sta alla base del fatto principale (Он не пришёл, потому что заболел).\n• ОТТОГО ЧТО: indica la causa fisica immediata o l\'effetto fisiologico diretto (Кожа покраснела оттого, что я весь день был на солнце; Снег тает оттого, что потеплело).\n• БЛАГОДАРЯ ТОМУ ЧТО: causa a esito favorevole (Мы успели благодаря тому, что выехали раньше).\n• ИЗ-ЗА ТОГО ЧТО: causa a esito sfavorevole o dannoso (Спектакль сорвался из-за того, что актёр заболел).\n• ТАК ЧТО: subordinata consecutiva oggettiva; indica il risultato naturale che discende dal fatto principale (Пошёл сильный дождь, так что нам пришлось остаться дома). Non va confusa con pertanto/quindi (поэтому), che è avverbio coordinante.',
    warningNote:
      '! ОТТОГО ЧТО si usa per cause organiche o fisiche dirette. ТАК ЧТО esprime una conseguenza inevitabile e sta solo dopo la frase principale con la virgola prima di "так что".',
    bookPage: 328,
    examples: [
      { ru: 'Трава была зелёной оттого, что здесь было достаточно влаги.', it: 'L\'erba era verde per il fatto che qui c\'era sufficiente umidità.', analysis: 'Оттого что: causa fisica/naturale diretta' },
      { ru: 'Дорогу размыло, так что проехать было невозможно.', it: 'La strada si è allagata, cosicché fu impossibile passare.', analysis: 'Так что: conseguenza consecutiva diretta' }
    ]
  },
  {
    id: 'rule-sub-purpose',
    sectionId: 3,
    sectionName: 'Sezione 3: La Frase Complessa',
    category: 'Придаточные цели (Subordinate finali)',
    title: 'Subordinate finali: чтобы vs для того чтобы vs лишь бы',
    russianHeading: 'Подчинительная связь с придаточной частью цели (с. 333–338)',
    ruleExplanationIt:
      '• Чтобы / Для того чтобы: introducono una finale. Se il soggetto della reggente e della subordinata COINCIDONO, il predicato della finale va all\'INFINITO: «Я пришёл, чтобы помочь вам».\n• Se i soggetti sono DIVERSI, il predicato della subordinata va obbligatoriamente al PASSATO (congiuntivo con бы): «Я пришёл, чтобы вы мне помогли» (non si può usare l\'infinito!).\n• Per enfatizzare lo scopo generale o in testi scritti formali si usa la forma complessa ДЛЯ ТОГО ЧТОБЫ.\n• ЛИШЬ БЫ / ТОЛЬКО БЫ: esprimono il desiderio ardente o il prezzo minimo pur di raggiungere uno scopo (Готов на всё, лишь бы ты выздоровела).',
    warningNote:
      '! Soggetti coincidenti -> Infinito (Я пришёл учиться / чтобы учиться). Soggetti differenti -> Verbo al passato obbligatorio (Я хочу, чтобы ТЫ пришёл)!',
    bookPage: 334,
    examples: [
      { ru: 'Отец работал день и ночь, чтобы дети получили образование.', it: 'Il padre lavorava giorno e notte affinché i figli ricevessero un\'istruzione.', analysis: 'Soggetti diversi (отец / дети) -> verbo al passato: получили' },
      { ru: 'Мы вышли пораньше, чтобы не опоздать на поезд.', it: 'Siamo usciti prima per non fare tardi al treno.', analysis: 'Stesso soggetto (мы) -> infinito: не опоздать' }
    ]
  },
  {
    id: 'rule-asyndetic',
    sectionId: 3,
    sectionName: 'Sezione 3: La Frase Complessa',
    category: 'Бессоюзное предложение (Frasi asindetiche)',
    title: 'Frasi complesse asindetiche: l\'uso di due punti (:) e trattino (-)',
    russianHeading: 'Бессоюзное сложное предложение (с. 354–358)',
    ruleExplanationIt:
      'Nelle frasi asindetiche le proposizioni non sono unite da congiunzioni, ma dall\'intonazione e dai segni di punteggiatura:\n• DUE PUNTI (:):\n  1. Causa (= потому что): «Я несчастлив: каждый день гости».\n  2. Spiegazione (= а именно): «Погода была ужасная: выл ветер, хлестал дождь».\n  3. Completiva/Percezione (= что / и увидел, что): «Я выглянул в окно: шёл густой снег».\n• TRATTINO (-):\n  1. Conseguenza rapida o risultato (= поэтому, так что): «Нажал на газ - машина сорвалась с места».\n  2. Condizione o tempo (= если, когда): «Лес рубят - щепки летят»; «Назвался груздем - полезай в кузов».\n  3. Forte contrapposizione (= а, но): «Лето припасает - зима поедает».',
    warningNote:
      '! Se la seconda frase spiega il "perché" o illustra il contenuto -> DUE PUNTI (:). Se la prima frase è una condizione o la seconda è un effetto immediato/contrapposto -> TRATTINO (-)!',
    bookPage: 355,
    examples: [
      { ru: 'Я понял: всё будет в порядке.', it: 'Ho capito: andrà tutto bene.', analysis: 'Due punti: valore oggettivo/esplicativo (che tutto andrà bene)' },
      { ru: 'Будете в театре - заходите.', it: 'Se siete a teatro, passate a trovarci.', analysis: 'Trattino: valore di condizione (если будете)' }
    ]
  }
];
