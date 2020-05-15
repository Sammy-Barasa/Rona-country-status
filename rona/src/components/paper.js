import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Typography,Card,CardContent,Grid } from '@material-ui/core';
import image from '../assets/download.jpg';

const imgStyle = {
    width: '1100px',
    height:'300px',
    marginTop: '50px',
  }

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignContent: "space-around",
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

const Paperdetail=({data: {confirmed,recovered, deaths,lastUpdate}})=>{
  const classes = useStyles();
  

  return (
      confirmed?
      <div>
      <div>
        <img className="image" src={image} style={imgStyle} alt=""/>
      </div>
      <div>
    <Grid container spacing={4} justify="center">
      <div className={classes.root}>
                <Paper elevation={3}  variant="outlined"   component={Card}>
                    <CardContent>
                        <Typography >
                            Infected
                        </Typography>
                        <Typography >
                           {confirmed.value}
                        </Typography>
                        <Typography>
                        {new Date(lastUpdate).toDateString()}
                        </Typography>
                    </CardContent>
                </Paper>
                <Paper elevation={3}  variant="outlined"   component={Card}>
                    <CardContent>
                        <Typography >
                            Recovered
                        </Typography>
                        <Typography >
                        {recovered.value}
                        </Typography>
                        <Typography>
                        {new Date(lastUpdate).toDateString()}
                        </Typography>
                    </CardContent>
                </Paper>
                <Paper elevation={3}  variant="outlined"   component={Card}>
                    <CardContent>
                        <Typography >
                            Deaths
                        </Typography>
                        <Typography >
                        {deaths.value}
                        </Typography>
                        <Typography>
                        {new Date(lastUpdate).toDateString()}
                        </Typography>
                    </CardContent>
                </Paper>
    </div>
    </Grid>
    </div>
    </div>:null
  );
}
export default Paperdetail