// Quiz Questions and Answers
var questions = [  {    question: "What is the meaning of انا (ana)?",    options: ["I", "You", "He", "We"],
    answer: "I"
  },
  {
    question: "What is the meaning of انت (anta)?",
    options: ["We", "You(Feminine)", "You(masculine)", "She"],
    answer: "You(masculine)"
  },
  {
    question: "What is the meaning of كتاب (kitaab)?",
    options: ["House", "Book", "Pen", "Desk"],
    answer: "Book"
  },
  {
    question: "What is the meaning of جميل (jamiil)?",
    options: ["Beautiful", "Ugly", "Good", "Poor"],
    answer: "Beautiful"
  },
  {
    question: "What is the meaning of مدينة (madiina)?",
    options: ["Airport", "Country", "Village", "City"],
    answer: "City"
  }
];

var currentQuestion = 0;
var score = 0;

// Display the current question and options
function displayQuestion() {
  var questionObj = questions[currentQuestion];
  document.getElementById("question").innerHTML = questionObj.question;
  document.getElementById("label1").innerHTML = questionObj.options[0];
  document.getElementById("label2").innerHTML = questionObj.options[1];
  document.getElementById("label3").innerHTML = questionObj.options[2];
  document.getElementById("label4").innerHTML = questionObj.options[3];
  document.getElementById("option1").value = questionObj.options[0];
  document.getElementById("option2").value = questionObj.options[1];
  document.getElementById("option3").value = questionObj.options[2];
  document.getElementById("option4").value = questionObj.options[3];
}

// Check if the answer is correct
function checkAnswer() {
  var userAnswer = document.querySelector('input[name="answer"]:checked');
  if (!userAnswer) {
    alert("Please select an answer.");
    return;
  }
  if (userAnswer.value.toLowerCase() === questions[currentQuestion].answer.toLowerCase()) {
    score++;
    alert("Correct!");
  } else {
    alert("Sorry, the correct answer is " + questions[currentQuestion].answer);
  }
  currentQuestion++;
  if (currentQuestion === questions.length) {
    endQuiz();
  } else {
    displayQuestion();
    document.querySelector('input[name="answer"]:checked').checked = false;
  }
}

// End the quiz and display the score
function endQuiz() {
  alert("Quiz Over. Your Score is: " + score + "/" + questions.length);
  document.getElementById("question").style.display = "none";
  document.getElementById("label1").style.display = "none";
  document.getElementById("label2").style.display = "none";
  document.getElementById("label3").style.display = "none";
  document.getElementById("label4").style.display = "none";
  document.getElementById("option1").style.display = "none";
  document.getElementById("option2").style.display = "none";
  document.getElementById("option3").style.display = "none";
  document.getElementById("option4").style.display = "none";
}

// Start the quiz
displayQuestion();
