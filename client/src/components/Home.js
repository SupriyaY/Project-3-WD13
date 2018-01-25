import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import UserPage from './UserPage'
import styled from 'styled-components'


const Title = styled.h1 `
  font-size: 3.5em;
  text-align: center;
  color: turquoise;
`;

const Button = styled.button ` 
color: turquoise;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid turquoise;
border-radius: 3px;
`;
//these need to move to the bottom -- flexbox



// const Content = styled.div` width: 100vw height:

class Home extends Component {

    render() {

        return (
            <div>
            <div>
                <Title>RoomStyle</Title>
                </div>
<div>
                 <Button><Link to="/users">Users</Link></Button>
                   <Button><Link to="#">Rooms</Link></Button>
                   <Button><Link to="#">Funishings</Link></Button>
                    </div>
</div>
        )
    }
}


export default Home;