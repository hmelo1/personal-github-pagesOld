import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
  },
  headline: {
    fontWeight: 'bold',
    fontSize: '150%',
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: '10px',
  },
  nameBar: {
    paddingLeft: '5px'
  },
});

function Websites(props) {
  const { classes } = props;

  return (
    <div>
      <Grid container spacing={24}>
        <Grid container xs={0} sm={3}>
        </Grid>
        <Grid container xs={12} sm={6} className={classes.nameBar}>
          <Grid xs={12} alignItems='center'>
            <Typography className={classes.headline} variant="headline" component="h3">
              Websites
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

Websites.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Websites);