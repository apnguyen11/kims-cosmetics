import React from 'react'
import styled from 'styled-components'

const Background = styled.div`
 background: #FFFAFA;
`
const Img = styled.img`
    src: url(${props => props.src});
    height: 500px;
    padding: 40px;
    margin: auto;
    border-radius: 30px;
`

export default function About() {
    
    return (
        <Background > 
            
            <Img src="https://firebasestorage.googleapis.com/v0/b/portfolio-65fd5.appspot.com/o/raphael-lovaski-DEuob2v77wI-unsplash.jpg?alt=media&token=564b41fe-9ade-4ac8-b933-667e008e590b" />
            
        </Background >
    )
}
