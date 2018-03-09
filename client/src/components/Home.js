import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { Header, Footer} from'./StyledComponents/HeaderFooter'
import {HomeContainer, InfoContainer} from './StyledComponents/Containers'
import styled from 'styled-components'











class Home extends Component {

    render() {

        return (
            <div>
            <Header>
<Link to="/users">ROOM DESIGNERS</Link>

                </Header>
        <HomeContainer>
            <InfoContainer>
                <h1>How it works</h1>
                </InfoContainer>
            </HomeContainer> 
                <Footer>  
            </Footer>         
  </div>
        
        )
    }
}

export default Home;