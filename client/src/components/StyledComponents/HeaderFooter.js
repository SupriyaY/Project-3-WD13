import React from 'react'
import styled from 'styled-components'






export const Header = styled.div`
width: 100vw;
height: 10vh;
display: flex;
justify-content: space-between;
background: linear-gradient(to right, #C4E0E5, #4CA1AF);
position: fixed;

a {
    text-decoration: none;
    font-size: 1.0em;  
    font-family: 'Raleway', sans - serif;
    color: black;
    :hover {
        color: #fff;
    }


}    
`;



export const Footer = styled.div`
width: 100vw;
height: 10vh;
background: linear-gradient(to right, #C4E0E5, #4CA1AF);
`;






export default{
Header,
Footer


}