import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import UserPage from './UserPage'
import styled from 'styled-components'

const Title = styled.h1 `
  font-size: 5.0em;
  text-align: center;
  color: black;
font-family : 'Indie Flower',
cursive;
`;

const Button = styled.button ` 
background-color: turquoise;
color: white;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid turquoise;
border-radius: 3px;
    a{
        text-decoration: none;
    }
    &: hover{
    opacity: 0.8;
    position: relative;
    margin-top: 10px;
}
`;


const ButtonStyle = styled.div `
display: flex;
justify-content: center;
align-items:center;
`;



const HomeStyle = styled.div `
margin: 0;
padding: 0;
display: flex;
justisfy-content: center;
align-items: center;
flex-direction: columns;
background-image: url('https://i.imgur.com/79QGY25.jpg');
background-position: center;
background-size: cover;
height: 100%;
width: 100%;
`;

const Wrapper = styled.div`
 display: flex;
 flex-direction : column;
 align-items: center
 justify-content: center;
`;

const Image = styled.div`
img{
   height: 100%;
   width: 100%;
   opacity: .4
}
`;

const Words = styled.p `
font-size:2.0em;
text-align:center;
color:black;
font-family:'Indie Flower',
cursive;
`;



class Home extends Component {

    render() {

        return (
<Wrapper>
            <Title>RoomStyle</Title>
    
            <ButtonStyle><Button><Link to="/users">Designers</Link></Button></ButtonStyle> 
<Words> <p>Let's Create your dream room! Click on the Designers button for inspiration.
    When you are ready to play, add yourself as a designer, and let the fun begin!</p> 
    </Words>
<Image>
<img src = "https://i.imgur.com/79QGY25.jpg" alt = "living room"/>
</Image>


</Wrapper>
)
    }
}

export default Home;