import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { GithubFace, Cloud } from 'mdi-material-ui';
import Button from '@material-ui/core/Button';

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
              MyGameList lets users add games to their "Gameshelf". 
              The site provides users with a list-like system to organize their video games. 
              Maybe you want to add Super Mario to your list, maybe you want to chat with other users
              about your favorite games and compare your shelf with other users.
            </Typography>
            <Typography component="p">
              Backend built using Ruby on Rails.
            </Typography>
            <br />
            <Typography component="p">
              Frontend is built using cusotm jquery commands to make the page more interactive.
            </Typography>
            <a href="https://radiant-wave-43611.herokuapp.com">
              Hosted on Heroku:< br />
              <Button><Cloud /></Button>
            </a><br />

            
            <a href="https://github.com/hmelo1/mygamelist">
              Code on Github:< br />
              <Button><GithubFace /></Button>
            </a>
            <br />
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