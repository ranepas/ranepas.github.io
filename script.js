const backgrounds = {
  menu: 'url("assets/backgrounds/intro.png") center/cover no-repeat',
  period1: 'url("assets/backgrounds/period1.png") center/cover no-repeat',
  period2: 'url("assets/backgrounds/period2.png") center/cover no-repeat',
  period3: 'url("assets/backgrounds/period3.png") center/cover no-repeat',
  period4: 'url("assets/backgrounds/period4.png") center/cover no-repeat',
  final: 'url("assets/backgrounds/final.png") center/cover no-repeat',
};

const characterMap = {
  student: "assets/student.png",
  guide: "assets/guide.png",
};

const periods = [
  {
    id: 1,
    title: "Период 1: 1920–1944",
    subtitle: "Собери хронологию истоков",
    bg: "period1",
    game: "timeline",
    dialog: [
      {
        speaker: "Студент",
        character: "student",
        text: "Место знакомое, а ощущение совсем другое. Будто я провалился в очень далёкое прошлое.",
      },
      {
        speaker: "Экскурсовод",
        character: "guide",
        text: "Так и есть. Перед тобой самое начало истории будущего института.",
      },
      {
        speaker: "Студент",
        character: "student",
        text: "С чего вообще всё начиналось?",
      },
      {
        speaker: "Экскурсовод",
        character: "guide",
        text: "В 1920 году была создана Высшая политическая школа. Тогда это была одна из первых форм подготовки кадров для управления.",
      },
      {
        speaker: "Студент",
        character: "student",
        text: "Похоже, это было совсем не похоже на привычный вуз.",
      },
      {
        speaker: "Экскурсовод",
        character: "guide",
        text: "Да, формат был другим. Главное тогда — быстро готовить людей, которые могли работать в системе управления.",
      },
      {
        speaker: "Студент",
        character: "student",
        text: "И на этом всё не остановилось?",
      },
      {
        speaker: "Экскурсовод",
        character: "guide",
        text: "Наоборот. В 1929 году открылся Коммунистический университет. Это уже более высокий уровень организации обучения.",
      },
      {
        speaker: "Студент",
        character: "student",
        text: "А чему там могли учить в те годы?",
      },
      {
        speaker: "Экскурсовод",
        character: "guide",
        text: "Тому, что было нужно стране: управленческой работе, политической подготовке, организационным навыкам.",
      },
      {
        speaker: "Студент",
        character: "student",
        text: "Понятно. Всё довольно практично.",
      },
      {
        speaker: "Экскурсовод",
        character: "guide",
        text: "И это хорошо видно дальше. В 1932 году учреждение преобразовали в Горьковскую высшую коммунистическую сельскохозяйственную школу.",
      },
      {
        speaker: "Студент",
        character: "student",
        text: "Почему именно сельскохозяйственную?",
      },
      {
        speaker: "Экскурсовод",
        character: "guide",
        text: "Потому что стране требовались специалисты и организаторы для аграрной сферы. Учебное заведение менялось под реальные задачи времени.",
      },
      {
        speaker: "Студент",
        character: "student",
        text: "Выходит, история института с самого начала была связана не только с обучением, но и с потребностями государства.",
      },
      {
        speaker: "Экскурсовод",
        character: "guide",
        text: "Именно. А в 1944 году появляются партийная школа и ускоренные курсы, потому что в условиях войны кадры нужны особенно быстро.",
      },
      {
        speaker: "Студент",
        character: "student",
        text: "Теперь уже видно общий смысл: не одна прямая линия, а постоянные изменения под время.",
      },
      {
        speaker: "Экскурсовод",
        character: "guide",
        text: "Вот это тебе и нужно удержать в голове. Сейчас попробуй собрать события в правильном порядке.",
      },
    ],
    data: [
      { year: "1920", text: "Создание Высшей политической школы." },
      { year: "1929", text: "Открытие Коммунистического университета." },
      {
        year: "1932",
        text: "Преобразование в Горьковскую высшую коммунистическую сельскохозяйственную школу.",
      },
      {
        year: "1944",
        text: "Создание партийной школы и ускоренных курсов подготовки.",
      },
    ],
    successText:
      "Хронология собрана верно. Начальный этап показывает, что история института началась намного раньше современного названия и прошла через несколько форм учебной подготовки.",
  },
  {
    id: 2,
    title: "Период 2: 1946–1991",
    subtitle: "Определи, где правда, а где ошибка",
    bg: "period2",
    game: "truefalse",
    dialog: [
      {
        speaker: "Студент",
        character: "student",
        text: "А здесь уже чувствуется совсем другой масштаб. Всё выглядит серьёзнее.",
      },
      {
        speaker: "Экскурсовод",
        character: "guide",
        text: "Потому что начинается период большого роста. После войны учебное заведение быстро укрепляет свой статус.",
      },
      {
        speaker: "Студент",
        character: "student",
        text: "Что изменилось первым делом?",
      },
      {
        speaker: "Экскурсовод",
        character: "guide",
        text: "В 1946 году школа становится областной. Затем в 1952 году получает название Горьковская высшая партийная школа.",
      },
      {
        speaker: "Студент",
        character: "student",
        text: "И дальше она продолжила расти?",
      },
      {
        speaker: "Экскурсовод",
        character: "guide",
        text: "Да. В 1956 году она стала межобластной. Это уже другой уровень: подготовка кадров шла не для одного региона, а сразу для нескольких.",
      },
      {
        speaker: "Студент",
        character: "student",
        text: "А кто вообще там учился?",
      },
      {
        speaker: "Экскурсовод",
        character: "guide",
        text: "Партийные работники, руководители, секретари, инструкторы, представители хозяйственной и советской сферы.",
      },
      {
        speaker: "Студент",
        character: "student",
        text: "То есть это были не случайные слушатели, а люди, которым потом реально нужно было принимать решения.",
      },
      {
        speaker: "Экскурсовод",
        character: "guide",
        text: "Именно. Поэтому программа была широкой: экономика, право, статистика, строительство, сельское хозяйство, промышленность.",
      },
      {
        speaker: "Студент",
        character: "student",
        text: "Уже больше похоже на настоящую школу управленцев.",
      },
      {
        speaker: "Экскурсовод",
        character: "guide",
        text: "Так и было. Например, в 1957 году здесь учились сотни человек — как очно, так и заочно.",
      },
      {
        speaker: "Студент",
        character: "student",
        text: "Значит, это был уже очень заметный центр подготовки кадров.",
      },
      {
        speaker: "Экскурсовод",
        character: "guide",
        text: "Да. И этот долгий этап заканчивается в 1991 году, когда высшая партийная школа становится Нижегородским социально-политическим институтом.",
      },
      {
        speaker: "Студент",
        character: "student",
        text: "Поворот серьёзный. Похоже, дальше всё начнёт меняться ещё быстрее.",
      },
      {
        speaker: "Экскурсовод",
        character: "guide",
        text: "Так и есть. Но сначала проверим, насколько хорошо ты уловил главное в этом периоде.",
      },
    ],
    data: [
      {
        statement: "В 1946 году школа получила статус областной.",
        answer: true,
      },
      {
        statement: "В 1956 году школа была закрыта и перестала развиваться.",
        answer: false,
      },
      {
        statement: "В 1957 году в школе были очное и заочное отделения.",
        answer: true,
      },
      {
        statement:
          "В 1991 году высшая партийная школа была преобразована в Нижегородский социально-политический институт.",
        answer: true,
      },
    ],
    successText:
      "Этот этап пройден. Теперь видно, как школа выросла в крупный образовательный центр и подошла к перелому начала 1990-х.",
  },
  {
    id: 3,
    title: "Период 3: 1992–2010",
    subtitle: "Соедини даты и события",
    bg: "period3",
    game: "matching",
    dialog: [
      {
        speaker: "Студент",
        character: "student",
        text: "Обстановка уже совсем другая. Похоже, страна вокруг тоже стала другой.",
      },
      {
        speaker: "Экскурсовод",
        character: "guide",
        text: "Да. Это начало нового этапа, когда старая система ушла, а новую пришлось выстраивать заново.",
      },
      {
        speaker: "Студент",
        character: "student",
        text: "Что стало с учебным заведением после этого поворота?",
      },
      {
        speaker: "Экскурсовод",
        character: "guide",
        text: "Сначала, в 1991 году, появляется Нижегородский социально-политический институт.",
      },
      {
        speaker: "Студент",
        character: "student",
        text: "А потом направление подготовки уже меняется?",
      },
      {
        speaker: "Экскурсовод",
        character: "guide",
        text: "Да. В 1992 году учреждение возрождается как Волго-Вятский кадровый центр. Теперь главный акцент — подготовка кадров для государственной службы.",
      },
      {
        speaker: "Студент",
        character: "student",
        text: "Получается, здесь уже начинается совсем другая логика образования.",
      },
      {
        speaker: "Экскурсовод",
        character: "guide",
        text: "Именно. Учебное заведение перестраивается под новую российскую систему управления.",
      },
      {
        speaker: "Студент",
        character: "student",
        text: "А когда появляется академия?",
      },
      {
        speaker: "Экскурсовод",
        character: "guide",
        text: "В 1995 году кадровый центр становится Волго-Вятской академией государственной службы.",
      },
      {
        speaker: "Студент",
        character: "student",
        text: "То есть это уже почти прямой путь к современному институту.",
      },
      {
        speaker: "Экскурсовод",
        character: "guide",
        text: "Да. Этот период особенно важен, потому что именно здесь закладывается современная основа.",
      },
      {
        speaker: "Студент",
        character: "student",
        text: "Ладно, хочу проверить, не запутался ли я в этих переходах.",
      },
      {
        speaker: "Экскурсовод",
        character: "guide",
        text: "Сейчас и посмотрим. Здесь важна именно последовательность.",
      },
    ],
    data: {
      dates: ["1991", "1992", "1995"],
      events: [
        "Преобразование в Волго-Вятскую академию государственной службы.",
        "Возрождение под названием Волго-Вятский кадровый центр.",
        "Преобразование в Нижегородский социально-политический институт.",
      ],
      correct: {
        1991: "Преобразование в Нижегородский социально-политический институт.",
        1992: "Возрождение под названием Волго-Вятский кадровый центр.",
        1995: "Преобразование в Волго-Вятскую академию государственной службы.",
      },
    },
    successText:
      "Переходный этап восстановлен верно. Теперь видно, как учреждение вышло из советской модели и стало частью новой системы подготовки государственных служащих.",
  },
  {
    id: 4,
    title: "Период 4: 2010 – настоящее время",
    subtitle: "Исследуй современный институт",
    bg: "period4",
    game: "explore",
    dialog: [
      {
        speaker: "Студент",
        character: "student",
        text: "Вот теперь уже почти всё узнаётся. Наконец-то чувствуется современность.",
      },
      {
        speaker: "Экскурсовод",
        character: "guide",
        text: "Ты дошёл до последнего этапа — современного периода развития института.",
      },
      {
        speaker: "Студент",
        character: "student",
        text: "Что здесь стало главным событием?",
      },
      {
        speaker: "Экскурсовод",
        character: "guide",
        text: "В 2010 году Волго-Вятская академия государственной службы вошла в состав РАНХиГС и получила название Нижегородский институт управления.",
      },
      {
        speaker: "Студент",
        character: "student",
        text: "Значит, институт стал частью большой федеральной структуры.",
      },
      {
        speaker: "Экскурсовод",
        character: "guide",
        text: "Да. С этого момента он развивается уже как филиал Российской академии народного хозяйства и государственной службы при Президенте Российской Федерации.",
      },
      {
        speaker: "Студент",
        character: "student",
        text: "А как он устроен сейчас?",
      },
      {
        speaker: "Экскурсовод",
        character: "guide",
        text: "Сегодня в его составе три факультета, колледж, двенадцать кафедр и другие подразделения.",
      },
      {
        speaker: "Студент",
        character: "student",
        text: "Когда смотришь на весь путь сразу, всё начинает восприниматься совсем иначе.",
      },
      {
        speaker: "Экскурсовод",
        character: "guide",
        text: "В этом и смысл путешествия. Не просто увидеть даты, а понять, как институт менялся вместе со страной.",
      },
      {
        speaker: "Студент",
        character: "student",
        text: "Остался последний шаг?",
      },
      {
        speaker: "Экскурсовод",
        character: "guide",
        text: "Да. Исследуй ключевые точки современного этапа — и временной разрыв будет закрыт.",
      },
    ],
    data: [
      {
        title: "2010",
        text: "Волго-Вятская академия вошла в состав РАНХиГС и стала Нижегородским институтом управления.",
      },
      {
        title: "Статус",
        text: "Институт является филиалом Российской академии народного хозяйства и государственной службы при Президенте РФ.",
      },
      {
        title: "Структура",
        text: "В институт входят 3 факультета, 1 колледж, 12 кафедр и другие структурные подразделения.",
      },
      {
        title: "Сегодня",
        text: "Это современное высшее учебное заведение Нижнего Новгорода, продолжающее развитие в составе федеральной академии.",
      },
    ],
    successText:
      "Современный этап изучен. Теперь собрана вся линия развития: от первых учебных форм до нынешнего института в составе РАНХиГС.",
  },
];

let currentPeriodIndex = -1;
let completedPeriods = 0;
let storyQueue = [];
let selectedTimeline = [];
let tfIndex = 0;
let tfCorrect = 0;
let matchSelectedDate = null;
let matchSelectedEvent = null;
let matchSolved = 0;
let openedExplore = 0;
let dialogueHistory = [];
let typingTimer = null;
let isTyping = false;
let fullCurrentText = "";

const bgEl = document.getElementById("bg");
const characterEl = document.getElementById("character");
const screens = {
  menu: document.getElementById("screen-menu"),
  story: document.getElementById("screen-story"),
  game: document.getElementById("screen-game"),
  final: document.getElementById("screen-final"),
};
const speakerEl = document.getElementById("speaker");
const gameProgressEl = document.getElementById("gameProgress");
const storyTextEl = document.getElementById("storyText");
const dialogueBoxEl = document.getElementById("dialogueBox");
const historyBtn = document.getElementById("historyBtn");
const historyModalEl = document.getElementById("historyModal");
const historyListEl = document.getElementById("historyList");
const closeHistoryBtn = document.getElementById("closeHistoryBtn");
const gameTitleEl = document.getElementById("gameTitle");
const gameSubtitleEl = document.getElementById("gameSubtitle");
const gameAreaEl = document.getElementById("gameArea");
const feedbackEl = document.getElementById("feedback");
const continueBtn = document.getElementById("continueBtn");
const finalSummaryEl = document.getElementById("finalSummary");
const modalEl = document.getElementById("modal");
const modalTitleEl = document.getElementById("modalTitle");
const modalTextEl = document.getElementById("modalText");
const startBtn = document.getElementById("startBtn");
const rulesBtn = document.getElementById("rulesBtn");
const menuBtn = document.getElementById("menuBtn");
const aboutBtn = document.getElementById("aboutBtn");
const contactsBtn = document.getElementById("contactsBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const restartBtn = document.getElementById("restartBtn");
const finalAboutBtn = document.getElementById("finalAboutBtn");

function setBackground(key) {
  bgEl.style.background = backgrounds[key] || backgrounds.menu;
}

function showCharacter(type) {
  const src = characterMap[type];
  if (!src) {
    characterEl.style.display = "none";
    return;
  }
  characterEl.src = src;
  characterEl.style.display = "block";
  characterEl.classList.remove("student", "guide", "center");
  if (type === "student") {
    characterEl.classList.add("student");
  } else if (type === "guide") {
    characterEl.classList.add("guide");
  } else {
    characterEl.classList.add("center");
  }
}

function hideCharacter() {
  characterEl.style.display = "none";
  characterEl.classList.remove("student", "guide", "center");
}

function updateProgress() {
  if (gameProgressEl) {
    gameProgressEl.textContent = `Пройдено периодов: ${completedPeriods}/4`;
  }
}

function switchScreen(name) {
  Object.values(screens).forEach((screen) => screen.classList.remove("active"));
  screens[name].classList.add("active");
  if (historyBtn) {
    historyBtn.classList.toggle("hidden", name !== "story");
  }
}

function openModal(title, html) {
  modalTitleEl.textContent = title;
  modalTextEl.innerHTML = html;
  modalEl.classList.remove("hidden");
}

function closeModal() {
  modalEl.classList.add("hidden");
}

function typeText(text, element, speed = 20) {
  if (typingTimer) {
    clearInterval(typingTimer);
  }
  isTyping = true;
  fullCurrentText = text;
  element.textContent = "";
  let index = 0;
  typingTimer = setInterval(() => {
    element.textContent += text[index];
    index++;
    if (index >= text.length) {
      clearInterval(typingTimer);
      typingTimer = null;
      isTyping = false;
    }
  }, speed);
}

function startGame() {
  completedPeriods = 0;
  currentPeriodIndex = -1;
  dialogueHistory = [];
  updateProgress();
  setBackground("menu");
  showCharacter("student");
  storyQueue = [
    {
      speaker: "Студент",
      character: "student",
      text: "Я просто задержался после занятий и зашёл в архивный зал. А потом всё вокруг вдруг изменилось.",
    },
    {
      speaker: "Экскурсовод",
      character: "guide",
      text: "Ты оказался внутри временного разрыва. Вернуться назад получится только в одном случае — если восстановишь ключевые этапы истории института.",
    },
    {
      speaker: "Студент",
      character: "student",
      text: "Звучит как испытание, а не экскурсия.",
    },
    {
      speaker: "Экскурсовод",
      character: "guide",
      text: "Именно так. Но у тебя будет проводник. Я покажу путь, а ты сам соберёшь общую картину.",
    },
    {
      speaker: "Студент",
      character: "student",
      text: "Ладно. Тогда давай начнём с самого начала.",
    },
  ];
  switchScreen("story");
  dialogueBoxEl.onclick = () => {
    if (isTyping) {
      if (typingTimer) {
        clearInterval(typingTimer);
        typingTimer = null;
      }
      storyTextEl.textContent = fullCurrentText;
      isTyping = false;
      return;
    }
    nextStoryStep();
  };
  nextStoryStep();
}

function nextStoryStep() {
  if (storyQueue.length === 0) {
    nextPeriod();
    return;
  }
  const step = storyQueue.shift();
  if (speakerEl) {
    speakerEl.textContent = step.speaker;
    speakerEl.className = "speaker " + (step.character || "");
  }
  dialogueHistory.push({
    speaker: step.speaker,
    character: step.character,
    text: step.text,
  });
  showCharacter(step.character);
  updateProgress();
  typeText(step.text, storyTextEl, 20);
}

function nextPeriod() {
  currentPeriodIndex++;
  if (currentPeriodIndex >= periods.length) {
    showFinalScreen();
    return;
  }
  const period = periods[currentPeriodIndex];
  setBackground(period.bg);
  storyQueue = [...period.dialog];
  switchScreen("story");
  dialogueBoxEl.onclick = () => {
    if (isTyping) {
      if (typingTimer) {
        clearInterval(typingTimer);
        typingTimer = null;
      }
      storyTextEl.textContent = fullCurrentText;
      isTyping = false;
      return;
    }
    if (storyQueue.length > 0) {
      nextStoryStep();
    } else {
      loadMiniGame(period);
    }
  };
  nextStoryStep();
}

function loadMiniGame(period) {
  switchScreen("game");
  hideCharacter();
  updateProgress();
  feedbackEl.textContent = "";
  continueBtn.classList.add("hidden");
  gameTitleEl.textContent = period.title;
  gameSubtitleEl.textContent = period.subtitle;
  gameAreaEl.innerHTML = "";
  if (period.game === "timeline") loadTimelineGame(period);
  if (period.game === "truefalse") loadTrueFalseGame(period);
  if (period.game === "matching") loadMatchingGame(period);
  if (period.game === "explore") loadExploreGame(period);
}

function finishPeriod() {
  const period = periods[currentPeriodIndex];
  completedPeriods++;
  updateProgress();
  feedbackEl.textContent = period.successText;
  continueBtn.classList.remove("hidden");
  continueBtn.onclick = () => {
    continueBtn.classList.add("hidden");
    feedbackEl.textContent = "";
    nextPeriod();
  };
}

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function explainTimelineMistake() {
  return `Неверно.\n\nЭкскурсовод: здесь важна последовательность развития.\nСначала появляется самая ранняя форма обучения,\nзатем система усложняется,\nпосле меняется под новые задачи страны,\nи уже потом возникают формы ускоренной подготовки.`;
}

function explainTFMistake(question) {
  return `Ошибка.\n\nЭкскурсовод: правильный ответ — ${question.answer ? "верно" : "неверно"}.\nВ этом периоде школа не ослабевала, а наоборот расширялась:\nрос статус, рос масштаб подготовки, увеличивалось число слушателей.`;
}

function explainMatchMistake() {
  return `Неверно.\n\nЭкскурсовод: подумай о логике 1990-х годов.\nСначала учреждение получает один статус,\nзатем возрождается уже в новой системе,\nи только после этого становится академией государственной службы.`;
}

function loadTimelineGame(period) {
  selectedTimeline = [];
  const items = shuffle(period.data);
  const title = document.createElement("p");
  title.textContent = "Нажимай карточки в правильном хронологическом порядке.";
  title.style.textAlign = "center";
  title.style.padding = "10px";
  title.style.color = "#e2e8f0";
  gameAreaEl.appendChild(title);

  const list = document.createElement("div");
  list.className = "timeline-list";
  items.forEach((item) => {
    const card = document.createElement("div");
    card.className = "timeline-card";
    card.textContent = item.text;
    card.addEventListener("click", () => {
      if (card.classList.contains("correct")) return;

      const expected = period.data[selectedTimeline.length];

      if (item.year === expected.year) {
        selectedTimeline.push(item.year);
        card.classList.add("correct");
        feedbackEl.textContent = "Верно. Это следующий правильный этап.";

        if (selectedTimeline.length === period.data.length) {
          feedbackEl.textContent = "Хронология восстановлена.";
          finishPeriod();
        }
      } else {
        card.classList.add("wrong");
        feedbackEl.textContent = explainTimelineMistake();
        setTimeout(() => card.classList.remove("wrong"), 800);
      }
    });
    list.appendChild(card);
  });
  gameAreaEl.appendChild(list);
}

function loadTrueFalseGame(period) {
  tfIndex = 0;
  tfCorrect = 0;
  const container = document.createElement("div");
  container.className = "truefalse-box";
  gameAreaEl.appendChild(container);

  function renderQuestion() {
    container.innerHTML = "";
    if (tfIndex >= period.data.length) {
      if (tfCorrect >= 3) {
        feedbackEl.textContent =
          "Хорошо. Основные факты этого периода ты уловил.";
        finishPeriod();
      } else {
        feedbackEl.textContent =
          "Пока не хватает верных ответов. Попробуй ещё раз.";
        loadTrueFalseGame(period);
      }
      return;
    }

    const q = period.data[tfIndex];

    const statement = document.createElement("div");
    statement.className = "statement";
    statement.textContent = q.statement;

    const actions = document.createElement("div");
    actions.className = "tf-actions";

    const trueBtn = document.createElement("button");
    trueBtn.className = "tf-btn";
    trueBtn.textContent = "Верно";

    const falseBtn = document.createElement("button");
    falseBtn.className = "tf-btn";
    falseBtn.textContent = "Неверно";

    trueBtn.addEventListener("click", () => checkTF(true, trueBtn, falseBtn));
    falseBtn.addEventListener("click", () => checkTF(false, trueBtn, falseBtn));

    actions.appendChild(trueBtn);
    actions.appendChild(falseBtn);
    container.appendChild(statement);
    container.appendChild(actions);
  }

  function checkTF(answer, trueBtn, falseBtn) {
    const q = period.data[tfIndex];
    if (answer === q.answer) {
      tfCorrect++;
      feedbackEl.textContent = "Правильно.";
    } else {
      feedbackEl.textContent = explainTFMistake(q);
      // Визуальный отклик для неправильного ответа
      const clickedBtn = answer ? trueBtn : falseBtn;
      clickedBtn.classList.add("wrong-answer");
      setTimeout(() => clickedBtn.classList.remove("wrong-answer"), 500);
    }
    tfIndex++;
    feedbackEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
    setTimeout(() => renderQuestion(), 1400);
  }

  renderQuestion();
}

function loadMatchingGame(period) {
  matchSelectedDate = null;
  matchSelectedEvent = null;
  matchSolved = 0;

  const wrapper = document.createElement("div");
  wrapper.className = "match-grid";

  const leftCol = document.createElement("div");
  leftCol.className = "match-column";

  const rightCol = document.createElement("div");
  rightCol.className = "match-column";

  const shuffledEvents = shuffle(period.data.events);

  period.data.dates.forEach((date) => {
    const item = document.createElement("div");
    item.className = "match-item";
    item.textContent = date;
    item.addEventListener("click", () => {
      if (item.classList.contains("done")) return;
      leftCol
        .querySelectorAll(".match-item")
        .forEach((el) => el.classList.remove("selected"));
      item.classList.add("selected");
      matchSelectedDate = date;
      tryMatch(period, leftCol, rightCol);
    });
    leftCol.appendChild(item);
  });

  shuffledEvents.forEach((eventText) => {
    const item = document.createElement("div");
    item.className = "match-item";
    item.textContent = eventText;
    item.addEventListener("click", () => {
      if (item.classList.contains("done")) return;
      rightCol
        .querySelectorAll(".match-item")
        .forEach((el) => el.classList.remove("selected"));
      item.classList.add("selected");
      matchSelectedEvent = eventText;
      tryMatch(period, leftCol, rightCol);
    });
    rightCol.appendChild(item);
  });

  wrapper.appendChild(leftCol);
  wrapper.appendChild(rightCol);
  gameAreaEl.appendChild(wrapper);
  feedbackEl.textContent = "Соедини даты с правильными событиями.";
}

function tryMatch(period, leftCol, rightCol) {
  if (!matchSelectedDate || !matchSelectedEvent) return;

  const isCorrect =
    period.data.correct[matchSelectedDate] === matchSelectedEvent;
  const leftItems = [...leftCol.querySelectorAll(".match-item")];
  const rightItems = [...rightCol.querySelectorAll(".match-item")];
  const leftEl = leftItems.find((el) => el.textContent === matchSelectedDate);
  const rightEl = rightItems.find(
    (el) => el.textContent === matchSelectedEvent,
  );

  if (isCorrect) {
    leftEl.classList.remove("selected");
    rightEl.classList.remove("selected");
    leftEl.classList.add("done");
    rightEl.classList.add("done");
    feedbackEl.textContent = "Совпадение найдено.";
    matchSolved++;
    if (matchSolved === period.data.dates.length) {
      feedbackEl.textContent = "Все соответствия собраны.";
      finishPeriod();
    }
  } else {
    feedbackEl.textContent = explainMatchMistake();
    leftEl.classList.remove("selected");
    rightEl.classList.remove("selected");
  }
  matchSelectedDate = null;
  matchSelectedEvent = null;
}

function loadExploreGame(period) {
  openedExplore = 0;
  const intro = document.createElement("p");
  intro.textContent =
    "Открой все 4 точки, чтобы собрать сведения о современном этапе.";
  intro.style.textAlign = "center";
  intro.style.padding = "10px";
  intro.style.color = "#e2e8f0";
  gameAreaEl.appendChild(intro);

  const grid = document.createElement("div");
  grid.className = "explore-grid";

  period.data.forEach((item) => {
    const card = document.createElement("div");
    card.className = "explore-card";
    card.textContent = item.title;
    card.addEventListener("click", () => {
      if (card.classList.contains("opened")) return;

      card.classList.add("opened");
      card.innerHTML = `<div><strong>${item.title}</strong><br>${item.text}</div>`;
      openedExplore++;
      feedbackEl.textContent = `Открыто точек: ${openedExplore}/4`;

      if (openedExplore === period.data.length) {
        feedbackEl.textContent =
          "Все ключевые точки современного этапа исследованы.";
        finishPeriod();
      }
    });
    grid.appendChild(card);
  });
  gameAreaEl.appendChild(grid);
}

function showFinalScreen() {
  setBackground("final");
  showCharacter("student");
  switchScreen("final");
  finalSummaryEl.innerHTML = `
        <p>Ты восстановил основные этапы истории института:</p>
        <ul class="final-list">
            <li>1920–1944 — истоки и первые формы подготовки кадров;</li>
            <li>1946–1991 — рост партийной школы и превращение её в крупный центр обучения;</li>
            <li>1992–2010 — переход к новой российской системе и появление академии государственной службы;</li>
            <li>2010 – настоящее время — развитие Нижегородского института управления в составе РАНХиГС.</li>
        </ul>
        <p>Теперь временной ключ собран, и можно вернуться в настоящее.</p>
    `;
}

function openAbout() {
  openModal(
    "О проекте",
    `<p><strong>Хроники НИУ РАНХиГС</strong> — интерактивная образовательная игра, посвящённая истории Нижегородского института управления.</p>
         <p><strong>Цель проекта:</strong> в увлекательной форме познакомить игроков с ключевыми этапами развития института от 1920 года до настоящего времени.</p>
         <p><strong>Как это работает:</strong> игрок проходит 4 исторических периода через диалоги с экскурсоводом и мини-игры (хронология, правда/ложь, сопоставление, исследование).</p>
         <p><strong>Технологии:</strong> HTML5, CSS3, JavaScript (без фреймворков).</p>
         <p><strong>Адаптивность:</strong> проект полностью адаптирован для мобильных устройств и десктопов.</p>`,
  );
}

function openRules() {
  openModal(
    "Как играть",
    `<ol style="line-height:1.8; padding-left: 20px;">
            <li>Нажми «Начать игру».</li>
            <li>Читай диалоги в нижнем блоке.</li>
            <li>После вступления к периоду проходи мини-игру.</li>
            <li>Если ошибёшься, экскурсовод объяснит, где логика нарушена.</li>
            <li>Пройди все 4 периода, чтобы завершить путешествие.</li>
        </ol>`,
  );
}

function openContacts() {
  openModal(
    "Контакты",
    `<ul style="line-height:1.8; padding-left: 20px;">
            <li><strong>Автор проекта:</strong> [Ваше ФИО]</li>
            <li><strong>Группа / курс:</strong> [Ваша группа]</li>
            <li><strong>Email:</strong> [ваша@почта.com]</li>
            <li><strong>Telegram:</strong> [@ваш_ник]</li>
            <li><strong>Репозиторий:</strong> [ссылка на GitHub]</li>
        </ul>`,
  );
}

function openHistory() {
  historyListEl.innerHTML = "";
  if (dialogueHistory.length === 0) {
    historyListEl.innerHTML =
      '<p style="text-align: center; color: #94a3b8;">Диалог ещё не начался.</p>';
  } else {
    dialogueHistory.forEach((entry) => {
      const item = document.createElement("div");
      item.className = "history-entry";
      const spk = document.createElement("div");
      spk.className = "h-speaker " + (entry.character || "");
      spk.textContent = entry.speaker;

      const txt = document.createElement("div");
      txt.className = "h-text";
      txt.textContent = entry.text;

      item.appendChild(spk);
      item.appendChild(txt);
      historyListEl.appendChild(item);
    });
    historyListEl.scrollTop = historyListEl.scrollHeight;
  }
  historyModalEl.classList.remove("hidden");
}

function closeHistory() {
  historyModalEl.classList.add("hidden");
}

// Event Listeners
startBtn.addEventListener("click", startGame);
rulesBtn.addEventListener("click", openRules);
menuBtn.addEventListener("click", () => {
  setBackground("menu");
  hideCharacter();
  switchScreen("menu");
});
aboutBtn.addEventListener("click", openAbout);
contactsBtn.addEventListener("click", openContacts);
closeModalBtn.addEventListener("click", closeModal);
restartBtn.addEventListener("click", startGame);
finalAboutBtn.addEventListener("click", openAbout);

if (historyBtn) {
  historyBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    openHistory();
  });
}

if (closeHistoryBtn) {
  closeHistoryBtn.addEventListener("click", closeHistory);
}

if (historyModalEl) {
  historyModalEl.addEventListener("click", (e) => {
    if (e.target === historyModalEl) closeHistory();
  });
}

const headerToggleBtn = document.getElementById("headerToggle");
const topbarEl = document.getElementById("topbar");
let headerCollapsed = false;

if (headerToggleBtn) {
  headerToggleBtn.addEventListener("click", () => {
    headerCollapsed = !headerCollapsed;
    topbarEl.classList.toggle("collapsed", headerCollapsed);
    document.body.classList.toggle("header-collapsed", headerCollapsed);
    headerToggleBtn.classList.toggle("is-collapsed", headerCollapsed);
    headerToggleBtn.textContent = headerCollapsed ? "⌄" : "⌃";
  });
}

// Initialize
setBackground("menu");
hideCharacter();
updateProgress();
