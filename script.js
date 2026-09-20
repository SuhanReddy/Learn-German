/* =========================================
   LEARN GERMAN
   ========================================= */

const words = [

  // BASICS
  ["Hallo", "hello", "Basics", ""],
  ["Tschüss", "goodbye", "Basics", ""],
  ["Danke", "thank you", "Basics", ""],
  ["Bitte", "please / you're welcome", "Basics", ""],
  ["Ja", "yes", "Basics", ""],
  ["Nein", "no", "Basics", ""],
  ["Morgen", "morning", "Basics", "der"],
  ["Abend", "evening", "Basics", "der"],
  ["Nacht", "night", "Basics", "die"],
  ["Tag", "day", "Basics", "der"],
  ["Freund", "friend", "Basics", "der"],
  ["Freundin", "female friend", "Basics", "die"],
  ["Familie", "family", "Basics", "die"],
  ["Name", "name", "Basics", "der"],
  ["Haus", "house", "Basics", "das"],

  // PEOPLE
  ["Mann", "man", "People", "der"],
  ["Frau", "woman", "People", "die"],
  ["Kind", "child", "People", "das"],
  ["Junge", "boy", "People", "der"],
  ["Mädchen", "girl", "People", "das"],
  ["Vater", "father", "People", "der"],
  ["Mutter", "mother", "People", "die"],
  ["Bruder", "brother", "People", "der"],
  ["Schwester", "sister", "People", "die"],
  ["Sohn", "son", "People", "der"],
  ["Tochter", "daughter", "People", "die"],
  ["Lehrer", "teacher", "People", "der"],
  ["Lehrerin", "female teacher", "People", "die"],
  ["Arzt", "doctor", "People", "der"],
  ["Ärztin", "female doctor", "People", "die"],

  // FOOD
  ["Brot", "bread", "Food", "das"],
  ["Käse", "cheese", "Food", "der"],
  ["Milch", "milk", "Food", "die"],
  ["Butter", "butter", "Food", "die"],
  ["Ei", "egg", "Food", "das"],
  ["Fleisch", "meat", "Food", "das"],
  ["Fisch", "fish", "Food", "der"],
  ["Reis", "rice", "Food", "der"],
  ["Suppe", "soup", "Food", "die"],
  ["Salat", "salad", "Food", "der"],
  ["Zucker", "sugar", "Food", "der"],
  ["Salz", "salt", "Food", "das"],

  // FRUITS
  ["Apfel", "apple", "Fruits", "der"],
  ["Banane", "banana", "Fruits", "die"],
  ["Orange", "orange", "Fruits", "die"],
  ["Zitrone", "lemon", "Fruits", "die"],
  ["Erdbeere", "strawberry", "Fruits", "die"],
  ["Kirsche", "cherry", "Fruits", "die"],
  ["Traube", "grape", "Fruits", "die"],
  ["Birne", "pear", "Fruits", "die"],
  ["Pfirsich", "peach", "Fruits", "der"],
  ["Wassermelone", "watermelon", "Fruits", "die"],

  // VEGETABLES
  ["Tomate", "tomato", "Vegetables", "die"],
  ["Kartoffel", "potato", "Vegetables", "die"],
  ["Karotte", "carrot", "Vegetables", "die"],
  ["Zwiebel", "onion", "Vegetables", "die"],
  ["Gurke", "cucumber", "Vegetables", "die"],
  ["Paprika", "pepper", "Vegetables", "die"],
  ["Salat", "lettuce", "Vegetables", "der"],
  ["Brokkoli", "broccoli", "Vegetables", "der"],
  ["Spinat", "spinach", "Vegetables", "der"],
  ["Knoblauch", "garlic", "Vegetables", "der"],

  // BODY
  ["Kopf", "head", "Body", "der"],
  ["Auge", "eye", "Body", "das"],
  ["Ohr", "ear", "Body", "das"],
  ["Nase", "nose", "Body", "die"],
  ["Mund", "mouth", "Body", "der"],
  ["Zahn", "tooth", "Body", "der"],
  ["Haar", "hair", "Body", "das"],
  ["Gesicht", "face", "Body", "das"],
  ["Hand", "hand", "Body", "die"],
  ["Finger", "finger", "Body", "der"],
  ["Arm", "arm", "Body", "der"],
  ["Bein", "leg", "Body", "das"],
  ["Fuß", "foot", "Body", "der"],
  ["Rücken", "back", "Body", "der"],
  ["Herz", "heart", "Body", "das"],

  // COLORS
  ["Rot", "red", "Colors", ""],
  ["Blau", "blue", "Colors", ""],
  ["Grün", "green", "Colors", ""],
  ["Gelb", "yellow", "Colors", ""],
  ["Schwarz", "black", "Colors", ""],
  ["Weiß", "white", "Colors", ""],
  ["Orange", "orange", "Colors", ""],
  ["Rosa", "pink", "Colors", ""],
  ["Lila", "purple", "Colors", ""],
  ["Braun", "brown", "Colors", ""],

  // PLACES
  ["Schule", "school", "Places", "die"],
  ["Universität", "university", "Places", "die"],
  ["Krankenhaus", "hospital", "Places", "das"],
  ["Bahnhof", "train station", "Places", "der"],
  ["Flughafen", "airport", "Places", "der"],
  ["Supermarkt", "supermarket", "Places", "der"],
  ["Restaurant", "restaurant", "Places", "das"],
  ["Hotel", "hotel", "Places", "das"],
  ["Park", "park", "Places", "der"],
  ["Stadt", "city", "Places", "die"],

  // OBJECTS
  ["Tisch", "table", "Objects", "der"],
  ["Stuhl", "chair", "Objects", "der"],
  ["Bett", "bed", "Objects", "das"],
  ["Tür", "door", "Objects", "die"],
  ["Fenster", "window", "Objects", "das"],
  ["Buch", "book", "Objects", "das"],
  ["Stift", "pen", "Objects", "der"],
  ["Tasche", "bag", "Objects", "die"],
  ["Handy", "mobile phone", "Objects", "das"],
  ["Computer", "computer", "Objects", "der"],
  ["Schlüssel", "key", "Objects", "der"],
  ["Uhr", "clock / watch", "Objects", "die"],

  // CLOTHES
  ["Hemd", "shirt", "Clothes", "das"],
  ["Hose", "trousers", "Clothes", "die"],
  ["Jacke", "jacket", "Clothes", "die"],
  ["Schuh", "shoe", "Clothes", "der"],
  ["Socke", "sock", "Clothes", "die"],
  ["Kleid", "dress", "Clothes", "das"],
  ["Hut", "hat", "Clothes", "der"],
  ["Mütze", "cap / beanie", "Clothes", "die"],

  // ANIMALS
  ["Hund", "dog", "Animals", "der"],
  ["Katze", "cat", "Animals", "die"],
  ["Vogel", "bird", "Animals", "der"],
  ["Pferd", "horse", "Animals", "das"],
  ["Kuh", "cow", "Animals", "die"],
  ["Schwein", "pig", "Animals", "das"],
  ["Hase", "rabbit", "Animals", "der"],
  ["Maus", "mouse", "Animals", "die"],
  ["Fisch", "fish", "Animals", "der"],
  ["Bär", "bear", "Animals", "der"],

  // NATURE
  ["Baum", "tree", "Nature", "der"],
  ["Blume", "flower", "Nature", "die"],
  ["Sonne", "sun", "Nature", "die"],
  ["Mond", "moon", "Nature", "der"],
  ["Stern", "star", "Nature", "der"],
  ["Himmel", "sky", "Nature", "der"],
  ["Wolke", "cloud", "Nature", "die"],
  ["Regen", "rain", "Nature", "der"],
  ["Schnee", "snow", "Nature", "der"],
  ["Wind", "wind", "Nature", "der"],

  // TRANSPORT
  ["Auto", "car", "Transport", "das"],
  ["Bus", "bus", "Transport", "der"],
  ["Zug", "train", "Transport", "der"],
  ["Fahrrad", "bicycle", "Transport", "das"],
  ["Flugzeug", "airplane", "Transport", "das"],
  ["Schiff", "ship", "Transport", "das"],
  ["Taxi", "taxi", "Transport", "das"],
  ["Straße", "street", "Transport", "die"],

  // COMMON VERBS
  ["gehen", "to go", "Verbs", ""],
  ["kommen", "to come", "Verbs", ""],
  ["machen", "to do / make", "Verbs", ""],
  ["sehen", "to see", "Verbs", ""],
  ["hören", "to hear", "Verbs", ""],
  ["sprechen", "to speak", "Verbs", ""],
  ["lesen", "to read", "Verbs", ""],
  ["schreiben", "to write", "Verbs", ""],
  ["essen", "to eat", "Verbs", ""],
  ["trinken", "to drink", "Verbs", ""],
  ["schlafen", "to sleep", "Verbs", ""],
  ["lernen", "to learn", "Verbs", ""],
  ["arbeiten", "to work", "Verbs", ""],
  ["spielen", "to play", "Verbs", ""],
  ["kaufen", "to buy", "Verbs", ""],

  // ADJECTIVES
  ["groß", "big / tall", "Adjectives", ""],
  ["klein", "small", "Adjectives", ""],
  ["gut", "good", "Adjectives", ""],
  ["schlecht", "bad", "Adjectives", ""],
  ["alt", "old", "Adjectives", ""],
  ["jung", "young", "Adjectives", ""],
  ["neu", "new", "Adjectives", ""],
  ["schnell", "fast", "Adjectives", ""],
  ["langsam", "slow", "Adjectives", ""],
  ["schön", "beautiful", "Adjectives", ""],
  ["kalt", "cold", "Adjectives", ""],
  ["warm", "warm", "Adjectives", ""]
];


/* =========================================
   DOM ELEMENTS
   ========================================= */

const modeButtons = document.querySelectorAll(".mode");

const soundBtn = document.getElementById("soundBtn");
const skipBtn = document.getElementById("skipBtn");
const nextBtn = document.getElementById("nextBtn");

const scoreEl = document.getElementById("score");
const streakEl = document.getElementById("streak");
const progressEl = document.getElementById("progress");

const modeLabelEl = document.getElementById("modeLabel");
const questionEl = document.getElementById("question");

const categoryEl = document.getElementById("category");
const promptEl = document.getElementById("prompt");
const subPromptEl = document.getElementById("subPrompt");

const answersEl = document.getElementById("answers");
const feedbackEl = document.getElementById("feedback");

const wordCountEl = document.getElementById("wordCount");


/* =========================================
   STATE
   ========================================= */

let mode = "de-en";

/*
  IMPORTANT FIX:

  `mode` = selected menu mode.

  `questionType` = actual question being shown.

  For example:

  mode = "mixed"
  questionType = "de-en"

  or:

  mode = "mixed"
  questionType = "article"

  This prevents Mixed Practice from checking
  answers using the wrong rules.
*/
let questionType = "de-en";

let deck = [];
let currentIndex = 0;
let currentWord = null;

let score = 0;
let streak = 0;

let answered = false;
let soundEnabled = true;


/* =========================================
   MODE INFORMATION
   ========================================= */

const modeInfo = {
  "de-en": {
    label: "German → English",
    question: "Was bedeutet dieses Wort?"
  },

  "en-de": {
    label: "English → German",
    question: "Wie heißt dieses Wort auf Deutsch?"
  },

  "quiz": {
    label: "4 Option Quiz",
    question: "Choose the correct answer."
  },

  "article": {
    label: "Article Practice",
    question: "Welcher Artikel ist richtig?"
  },

  "mixed": {
    label: "Mixed Practice",
    question: "A little bit of everything."
  }
};


/* =========================================
   INITIAL SETUP
   ========================================= */

wordCountEl.textContent = `${words.length} words`;

newDeck();


/* =========================================
   MODE BUTTONS
   ========================================= */

modeButtons.forEach(button => {

  button.addEventListener("click", () => {

    mode = button.dataset.mode;

    modeButtons.forEach(btn => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    score = 0;
    streak = 0;

    updateStats();

    newDeck();
  });

});


/* =========================================
   CREATE NEW DECK
   ========================================= */

function newDeck() {

  deck = shuffle([...words]);

  currentIndex = 0;

  currentWord = null;

  showCard();
}


/* =========================================
   SHUFFLE
   ========================================= */

function shuffle(array) {

  for (let i = array.length - 1; i > 0; i--) {

    const j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}


/* =========================================
   RANDOM WRONG OPTIONS
   ========================================= */

function getRandomWords(excludeWord, amount) {

  const available = words.filter(word => word !== excludeWord);

  return shuffle([...available]).slice(0, amount);
}


/* =========================================
   SHOW CARD
   ========================================= */

function showCard() {

  if (currentIndex >= deck.length) {
    newDeck();
    return;
  }

  currentWord = deck[currentIndex];

  answered = false;

  feedbackEl.textContent = "";
  feedbackEl.className = "feedback";

  nextBtn.hidden = true;

  /*
    In normal modes, questionType is the same as mode.

    In Mixed Practice, questionType is randomly
    selected from the four actual question types.
  */

  if (mode === "mixed") {

    const mixedTypes = [
      "de-en",
      "en-de",
      "quiz",
      "article"
    ];

    questionType =
      mixedTypes[Math.floor(Math.random() * mixedTypes.length)];

  } else {

    questionType = mode;
  }

  renderQuestion();

  updateStats();
}


/* =========================================
   RENDER QUESTION
   ========================================= */

function renderQuestion() {

  const info = modeInfo[questionType];

  modeLabelEl.textContent =
    mode === "mixed"
      ? `Mixed Practice · ${info.label}`
      : info.label;

  questionEl.textContent = info.question;

  categoryEl.textContent = currentWord[2];

  answersEl.innerHTML = "";

  /*
    IMPORTANT:
    The rendering is based on questionType,
    NOT on mode.
  */

  if (questionType === "de-en") {

    promptEl.textContent = currentWord[0];

    subPromptEl.textContent = "What does this mean?";

    renderTranslationOptions("de-en");
  }

  else if (questionType === "en-de") {

    promptEl.textContent = currentWord[1];

    subPromptEl.textContent = "What is this in German?";

    renderTranslationOptions("en-de");
  }

  else if (questionType === "quiz") {

    promptEl.textContent = currentWord[0];

    subPromptEl.textContent = "Choose the correct English meaning.";

    renderQuizOptions();
  }

  else if (questionType === "article") {

    /*
      Article practice only makes sense for nouns.
      If the randomly selected mixed word does not
      have an article, find another word that does.
    */

    if (!currentWord[3]) {

      const nounWords = deck.filter(word => word[3]);

      if (nounWords.length) {

        currentWord =
          nounWords[Math.floor(Math.random() * nounWords.length)];
      }
    }

    promptEl.textContent = currentWord[0];

    subPromptEl.textContent = "Choose the correct article.";

    renderArticleOptions();
  }
}


/* =========================================
   TRANSLATION OPTIONS
   ========================================= */

function renderTranslationOptions(type) {

  let correctAnswer;

  if (type === "de-en") {
    correctAnswer = currentWord[1];
  } else {
    correctAnswer = currentWord[0];
  }

  const wrongWords =
    getRandomWords(currentWord, 3);

  const options = [
    correctAnswer,
    ...wrongWords.map(word =>
      type === "de-en" ? word[1] : word[0]
    )
  ];

  shuffle(options);

  options.forEach(answer => {

    const button = createAnswerButton(answer);

    button.addEventListener("click", () => {
      checkAnswer(answer);
    });

    answersEl.appendChild(button);
  });
}


/* =========================================
   QUIZ OPTIONS
   ========================================= */

function renderQuizOptions() {

  const correctAnswer = currentWord[1];

  const wrongWords =
    getRandomWords(currentWord, 3);

  const options = [
    correctAnswer,
    ...wrongWords.map(word => word[1])
  ];

  shuffle(options);

  options.forEach(answer => {

    const button = createAnswerButton(answer);

    button.addEventListener("click", () => {
      checkAnswer(answer);
    });

    answersEl.appendChild(button);
  });
}


/* =========================================
   ARTICLE OPTIONS
   ========================================= */

function renderArticleOptions() {

  const articles = ["der", "die", "das"];

  articles.forEach(article => {

    const button = createAnswerButton(article);

    button.addEventListener("click", () => {
      checkAnswer(article);
    });

    answersEl.appendChild(button);
  });
}


/* =========================================
   CREATE ANSWER BUTTON
   ========================================= */

function createAnswerButton(text) {

  const button = document.createElement("button");

  button.className = "answer";

  button.textContent = text;

  return button;
}


/* =========================================
   CHECK ANSWER
   ========================================= */

function checkAnswer(answer) {

  if (answered) {
    return;
  }

  answered = true;

  /*
    THIS IS THE MAIN BUG FIX.

    The answer is checked against questionType,
    not the selected menu mode.

    Example:

    mode = "mixed"
    questionType = "de-en"

    The correct answer is therefore currentWord[1].

    If:

    mode = "mixed"
    questionType = "article"

    The correct answer is currentWord[3].
  */

  let correctAnswer;

  if (questionType === "de-en") {

    correctAnswer = currentWord[1];

  } else if (questionType === "en-de") {

    correctAnswer = currentWord[0];

  } else if (questionType === "quiz") {

    correctAnswer = currentWord[1];

  } else if (questionType === "article") {

    correctAnswer = currentWord[3];
  }


  const isCorrect =
    answer.toLowerCase() === correctAnswer.toLowerCase();


  const buttons =
    answersEl.querySelectorAll(".answer");

  buttons.forEach(button => {

    button.disabled = true;

    /*
      Always highlight the correct answer.
      This is especially useful for article practice.
    */

    if (
      button.textContent.toLowerCase() ===
      correctAnswer.toLowerCase()
    ) {
      button.classList.add("correct");
    }

  });


  /*
    CORRECT ANSWER
  */

  if (isCorrect) {

    score += 10;

    streak++;

    feedbackEl.textContent =
      "✓ Correct! Well done!";

    feedbackEl.className =
      "feedback correct";

    playSound("correct");

    const selectedButton =
      [...buttons].find(button =>
        button.textContent.toLowerCase() ===
        answer.toLowerCase()
      );

    if (selectedButton) {
      selectedButton.classList.add("correct");
    }

  }


  /*
    WRONG ANSWER
  */

  else {

    streak = 0;

    feedbackEl.innerHTML =
      `✗ Incorrect. Correct answer: <strong>${correctAnswer}</strong>`;

    feedbackEl.className =
      "feedback wrong";

    playSound("wrong");

    /*
      Highlight the user's wrong answer too.
    */

    const selectedButton =
      [...buttons].find(button =>
        button.textContent.toLowerCase() ===
        answer.toLowerCase()
      );

    if (selectedButton) {
      selectedButton.classList.add("wrong");
    }
  }


  updateStats();

  nextBtn.hidden = false;
}


/* =========================================
   NEXT WORD
   ========================================= */

nextBtn.addEventListener("click", () => {

  currentIndex++;

  showCard();
});


/* =========================================
   SKIP
   ========================================= */

skipBtn.addEventListener("click", () => {

  streak = 0;

  playSound("skip");

  currentIndex++;

  showCard();
});


/* =========================================
   UPDATE STATS
   ========================================= */

function updateStats() {

  scoreEl.textContent = score;

  streakEl.textContent = streak;

  const position =
    Math.min(currentIndex + 1, deck.length);

  progressEl.textContent =
    `${position}/${deck.length}`;
}


/* =========================================
   SOUND
   ========================================= */

soundBtn.addEventListener("click", () => {

  soundEnabled = !soundEnabled;

  soundBtn.textContent =
    soundEnabled ? "🔊" : "🔇";
});


function playSound(type) {

  if (!soundEnabled) {
    return;
  }

  const AudioContext =
    window.AudioContext ||
    window.webkitAudioContext;

  if (!AudioContext) {
    return;
  }

  const audioContext =
    new AudioContext();

  const oscillator =
    audioContext.createOscillator();

  const gain =
    audioContext.createGain();

  oscillator.connect(gain);

  gain.connect(audioContext.destination);


  if (type === "correct") {

    oscillator.frequency.setValueAtTime(
      600,
      audioContext.currentTime
    );

    oscillator.frequency.setValueAtTime(
      850,
      audioContext.currentTime + 0.12
    );

  }

  else if (type === "wrong") {

    oscillator.frequency.setValueAtTime(
      300,
      audioContext.currentTime
    );

    oscillator.frequency.setValueAtTime(
      180,
      audioContext.currentTime + 0.15
    );

  }

  else {

    oscillator.frequency.setValueAtTime(
      450,
      audioContext.currentTime
    );
  }


  gain.gain.setValueAtTime(
    0.001,
    audioContext.currentTime
  );

  gain.gain.exponentialRampToValueAtTime(
    0.15,
    audioContext.currentTime + 0.02
  );

  gain.gain.exponentialRampToValueAtTime(
    0.001,
    audioContext.currentTime + 0.25
  );


  oscillator.start();

  oscillator.stop(
    audioContext.currentTime + 0.25
  );
}


/* =========================================
   KEYBOARD SHORTCUTS
   ========================================= */

document.addEventListener("keydown", event => {

  /*
    1, 2, 3, 4 select answer buttons.
  */

  if (
    ["1", "2", "3", "4"].includes(event.key)
  ) {

    const buttons =
      [...answersEl.querySelectorAll(".answer")];

    const index =
      Number(event.key) - 1;

    if (buttons[index] && !buttons[index].disabled) {
      buttons[index].click();
    }
  }


  /*
    Enter = next question after answering.
  */

  if (
    event.key === "Enter" &&
    !nextBtn.hidden
  ) {
    nextBtn.click();
  }
});