import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { HomeHeader, Footer} from'./StyledComponents/HeaderFooter'
import {HomeContainer, InfoContainer} from './StyledComponents/Containers'
import styled from 'styled-components'











class Home extends Component {

    render() {

        return (
            <div>
            <HomeHeader>
<Link to="/users">ROOM DESIGNERS</Link>

                </HomeHeader>
        <HomeContainer>
            </HomeContainer> 
                <Footer>  
            </Footer>         
  </div>
        
        )
    }
}

export default Home;