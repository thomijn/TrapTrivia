// import React, { Component } from "react";

// class Background extends Component {
//   constructor() {
//     super();
//     this.state = {
//       question: "",
//       answer: ""
//     };
//   }

//   componentDidMount() {
//     fetch("https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean")
//       .then(res => {
//         return res.json();
//       })
//       .then(loadedQuestions => {
//         console.log(loadedQuestions.results);
//         questions = loadedQuestions.results.map(loadedQuestion => {
//           const formattedQuestion = {
//             question: loadedQuestion.question,
//             answer: loadedQuestion.correct_answer
//           };
//           console.log(formattedQuestion);
//           return formattedQuestion;
//         });
//       });
//     this.setState({
//       question: formattedQuestion.question,
//       answer: formattedQuestion.answer
//     }).catch(err => {
//       console.error(err);
//     });
//   }

//   render() {
//     return <div />;
//   }
// }

// export default Background;
