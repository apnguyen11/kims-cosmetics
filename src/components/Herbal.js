import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Carousel } from 'react-materialize';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

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
                    <Paper className={classes.paper} style={{display: "flex"}}>
                        <div style={{paddingRight: "1%", margin: "3%"}}>
                            <h5>Health Supplements & Medicated Oils</h5>
                            <p>Our collection of herbal supplements range from beauty remedies to daily health supplements.
                               We carry the ever popular after Fucoidan, which is sought after for its immune boosting properties. All of our fucoidan is made in Japan and is of the strictest and most high quality. Additionally, we also carry many products from Umeken, a very well known brand for creating products that boost skin quality, digestive health, and many other health needs. Lastly, we have a large quantity of medicated oils. Eagle brand being the most popular and many more! Come and see us for the best price and best variety. Gifts are usually offered with large purchases upon request.
                            </p>
                            <p><b>Supplements may be shipped via call-in order!</b></p>
                            <Button style={{marginRight: "10px"}}href="tel:281-575-9458" variant="contained">
                                Call Now
                                <img style={{height: "17px", paddingLeft: "10px", marginRight: "-3px"}} src="https://firebasestorage.googleapis.com/v0/b/portfolio-65fd5.appspot.com/o/phone.svg?alt=media&token=7d128812-ea00-478e-9cc5-3fb019e75b88"></img>
                            </Button>
                        </div>
                        <div style={{paddingRight: "1%"}}>  <img src="https://firebasestorage.googleapis.com/v0/b/final-portfolio-637e0.appspot.com/o/tim-foster-3wAPJB57w6s-unsplash.jpg?alt=media&token=0e17aaef-b236-407e-9d2b-0ab8c7430065" style={{maxHeight: "400px", height: "100%"}}/></div>
                           
                      
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}
