import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import NerdBodCard from './NerdBodCard';
import SteamDealsCard from './SteamDealsCard';
import NomNomCard from './NomNomCard';


const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
  },
  websiteBoxText: {
    color: '#FFFFFF',
  },
  moreProjects: {
    backgroundColor: '#6f42c1',
    color: '#FFFFFF'
  },
  headline: {
    backgroundColor: ' #f8f9fa',
    fontWeight: 'bold',
    fontSize: '110%',
  },
});

class UnpublishedCard extends React.Component {
  state = {
    elevation: 0,
  };

  onMouseOver = () => this.setState({ elevation: 10 });
  onMouseOut = () => this.setState({ elevation: 0 });

  render(){
    const { classes } = this.props;
    return (
      <div>
        <Grid container spacing={16}>
          <Grid item xs={0} sm={3}>
          </Grid>

          <Grid item xs={12} sm={6}>
            <hr />
            <Paper className={classes.headline} elevation={0} >
              <Typography className={classes.headline}>
                Unpublished Projects
            </Typography>

            </Paper>
          </Grid>
          <Grid item xs={0} sm={3}>
          </Grid>

          <Grid item xs={0} sm={3}>
          </Grid>

          <Grid item xs={12} sm={2}>
            <NerdBodCard />
          </Grid>

          <Grid item xs={12} sm={2}>
            <NomNomCard />
          </Grid>

          <Grid item xs={12} sm={2}>
            <SteamDealsCard />
          </Grid>
          <Grid item xs={0} sm={3}>
          </Grid>
          <Grid item xs={0} sm={3}>
          </Grid>
          <Grid item xs={12} sm={6}>
            <a href="https://github.com/hmelo1">
              <Paper className={classes.moreProjects} elevation={this.state.elevation} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} >
                <br />
                &emsp;View more Projects on Github
                <br />
                <br />
            </Paper>
            </a>
            <hr />
          </Grid>
        </Grid>
      </div>
    );
  }
}

UnpublishedCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UnpublishedCard);