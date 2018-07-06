import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';



const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingLeft: '10'
  },
  headline: {
    fontWeight: 'bold',
    fontSize: '150%',
    paddingLeft: '10px',
  },
  subHeadline: {
    paddingLeft: '10px',
  },
  avatar: {
    width: 'auto',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    paddingRight: '10px'
  },
  nameBar: {
    paddingLeft: '5px'
  },
  avatar: {
    marginTop: 10,
    marginBottom: 10,
    right: 10
  },
});

function Name(props) {
  const { classes } = props;

  return (
    <div>
      <Grid container spacing={24}>
        <Grid container xs={0} sm={3}>
        </Grid>
        <Grid container xs={12} sm={6} className={classes.nameBar}>
          <Grid xs={11} alignItems='center'>
            <Typography className={classes.headline} variant="headline" component="h3">
              Heriberto Melo
            </Typography>
            <Typography component="p" className={classes.subHeadline}>
              Full-Stack Developer
           </Typography>
          </Grid>
          <Grid xs={1}>
            <Avatar className={classes.avatar} src="https://en.gravatar.com/userimage/141361124/5745f6c91fae57e574079570765eae72.jpg" />          </Grid>
        </Grid> 
      </Grid>
    </div>
  );
}

Name.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Name);