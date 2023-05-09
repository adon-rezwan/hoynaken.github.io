const quizData = [
  { question: "What is the meaning of  انا (ana)?", answers: ["I", "You", "He", "She"], correctAnswer: 0 },
  { question: "What is the meaning of  انت (anta)?", answers: ["I", "You (male)", "He", "She"], correctAnswer: 1 },
  { question: "What is the meaning of  انت (anti)?", answers: ["I", "You (female)", "He", "She"], correctAnswer: 1 },
  { question: "What is the meaning of  نحن (nahnu)?", answers: ["I", "You (female)", "We", "She"], correctAnswer: 2 },
  { question: "What is the meaning of  هو (huwa)?", answers: ["I", "You (male)", "We", "He"], correctAnswer: 3},
  { question: "What is the meaning of  هي (hiya)?", answers: ["He", "She", "They", "You"], correctAnswer: 1},
  { question: "What is the meaning of  هم (hoom)?", answers: ["They(male)", "You all(male)", "You(both)", "They(female)"], correctAnswer: 0},
  { question: "What is the meaning of  انتما (antumaa)?", answers: ["You(male)", "You (female)", "You(both)", "You(all)"], correctAnswer: 2},
  { question: "What is the meaning of  انتم (antum)?", answers: ["You(male)", "You (female)", "You all(female)", "You all(male)"], correctAnswer: 3},
  { question: "What is the meaning of  هما (humaa)?", answers: ["He", "They(both)", "We", "She"], correctAnswer: 1},
  { question: "What is the meaning of  انتن (antunna)?", answers: ["You all(female)", "You (female)", "You all(male)", "You(male)"], correctAnswer: 0},
  { question: "What is the meaning of  هن (hunna)?", answers: ["They(male)", "You(male)", "They(both)", "They(female)"], correctAnswer: 3},
];

const questionEl = document.getElementById("questions");
const answerBtnsEl = document.getElementById("answer_button");
const nextBtnEl = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  questionEl.textContent = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;
  answerBtnsEl.innerHTML = currentQuestion.answers.map(answer => `
    <button class="btn">${answer}</button>
  `).join("");
  answerBtnsEl.querySelectorAll("button").forEach((button, index) => {
    button.addEventListener("click", () => {
      selectAnswer(index);
    });
  });
}

function selectAnswer(selectedAnswerIndex) {
  const currentQuestion = quizData[currentQuestionIndex];
  const isCorrect = selectedAnswerIndex === currentQuestion.correctAnswer;
  if (isCorrect) {
    score++;
    answerBtnsEl.querySelectorAll("button")[selectedAnswerIndex].classList.add("correct");
  } else {
    answerBtnsEl.querySelectorAll("button")[selectedAnswerIndex].classList.add("incorrect");
    answerBtnsEl.querySelectorAll("button")[currentQuestion.correctAnswer].classList.add("correct");
  }
  answerBtnsEl.querySelectorAll("button").forEach((button) => {
    button.disabled = true;
  });
  nextBtnEl.style.display = "block";
}

function showScore() {
  questionEl.textContent = `You scored ${score} out of ${quizData.length}!`;
  answerBtnsEl.innerHTML = ""; // clear answer options
  nextBtnEl.textContent = "Play again";
  nextBtnEl.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    nextBtnEl.textContent = "Next";
    showQuestion();
  } else {
    showScore();
  }
  
}

nextBtnEl.addEventListener("click", () => {
  if (currentQuestionIndex < quizData.length) {
    handleNextButton();
  } else {
    currentQuestionIndex = 0;
    score = 0;
    nextBtnEl.style.display = "none";
    showQuestion();
  }
});

showQuestion();

