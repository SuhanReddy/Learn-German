const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

/* ---------------- WORDS ---------------- */

const words = [
  // Basics
  ["hallo","hello","basics",""],
  ["tschüss","bye","basics",""],
  ["bitte","please / you're welcome","basics",""],
  ["danke","thank you","basics",""],
  ["ja","yes","basics",""],
  ["nein","no","basics",""],
  ["heute","today","basics",""],
  ["morgen","tomorrow","basics",""],
  ["gestern","yesterday","basics",""],
  ["hier","here","basics",""],
  ["dort","there","basics",""],
  ["jetzt","now","basics",""],
  ["später","later","basics",""],
  ["immer","always","basics",""],
  ["nie","never","basics",""],

  // People
  ["Mann","man","people","der"],
  ["Frau","woman","people","die"],
  ["Kind","child","people","das"],
  ["Mensch","person","people","der"],
  ["Freund","friend","people","der"],
  ["Freundin","female friend","people","die"],
  ["Familie","family","people","die"],
  ["Mutter","mother","people","die"],
  ["Vater","father","people","der"],
  ["Bruder","brother","people","der"],
  ["Schwester","sister","people","die"],
  ["Sohn","son","people","der"],
  ["Tochter","daughter","people","die"],
  ["Lehrer","teacher","people","der"],
  ["Schüler","student","people","der"],

  // Body
  ["Kopf","head","body","der"],
  ["Gesicht","face","body","das"],
  ["Auge","eye","body","das"],
  ["Ohr","ear","body","das"],
  ["Nase","nose","body","die"],
  ["Mund","mouth","body","der"],
  ["Zahn","tooth","body","der"],
  ["Zunge","tongue","body","die"],
  ["Hals","neck","body","der"],
  ["Schulter","shoulder","body","die"],
  ["Arm","arm","body","der"],
  ["Hand","hand","body","die"],
  ["Finger","finger","body","der"],
  ["Brust","chest","body","die"],
  ["Bauch","belly","body","der"],
  ["Rücken","back","body","der"],
  ["Bein","leg","body","das"],
  ["Knie","knee","body","das"],
  ["Fuß","foot","body","der"],
  ["Zeh","toe","body","der"],

  // Food
  ["Brot","bread","food","das"],
  ["Butter","butter","food","die"],
  ["Käse","cheese","food","der"],
  ["Milch","milk","food","die"],
  ["Ei","egg","food","das"],
  ["Fleisch","meat","food","das"],
  ["Fisch","fish","food","der"],
  ["Reis","rice","food","der"],
  ["Nudel","noodle","food","die"],
  ["Suppe","soup","food","die"],
  ["Salz","salt","food","das"],
  ["Zucker","sugar","food","der"],
  ["Öl","oil","food","das"],
  ["Frühstück","breakfast","food","das"],
  ["Abendessen","dinner","food","das"],

  // Fruit
  ["Apfel","apple","fruit","der"],
  ["Banane","banana","fruit","die"],
  ["Zitrone","lemon","fruit","die"],
  ["Erdbeere","strawberry","fruit","die"],
  ["Himbeere","raspberry","fruit","die"],
  ["Blaubeere","blueberry","fruit","die"],
  ["Kirsche","cherry","fruit","die"],
  ["Birne","pear","fruit","die"],
  ["Pfirsich","peach","fruit","der"],
  ["Aprikose","apricot","fruit","die"],
  ["Pflaume","plum","fruit","die"],
  ["Wassermelone","watermelon","fruit","die"],
  ["Melone","melon","fruit","die"],
  ["Mandarine","tangerine","fruit","die"],
  ["Traube","grape","fruit","die"],

  // Vegetables
  ["Karotte","carrot","vegetables","die"],
  ["Kartoffel","potato","vegetables","die"],
  ["Tomate","tomato","vegetables","die"],
  ["Gurke","cucumber","vegetables","die"],
  ["Zwiebel","onion","vegetables","die"],
  ["Knoblauch","garlic","vegetables","der"],
  ["Paprika","pepper","vegetables","die"],
  ["Brokkoli","broccoli","vegetables","der"],
  ["Blumenkohl","cauliflower","vegetables","der"],
  ["Spinat","spinach","vegetables","der"],
  ["Salat","lettuce / salad","vegetables","der"],
  ["Erbse","pea","vegetables","die"],
  ["Bohne","bean","vegetables","die"],
  ["Mais","corn","vegetables","der"],
  ["Pilz","mushroom","vegetables","der"],

  // Colors
  ["rot","red","colors",""],
  ["blau","blue","colors",""],
  ["grün","green","colors",""],
  ["gelb","yellow","colors",""],
  ["orange","orange","colors",""],
  ["lila","purple","colors",""],
  ["rosa","pink","colors",""],
  ["braun","brown","colors",""],
  ["schwarz","black","colors",""],
  ["weiß","white","colors",""],
  ["grau","gray","colors",""],
  ["beige","beige","colors",""],

  // Home
  ["Haus","house","home","das"],
  ["Wohnung","apartment","home","die"],
  ["Zimmer","room","home","das"],
  ["Küche","kitchen","home","die"],
  ["Bad","bathroom","home","das"],
  ["Tür","door","home","die"],
  ["Fenster","window","home","das"],
  ["Tisch","table","home","der"],
  ["Stuhl","chair","home","der"],
  ["Bett","bed","home","das"],
  ["Schrank","cupboard","home","der"],
  ["Lampe","lamp","home","die"],
  ["Schlüssel","key","home","der"],
  ["Tasche","bag","home","die"],
  ["Handy","mobile phone","home","das"],

  // Places
  ["Stadt","city","places","die"],
  ["Dorf","village","places","das"],
  ["Straße","street","places","die"],
  ["Bahnhof","train station","places","der"],
  ["Schule","school","places","die"],
  ["Arbeit","work","places","die"],
  ["Geschäft","shop","places","das"],
  ["Markt","market","places","der"],
  ["Park","park","places","der"],
  ["Krankenhaus","hospital","places","das"],

  // Time
  ["Tag","day","time","der"],
  ["Woche","week","time","die"],
  ["Monat","month","time","der"],
  ["Jahr","year","time","das"],
  ["Stunde","hour","time","die"],
  ["Minute","minute","time","die"],
  ["Abend","evening","time","der"],
  ["Nacht","night","time","die"],
  ["Pause","break","time","die"],
  ["Wochenende","weekend","time","das"],

  // Verbs
  ["sein","to be","verbs",""],
  ["haben","to have","verbs",""],
  ["machen","to do / make","verbs",""],
  ["gehen","to go","verbs",""],
  ["kommen","to come","verbs",""],
  ["sehen","to see","verbs",""],
  ["hören","to hear","verbs",""],
  ["sprechen","to speak","verbs",""],
  ["sagen","to say","verbs",""],
  ["fragen","to ask","verbs",""],
  ["wissen","to know","verbs",""],
  ["verstehen","to understand","verbs",""],
  ["lernen","to learn","verbs",""],
  ["lesen","to read","verbs",""],
  ["schreiben","to write","verbs",""],
  ["essen","to eat","verbs",""],
  ["trinken","to drink","verbs",""],
  ["schlafen","to sleep","verbs",""],
  ["arbeiten","to work","verbs",""],

  // Adjectives
  ["groß","big","adjectives",""],
  ["klein","small","adjectives",""],
  ["neu","new","adjectives",""],
  ["alt","old","adjectives",""],
  ["schön","beautiful","adjectives",""],
  ["schnell","fast","adjectives",""],
  ["langsam","slow","adjectives",""],
  ["einfach","easy","adjectives",""],
  ["schwer","difficult","adjectives",""],
  ["leicht","light / easy","adjectives",""],
  ["wichtig","important","adjectives",""],
  ["frei","free","adjectives",""],
  ["voll","full","adjectives",""],
  ["leer","empty","adjectives",""],
  ["kalt","cold","adjectives",""],
  ["warm","warm","adjectives",""]
];

const categoryNames = {
  basics:"Basics",
  people:"People",
  body:"Body",
  food:"Food",
  fruit:"Fruit",
  vegetables:"Vegetables",
  colors:"Colors",
  home:"Home",
  places:"Places",
  time:"Time",
  verbs:"Verbs",
  adjectives:"Adjectives"
};

/* ---------------- STATE ---------------- */

let mode = "de-en";
let deck = [];
let index = 0;
let score = 0;
let streak = 0;
let locked = false;
let soundOn = true;

const audio = new (window.AudioContext || window.webkitAudioContext)();

/* ---------------- SOUND ---------------- */

function sound(type){

  if(!soundOn) return;

  if(audio.state === "suspended"){
    audio.resume();
  }

  const notes = {
    correct:[520,700],
    wrong:[230,150],
    reveal:[420,520],
    complete:[500,650,800]
  };

  const oscillator = audio.createOscillator();
  const gain = audio.createGain();

  const sequence = notes[type] || notes.reveal;

  oscillator.connect(gain);
  gain.connect(audio.destination);

  gain.gain.value = .07;
  oscillator.frequency.value = sequence[0];
  oscillator.start();

  sequence.slice(1).forEach((n,i)=>{
    setTimeout(()=>{
      oscillator.frequency.value = n;
    },(i+1)*100);
  });

  setTimeout(()=>{
    oscillator.stop();
  },sequence.length*110+100);
}

/* ---------------- HELPERS ---------------- */

function shuffle(arr){
  const a = [...arr];

  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]] = [a[j],a[i]];
  }

  return a;
}

function randomItems(correct,count=3){

  return shuffle(
    words.filter(w => w !== correct)
  ).slice(0,count);
}

function getCurrent(){
  return deck[index];
}

function updateStats(){

  $("#score").textContent = score;
  $("#streak").textContent = streak;
  $("#progress").textContent =
    `${Math.min(index+1,deck.length)}/${deck.length}`;
}

/* ---------------- DECK ---------------- */

function newDeck(){

  deck = shuffle(words);
  index = 0;
  score = 0;
  streak = 0;

  showCard();
}

/* ---------------- DISPLAY ---------------- */

function showCard(){

  if(index >= deck.length){
    finish();
    return;
  }

  locked = false;

  const word = getCurrent();

  $("#category").textContent = categoryNames[word[2]];
  $("#feedback").className = "feedback";
  $("#feedback").textContent = "";
  $("#nextBtn").hidden = true;

  renderQuestion(word);
  updateStats();
}

function renderQuestion(word){

  let title = "";
  let prompt = "";
  let options = [];

  if(mode === "de-en"){

    title = "German → English";
    prompt = word[0];

    options = shuffle([
      word[1],
      ...randomItems(word).map(w=>w[1])
    ]);

    $("#subPrompt").textContent = "Choose the English meaning.";

  }

  else if(mode === "en-de"){

    title = "English → German";
    prompt = word[1];

    options = shuffle([
      word[0],
      ...randomItems(word).map(w=>w[0])
    ]);

    $("#subPrompt").textContent = "Choose the German word.";

  }

  else if(mode === "quiz"){

    title = "4 Option Quiz";
    prompt = word[0];

    options = shuffle([
      word[1],
      ...randomItems(word).map(w=>w[1])
    ]);

    $("#subPrompt").textContent = "Which English meaning is correct?";

  }

  else if(mode === "article"){

    title = "Article Practice";

    if(!word[3]){
      index++;
      showCard();
      return;
    }

    prompt = word[0];

    options = shuffle(["der","die","das"]);

    $("#subPrompt").textContent = "Which article is correct?";

  }

  else{

    const types = ["de-en","en-de","article"];
    const randomMode =
      types[Math.floor(Math.random()*types.length)];

    renderQuestionWithMode(word,randomMode);
    return;
  }

  $("#modeLabel").textContent = title;
  $("#question").textContent =
    mode === "article"
      ? "Choose the correct article"
      : "What is the correct answer?";

  $("#prompt").textContent = prompt;

  renderOptions(options,word);
}

function renderQuestionWithMode(word,type){

  if(type === "de-en"){

    $("#modeLabel").textContent = "German → English";
    $("#question").textContent = "Translate the German word";
    $("#prompt").textContent = word[0];
    $("#subPrompt").textContent = "Choose the English meaning.";

    renderOptions(
      shuffle([word[1],...randomItems(word).map(w=>w[1])]),
      word
    );

  }else if(type === "en-de"){

    $("#modeLabel").textContent = "English → German";
    $("#question").textContent = "Find the German word";
    $("#prompt").textContent = word[1];
    $("#subPrompt").textContent = "Choose the German word.";

    renderOptions(
      shuffle([word[0],...randomItems(word).map(w=>w[0])]),
      word
    );

  }else{

    if(!word[3]){
      renderQuestionWithMode(word,"de-en");
      return;
    }

    $("#modeLabel").textContent = "Article Practice";
    $("#question").textContent = "Choose the correct article";
    $("#prompt").textContent = word[0];
    $("#subPrompt").textContent = "der · die · das";

    renderOptions(
      shuffle(["der","die","das"]),
      word
    );
  }
}

function renderOptions(options,word){

  const box = $("#answers");
  box.innerHTML = "";

  options.forEach(option=>{

    const button = document.createElement("button");

    button.className = "answer";
    button.textContent = option;

    button.addEventListener("click",()=>{
      checkAnswer(option,word);
    });

    box.appendChild(button);
  });
}

/* ---------------- ANSWERS ---------------- */

function checkAnswer(answer,word){

  if(locked) return;

  let correct;

  if(mode === "de-en" || mode === "quiz"){
    correct = word[1];
  }
  else if(mode === "en-de"){
    correct = word[0];
  }
  else if(mode === "article"){
    correct = word[3];
  }
  else{
    correct =
      answer === word[3] ||
      answer === word[0] ||
      answer === word[1];
  }

  const buttons = $$(".answer");

  buttons.forEach(button=>{
    button.disabled = true;

    if(button.textContent === correct){
      button.classList.add("correct");
    }

    if(button.textContent === answer && answer !== correct){
      button.classList.add("wrong");
    }
  });

  locked = true;

  if(answer === correct){

    score++;
    streak++;

    sound("correct");

    showFeedback(
      `✓ Correct! ${correctAnswerText(word)}`,
      true
    );

  }else{

    streak = 0;

    sound("wrong");

    showFeedback(
      `✗ Wrong. The correct answer is: ${correctAnswerText(word)}`,
      false
    );
  }

  $("#nextBtn").hidden = false;
  updateStats();
}

function correctAnswerText(word){

  if(mode === "article"){
    return `${word[3]} ${word[0]}`;
  }

  if(mode === "en-de"){
    return word[0];
  }

  return word[1];
}

function showFeedback(text,good){

  const box = $("#feedback");

  box.textContent = text;
  box.className =
    `feedback show ${good ? "good" : "bad"}`;
}

/* ---------------- NEXT ---------------- */

function next(){

  index++;

  if(index >= deck.length){
    finish();
  }else{
    showCard();
  }
}

function finish(){

  sound("complete");

  $("#modeLabel").textContent = "Round complete";
  $("#question").textContent = "Great work! 🎉";
  $("#prompt").textContent = `${score} / ${deck.length}`;
  $("#subPrompt").textContent = "Start a new round to keep learning.";

  $("#answers").innerHTML = "";

  showFeedback(
    `You completed the round with a ${Math.round(score/deck.length*100)}% score.`,
    true
  );

  $("#nextBtn").hidden = false;
  $("#nextBtn").textContent = "New round ↻";
}

/* ---------------- MODE BUTTONS ---------------- */

$$(".mode").forEach(button=>{

  button.addEventListener("click",()=>{

    $$(".mode").forEach(b=>b.classList.remove("active"));
    button.classList.add("active");

    mode = button.dataset.mode;

    newDeck();
  });

});

/* ---------------- CONTROLS ---------------- */

$("#nextBtn").addEventListener("click",()=>{

  if(index >= deck.length){
    $("#nextBtn").textContent = "Next word →";
    newDeck();
  }else{
    next();
  }

});

$("#skipBtn").addEventListener("click",()=>{

  if(locked) return;

  streak = 0;
  index++;

  showCard();

});

$("#soundBtn").addEventListener("click",()=>{

  soundOn = !soundOn;

  $("#soundBtn").textContent =
    soundOn ? "🔊" : "🔇";

  if(soundOn) sound("reveal");
});

/* ---------------- KEYBOARD ---------------- */

document.addEventListener("keydown",e=>{

  if(e.key === "Enter" && !$("#nextBtn").hidden){
    $("#nextBtn").click();
  }

  const buttons = $$(".answer");

  if(e.key >= "1" && e.key <= "4"){
    const button = buttons[Number(e.key)-1];

    if(button && !button.disabled){
      button.click();
    }
  }

});

/* ---------------- START ---------------- */

$("#wordCount").textContent =
  `${words.length} words`;

newDeck();