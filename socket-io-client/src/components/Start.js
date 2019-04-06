import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

function Start(props) {
  const { classes } = props;

  return (
    <div className="start">
      <Grid
        direction="column"
        alignItems="flex-start"
        justify="flex-start"
        container
        spacing={24}
      >
        <Grid item xs={6}>
          <Paper square className={classes.root} elevation={4}>
            <Typography gutterBottom variant="h5" component="h2">
              <strong>Uitleg over het spel:</strong>
            </Typography>
            <hr />
            <Typography component="p">
              Ut nostrud commodo veniam magna eu non quis. Voluptate enim enim
              et voluptate consequat proident aute consequat duis minim
              exercitation. Ea sit minim amet qui duis cupidatat exercitation
              anim magna non dolore. Irure id veniam proident ullamco. Ullamco
              id est id incididunt esse cupidatat. Enim magna dolor ut esse
              exercitation veniam qui.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper square className={classes.root} elevation={4}>
            <Typography gutterBottom component="p" variant="h5">
              Start het spel!
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={props.onStartGame}
            >
              Start Game
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Start);
