import React from 'react'
import styled from 'styled-components'
import Furniture from './img/furniture.jpg'
import Bathroom from './img/tile.jpg'




export const HomeContainer = styled.div`
background: url(${Furniture}) center no-repeat;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 0 auto;
    z-index: -999;
    `;

export const InfoContainer = styled.div `
background-color: rgba(255, 255, 255, 255) ;
width: 60vw;
height: 40vh;
align-items: center;
justify-content: center;
border: 3px solid #C4E0E5;

 h1{
color: #C4E0E5;
font-size: 1em;
} 

h2{

}
p{


}

`

export const BathContainer = styled.div`
background: url(${Bathroom}) center no-repeat;
width: 100vw;
height: 100vh;
`

export default{
HomeContainer,
InfoContainer,
BathContainer


}
