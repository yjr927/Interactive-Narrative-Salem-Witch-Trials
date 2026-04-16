const ROLES = {
  judge: "Judge",
  accused: "Accused Woman",
  jury: "Juror",
};

const CHARACTERS = {
  magistrate: {
    name: "Magistrate",
    portrait: "./assets/characters/magistrate-portrait.jpg",
    close: "./assets/characters/magistrate-portrait.jpg",
    focusFit: "cover",
    focusPos: "center 42%",
  },
  accused: {
    name: "The Accused",
    portrait: "./assets/characters/accused-sheet.jpg",
    close: "./assets/characters/accused-close.jpg",
    focusFit: "cover",
    focusPos: "center 42%",
  },
  juryA: {
    name: "Juror A",
    portrait: "./assets/characters/jury-a-portrait.jpg",
    close: "./assets/characters/jury-a-portrait.jpg",
    focusFit: "cover",
    focusPos: "center 42%",
  },
  juryB: {
    name: "Juror B",
    portrait: "./assets/characters/jury-b-portrait.jpg",
    close: "./assets/characters/jury-b-portrait.jpg",
    focusFit: "cover",
    focusPos: "center 42%",
  },
  juryC: {
    name: "Juror C",
    portrait: "./assets/characters/jury-c-portrait.jpg",
    close: "./assets/characters/jury-c-portrait.jpg",
    focusFit: "cover",
    focusPos: "center 42%",
  },
  juryD: {
    name: "Juror D",
    portrait: "./assets/characters/jury-d-portrait.jpg",
    close: "./assets/characters/jury-d-portrait.jpg",
    focusFit: "cover",
    focusPos: "center 42%",
  },
};

const CHARACTER_ORDER = ["magistrate", "accused", "juryA", "juryB", "juryC", "juryD"];

const ACTS = [
  {
    id: "I",
    title: "Act I · Accusation",
    scene: {
      judge: "./assets/scenes/scene-1-accusation.jpg",
      accused: "./assets/scenes/scene-1-accusation.jpg",
      jury: "./assets/scenes/scene-1-accusation.jpg",
    },
    caption:
      "Scene 1 — Accusation: public panic enters the courtroom before any real evidence is tested.",
    dialogue: [
      {
        speaker: "magistrate",
        text: "Bring the accused forward. This court will hear the charge.",
      },
      {
        speaker: "accused",
        text: "I stand here innocent. Fear has named me before truth could speak.",
      },
      {
        speaker: "juryA",
        text: "The whole town is watching. If we hesitate, they will call us weak.",
      },
      {
        speaker: "juryD",
        text: "I hear more panic than proof. Yet no one in this room feels free to say it.",
      },
    ],
    narratives: {
      judge:
        "Salem, 1692. People outside the court demand punishment now. You sit with the court record, knowing the town wants certainty more than truth.",
      accused:
        "You are pushed into the courtroom in rope cuffs. A neighbor says you speak with the devil. You know this claim started after a land dispute.",
      jury:
        "You take your seat with the other jurors. A man whispers, 'If she goes free, we are next.' Fear is already shaping the room.",
    },
    evidence: {
      judge: [
        "A minister's letter says disorder comes from sinful women.",
        "Two girls claim they saw the accused woman's spirit.",
        "No physical proof has been shown.",
      ],
      accused: [
        "Your main accuser has a known conflict with your family.",
        "The spirit sighting happened when you were home with your daughter.",
        "No one is willing to defend you in open court.",
      ],
      jury: [
        "Young witnesses cry and describe ghostly attacks.",
        "The town recently suffered illness and infant deaths.",
        "The land conflict is not read aloud.",
      ],
    },
    choices: {
      judge: [
        {
          text: "Allow spirit testimony to calm the crowd.",
          effects: { fear: 2, bias: 2, power: 1, awareness: -1 },
        },
        {
          text: "Ask for stronger proof, but keep the case open.",
          effects: { fear: 1, bias: 1, power: 2, awareness: 1 },
        },
        {
          text: "Quietly remove the land conflict from record.",
          effects: { fear: 2, bias: 3, power: 2, awareness: -2 },
        },
      ],
      accused: [
        {
          text: "Deny the charge and explain the land dispute.",
          effects: { fear: 2, bias: 1, power: -1, awareness: 2 },
        },
        {
          text: "Beg for mercy and speak softly.",
          effects: { fear: 1, bias: 2, power: -2, awareness: 0 },
        },
        {
          text: "Stay silent under hostile questioning.",
          effects: { fear: 2, bias: 2, power: -1, awareness: 1 },
        },
      ],
      jury: [
        {
          text: "Follow the crowd and trust the spirit claim.",
          effects: { fear: 2, bias: 2, power: 0, awareness: -1 },
        },
        {
          text: "Ask for background details, but avoid open conflict.",
          effects: { fear: 1, bias: 1, power: 1, awareness: 1 },
        },
        {
          text: "Publicly challenge spirit evidence.",
          effects: { fear: 2, bias: 0, power: -1, awareness: 3 },
        },
      ],
    },
  },
  {
    id: "II",
    title: "Act II · Examination",
    scene: {
      judge: "./assets/scenes/scene-2-exam-angle-a.jpg",
      accused: "./assets/scenes/scene-2-exam-angle-b.jpg",
      jury: "./assets/scenes/scene-2-exam-angle-b.jpg",
    },
    caption:
      "Scene 2 — Examination: a staged interrogation where scrutiny grows louder than reason.",
    dialogue: [
      {
        speaker: "magistrate",
        text: "Read the prayer. If your voice trembles, this court will notice.",
      },
      {
        speaker: "accused",
        text: "My pause is fear, not evil. You record my breathing as if it were a crime.",
      },
      {
        speaker: "juryB",
        text: "The witness stories conflict, but the room wants one clean answer.",
      },
      {
        speaker: "juryC",
        text: "This no longer feels like a search for truth. It feels like a trap already closed.",
      },
    ],
    narratives: {
      judge:
        "The hearing becomes a performance. Each pause from the accused is called suspicious. You see contradictions, but pressure for order keeps rising.",
      accused:
        "You are told to recite prayer as proof of innocence. You hesitate for a second, and the clerk writes 'unnatural behavior.' The rules are not made for you.",
      jury:
        "Questions sound less like a search for truth and more like a trap. When the accused explains herself, people call it trickery.",
    },
    evidence: {
      judge: [
        "Court notes say the accused trembled while answering.",
        "Witness statements conflict on time and place.",
        "Town leaders warn that acquittal may trigger unrest.",
      ],
      accused: [
        "Your prayer hesitation is framed as demonic resistance.",
        "An older woman who supports you is blocked from testifying.",
        "The court records only parts that hurt your case.",
      ],
      jury: [
        "Witness stories conflict, but the court favors certainty.",
        "A defense witness is turned away at the door.",
        "Rumors say women with healing skills are suspicious.",
      ],
    },
    choices: {
      judge: [
        {
          text: "Push strict judgment and silence objections.",
          effects: { fear: 2, bias: 2, power: 2, awareness: -1 },
        },
        {
          text: "Let one defense witness speak.",
          effects: { fear: 1, bias: 0, power: 1, awareness: 2 },
        },
        {
          text: "Call contradictions the work of the devil.",
          effects: { fear: 2, bias: 3, power: 1, awareness: -2 },
        },
      ],
      accused: [
        {
          text: "Answer each claim, even when interrupted.",
          effects: { fear: 2, bias: 0, power: -1, awareness: 2 },
        },
        {
          text: "Say you may have been tempted, hoping for mercy.",
          effects: { fear: 1, bias: 3, power: -2, awareness: -1 },
        },
        {
          text: "Ask the clerk to record your full words.",
          effects: { fear: 1, bias: 1, power: 0, awareness: 1 },
        },
      ],
      jury: [
        {
          text: "Accept 'better safe than sorry' logic.",
          effects: { fear: 2, bias: 3, power: 0, awareness: -2 },
        },
        {
          text: "Discuss contradictions quietly with others.",
          effects: { fear: 1, bias: 1, power: 1, awareness: 1 },
        },
        {
          text: "Request inclusion of blocked testimony.",
          effects: { fear: 2, bias: 0, power: -1, awareness: 2 },
        },
      ],
    },
  },
  {
    id: "III",
    title: "Act III · Deliberation",
    scene: {
      judge: "./assets/scenes/scene-3-deliberation.jpg",
      accused: "./assets/scenes/scene-3-deliberation.jpg",
      jury: "./assets/scenes/scene-3-deliberation.jpg",
    },
    caption:
      "Scene 3 — Deliberation: authority gathers at the table while the accused is left alone in shadow.",
    dialogue: [
      {
        speaker: "juryA",
        text: "Town leaders sent word. They demand a fast verdict before sunrise.",
      },
      {
        speaker: "magistrate",
        text: "Then we move quickly. The town asks for order, and order asks for sacrifice.",
      },
      {
        speaker: "accused",
        text: "In the cell, I write the truth. I do not know if this court will let it survive.",
      },
      {
        speaker: "juryD",
        text: "If fear is enough to convict, then none of us are safe from the next accusation.",
      },
    ],
    narratives: {
      judge:
        "Night falls. A message from town leaders says the verdict must come soon. They want closure, not complexity.",
      accused:
        "In a cold cell, you write a final statement. You do not know whether anyone will read it without edits.",
      jury:
        "In the jury room, doubt grows quiet. The loudest voices repeat that fear itself is proof.",
    },
    evidence: {
      judge: [
        "Officials demand a quick verdict to calm the town.",
        "Most jurors now lean toward guilt.",
        "Lack of physical proof is being ignored.",
      ],
      accused: [
        "Your written statement is edited before review.",
        "A guard says naming another woman could help you.",
        "You know that choice would harm someone else.",
      ],
      jury: [
        "Some jurors fear social punishment for dissent.",
        "The court frames mercy as weakness.",
        "No new physical evidence appears.",
      ],
    },
    choices: {
      judge: [
        {
          text: "Move quickly toward conviction.",
          effects: { fear: 2, bias: 2, power: 2, awareness: -1 },
        },
        {
          text: "Delay verdict and ask for review.",
          effects: { fear: 1, bias: 0, power: 1, awareness: 2 },
        },
        {
          text: "Archive process flaws in a hidden note.",
          effects: { fear: 1, bias: 1, power: 1, awareness: 2 },
        },
      ],
      accused: [
        {
          text: "Refuse to accuse others.",
          effects: { fear: 2, bias: 0, power: -1, awareness: 3 },
        },
        {
          text: "Name another woman to seek survival.",
          effects: { fear: 1, bias: 3, power: -1, awareness: -2 },
        },
        {
          text: "Write a letter to your daughter.",
          effects: { fear: 1, bias: 1, power: 0, awareness: 2 },
        },
      ],
      jury: [
        {
          text: "Vote guilty for a sense of safety.",
          effects: { fear: 2, bias: 2, power: 1, awareness: -1 },
        },
        {
          text: "Raise doubt, but do not insist.",
          effects: { fear: 1, bias: 1, power: 0, awareness: 1 },
        },
        {
          text: "Hold your dissent and request it on record.",
          effects: { fear: 2, bias: 0, power: -1, awareness: 3 },
        },
      ],
    },
  },
  {
    id: "IV",
    title: "Act IV · Sentence",
    scene: {
      judge: "./assets/scenes/scene-4-sentence.jpg",
      accused: "./assets/scenes/scene-4-sentence.jpg",
      jury: "./assets/scenes/scene-4-sentence.jpg",
    },
    caption:
      "Scene 4 — Sentence: formal order is performed, while structural injustice is sealed into record.",
    dialogue: [
      {
        speaker: "magistrate",
        text: "By authority of this court, the accused is judged guilty.",
      },
      {
        speaker: "accused",
        text: "You call me witch, and erase every honest part of my life with one word.",
      },
      {
        speaker: "juryB",
        text: "The room sounds relieved. But relief is not the same as justice.",
      },
      {
        speaker: "juryC",
        text: "This verdict will be written as order. We know it was fear.",
      },
    ],
    narratives: {
      judge:
        "The bell rings. You read the sentence and the crowd exhales with relief. Still, you know the court never resolved its core contradictions.",
      accused:
        "You stand to hear the sentence. The word 'witch' erases the life you built: care work, healing, family, prayer.",
      jury:
        "The gavel falls. People say order has returned. You feel that fear has simply been placed onto one woman.",
    },
    evidence: {
      judge: [
        "Official records hide key process problems.",
        "The public praises a fast and decisive court.",
        "The victim's voice remains marginal in the archive.",
      ],
      accused: [
        "Your final words are shortened in the record.",
        "Silence is interpreted as guilt.",
        "There is no meaningful appeal path.",
      ],
      jury: [
        "The final report describes broad agreement.",
        "Dissenting voices are minimized as noise.",
        "Execution is set for dawn.",
      ],
    },
    choices: {
      judge: [
        {
          text: "Read the standard sentence without comment.",
          effects: { fear: 1, bias: 1, power: 2, awareness: -1 },
        },
        {
          text: "Add a quiet note: evidence is weak.",
          effects: { fear: 1, bias: 0, power: 1, awareness: 2 },
        },
        {
          text: "Publicly declare the trial fully just.",
          effects: { fear: 2, bias: 2, power: 2, awareness: -2 },
        },
      ],
      accused: [
        {
          text: "Maintain your innocence to the end.",
          effects: { fear: 1, bias: 0, power: 0, awareness: 2 },
        },
        {
          text: "Ask the crowd for mercy.",
          effects: { fear: 1, bias: 1, power: -1, awareness: 0 },
        },
        {
          text: "Leave words for future generations.",
          effects: { fear: 1, bias: 0, power: 0, awareness: 3 },
        },
      ],
      jury: [
        {
          text: "Support the sentence and move on.",
          effects: { fear: 1, bias: 2, power: 1, awareness: -1 },
        },
        {
          text: "Ask that your doubts be documented.",
          effects: { fear: 1, bias: 0, power: 0, awareness: 2 },
        },
        {
          text: "Tell your family what felt wrong.",
          effects: { fear: 1, bias: 0, power: 0, awareness: 2 },
        },
      ],
    },
  },
];

const state = {
  role: null,
  step: 0,
  fear: 0,
  bias: 0,
  power: 0,
  awareness: 0,
  chosen: [],
  dialogueIndex: 0,
  dialogueDone: false,
};

const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const endScreen = document.getElementById("end-screen");
const scenePanel = document.querySelector(".scene-panel");
const dialogueStage = document.getElementById("dialogue-stage");
const sceneContinueBtn = document.getElementById("scene-continue-btn");
const narrativeEl = document.getElementById("narrative");
const evidenceList = document.getElementById("evidence-list");
const choicesEl = document.getElementById("choices");
const chapterTag = document.getElementById("chapter-tag");
const roleTag = document.getElementById("role-tag");
const fearValue = document.getElementById("fear-value");
const biasValue = document.getElementById("bias-value");
const powerValue = document.getElementById("power-value");
const sceneImage = document.getElementById("scene-image");
const sceneCaption = document.getElementById("scene-caption");
const finalVerdict = document.getElementById("final-verdict");
const reflection = document.getElementById("reflection");
const restartBtn = document.getElementById("restart-btn");
const roleButtons = document.querySelectorAll(".role-btn");
const actContent = document.getElementById("act-content");
const speakerFocusImage = document.getElementById("speaker-focus-image");
const characterRow = document.getElementById("character-row");
const speakerName = document.getElementById("speaker-name");
const dialogueLine = document.getElementById("dialogue-line");
const nextLineBtn = document.getElementById("next-line-btn");

const timers = {};

roleButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    startGame(btn.dataset.role);
  });
});

restartBtn.addEventListener("click", resetGame);
nextLineBtn.addEventListener("click", goToNextDialogueLine);
sceneContinueBtn.addEventListener("click", startDialoguePhase);

function startGame(role) {
  state.role = role;
  state.step = 0;
  state.fear = 0;
  state.bias = 0;
  state.power = role === "judge" ? 2 : role === "jury" ? 1 : 0;
  state.awareness = 0;
  state.chosen = [];
  state.dialogueIndex = 0;
  state.dialogueDone = false;
  startScreen.classList.add("hidden");
  endScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
  renderCurrentAct();
}

function renderCurrentAct() {
  const act = ACTS[state.step];
  updateHud();
  roleTag.textContent = `Role: ${ROLES[state.role]}`;
  chapterTag.textContent = act.title;
  sceneImage.src = act.scene[state.role];
  sceneCaption.textContent = act.caption;

  actContent.classList.add("hidden");
  choicesEl.innerHTML = "";
  evidenceList.innerHTML = "";
  narrativeEl.textContent = "";

  state.dialogueIndex = 0;
  state.dialogueDone = false;
  nextLineBtn.disabled = false;
  nextLineBtn.textContent = "Next testimony";
  sceneContinueBtn.disabled = false;
  sceneContinueBtn.textContent = "Enter court dialogue";

  // Phase 1: show scene first, then let dialogue replace it.
  scenePanel.classList.remove("hidden");
  dialogueStage.classList.add("hidden");
}

function renderDialogueLine(line) {
  const character = CHARACTERS[line.speaker];
  speakerName.textContent = character.name;
  speakerFocusImage.src = character.close;
  speakerFocusImage.style.objectFit = character.focusFit || "cover";
  speakerFocusImage.style.objectPosition = character.focusPos || "center";
  speakerFocusImage.classList.remove("zoom-pop");
  void speakerFocusImage.offsetWidth;
  speakerFocusImage.classList.add("zoom-pop");

  renderCharacterRow(line.speaker);
  typeText(dialogueLine, line.text, 14, "dialogue");
}

function startDialoguePhase() {
  const act = ACTS[state.step];
  scenePanel.classList.add("hidden");
  dialogueStage.classList.remove("hidden");
  renderDialogueLine(act.dialogue[state.dialogueIndex]);
}

function renderCharacterRow(activeSpeaker) {
  characterRow.innerHTML = "";

  CHARACTER_ORDER.forEach((id) => {
    const character = CHARACTERS[id];
    const card = document.createElement("div");
    card.className = `character-pill${id === activeSpeaker ? " is-speaking" : ""}`;

    const img = document.createElement("img");
    img.src = id === activeSpeaker ? character.close : character.portrait;
    img.alt = `${character.name} portrait`;
    img.style.objectFit = "cover";
    img.style.objectPosition = "center 40%";

    const label = document.createElement("span");
    label.textContent = character.name;

    card.appendChild(img);
    card.appendChild(label);
    characterRow.appendChild(card);
  });
}

function goToNextDialogueLine() {
  const act = ACTS[state.step];
  if (state.dialogueDone) {
    return;
  }

  if (state.dialogueIndex < act.dialogue.length - 1) {
    state.dialogueIndex += 1;
    renderDialogueLine(act.dialogue[state.dialogueIndex]);
    return;
  }

  finishDialoguePhase(act);
}

function finishDialoguePhase(act) {
  state.dialogueDone = true;
  nextLineBtn.disabled = true;
  nextLineBtn.textContent = "Dialogue complete";
  actContent.classList.remove("hidden");

  typeText(narrativeEl, act.narratives[state.role], 14, "narrative");
  renderEvidenceAndChoices(act);
}

function renderEvidenceAndChoices(act) {
  evidenceList.innerHTML = "";
  act.evidence[state.role].forEach((line) => {
    const li = document.createElement("li");
    li.textContent = line;
    evidenceList.appendChild(li);
  });

  choicesEl.innerHTML = "";
  act.choices[state.role].forEach((choice, idx) => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.textContent = `${idx + 1}. ${choice.text}`;
    btn.addEventListener("click", () => applyChoice(choice));
    choicesEl.appendChild(btn);
  });
}

function applyChoice(choice) {
  state.fear += choice.effects.fear;
  state.bias += choice.effects.bias;
  state.power += choice.effects.power;
  state.awareness += choice.effects.awareness;
  state.chosen.push(choice.text);
  state.step += 1;

  if (state.step >= ACTS.length) {
    finishGame();
    return;
  }
  renderCurrentAct();
}

function finishGame() {
  gameScreen.classList.add("hidden");
  endScreen.classList.remove("hidden");

  finalVerdict.textContent =
    "Autumn, 1692: the court declares the accused woman guilty of witchcraft and sentences her to death. No matter your path, the system still delivers the same fatal ending.";

  const roleLine = `You completed the trial as: ${ROLES[state.role]}.\n`;
  const scoreLine = `Final state: Fear ${state.fear} / Bias ${state.bias} / Power ${state.power}\n`;

  let analysis = "";
  if (state.awareness >= 7) {
    analysis =
      "You recognized structural injustice. This was not one evil person, but a power system using fear to punish women who did not fit social rules.";
  } else if (state.awareness >= 3) {
    analysis =
      "You saw some unfairness, but pressure for order shaped your actions. This reflects how ordinary people can take part in harmful systems.";
  } else {
    analysis =
      "You accepted fear as proof and obedience as justice. That is how injustice can feel normal and stay in place.";
  }

  const todayLink =
    "\n\nModern echo: when anxiety is projected onto one group, legal process can still look valid while producing unfair outcomes.";
  reflection.textContent = `${roleLine}${scoreLine}${analysis}${todayLink}`;
}

function updateHud() {
  if (fearValue) fearValue.textContent = state.fear;
  if (biasValue) biasValue.textContent = state.bias;
  if (powerValue) powerValue.textContent = state.power;
}

function resetGame() {
  endScreen.classList.add("hidden");
  gameScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");

  Object.keys(timers).forEach((key) => {
    clearInterval(timers[key]);
    delete timers[key];
  });
}

function typeText(el, text, speed = 18, key = "default") {
  if (timers[key]) {
    clearInterval(timers[key]);
    delete timers[key];
  }

  el.textContent = "";
  let index = 0;

  timers[key] = setInterval(() => {
    el.textContent += text[index];
    index += 1;
    if (index >= text.length) {
      clearInterval(timers[key]);
      delete timers[key];
    }
  }, speed);
}
