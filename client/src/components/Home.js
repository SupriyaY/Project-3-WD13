import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import UserPage from './UserPage'
import styled from 'styled-components'

const Title = styled.h1 `
  font-size: 3.5em;
  text-align: center;
  color: turquoise;
`;

// const Content = styled.div` width: 100vw height:

class Home extends Component {

    render() {

        return (
            <div>
            <div>
                <Title>RoomStyle</Title>
                </div>
<div>
                 <button><Link to="/users">Users</Link></button>
                   <button><Link to="#">Rooms</Link></button>
                   <button><Link to="#">Funishings</Link></button>
                    </div>
</div>
        )
    }
}


export default Home;