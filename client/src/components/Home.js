import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import UserPage from './UserPage'
import styled from 'styled-components'



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
`;



const HomeStyle = styled.div `
margin: 0;
padding: 0;
display: flex;
justisfy-content: center;
align-items: center;
flex-direction: column;
background-image: url('https://i.imgur.com/79QGY25.jpg');
background-position: center;
background-size: cover;
height: 100%;
width: 100%;
`;

const Wrapper = styled.div `
 display: flex;
 flex-direction : column;
 align-items: center
 justify-content: center;
`;

// const Image = styled.div `
// img{
//    height: 100%;
//    width: 100%;
//    opacity: .4
// }
// `;
const Nav = styled.div`
padding: 20px;
margin-bottom: 20px;
width: 100vw;
height: 5vh;
display: flex;
justify-content: flex-end;
/* align-items: center; */
/* position: fixed; */
background: linear-gradient(to right, #C4E0E5, #4CA1AF);/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
position: fixed;

a {
    text-decoration: none;
    font-size: 1.0em;
    margin-right: 50px;
    margin-top: 20px;
    font-family: 'Raleway', sans-serif;

    :hover {
    color: #fff;
}
}    
`;

const Footer = styled.div`
/* padding: 20px;
margin-bottom: 20px;  */
width: 100vw;
height: 10vh;
background: linear-gradient(to right, #C4E0E5, #4CA1AF);
`;


class Home extends Component {

    render() {

        return (
            <div>
            <Nav>
<a href="/users">DESIGNERS</a>
                </Nav>
            {/* <Wrapper>
                <div>
                    <Image>
                        <img src="https://i.imgur.com/79QGY25.jpg" alt="living room"/>
                    </Image>
                </div>

            </Wrapper> */}  
                <Footer>  
            </Footer>         
  </div>
        
        )
    }
}

export default Home;