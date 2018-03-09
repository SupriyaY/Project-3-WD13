import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { Header, Footer} from'./StyledComponents/HeaderFooter'
import {HomeContainer} from  './StyledComponents/Containers'
import styled from 'styled-components'











class Home extends Component {

    render() {

        return (
            <div>
            <Header>
<Link to="/users">DESIGNERS</Link>

                </Header>
        <HomeContainer>
            </HomeContainer> 
                <Footer>  
            </Footer>         
  </div>
        
        )
    }
}

export default Home;