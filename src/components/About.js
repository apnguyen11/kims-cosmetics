import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper';

const Background = styled.div`
 background: 	#FFF0F5;
`
const Img = styled.img`
    src: url(${props => props.src});
    height: 350px;
    margin-top: 20px;
    border-radius: 10px;
`
const Title = styled.h3`
    color: #ff6961;
    padding-top: 40px;
`
const Body = styled.p`
    color: black;
    padding-left: 30%;
    padding-right: 30%;
    padding-bottom: 40px;
`

const BtnContainer = styled.div`
    padding: 30px;
`

export default function About() {

    return (
       
       
        <Background > 
            <Img src="https://firebasestorage.googleapis.com/v0/b/portfolio-65fd5.appspot.com/o/raphael-lovaski-DEuob2v77wI-unsplash.jpg?alt=media&token=564b41fe-9ade-4ac8-b933-667e008e590b" />
            <Paper elevation={3} style={{backgroundColor: "#FFF5EE"}} >
            <Title>Family Owned Since 1998</Title>
            <Body>  Located in Chinatown, our store boasts a broad array of the best Japanese & Korean cosmetics. We have an eccentric collection of some of the most noteworthy and remarkable beauty products. We carry the ever coveted line of cosmetics from Shisiedo, to other well known brands such as NOEVIR & Menard. Come see our unique selection to meet your beauty needs. Certain brands are available in store only. </Body>
            <Body>Additionally, we carry a moderate collection of toys from Sanrio. Most popularly known for Hello Kitty, Pompompurin, My Melody, Gudetama, & More! Lastly, we also have a large assortment of herbal supplements to aid in beauty, health, and general well being. Fucoidan from japan being our most popular supplement and many more from Umeken!</Body>
            </Paper>
            <BtnContainer>
                <Button style={{marginRight: "10px"}}href="tel:281-575-9458" variant="contained">
                    Call Now
                    <img style={{height: "17px", paddingLeft: "10px", marginRight: "-3px"}} src="https://firebasestorage.googleapis.com/v0/b/portfolio-65fd5.appspot.com/o/phone.svg?alt=media&token=7d128812-ea00-478e-9cc5-3fb019e75b88"></img>
                </Button>
                <Button style={{marginLeft: "10px"}} variant="contained">
                    <Link style={{color: "black"}} to="/contact">
                        Location
                        <img style={{height: "17px", paddingLeft: "7px", marginRight: "-6px", marginBottom: "-3px"}} src="https://firebasestorage.googleapis.com/v0/b/portfolio-65fd5.appspot.com/o/pin.svg?alt=media&token=db0fa8cc-e567-4982-843f-5ed17a1d539c"></img>
                    </Link>
                </Button>
            </BtnContainer>
           
        </Background >
    )
}
