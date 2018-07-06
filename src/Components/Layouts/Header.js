import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Toolbar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  root: {
    flexGrow: 1,
  },
  navBar: {
    justifyContent: 'center'
  },
  button: {
    margin: 10
  }
};

function TopNavBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Toolbar align="center" classes={{ root: classes.navBar }} >
        <Link to="/">
          <Button variant="outlined" color="primary" className={classes.button}>
              ABOUT
          </Button>
        </Link>
        <Link to="/">
            <Avatar className={classes.avatar}>HM</Avatar>
        </Link>
        <Link to="/portfolio">
          <Button variant="outlined" color="secondary" className={classes.button}>
            Portfolio
          </Button>
        </Link>
      </Toolbar>
    </div>
  );
}

TopNavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopNavBar);