import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { GithubCircle, LinkedinBox, At, Account } from 'mdi-material-ui';

const styles = {
  root: {
    backgroundColor: ' #F5F5F5',
  },
  headline: {
    backgroundColor: ' #F5F5F5',
  }
};

class BottomNav extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <Grid container spacing={12}>
      
        <Grid item xs={0} sm={3}>

        </Grid>
        <Grid item xs={12} sm={6}>
          <br />
          <Paper elevation={0}>
            <Typography className={classes.headline} variant="headline" align='center'>
              Reach out to me!
            </Typography>
            
          </Paper>
          <hr />
        </Grid>
        <Grid xs={12}>
          <BottomNavigation
            value={value}
            onChange={this.handleChange}
            showLabels
            className={classes.root}
          >
            <a href="https://github.com/hmelo1">
              <BottomNavigationAction label="Github" icon={< GithubCircle />} showLabel="true" />
            </ a>
            <a href="https://www.linkedin.com/in/heriberto-melo-ab10a5bb/">
              <BottomNavigationAction label="Linkedin" icon={< LinkedinBox />} showLabel="true" />
            </a>
            <a href="mailto:heriberto@melo.nyc">
              <BottomNavigationAction label="E-Mail" icon={< At />} showLabel="true" />
            </a>
            <a href="https://drive.google.com/file/d/1i7albF5tl8JlVDJM3cKFO4nEGMx1bhMv/view">
              <BottomNavigationAction label="Resume" icon={< Account />} showLabel="true" />
            </a>
          </BottomNavigation>
        </Grid>
      </Grid>
    );
  }
}

BottomNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomNav);