import React from 'react'
import styled from 'styled-components'
import Furniture from './img/furniture.jpg'
import Bathroom from './img/tile.jpg'




export const HomeContainer = styled.div`
background: url(${Furniture}) center no-repeat;
    width: 100vw;
    height: 100vh;
            box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);


`

export const BathContainer = styled.div`
background: url(${Bathroom}) center no-repeat;
width: 100vw;
height: 100vh;

`

export default{
HomeContainer



}
