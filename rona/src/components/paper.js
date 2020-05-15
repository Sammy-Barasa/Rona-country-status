import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Grid,Typography,Card,CardContent } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

const Paperdetail=()=>{
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Grid container spacing={3} justify="center">
        <Grid >
            <Paper elevation={3}  variant="outlined"   component={Card}>
                <CardContent>
                    <Typography >
                        Infected
                    </Typography>
                </CardContent>
            </Paper>
            <Paper elevation={3}  variant="outlined"   component={Card}>
                <CardContent>
                    <Typography >
                        Recovered
                    </Typography>
                </CardContent>
            </Paper>
            <Paper elevation={3}  variant="outlined"   component={Card}>
                <CardContent>
                    <Typography >
                        Deaths
                    </Typography>
                </CardContent>
            </Paper>
      </Grid>   
    </Grid>
      
    </div>
  );
}
export default Paperdetail