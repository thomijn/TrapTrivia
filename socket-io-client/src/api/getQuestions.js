// fetchQuestions() {
//     let questions = [];

//     fetch("https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean")
//       .then(res => {
//         return res.json();
//       })
//       .then(loadedQuestions => {
//         // console.log(loadedQuestions.results);
//         questions = loadedQuestions.results.map(loadedQuestion => {
//           const formattedQuestion = {
//             question: loadedQuestion.question,
//             answer: loadedQuestion.correct_answer
//           };
//           return formattedQuestion;
//         });
//         console.log(questions);
//       })
//       .then(data =>
//         this.setState({
//           question: questions[0].question
//         })
//       )
//       .catch(err => {
//         console.error(err);
//       });
//     return questions;
//   }
