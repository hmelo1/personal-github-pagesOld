import React, { Fragment } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
  },
  steamDeals: {
    backgroundColor: '#e83e8c',
    color: '#FFFFFF'
  },
});

class SteamDealsCard extends React.Component {
  state = {
    elevation: 0,
  };

  onMouseOver = () => this.setState({ elevation: 10 });
  onMouseOut = () => this.setState({ elevation: 0 });

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        Steam Deals
        <a href="https://github.com/hmelo1/steam_deals_cli">
          <Paper className={classes.steamDeals} elevation={this.state.elevation} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} >
            <br />
            &emsp;Ruby Gem to view current deals on Steam.
            <br />
            <br />
          </Paper>
        </a>
      </Fragment>
    )
  }
}

SteamDealsCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SteamDealsCard);