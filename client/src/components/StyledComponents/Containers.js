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



export const BathContainer = styled.div`
background: url(${Bathroom}) center no-repeat;
width: 100vw;
height: 100vh;
`

export default{
HomeContainer,
BathContainer


}
