
/* ==========================================
   CYBERSAFE HUB - COMPLETE JAVASCRIPT
   ========================================== */

/* ===== 1. Search Cyber Safety Topics ===== */

function searchTopics() {
  const searchBox = document.getElementById("searchBox");
  const noResults = document.getElementById("noResults");
  const cards = document.querySelectorAll("main .card");

  if (!searchBox || !noResults) return;

  const searchText = searchBox.value.trim().toLowerCase();
  let visibleCards = 0;

  cards.forEach(function (card) {
    const heading = card.querySelector("h2");
    const headingText = heading
      ? heading.textContent.toLowerCase()
      : "";

    const matches = headingText.includes(searchText);

    card.style.display = matches ? "" : "none";

    if (matches) {
      visibleCards++;
    }
  });

  noResults.hidden = searchText === "" || visibleCards > 0;
}

/* ===== 2. Start Learning Button ===== */

function startLearning() {
  const learnSection = document.getElementById("learn");
  const message = document.getElementById("message");

  if (message) {
    message.textContent =
      "Super! Let's learn cyber safety step by step. 🛡️";
  }

  if (learnSection) {
    learnSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}

/* ===== 3. Quiz Questions ===== */
/* Correct answer index: 0 = A, 1 = B, 2 = C */

const quizQuestions = [
  {
    question: "Unknown person nee OTP adigithe em chesthav?",
    answers: [
      "A. OTP share chestha",
      "B. OTP share cheyyanu",
      "C. OTP ni friend ki pampistha"
    ],
    correct: 1,
    explanation:
      "OTP ni evaritho share cheyyakudadhu. Adhi nee account ni protect chesthundhi."
  },
  {
    question: "Strong password ela undali?",
    answers: [
      "A. 123456",
      "B. Nee peru maatrame",
      "C. Long, unique password with different characters"
    ],
    correct: 2,
    explanation:
      "Long, unique password use cheyyi. Prathi account ki different password undatam manchidhi."
  },
  {
    question: "Unknown email lo suspicious link unte em cheyyali?",
    answers: [
      "A. Ventane click cheyyali",
      "B. Verify chese varaku click cheyyakudadhu",
      "C. Andhariki forward cheyyali"
    ],
    correct: 1,
    explanation:
      "Suspicious links phishing websites ki teesukellavachu. Sender ni verify chesi, doubt unte click cheyyaku."
  },
  {
    question: "Public Wi-Fi use chesthunnappudu edhi safe?",
    answers: [
      "A. Sensitive details anni enter cheyyadam",
      "B. Passwords andariki cheppadam",
      "C. Sensitive transactions avoid cheyyadam"
    ],
    correct: 2,
    explanation:
      "Public Wi-Fi lo sensitive transactions avoid cheyyi. Secure connection use cheyyadam mukhyam."
  },
  {
    question: "Two-factor authentication (2FA) endhuku use chestham?",
    answers: [
      "A. Extra layer of account security kosam",
      "B. Password ni andariki share cheyyadaniki",
      "C. Account security off cheyyadaniki"
    ],
    correct: 0,
    explanation:
      "2FA password tho paatu inko verification step add chesi account security ni penchuthundhi."
  },
  {
    question: "Bank nunchi vachinattu unna email password adigithe em cheyyali?",
    answers: [
      "A. Email lo unna link open chesi password ivvali",
      "B. Official bank website/app lo verify cheyyali",
      "C. Password ni reply lo pampali"
    ],
    correct: 1,
    explanation:
      "Fake emails bank laaga act cheyyavachu. Email link use cheyyakunda official app or website lo verify cheyyi.",
    image:
      "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Email and online communication"
  },
  {
    question: "Online game lo stranger personal details adigithe?",
    answers: [
      "A. Address and phone number ivvali",
      "B. Personal details share cheyyakudadhu",
      "C. Password kuda cheppali"
    ],
    correct: 1,
    explanation:
      "Online lo teliyani vallaki address, phone number, password lanti personal details share cheyyaku.",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Online gaming"
  },
  {
    question: "Public charging station use chesthunnappudu em gurthupettukovali?",
    answers: [
      "A. Phone lock remove cheyyali",
      "B. Data access request anni allow cheyyali",
      "C. Trusted charger use cheyyali; data prompts ni jagrathaga check cheyyali"
    ],
    correct: 2,
    explanation:
      "Trusted charger use cheyyi. USB data access prompt vasthe ardham chesukokunda allow cheyyaku.",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Mobile phone"
  },
  {
    question: "Software update notification vachinappudu best action enti?",
    answers: [
      "A. Official settings lo update verify cheyyali",
      "B. Random website nunchi file download cheyyali",
      "C. Unknown link open chesi details ivvali"
    ],
    correct: 0,
    explanation:
      "Updates ni device settings or official app store nunchi install cheyyi. Unknown links avoid cheyyi.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Computer hardware"
  },
  {
    question: "Stranger message lo prize gelichav, link click cheyyi ante?",
    answers: [
      "A. Ventane link click cheyyali",
      "B. Message ni verify cheyyali; suspicious ayithe report cheyyali",
      "C. Bank details pampali"
    ],
    correct: 1,
    explanation:
      "Unexpected prize messages scams kavachu. Link click cheyyaku; official source tho verify chesi suspicious message ni report cheyyi.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Digital communication"
  }
];

/* ===== 4. Quiz Variables ===== */

let currentQuestion = 0;
let score = 0;
let questionAnswered = false;

const quizGame = document.getElementById("quizGame");
const questionNumber = document.getElementById("questionNumber");
const questionTitle = document.getElementById("question");
const answerButtons = document.getElementById("answerButtons");
const quizResult = document.getElementById("quizResult");
const scoreDisplay = document.getElementById("scoreDisplay");
const nextButton = document.getElementById("nextButton");

const questionImage = document.getElementById("questionImage");
const quizImage = document.getElementById("quizImage");

const celebrationScreen =
  document.getElementById("celebrationScreen");
const celebrationTitle =
  document.getElementById("celebrationTitle");
const celebrationMessage =
  document.getElementById("celebrationMessage");
const celebrationCharacters =
  document.getElementById("celebrationCharacters");
const celebrationScore =
  document.getElementById("celebrationScore");
const celebrationNextButton =
  document.getElementById("celebrationNextButton");

const finalScoreScreen =
  document.getElementById("finalScoreScreen");
const finalScore = document.getElementById("finalScore");
const finalMessage = document.getElementById("finalMessage");
const restartButton = document.getElementById("restartButton");

/* ===== 5. Display Current Question ===== */

function showQuestion() {
  if (
    !questionTitle ||
    !answerButtons ||
    !questionNumber ||
    !nextButton
  ) {
    console.error("Quiz HTML elements missing. Check your HTML box.");
    return;
  }

  const questionData = quizQuestions[currentQuestion];

  questionAnswered = false;

  questionNumber.textContent =
    "Question " + (currentQuestion + 1) +
    " of " + quizQuestions.length;

  questionTitle.textContent = questionData.question;

  answerButtons.innerHTML = "";

  questionData.answers.forEach(function (answer, index) {
    const button = document.createElement("button");

    button.type = "button";
    button.textContent = answer;

    button.addEventListener("click", function () {
      selectAnswer(index, button);
    });

    answerButtons.appendChild(button);
  });

  quizResult.textContent = "";
  scoreDisplay.textContent =
    "Score: " + score + " / " + quizQuestions.length;

  nextButton.hidden = true;
  nextButton.textContent =
    currentQuestion === quizQuestions.length - 1
      ? "FINISH QUIZ 🎉"
      : "NEXT QUESTION ➡️";

  /* Show an image when this question has one */
  if (questionData.image && questionImage && quizImage) {
    questionImage.hidden = false;
    quizImage.alt = questionData.imageAlt || "Quiz question image";
    quizImage.onerror = function () {
      questionImage.hidden = true;
    };
    quizImage.src = questionData.image;
  } else if (questionImage && quizImage) {
    questionImage.hidden = true;
    quizImage.removeAttribute("src");
    quizImage.onerror = null;
  }
}

/* ===== 6. Check Selected Answer ===== */

function selectAnswer(selectedIndex, selectedButton) {
  if (questionAnswered) return;

  questionAnswered = true;

  const questionData = quizQuestions[currentQuestion];
  const buttons = answerButtons.querySelectorAll("button");
  const isCorrect = selectedIndex === questionData.correct;

  buttons.forEach(function (button) {
    button.disabled = true;
  });

  /* Highlight the correct answer */
  buttons[questionData.correct].classList.add("correct-answer");

  if (isCorrect) {
    score++;

    quizResult.textContent =
      "Nuvvu cyber nera gaalla nunchi tappinchukunnavu! Congratulations! 🥳🤩";
  } else {
    selectedButton.classList.add("wrong-answer");

    quizResult.textContent =
      "Idi cyber nera gaalla pannagam kavachu! 🙄🥵 Bro. " +
      "Explanation: " + questionData.explanation +
      " Correct answer: " +
      questionData.answers[questionData.correct];
  }

  scoreDisplay.textContent =
    "Score: " + score + " / " + quizQuestions.length;

  nextButton.hidden = false;
}

/* ===== 7. Go to Next Question ===== */

function nextQuestion() {
  if (!questionAnswered) {
    quizResult.textContent =
      "Mundhu oka answer select cheyyi bujji! 🙂";
    return;
  }

  if (currentQuestion < quizQuestions.length - 1) {
    currentQuestion++;
    showQuestion();
  } else {
    showCelebration();
  }
}

/* ===== 8. Score-Based Celebration Messages ===== */

function getScoreMessage(finalResult) {
  if (finalResult === 10) {
    return "Cyber nera gaalla nunchi tappinchukunnavu! Betey... Congratulations! 🥳🔥";
  }

  if (finalResult >= 8) {
    return "Aayyoo! Nuv cyber gaalla pannagam nunchi koncham ahh bayata paddavu ga... Tension vadhu ra! 😂💪";
  }

  if (finalResult >= 5) {
    return "Bro, maybe edhi cyber nera gaalla pannagam kavachu... Nuv chala jagrattaga undhali 🤫🛡️";
  }

  return "Warning ra betey... edhi cyber nera gaalla pannagam kavachu... Nuv chala anta chala jagrattaga undhali 😵😣🤫";
}

/* ===== 9. Show Celebration Screen ===== */

function showCelebration() {
  if (quizGame) quizGame.hidden = true;

  if (celebrationScreen) {
    celebrationScreen.hidden = false;
  }

  if (finalScoreScreen) {
    finalScoreScreen.hidden = true;
  }

  if (celebrationTitle) {
    celebrationTitle.textContent =
      score === 10
        ? "🏆 PERFECT SCORE! 🎉"
        : "🎉 Quiz Completed!";
  }

  if (celebrationMessage) {
    celebrationMessage.textContent = getScoreMessage(score);
  }

  if (celebrationScore) {
    celebrationScore.textContent =
      "Your Score: " + score + " / " + quizQuestions.length;
  }

  if (celebrationCharacters) {
    celebrationCharacters.classList.remove("celebrate-now");

    /* Restart CSS animation reliably */
    void celebrationCharacters.offsetWidth;

    celebrationCharacters.classList.add("celebrate-now");
  }

  if (celebrationNextButton) {
    celebrationNextButton.hidden = false;
  }
}

/* ===== 10. Show Final Score Screen ===== */

function showFinalScore() {
  if (celebrationScreen) {
    celebrationScreen.hidden = true;
  }

  if (finalScoreScreen) {
    finalScoreScreen.hidden = false;
  }

  if (finalScore) {
    finalScore.textContent =
      score + " / " + quizQuestions.length;
  }

  if (finalMessage) {
    finalMessage.textContent = getScoreMessage(score);
  }

  if (restartButton) {
    restartButton.hidden = false;
  }

  if (finalScoreScreen) {
    finalScoreScreen.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }
}

/* ===== 11. Restart Quiz ===== */

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  questionAnswered = false;

  if (quizGame) quizGame.hidden = false;
  if (celebrationScreen) celebrationScreen.hidden = true;
  if (finalScoreScreen) finalScoreScreen.hidden = true;

  if (celebrationCharacters) {
    celebrationCharacters.classList.remove("celebrate-now");
  }

  if (quizResult) quizResult.textContent = "";

  showQuestion();

  const quizSection = document.getElementById("quiz");

  if (quizSection) {
    quizSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}

/* ===== 12. Connect Quiz Buttons ===== */

if (nextButton) {
  nextButton.addEventListener("click", nextQuestion);
}

if (celebrationNextButton) {
  celebrationNextButton.addEventListener("click", showFinalScore);
}

if (restartButton) {
  restartButton.addEventListener("click", restartQuiz);
}

/* ===== 13. Start Quiz ===== */

showQuestion();

/* Password Strength Checker */

const strengthPassword = document.getElementById("strengthPassword");
const strengthResult = document.getElementById("strengthResult");
const togglePassword = document.getElementById("togglePassword");

if (strengthPassword && strengthResult && togglePassword) {

  strengthPassword.addEventListener("input", function () {
    const password = strengthPassword.value;

    if (password.length === 0) {
      strengthResult.textContent = "Strength: Not checked yet";
      strengthResult.style.color = "#ffffff";
      strengthResult.style.borderColor = "#00ffcc";
      return;
    }

    let score = 0;

    if (password.length >= 12) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (password.length < 8 || score <= 2) {
      strengthResult.textContent =
        "Strength: Weak — Try a longer, more varied password.";
      strengthResult.style.color = "#ff6b6b";
      strengthResult.style.borderColor = "#ff6b6b";

    } else if (password.length >= 12 && score >= 4) {
      strengthResult.textContent =
        "Strength: Strong — Good combination of password features!";
      strengthResult.style.color = "#00ff99";
      strengthResult.style.borderColor = "#00ff99";

    } else {
      strengthResult.textContent =
        "Strength: Medium — Add more variety and length.";
      strengthResult.style.color = "#ffd166";
      strengthResult.style.borderColor = "#ffd166";
    }
  });

  togglePassword.addEventListener("click", function () {
    if (strengthPassword.type === "password") {
      strengthPassword.type = "text";
      togglePassword.textContent = "Hide Password";
    } else {
      strengthPassword.type = "password";
      togglePassword.textContent = "Show Password";
    }
  });

}

/* ===== Suspicious URL Checker ===== */

const urlInput = document.getElementById("urlInput");
const checkUrlButton = document.getElementById("checkUrlButton");
const clearUrlButton = document.getElementById("clearUrlButton");
const urlResult = document.getElementById("urlResult");

if (urlInput && checkUrlButton && clearUrlButton && urlResult) {

  function checkSuspiciousURL() {
    const enteredURL = urlInput.value.trim();

    if (enteredURL === "") {
      urlResult.textContent = "Please enter a URL to check.";
      urlResult.style.color = "#ffd166";
      urlResult.style.borderColor = "#ffd166";
      return;
    }

    let parsedURL;

    try {
      const urlToCheck = /^[a-zA-Z][a-zA-Z\d+.-]*:/.test(enteredURL)
        ? enteredURL
        : "https://" + enteredURL;

      parsedURL = new URL(urlToCheck);

      if (!["http:", "https:"].includes(parsedURL.protocol)) {
        throw new Error("Unsupported protocol");
      }

      if (!parsedURL.hostname || !parsedURL.hostname.includes(".")) {
        throw new Error("Invalid hostname");
      }
    } catch (error) {
      urlResult.textContent =
        "⚠️ Invalid URL format. Check the address and try again.";
      urlResult.style.color = "#ff6b6b";
      urlResult.style.borderColor = "#ff6b6b";
      return;
    }

    const warnings = [];
    const hostname = parsedURL.hostname.toLowerCase();
    const fullURL = parsedURL.href.toLowerCase();

    if (parsedURL.protocol !== "https:") {
      warnings.push("The link does not use HTTPS.");
    }

    if (parsedURL.username || parsedURL.password) {
      warnings.push("The address contains login details before the hostname.");
    }

    if (/^\d{1,3}(\.\d{1,3}){3}$/.test(hostname)) {
      warnings.push("The hostname is an IP address.");
    }

    if (hostname.includes("xn--")) {
      warnings.push("The domain contains encoded international characters.");
    }

    if (parsedURL.href.length > 200) {
      warnings.push("The URL is unusually long.");
    }

    if (/(login|verify|account|update|secure|password)/i.test(fullURL)) {
      warnings.push(
        "The URL contains words sometimes used in deceptive links. Check the domain carefully."
      );
    }

    urlResult.replaceChildren();

    const heading = document.createElement("p");
    const details = document.createElement("ul");

    if (warnings.length > 0) {
      heading.textContent = "⚠️ Caution: This URL has warning signs.";
      heading.style.color = "#ff6b6b";
      urlResult.style.borderColor = "#ff6b6b";

      warnings.forEach(function (warning) {
        const item = document.createElement("li");
        item.textContent = warning;
        details.appendChild(item);
      });
    } else {
      heading.textContent =
        "No common warning signs detected. This does NOT prove the URL is safe.";
      heading.style.color = "#ffd166";
      urlResult.style.borderColor = "#ffd166";
    }

    urlResult.appendChild(heading);

    if (warnings.length > 0) {
      urlResult.appendChild(details);
    }

    const note = document.createElement("p");
    note.textContent =
      "Safety note: This checker analyzes the address only. It does not open or visit the website, and it cannot guarantee safety.";
    note.style.marginTop = "12px";
    urlResult.appendChild(note);
  }

  checkUrlButton.addEventListener("click", checkSuspiciousURL);

  clearUrlButton.addEventListener("click", function () {
    urlInput.value = "";
    urlResult.textContent = "URL check result will appear here.";
    urlResult.style.color = "#ffffff";
    urlResult.style.borderColor = "#00ffcc";
    urlInput.focus();
  });
}

/* ===== End URL Checker JavaScript ===== */

