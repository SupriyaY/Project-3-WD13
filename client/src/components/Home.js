import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import UserPage from './UserPage'
import styled from 'styled-components'

const Title = styled.h1 `
  font-size: 4.5em;
  text-align: center;
  color: turquoise;
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


class Home extends Component {

    render() {

        return (

            <div>
                <div>
                    <Title>RoomStyle</Title>
                </div>
                <div>
                    <Button>
                        <Link to="/users">Designers</Link>
                    </Button>
                    
                </div>
            </div>

        )
    }
}

export default Home;