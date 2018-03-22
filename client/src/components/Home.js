import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { HomeHeader, Footer} from'./StyledComponents/HeaderFooter'
import {HomeContainer, InfoContainer} from './StyledComponents/Containers'
import styled from 'styled-components'




const App = styled.div`
margin: 20px;
margin-bottom: 50px;

h1{
font-size: 1.5em;  
font-family: 'Raleway', sans-serif;
color: black;
margin-bottom: 50px;
}
`








class Home extends Component {

    render() {

        return (
            <div>
            <HomeHeader>
<Link to="/users">ROOM DESIGNERS</Link>

                </HomeHeader>
        <HomeContainer>
            </HomeContainer> 
            <App>
            <h1>Welcome to RoomStyle. Select the Room Designers above to begin your home decor journey! Use RoomStyle to gather and share all of your home decor idea with other designers. Some features coming soon: in-application google search and add a room as a new designer!</h1>
            </App>
                <Footer>  
            </Footer>         
  </div>
        
        )
    }
}

export default Home;