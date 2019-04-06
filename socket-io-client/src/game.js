const question = document.getElementById("question");
const waar = document.getElementById("true");
const nietWaar = document.getElementById("false");
const scoreText = document.getElementById("scoreText");
let currentQuestion = {};
let availableQuesions = [];
let questions = [];
let answer
let givenAnswer
let score

fetch(
  'https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean'
)
  .then(res => {
    return res.json();
  }).then(loadedQuestions => {
    console.log(loadedQuestions.results);
    questions = loadedQuestions.results.map(loadedQuestion => {
      const formattedQuestion = {
        question: loadedQuestion.question,
        answer: loadedQuestion.correct_answer
      };
      console.log(formattedQuestion)
      return formattedQuestion;
    });
    // startGame();
  })
  .catch(err => {
    console.error(err);
  });

startGame = () => {
  availableQuesions = [...questions];
  getNewQuestion();
  score = 0
};

getNewQuestion = () => {
  if (availableQuesions.length === 0) {
    localStorage.setItem("mostRecentScore", score);
    return window.location.assign("end.html");
  }

  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerHTML = currentQuestion.question;
  answer = currentQuestion.answer;
  availableQuesions.splice(questionIndex, 1);
  console.log(availableQuesions)
};

choiceTrue = () => {
  givenAnswer = "True"

  if (givenAnswer == answer) {
    score++
    incrementScore();
    getNewQuestion();
  }
  else {
    localStorage.setItem("mostRecentScore", score);
    return window.location.assign("end.html");
  }
}

choiceFalse = () => {
  givenAnswer = "False"

  if (givenAnswer == answer) {
    score++
    incrementScore();
    getNewQuestion();
  }
  else {
    localStorage.setItem("mostRecentScore", score);
    return window.location.assign("end.html");
  }
}


incrementScore = () => {
  scoreText.innerHTML = "score =" + score
}

waar.onclick = choiceTrue;
nietWaar.onclick = choiceFalse;