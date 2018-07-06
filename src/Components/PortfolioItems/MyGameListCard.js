import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    backgroundColor: '#007bff',
  },
  headline: {
    backgroundColor: ' #f8f9fa',
    fontWeight: 'bold',
    fontSize: '100%',
  },
  websiteBoxText: {
    color: '#FFFFFF',
  }
});

class MyGameListCard extends React.Component {
  state = {
    elevation: 0,
  };

  onMouseOver = () => this.setState({ elevation: 10 });
  onMouseOut = () => this.setState({ elevation: 0 });

  render(){
    const { classes } = this.props;
    return (
      <div>
        <Grid container spacing={12}>
          <Grid item xs={0} sm={3}>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.headline} elevation={0} >
              <Typography className={classes.headline}>
                MyGameList
            </Typography>
            </Paper>
            <Paper className={classes.root} elevation={this.state.elevation} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
              <Typography component="p" className={classes.websiteBoxText}>
                Keep track of your game progress... <Link to="/mygamelist" className="link">view more</Link>
              </Typography>
              <br />
              <Link to="/mygamelist">
                <img src={require('../assets/images/MyGameListShowOffSmall.png')} alt="MyGameList Screenshots" className='screenshotDisplay' />
              </Link>
              <br />
              <br />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

MyGameListCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyGameListCard);