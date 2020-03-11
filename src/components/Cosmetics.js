import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Carousel } from 'react-materialize';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    background: '#FFF0F5'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
   
  },
}));

export default function Cosmetics() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
            <Grid item xs={12} sm={8}>
                <Paper className={classes.paper}>
                    <Carousel
                    images={[
                        'https://picsum.photos/200/300?image=0',
                        'https://picsum.photos/200/300?image=1',
                        'https://picsum.photos/200/300?image=2',
                        'https://picsum.photos/200/300?image=3',
                        'https://picsum.photos/200/300?image=4'
                    ]}
                    options={{
                        dist: -50,
                        duration: 100,
                        fullWidth: false,
                        indicators: false,
                        noWrap: false,
                        numVisible: 5,
                        onCycleTo: null,
                        padding: 0,
                        shift: 0
                    }}
                    />
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}>xs=12 sm=6</Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}>xs=12 sm=6</Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Paper className={classes.paper}>xs=6 sm=3</Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Paper className={classes.paper}>xs=6 sm=3</Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Paper className={classes.paper}>xs=6 sm=3</Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
                <Paper className={classes.paper}>xs=6 sm=3</Paper>
            </Grid>
            </Grid>
        </div>
    )
}
