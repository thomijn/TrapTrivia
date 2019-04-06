<<<<<<< HEAD
import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

function Answer(props) {
  const { classes } = props;
  return (
    <div style={{ textAlign: "center" }} className="answerOption">
      <Grid item xs={12}>
        <Paper square className={classes.root} elevation={4}>
          <Typography variant="h6">
            <p>geselecteerde antwoord </p>
            <hr />
            <div className={props.getAnswerClasses}>
              <p>{props.answercontent}</p>
            </div>
          </Typography>
          <hr />
          <Button
            variant="contained"
            color="primary"
            onClick={props.onAnswerSelected}
          >
            Invoeren
          </Button>
        </Paper>
      </Grid>
    </div>
  );
}

Answer.propTypes = {
  onAnswerSelected: PropTypes.func.isRequired
};

export default withStyles(styles)(Answer);
=======
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
>>>>>>> origin/master
