import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    backgroundColor: ' #f8f9fa',
    margin: '8px'
  },
});

function PaperSheet(props) {
  const { classes } = props;

  return (
    <div>
      <Grid container spacing={12}>
        <Grid item xs={0} sm={3}>
        </Grid>
        <Grid item xs={12} sm={6}>
          <hr />
         <Paper className={classes.root} elevation={0}>
          <Typography component="p">
            Hey, I'm Heriberto! A full stack developer with a love for front-end minimalistic design.
            Experience programming in Ruby and Javascript. But, Javascript is my primary language with work done in Node.js
            and React.js. You can see more details on my attached resume.
          </Typography>
          <br />
          <Typography component="p">
            My love for programming begun on a website called BYOND where I developed multiple multiplayer games.
            I then studied Computer Science and Web Development at CUNY NYC College of Technology. After graduating I
            took my first job as a Linux Systems Administrator and Network Administrator. After a few years and job changes
            I made my choice to attend the Flatiron School a coding bootcamp focused Full Stack Web Development and Data Science.
            You can see some of my work on the Portfolio page on my website. I aim for very clean and simple designs that unify the best parts of form and function.
          </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);