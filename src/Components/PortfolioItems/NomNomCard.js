import React, { Fragment } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
  },
  nomNom: {
    backgroundColor: '#28a745',
    color: '#FFFFFF'
  },
});

class NomNomCard extends React.Component {
  state = {
    elevation: 0,
  };

  onMouseOver = () => this.setState({ elevation: 10 });
  onMouseOut = () => this.setState({ elevation: 0 });

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        Nom Nom
        <a href="https://github.com/hmelo1/sinatra-recipes-organizer">
          <Paper className={classes.nomNom} elevation={this.state.elevation} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} >
            <br />
            &emsp;Safe place to store your recipes!
            <br />
            <br />
          </Paper>
        </a>
      </Fragment>
    )
  }
}

NomNomCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NomNomCard);