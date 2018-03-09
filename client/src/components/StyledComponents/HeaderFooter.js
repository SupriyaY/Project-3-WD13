import React from 'react'
import styled from 'styled-components'






export const HomeHeader = styled.div`
width: 100vw;
height: 10vh;
display: flex;
justify-content: CENTER;
background: white;
position: fixed;
align-items:center;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
a {
    text-decoration: none;
    font-size: 1.0em;  
    font-family: 'Raleway', sans-serif;
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
HomeHeader,
Footer


}