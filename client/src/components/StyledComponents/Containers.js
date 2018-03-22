import React from 'react'
import styled from 'styled-components'
import Furniture from './img/furniture.jpg'
// import Bathroom from './img/tile.jpg'
import Creative from './img/visionboard.jpg'



export const HomeContainer = styled.div`
background: url(${Furniture}) center no-repeat;
    width: 100vw;
    height: 100vh;
           

`

export const IdeaBoard = styled.div`
background: url(${Creative}) center no-repeat;
background-size: cover;
min-width: 100vw;
min-height: 100vh;
z-index: -999;
`






// export const BathContainer = styled.div`
// background: url(${Bathroom}) center no-repeat;
// width: 100vw;
// height: 100vh;

// `

export default{
HomeContainer,
IdeaBoard

}
