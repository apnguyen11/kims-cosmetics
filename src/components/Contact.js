import React, { Component, useState } from 'react'
import styled from 'styled-components'
import ReactMapboxGl, { Layer, Feature, Marker, Popup  } from 'react-mapbox-gl';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const Background = styled.div`
    background: 	#FFF0F5;
 
`
const MapContainer = styled.div`
    height: 500px;
    width: 850px;
    margin: auto;
    padding: 50px;
`

const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1IjoiYXBuZ3V5ZW4xMSIsImEiOiJjazdrdnlpODYwMWQ1M2txNnBjMWtyYzA1In0.k9fVvRrET1Yo6Le1QGLlEg'
   
  });

export default function Contact() {
  
    const [pin, setPin] = useState(null)

   
        return (
            <Background>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <Paper >xs=12</Paper>
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
                
           
        )
    
}
