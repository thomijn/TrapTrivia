import React, { Component } from "react";
import Quiz from "./components/Quiz";
<<<<<<< HEAD
import QuizInfo from "./components/QuizInfo";
import Result from "./components/Result";
import Start from "./components/Start";
import quizQuestions from "./api/quizQuestions";
import socketIOClient from "socket.io-client";
import "./App.css";
import AppHeader from "./components/AppHeader";
import Footer from "./components/Footer";
import Grid from "@material-ui/core/Grid";
=======
import quizQuestions from "./api/quizQuestions";
>>>>>>> origin/master

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
<<<<<<< HEAD
      result: 0,
      questionId: 1,
      question: "",
      answerOptions: [],
      answerGiven: "",
      answer: "",
      score: 0,
      mode: "begin",
      response: undefined,
      endpoint: "http://127.0.0.1:4001"
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    this.onTryAgain = this.onTryAgain.bind(this);
    this.startGame = this.startGame.bind(this);
    this.getAnswerClasses = this.getAnswerClasses.bind(this);
  }

  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("FromAPI", data => {
      // console.log(data);

      if (parseInt(data) === 1) {
        this.setState({ response: "true" });
      } else {
        this.setState({ response: "false" });
      }
    });

    this.setState({
      question: quizQuestions[0].question,
      answer: quizQuestions[0].answer
    });
  }

  setUserAnswer() {
    console.log(this.state.response);
    this.setState({ answerGiven: this.state.response }, () =>
      this.handleAnswerSubmit()
    );
=======
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
>>>>>>> origin/master
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
<<<<<<< HEAD
    if (questionId != quizQuestions.length) {
      this.setState({
        counter: counter,
        questionId: questionId,
        question: quizQuestions[counter].question,
        answerGiven: "",
        answer: quizQuestions[counter].answer
      });
    } else {
      this.setState({
        counter: counter,
        questionId: questionId,

        answerGiven: "",
        answer: quizQuestions[counter].answer
      });
    }
  }

  handleAnswerSubmit() {
    console.log(this.state.answerGiven);
    if (this.state.answerGiven === this.state.answer) {
      console.log("vraag goed beantwoord");
      this.setState({
        score: this.state.score + 1
      });
      if (this.state.questionId < quizQuestions.length) {
        this.onAnswerCorrect();
        setTimeout(() => this.setNextQuestion(), 500);
      } else {
        setTimeout(() => this.setResults(this.getResults()), 300);
      }
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  getAnswerClasses() {
    console.log("weqw");
    let classes = "";
    classes = this.props.response === "true" ? "answertrue" : "answerfalse";
    return classes;
  }

  onAnswerCorrect() {
    this.setState({ question: "Goed!" });
  }

  handleAnswerSelected() {
    this.setUserAnswer();
  }

  getResults() {
    const score = this.state.score;
    return score;
  }

  setResults(result) {
    this.result = this.state.score;
    if (this.result >= 1 && this.result < 5) {
      this.setState({ result: result });
    } else if (this.result === quizQuestions.length) {
      this.setState({ result: "Je hebt de TrapTrivia voltooid" });
    } else {
      this.setState({ result: "Huh je hebt er niet eens 1 goed?!" });
    }
  }

  renderQuiz() {
    if (this.state.mode === "game") {
      return (
        <div className="container">
          <Grid
            direction="row"
            alignItems="flex-start"
            justify="flex-start"
            spacing={24}
            container
          >
            <Grid item>
              <Quiz
                answercontent={this.state.response}
                question={this.state.question}
                onAnswerSelected={this.handleAnswerSelected}
                getAnswerClasses={this.getAnswerClasses}
              />
            </Grid>
            <Grid item>
              <QuizInfo
                score={this.state.score}
                questionId={this.state.questionId}
                questionTotal={quizQuestions.length}
              />
            </Grid>
          </Grid>
        </div>
      );
    } else {
      return null;
    }
  }

  renderStart() {
    if (this.state.mode === "begin") {
      return (
        <div className="container">
          <Start onStartGame={this.startGame} />;
        </div>
      );
    } else {
      return null;
    }
  }

  restartGame() {
    this.setState({
      mode: "begin",
      result: 0,
      counter: 0,
      questionId: 1,
      score: 0,
      question: quizQuestions[0].question,
      answer: quizQuestions[0].answer
    });
  }

  startGame() {
    this.setState({ mode: "game" });
  }

  renderResult() {
    return (
      <div className="container">
        <Grid
          direction="column"
          alignItems="flex-start"
          justify="flex-start"
          container
          spacing={24}
        >
          <Result quizResult={this.state.result} onTryAgain={this.onTryAgain} />
        </Grid>
      </div>
    );
  }

  onTryAgain() {
    this.restartGame();
  }

  render() {
    return (
      <div className="App">
        <AppHeader />
        {this.renderStart()}
        {this.state.result ? this.renderResult() : this.renderQuiz()}
        <Footer />
      </div>
    );
=======
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
>>>>>>> origin/master
  }
}

export default App;
