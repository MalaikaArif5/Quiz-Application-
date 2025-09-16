var questions = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "Hyper Text Marketing Language", "Hyper Text Markup Leveler"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["<js>", "<javascript>", "<script>", "<code>"],
    answer: "<script>
  },
  {
    question: "Which CSS property controls the text size?",
    options: ["font-size", "text-style", "text-size", "font-style"],
    answer: "font-size"
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Netscape", "Google", "Microsoft", "Sun Microsystems"],
    answer: "Netscape"
  }
];

var questionElement = document.getElementById("question");
var optionBtns = document.querySelectorAll(".option-btn");
var nextBtn = document.getElementById("next-btn");
var resultBox = document.getElementById("result-box");
var quizBox = document.getElementById("quiz-box");
var scoreElement = document.getElementById("score");

var currentQuestion = 0;
var score = 0;

function loadQuestion() {
  var q = questions[currentQuestion];
  questionElement.textContent = (currentQuestion + 1) + ". " + q.question;

  for (var i = 0; i < optionBtns.length; i++) {
    optionBtns[i].textContent = q.options[i];
    optionBtns[i].onclick = checkAnswer;
  }
}

function checkAnswer(e) {
  var selectedAnswer = e.target.textContent;
  var correctAnswer = questions[currentQuestion].answer;

  if (selectedAnswer === correctAnswer) {
    score++;
  }

  disableOptions();
}

function disableOptions() {
  for (var i = 0; i < optionBtns.length; i++) {
    optionBtns[i].disabled = true;
  }
}

function enableOptions() {
  for (var i = 0; i < optionBtns.length; i++) {
    optionBtns[i].disabled = false;
  }
}

nextBtn.onclick = function () {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    enableOptions();
    loadQuestion();
  } else {
    showResult();
  }
};

function showResult() {
  quizBox.classList.add("hide");
  resultBox.classList.remove("hide");
  scoreElement.textContent = score + " / " + questions.length;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  resultBox.classList.add("hide");
  quizBox.classList.remove("hide");
  enableOptions();
  loadQuestion();
}

// Start quiz
loadQuestion();
