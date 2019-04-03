import React, { Component } from "react";
import socketIOClient from "socket.io-client";

class Answer extends Component {
  constructor() {
    super();
    this.state = {
      response: undefined,
      endpoint: "http://127.0.0.1:4001",
      answer: ""
    };
  }

  // hellogetdata = () => {
  //   if (Boolean(Number(this.state.response))) {
  //     console.log("true");
  //   } else {
  //     console.log("false");
  //   }
  // };

  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("FromAPI", data => {
      console.log(data);

      if (data == 1) {
        this.setState({ response: "True" });
      } else {
        this.setState({ response: "False" });
      }
    });
  }

  handleClick = () => {
    console.log(this);
    this.setState({ answer: this.state.response });
  };

  render() {
    const { response } = this.state;
    return (
      <div style={{ textAlign: "center" }}>
        {response ? (
          <p>Geselecteerde antwoord = {this.state.response}</p>
        ) : (
          <p>Loading...</p>
        )}
        <p> ingevoerd is: {this.state.answer} </p>
        <button onClick={this.handleClick}>invoeren!!</button>
      </div>
    );
  }
}

export default Answer;
