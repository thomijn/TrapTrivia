import React, { Component } from "react";
import Quiz from "./components/Quiz";
import quizQuestions from "./api/quizQuestions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      questionId: 1,
      question: "",
      answerOptions: [],
      answer: ""
    };
  }

  componentDidMount() {
    this.setState({
      question: quizQuestions[0].question
    });
  }

  setUserAnswer(answer) {
    this.setState({
      answer: answer
    });
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answer: ""
    });
  }

  handleAnswerSelected(event) {
    this.setUserAnswer("true");
    if (this.state.questionId < 10) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      // do nothing for now
    }
  }

  render() {
    return <Quiz question={this.state.question} />;
  }
}

export default App;
