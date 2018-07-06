import React, { Fragment } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
  },
  nerdBod: {
    backgroundColor: '#343a40',
    color: '#FFFFFF'
  },
});

class NerdBodCard extends React.Component {
  state = {
    elevation: 0,
  };

  onMouseOver = () => this.setState({ elevation: 10 });
  onMouseOut = () => this.setState({ elevation: 0 });

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        NerdBod
      < a href="https://github.com/hmelo1/nerdbod" >
          <Paper className={classes.nerdBod} elevation={this.state.elevation} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} >
            <br />
            &emsp;Fitness Organizer built with Ruby on Rails
            <br />
            <br />
        </Paper>
        </a >
      </Fragment>
    )
  }
}

NerdBodCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NerdBodCard);