import React, { Component, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import ReactMapboxGl, { Layer, Feature, Marker, Popup  } from 'react-mapbox-gl';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { fadeIn, fadeInRight } from 'react-animations';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import PhoneIcon from '@material-ui/icons/Phone';
import { Link } from 'react-router-dom'


const Background = styled.div`
    background: #FFF0F5;
    height: 80%;
    width: 100%;
    border-bottom: 1px solid black;
 
`
const fadeAnimation = keyframes`${fadeIn}`;
const MapContainer = styled.div`
    height: 500px;
    width: 100%;
    margin: auto;
    padding: 50px;
    animation: 2s ${fadeAnimation}
`

const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1IjoiYXBuZ3V5ZW4xMSIsImEiOiJjazdrdnlpODYwMWQ1M2txNnBjMWtyYzA1In0.k9fVvRrET1Yo6Le1QGLlEg'
   
  });


export default function Contact() {
  
    const [pin, setPin] = useState(null)
    const useStyles = makeStyles({
        root: {
          minWidth: 275,
        },
        bullet: {
          display: 'inline-block',
          margin: '0 2px',
          transform: 'scale(0.8)',
        },
        title: {
          fontSize: 20,
        },
        pos: {
          marginBottom: 12,
        },
        pos2: {
            paddingRight: 15,
            paddingLeft: 15,
            marginBottom: 12
        },
        pos3: {
            paddingRight: 15,
            paddingLeft: 15,
            marginBottom: -10
        }
      });
      const classes = useStyles();

const MyButton = styled(({ color, ...other }) => <Button {...other} />)({
  background: props =>
    props.color === 'red'
      ? 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
      : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: props =>
    props.color === 'red'
      ? '0 3px 5px 2px rgba(255, 105, 135, .3)'
      : '0 3px 5px 2px rgba(33, 203, 243, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
  margin: 8,
});

   
        return (
            <div>
                <Background>
                <Grid container spacing={3}>
                    <Grid style={{paddingLeft: "70px", paddingTop: "70px"}} item xs={12} sm={4}>
                        <Card 
                            style={{textAlign: "center"}}
                            className={classes.root} variant="outlined">
                            <CardContent>
                                <Typography className={classes.title} color="textPrimary" gutterBottom>
                                    <b>Kim's Cosmetics</b>
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                    <b>Located in:</b> Hong Kong City Mall
                                </Typography>
                                <Typography className={classes.pos2} color="textSecondary">
                                    <b>Address:</b> 11205 Bellaire Blvd b4,
                                     <br/> Houston, TX 77072
                                <br />
                               
                                </Typography>
                                <Typography className={classes.pos3}>
                                <b>Hours: </b> <br/>
                                Monday	10AM–8PM <br/>
                                Tuesday	10AM–8PM <br/>
                                Wednesday	10AM–8PM <br/>
                                Thursday	10AM–8PM <br/>
                                Friday	10AM–8PM <br/>
                                Saturday	10AM–8PM <br/>
                                Sunday	10AM–8PM <br/>
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    href="tel:281-575-9458"
                                    variant="contained"
                                    color="secondary"
                                    style={{margin: "0 auto", marginBottom: "10px"}} 
                                    size="small">Call Now  
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                    <MapContainer>
                        <Card style={{height: "500px", width: "100%", margin: "auto"}}>
                            <Map
                                style="mapbox://styles/mapbox/streets-v11"
                                center= {[-95.577410, 29.702200]}
                                containerStyle={{
                                    height: '100%',
                                    width: '100%'
                                }}
                                zoom={[16]}
                                >
                            <Marker 
                                coordinates={[-95.577410, 29.702200]}
                            >    
                                <Button 
                                style={{background:"none"}}
                                onClick={e => {
                                       e.preventDefault()
                                       setPin(true)
                                      e.stopPropagation()
                                    }
                                }> 
                                <img style={{height: "25px" }} src="https://firebasestorage.googleapis.com/v0/b/portfolio-65fd5.appspot.com/o/pin.svg?alt=media&token=db0fa8cc-e567-4982-843f-5ed17a1d539c"></img>
                                </Button>
                            </Marker>
                            {pin ? (
                                <Popup 
                                style={{cursor: "pointer"}}
                                closeOnClick={true}
                                coordinates={[-95.577410, 29.702200]}
                                onClick={e => {
                                    e.preventDefault()
                                    setPin(false)
                                }}
                                
                                >
                                    <div style={{width: "200px", height: "100px", textAlign: "center", margin: "-3px"}}>
                                        <h6>Kim's Cosmetics</h6>
                                        <p><b>Located in:</b> Hong Kong City Mall</p>
                                        <p><b>Address:</b> 11205 Bellaire Blvd b4, Houston, TX 77072</p>
                                       
                                    </div>
                                </Popup>
                            ) : null}
                            </Map>
                        </Card> 
                </MapContainer>
                    </Grid>
                </Grid>
                </Background>
                

                <div style={{float: "left", paddingLeft: "6.25%"}}>
                    <MyButton  href="https://www.instagram.com/kimscosmetics_gifts/?hl=en" color="red">
                            <InstagramIcon/> 
                    </MyButton>
                    <MyButton href="https://www.facebook.com/Kims-Cosmetics-766034480241511/?   ref=aymt_homepage_panel&eid=ARAn7pI-dmdAy2jNM938y9NXodSFUwnbaf6QtZbWqpenVT_CRTJYh6_lwNmmFTKOLeZbs_IH3MFD4pur" color="red">
                        <FacebookIcon/>
                    </MyButton>
                    <MyButton color="red" href="tel:281-575-9458">
                        <PhoneIcon/>
                    </MyButton>
                    
                </div>
            </div>
          
            
            
                
           
        )
    
}
