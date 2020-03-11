import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Carousel } from 'react-materialize';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    background: '#FFF0F5'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    cursor: "pointer"
   
  },
}));

export default function Herbal() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
            <Grid item xs={12} style={{height: "30%"}}>
                <Card className={classes.paper} style={{marginLeft: "15%", marginRight: "15%", marginTop: "4%"}} >
                    <Carousel style={{height: "50%", minHeight: "900px"}}
                    images={[
                        'https://firebasestorage.googleapis.com/v0/b/final-portfolio-637e0.appspot.com/o/Screen%20Shot%202020-03-11%20at%2012.43.46%20PM.png?alt=media&token=8cae2609-a2a1-4b5d-ad0d-263ffc94376f',
                        'https://firebasestorage.googleapis.com/v0/b/final-portfolio-637e0.appspot.com/o/Screen%20Shot%202020-03-11%20at%2012.34.37%20PM.png?alt=media&token=145b5a82-8db3-4f85-a482-c32aeaff7e00',
                        'https://firebasestorage.googleapis.com/v0/b/final-portfolio-637e0.appspot.com/o/Screen%20Shot%202020-03-11%20at%2012.38.47%20PM.png?alt=media&token=173f8c96-f8dd-4c83-8adb-8731180c93c4',
                        'https://firebasestorage.googleapis.com/v0/b/final-portfolio-637e0.appspot.com/o/Screen%20Shot%202020-03-11%20at%2012.46.44%20PM.png?alt=media&token=2315350c-b801-4616-b5bf-b55cd60d27b2',
                        'https://firebasestorage.googleapis.com/v0/b/final-portfolio-637e0.appspot.com/o/Screen%20Shot%202020-03-11%20at%2012.48.53%20PM.png?alt=media&token=022709f2-a873-407d-a7ba-2f737bcd8251',
                        'https://firebasestorage.googleapis.com/v0/b/final-portfolio-637e0.appspot.com/o/Screen%20Shot%202020-03-11%20at%2012.50.05%20PM.png?alt=media&token=836921ba-0b0a-4ee6-870f-f43180c098ba',
                        'https://firebasestorage.googleapis.com/v0/b/final-portfolio-637e0.appspot.com/o/Screen%20Shot%202020-03-11%20at%201.03.51%20PM.png?alt=media&token=e9cee5d7-933d-4661-8e81-d14a9a80ef0e',
                        'https://firebasestorage.googleapis.com/v0/b/final-portfolio-637e0.appspot.com/o/Screen%20Shot%202020-03-11%20at%201.05.08%20PM.png?alt=media&token=a020ae42-cee1-4242-897f-eafe9cfce58c',
                        'https://firebasestorage.googleapis.com/v0/b/final-portfolio-637e0.appspot.com/o/Screen%20Shot%202020-03-11%20at%201.05.44%20PM.png?alt=media&token=d9484b95-089c-401f-895c-bdbcea48240a'
                    ]}
                    options={{
                        dist: -40,
                        duration: 100,
                        fullWidth: false,
                        indicators: false,
                        noWrap: false,
                        numVisible: 8,
                        onCycleTo: null,
                        padding: 0,
                        shift: 0
                    }}
                    />
                </Card>
            </Grid>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                <h1>Health Supplements</h1>
                </Paper>
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
