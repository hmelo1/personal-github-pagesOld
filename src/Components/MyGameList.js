import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Information from './MyGameListItems/Information';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    backgroundColor: '#007bff',
  },
  headline: {
    backgroundColor: '#007bff',
    fontWeight: 'bold',
    fontSize: '200%',
    color: '#FFFFFF',
  },
  websiteBoxText: {
    color: '#FFFFFF',
  }
});

function MyGameListCard(props) {
  const { classes } = props;

  return (
    <div>
      <Grid container spacing={12} className={classes.root}>
        <Grid item xs={0} sm={3}>
          <br />
          <Link to="/portfolio">
            < Button variant="outlined" color="secondary">
              < KeyboardArrowLeft />
              Back
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.headline} elevation={0} >
          </Paper>
          <Paper className={classes.root} elevation={0}>
            <Typography className={classes.headline}>
              MyGameList
            </Typography>
            <Typography component="p" className={classes.websiteBoxText}>
              Keep track of your game progress...
            </Typography>
            <br />
          </Paper> 
          <img alt="MyGameList Screenshots" src={require('./assets/images/MyGameListShowOff.png')} className='screenshotDisplay' />      
        </Grid>
      </Grid>
      <br />
      <br />
      <Information />
    </div>
  );
}

MyGameListCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyGameListCard);