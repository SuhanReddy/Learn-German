// --- FOUNDATIONAL VOCABULARY ENGINE ---
const BASE_VOCABULARY = [
  { article: "das", de: "Haus", en: "house", plural: "Häuser", rule: "Neuter root noun" },
  { article: "der", de: "Tisch", en: "table", plural: "Tische", rule: "Masculine common object" },
  { article: "die", de: "Zeitung", en: "newspaper", plural: "Zeitungen", rule: "Always 'die' because it ends in -ung" },
  { article: "das", de: "Mädchen", en: "girl", plural: "Mädchen", rule: "Always 'das' due to diminutive suffix -chen" },
  { article: "die", de: "Freiheit", en: "freedom", plural: "Freiheiten", rule: "Always 'die' because it ends in -heit" },
  { article: "der", de: "Optimismus", en: "optimism", plural: "-", rule: "Always 'der' because it ends in -ismus" },
  { article: "die", de: "Möglichkeit", en: "possibility", plural: "Möglichkeiten", rule: "Always 'die' because it ends in -keit" },
  { article: "das", de: "Dokument", en: "document", plural: "Dokumente", rule: "Words ending in -ment of Latin origin are 'das'" },
  { article: "die", de: "Universität", en: "university", plural: "Universitäten", rule: "Always 'die' because it ends in -tät" },
  { article: "der", de: "Student", en: "student (male)", plural: "Studenten", rule: "Male persons ending in -ent are 'der'" },
  { article: "die", de: "Musik", en: "music", plural: "-", rule: "Always 'die' because it ends in -ik" },
  { article: "das", de: "Zentrum", en: "center", plural: "Zentren", rule: "Words ending in -um are 'das'" },
  { article: "der", de: "Kaffee", en: "coffee", plural: "-", rule: "Male beverage" },
  { article: "die", de: "Sonne", en: "sun", plural: "-", rule: "Feminine celestial body" },
  { article: "das", de: "Wasser", en: "water", plural: "-", rule: "Neuter element" },
  { article: "der", de: "Apfel", en: "apple", plural: "Äpfel", rule: "Masculine fruit" },
  { article: "die", de: "Katze", en: "cat", plural: "Katzen", rule: "Feminine animal" },
  { article: "das", de: "Buch", en: "book", plural: "Bücher", rule: "Neuter reading item" }
];

// State Variables
let vocabPool = [...BASE_VOCABULARY];
let customVocab = [];
let currentQuizWord = null;
let score = 0;
let streak = 0;
let blitzTimer = null;
let blitzTimeRemaining = 60;
let blitzActive = false;

// --- 16K HIGH-FREQUENCY EXPANSION ENGINE ---
function generateMassFrequencyPack(targetCount) {
  document.getElementById('generatorStatus').innerText = "Expanding...";
  const roots = [
    { de: "Arbeit", en: "work", art: "die", rule: "-heit/-keit/abstract root" },
    { de: "Reise", en: "trip/travel", art: "die", rule: "Common feminine noun" },
    { de: "Schule", en: "school", art: "die", rule: "Feminine educational institution" },
    { de: "Stadt", en: "city", art: "die", rule: "Feminine location" },
    { de: "Bahn", en: "train/track", art: "die", rule: "Feminine transport" },
    { de: "Weg", en: "way/path", art: "der", rule: "Masculine path" },
    { de: "Tag", en: "day", art: "der", rule: "Masculine time unit" },
    { de: "Zeit", en: "time", art: "die", rule: "Feminine time concept" },
    { de: "Leben", en: "life", art: "das", rule: "Substantivized infinitive (always das)" },
    { de: "Bild", en: "picture", art: "das", rule: "Neuter media word" },
    { de: "Frage", en: "question", art: "die", rule: "Feminine inquiry" },
    { de: "Kraft", en: "power/strength", art: "die", rule: "Feminine physical property" },
    { de: "Raum", en: "space/room", art: "der", rule: "Masculine spatial unit" },
    { de: "Plan", en: "plan", art: "der", rule: "Masculine conceptual plan" },
    { de: "Land", en: "country", art: "das", rule: "Neuter geography" },
    { de: "Hand", en: "hand", art: "die", rule: "Feminine body part" },
    { de: "Kopf", en: "head", art: "der", rule: "Masculine body part" },
    { de: "Herz", en: "heart", art: "das", rule: "Irregular neuter noun" },
    { de: "Auge", en: "eye", art: "das", rule: "Neuter sensory organ" },
    { de: "Wort", en: "word", art: "das", rule: "Neuter language unit" }
  ];

  const prefixes = [
    "Haupt", "Vor", "Nach", "Groß", "Klein", "Innen", "Außen", "Ober", "Unter", 
    "Fern", "Nah", "Welt", "Eigen", "Grund", "Neu", "Alt", "Gast", "Super", "Muster"
  ];

  const suffixes = [
    { suf: "ung", art: "die", en: "ing / process" },
    { suf: "heit", art: "die", en: "hood / ness" },
    { suf: "keit", art: "die", en: "ability / ness" },
    { suf: "schaft", art: "die", en: "ship" },
    { suf: "chen", art: "das", en: "little" },
    { suf: "ismus", art: "der", en: "ism" }
  ];

  const generated = [];

  while (vocabPool.length + generated.length < targetCount) {
    const root = roots[Math.floor(Math.random() * roots.length)];
    const mode = Math.random();

    if (mode < 0.45) {
      const pfx = prefixes[Math.floor(Math.random() * prefixes.length)];
      generated.push({
        article: root.art,
        de: pfx + root.de,
        en: pfx.toLowerCase() + " " + root.en,
        plural: root.de + "s",
        rule: `Compound noun: always inherits article from last component ('${root.art}${root.de}')`
      });
    } else if (mode < 0.8) {
      const sufObj = suffixes[Math.floor(Math.random() * suffixes.length)];
      const baseName = root.de.substring(0, Math.min(root.de.length, 5));
      generated.push({
        article: sufObj.art,
        de: baseName + sufObj.suf,
        en: root.en + " " + sufObj.en,
        plural: sufObj.art === "die" ? baseName + sufObj.suf + "en" : baseName + sufObj.suf,
        rule: `Derived noun: words ending with -${sufObj.suf} are strictly${sufObj.art}`
      });
    } else {
      const root2 = roots[Math.floor(Math.random() * roots.length)];
      if (root.de !== root2.de) {
        generated.push({
          article: root2.art,
          de: root.de + root2.de,
          en: root.en + " " + root2.en,
          plural: root2.de + "e",
          rule: `Compound word: gender governed strictly by the final word ('${root2.art}${root2.de}')`
        });
      }
    }
  }

  vocabPool = [...vocabPool, ...generated];
  updateVocabCounters();
  renderLexiconTable();
  document.getElementById('generatorStatus').innerText = "Active (" + vocabPool.length + " words)";
  alert(`Success! Successfully generated and loaded active vocabulary to ${vocabPool.length} words!`);
}

function resetVocabularyToDefault() {
  vocabPool = [...BASE_VOCABULARY];
  customVocab = [];
  updateVocabCounters();
  renderLexiconTable();
  initAllQuizzes();
}

function handleFileImport(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const text = e.target.result;
    try {
      if (file.name.endsWith('.json')) {
        const parsed = JSON.parse(text);
        if (Array.isArray(parsed)) {
          importVocabArray(parsed);
          return;
        }
      }
      const lines = text.split('\n');
      const newItems = [];
      for (let line of lines) {
        const parts = line.split(/[,\t;|]/).map(s => s.trim());
        if (parts.length >= 2) {
          let article = "die";
          let de = parts[0];
          let en = parts[1];

          if (parts[2] && ["der", "die", "das"].includes(parts[2].toLowerCase())) {
            article = parts[2].toLowerCase();
          } else if (de.toLowerCase().startsWith("der ")) {
            article = "der";
            de = de.substring(4);
          } else if (de.toLowerCase().startsWith("die ")) {
            article = "die";
            de = de.substring(4);
          } else if (de.toLowerCase().startsWith("das ")) {
            article = "das";
            de = de.substring(4);
          }

          newItems.push({
            article: article,
            de: de,
            en: en,
            rule: "Imported custom vocabulary item"
          });
        }
      }
      importVocabArray(newItems);
    } catch (err) {
      alert("Error parsing file. Please provide valid CSV (German, English, Article) or JSON.");
    }
  };
  reader.readAsText(file);
}

function importVocabArray(items) {
  const valid = items.filter(i => i.de && i.en);
  customVocab = [...customVocab, ...valid];
  vocabPool = [...vocabPool, ...valid];
  updateVocabCounters();
  renderLexiconTable();
  alert(`Imported ${valid.length} items successfully! Active dictionary now holds ${vocabPool.length} words.`);
}

function updateVocabCounters() {
  const count = vocabPool.length;
  document.getElementById('totalVocabCounter').innerText = count.toLocaleString();
  document.getElementById('customPackCounter').innerText = customVocab.length.toLocaleString();
  document.getElementById('vocabCountBadge').innerText = `${count.toLocaleString()} Words Active`;
}

// --- NAVIGATION & TABS ---
function switchTab(tabId) {
  document.querySelectorAll('.view-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  
  const target = document.getElementById(tabId);
  if (target) target.classList.add('active');

  const activeBtn = document.querySelector(`.tab-btn[data-tab="${tabId}"]`);
  if (activeBtn) activeBtn.classList.add('active');

  if (tabId === 'articleTab') loadNextArticleQuestion();
  if (tabId === 'enDeTab') loadNextEnDeQuestion();
  if (tabId === 'deEnTab') loadNextDeEnQuestion();
  if (tabId === 'voiceTab') loadNextVoiceQuestion();
  if (tabId === 'lexiconTab') renderLexiconTable();
}

function openWelcomeModal() {
  document.getElementById('welcomeModal').style.display = 'flex';
}

function closeWelcomeModal() {
  document.getElementById('welcomeModal').style.display = 'none';
}

function launchFromModal(tabId) {
  closeWelcomeModal();
  switchTab(tabId);
}

// --- ARTICLE QUIZ ---
function loadNextArticleQuestion() {
  const filtered = vocabPool.filter(w => w.article && ["der", "die", "das"].includes(w.article.toLowerCase()));
  currentQuizWord = filtered[Math.floor(Math.random() * filtered.length)];
  
  document.getElementById('artPromptWord').innerText = currentQuizWord.de;
  document.getElementById('artPromptMeaning').innerText = currentQuizWord.en;
  const exp = document.getElementById('artExplanation');
  exp.classList.remove('visible');
  exp.innerText = "";
}

function submitArticle(chosen) {
  if (!currentQuizWord) return;
  const isCorrect = chosen.toLowerCase() === currentQuizWord.article.toLowerCase();
  const exp = document.getElementById('artExplanation');
  
  if (isCorrect) {
    score += 15;
    streak += 1;
    exp.style.background = "#D1FAE5";
    exp.style.color = "#065F46";
    exp.innerHTML = `<strong>Richtig! (Correct)</strong> — <em>${currentQuizWord.article}${currentQuizWord.de}</em> (${currentQuizWord.en}).<br>${currentQuizWord.rule || ''}`;
  } else {
    streak = 0;
    exp.style.background = "#FEE2E2";
    exp.style.color = "#991B1B";
    exp.innerHTML = `<strong>Falsch (Incorrect).</strong> The correct article is <strong>${currentQuizWord.article}</strong> (${currentQuizWord.article} ${currentQuizWord.de}).<br>${currentQuizWord.rule || ''}`;
  }
  exp.classList.add('visible');
  updateStats();
  setTimeout(loadNextArticleQuestion, 1600);
}

// --- 4-CHOICE TRANSLATION QUIZZES ---
let currentEnDe = null;
function loadNextEnDeQuestion() {
  currentEnDe = vocabPool[Math.floor(Math.random() * vocabPool.length)];
  document.getElementById('enDePrompt').innerText = `"${currentEnDe.en}"`;

  const distractors = [];
  while (distractors.length < 3) {
    const r = vocabPool[Math.floor(Math.random() * vocabPool.length)];
    if (r.de !== currentEnDe.de && !distractors.includes(r.de)) {
      distractors.push(r.de);
    }
  }
  const options = [...distractors, currentEnDe.de].sort(() => Math.random() - 0.5);
  
  const container = document.getElementById('enDeChoices');
  container.innerHTML = "";
  options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.innerText = opt;
    btn.onclick = () => submitEnDeChoice(opt, btn);
    container.appendChild(btn);
  });
  document.getElementById('enDeExplanation').classList.remove('visible');
}

function submitEnDeChoice(selected, btn) {
  const isCorrect = selected === currentEnDe.de;
  const exp = document.getElementById('enDeExplanation');
  
  if (isCorrect) {
    btn.classList.add('correct');
    score += 10;
    streak += 1;
    exp.style.background = "#D1FAE5";
    exp.style.color = "#065F46";
    exp.innerHTML = `<strong>Correct!</strong> <em>${currentEnDe.de}</em> translates to "${currentEnDe.en}".`;
  } else {
    btn.classList.add('wrong');
    streak = 0;
    exp.style.background = "#FEE2E2";
    exp.style.color = "#991B1B";
    exp.innerHTML = `<strong>Incorrect.</strong> The German word is <strong>${currentEnDe.de}</strong>.`;
  }
  exp.classList.add('visible');
  updateStats();
  setTimeout(loadNextEnDeQuestion, 1400);
}

let currentDeEn = null;
function loadNextDeEnQuestion() {
  currentDeEn = vocabPool[Math.floor(Math.random() * vocabPool.length)];
  const prefix = currentDeEn.article ? `${currentDeEn.article} ` : '';
  document.getElementById('deEnPrompt').innerText = prefix + currentDeEn.de;

  const distractors = [];
  while (distractors.length < 3) {
    const r = vocabPool[Math.floor(Math.random() * vocabPool.length)];
    if (r.en !== currentDeEn.en && !distractors.includes(r.en)) {
      distractors.push(r.en);
    }
  }
  const options = [...distractors, currentDeEn.en].sort(() => Math.random() - 0.5);
  
  const container = document.getElementById('deEnChoices');
  container.innerHTML = "";
  options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.innerText = opt;
    btn.onclick = () => submitDeEnChoice(opt, btn);
    container.appendChild(btn);
  });
  document.getElementById('deEnExplanation').classList.remove('visible');
}

function submitDeEnChoice(selected, btn) {
  const isCorrect = selected === currentDeEn.en;
  const exp = document.getElementById('deEnExplanation');
  
  if (isCorrect) {
    btn.classList.add('correct');
    score += 10;
    streak += 1;
    exp.style.background = "#D1FAE5";
    exp.style.color = "#065F46";
    exp.innerHTML = `<strong>Correct!</strong> "${currentDeEn.en}" is the right translation.`;
  } else {
    btn.classList.add('wrong');
    streak = 0;
    exp.style.background = "#FEE2E2";
    exp.style.color = "#991B1B";
    exp.innerHTML = `<strong>Incorrect.</strong> The correct meaning is <strong>"${currentDeEn.en}"</strong>.`;
  }
  exp.classList.add('visible');
  updateStats();
  setTimeout(loadNextDeEnQuestion, 1400);
}

// --- SPEAKING & TEXT INPUT PRACTICE ---
let currentVoiceItem = null;
let recognition = null;
let isRecording = false;

function initSpeechRecognition() {
  const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SpeechRec) {
    recognition = new SpeechRec();
    recognition.lang = 'de-DE';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = function(event) {
      const spoken = event.results[0][0].transcript;
      document.getElementById('typeInputAnswer').value = spoken;
      evaluateVoiceOrTextAnswer(spoken);
      stopRecordingState();
    };

    recognition.onerror = function() {
      document.getElementById('voiceStatus').innerText = "Microphone error or permission denied. You can type instead.";
      stopRecordingState();
    };

    recognition.onend = function() {
      stopRecordingState();
    };
  }
}

function toggleVoiceRecognition() {
  if (!recognition) initSpeechRecognition();
  if (!recognition) {
    alert("Speech Recognition is not supported by your current browser. You can type answers in the input box!");
    return;
  }
  if (!isRecording) {
    try {
      recognition.start();
      isRecording = true;
      document.getElementById('micBtn').classList.add('recording');
      document.getElementById('voiceStatus').innerText = "Listening... Speak in German now.";
    } catch (e) {
      stopRecordingState();
    }
  } else {
    recognition.stop();
    stopRecordingState();
  }
}

function stopRecordingState() {
  isRecording = false;
  const btn = document.getElementById('micBtn');
  if (btn) btn.classList.remove('recording');
}

function loadNextVoiceQuestion() {
  currentVoiceItem = vocabPool[Math.floor(Math.random() * vocabPool.length)];
  const prefix = currentVoiceItem.article ? `${currentVoiceItem.article} ` : '';
  document.getElementById('voiceWordPrompt').innerText = prefix + currentVoiceItem.de;
  document.getElementById('voiceTranslationPrompt').innerText = `Meaning: "${currentVoiceItem.en}"`;
  document.getElementById('typeInputAnswer').value = "";
  document.getElementById('voiceExplanation').classList.remove('visible');
  document.getElementById('voiceStatus').innerText = "Click microphone and speak or type the word above:";
}

function submitTextAnswer() {
  const val = document.getElementById('typeInputAnswer').value.trim();
  if (!val) return;
  evaluateVoiceOrTextAnswer(val);
}

function evaluateVoiceOrTextAnswer(input) {
  if (!currentVoiceItem) return;
  const normalize = s => s.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "").trim();
  const userClean = normalize(input);
  const targetClean = normalize(currentVoiceItem.de);
  const fullTargetClean = currentVoiceItem.article ? normalize(`${currentVoiceItem.article} ${currentVoiceItem.de}`) : targetClean;

  const isMatch = (userClean === targetClean || userClean === fullTargetClean);
  const exp = document.getElementById('voiceExplanation');

  if (isMatch) {
    score += 20;
    streak += 1;
    exp.style.background = "#D1FAE5";
    exp.style.color = "#065F46";
    exp.innerHTML = `<strong>Hervorragend! (Excellent match!)</strong> You said/typed: "<em>${input}</em>"`;
  } else {
    exp.style.background = "#FEE2E2";
    exp.style.color = "#991B1B";
    exp.innerHTML = `<strong>Close!</strong> Target: <strong>${currentVoiceItem.de}</strong>. You entered: "${input}".`;
  }
  exp.classList.add('visible');
  updateStats();
  setTimeout(loadNextVoiceQuestion, 1800);
}

// --- 60s BLITZ MODE ---
let blitzCurrent = null;
function startBlitzSession() {
  if (blitzActive) return;
  blitzActive = true;
  blitzTimeRemaining = 60;
  document.getElementById('blitzScore').innerText = "0";
  document.getElementById('blitzStartBtn').style.display = "none";

  blitzTimer = setInterval(() => {
    blitzTimeRemaining -= 1;
    document.getElementById('blitzTime').innerText = blitzTimeRemaining;
    if (blitzTimeRemaining <= 0) {
      clearInterval(blitzTimer);
      blitzActive = false;
      alert(`Time's up! Your Blitz Score: ${document.getElementById('blitzScore').innerText}`);
      document.getElementById('blitzStartBtn').style.display = "inline-block";
    }
  }, 1000);

  loadNextBlitzQuestion();
}

function loadNextBlitzQuestion() {
  if (!blitzActive) return;
  blitzCurrent = vocabPool[Math.floor(Math.random() * vocabPool.length)];
  document.getElementById('blitzWord').innerText = blitzCurrent.de;

  const distractors = [];
  while (distractors.length < 3) {
    const r = vocabPool[Math.floor(Math.random() * vocabPool.length)];
    if (r.en !== blitzCurrent.en && !distractors.includes(r.en)) {
      distractors.push(r.en);
    }
  }
  const opts = [...distractors, blitzCurrent.en].sort(() => Math.random() - 0.5);
  const container = document.getElementById('blitzChoices');
  container.innerHTML = "";
  opts.forEach(o => {
    const b = document.createElement('button');
    b.className = 'choice-btn';
    b.innerText = o;
    b.onclick = () => {
      if (!blitzActive) return;
      if (o === blitzCurrent.en) {
        let bs = parseInt(document.getElementById('blitzScore').innerText) + 1;
        document.getElementById('blitzScore').innerText = bs;
      }
      loadNextBlitzQuestion();
    };
    container.appendChild(b);
  });
}

// --- TEXT-TO-SPEECH (TTS) ---
function speakCurrentWord() {
  if (!currentQuizWord) return;
  speakGerman(`${currentQuizWord.article} ${currentQuizWord.de}`);
}

function speakCurrentGerman() {
  if (!currentDeEn) return;
  speakGerman(`${currentDeEn.article || ''} ${currentDeEn.de}`);
}

function speakGerman(text) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'de-DE';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  }
}

// --- LEXICON TABLE EXPLORER ---
function renderLexiconTable(items = null) {
  const tbody = document.getElementById('lexiconTbody');
  if (!tbody) return;
  tbody.innerHTML = "";
  const list = items || vocabPool.slice(0, 150);

  list.forEach(item => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong style="color:var(--${item.article || 'der'}-color)">${item.article || '-'}</strong></td>
      <td><strong>${item.de}</strong></td>
      <td>${item.en}</td>
      <td><button class="btn-icon" data-audio="${item.article ? item.article + ' ' : ''}${item.de}">🔊</button></td>
    `;
    tbody.appendChild(tr);
  });

  tbody.querySelectorAll('[data-audio]').forEach(btn => {
    btn.onclick = () => speakGerman(btn.getAttribute('data-audio'));
  });
}

function filterLexiconTable() {
  const q = document.getElementById('lexSearchInput').value.toLowerCase().trim();
  if (!q) {
    renderLexiconTable();
    return;
  }
  const filtered = vocabPool.filter(w => 
    w.de.toLowerCase().includes(q) || 
    w.en.toLowerCase().includes(q)
  ).slice(0, 150);
  renderLexiconTable(filtered);
}

function updateStats() {
  document.getElementById('xpStat').innerText = score;
  document.getElementById('streakStat').innerText = streak;
}

function initAllQuizzes() {
  loadNextArticleQuestion();
  loadNextEnDeQuestion();
  loadNextDeEnQuestion();
  loadNextVoiceQuestion();
  updateVocabCounters();
  renderLexiconTable();
}

// --- EVENT BINDINGS ---
window.addEventListener('DOMContentLoaded', () => {
  // Navigation
  document.getElementById('brandHomeBtn').addEventListener('click', openWelcomeModal);
  document.getElementById('openInfoBtn').addEventListener('click', openWelcomeModal);
  document.getElementById('closeModalBtn').addEventListener('click', closeWelcomeModal);

  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });

  document.querySelectorAll('.welcome-tile').forEach(tile => {
    tile.addEventListener('click', () => launchFromModal(tile.dataset.launch));
  });

  // Article Quiz
  document.getElementById('listenArtBtn').addEventListener('click', speakCurrentWord);
  document.querySelectorAll('.btn-art').forEach(btn => {
    btn.addEventListener('click', () => submitArticle(btn.dataset.art));
  });

  // Translation Listen
  document.getElementById('listenDeEnBtn').addEventListener('click', speakCurrentGerman);

  // Voice / Input
  document.getElementById('micBtn').addEventListener('click', toggleVoiceRecognition);
  document.getElementById('submitVoiceTextBtn').addEventListener('click', submitTextAnswer);
  document.getElementById('typeInputAnswer').addEventListener('keydown', e => {
    if (e.key === 'Enter') submitTextAnswer();
  });

  // Blitz
  document.getElementById('blitzStartBtn').addEventListener('click', startBlitzSession);

  // Pack Manager
  document.getElementById('gen2500Btn').addEventListener('click', () => generateMassFrequencyPack(2500));
  document.getElementById('gen6000Btn').addEventListener('click', () => generateMassFrequencyPack(6000));
  document.getElementById('gen14000Btn').addEventListener('click', () => generateMassFrequencyPack(14000));
  document.getElementById('resetVocabBtn').addEventListener('click', resetVocabularyToDefault);
  document.getElementById('dropArea').addEventListener('click', () => document.getElementById('fileInput').click());
  document.getElementById('fileInput').addEventListener('change', handleFileImport);

  // Lexicon Search
  document.getElementById('lexSearchInput').addEventListener('input', filterLexiconTable);

  // Keyboard Shortcuts (1, 2, 3)
  window.addEventListener('keydown', (e) => {
    if (document.getElementById('articleTab').classList.contains('active')) {
      if (e.key === '1') submitArticle('der');
      if (e.key === '2') submitArticle('die');
      if (e.key === '3') submitArticle('das');
    }
  });

  initSpeechRecognition();
  initAllQuizzes();
});