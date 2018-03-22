import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { HomeHeader, Footer} from'./StyledComponents/HeaderFooter'
import {HomeContainer, InfoContainer} from './StyledComponents/Containers'
import styled from 'styled-components'


const h1 = styled.header`
color: black;



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
            <h1>Welcome to RoomStyle. Selected the Room Designers above to begin your home decor journey!</h1>
                <Footer>  
            </Footer>         
  </div>
        
        )
    }
}

export default Home;