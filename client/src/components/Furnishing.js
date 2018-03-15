import React from 'react'
import {Redirect, Link} from 'react-router-dom'
import styled from 'styled-components'
import FurnishingList from './FurnishingList'

const FurnWrapper = styled.div`
align-items: center;
justify-content: center;
flex-direction: row;
padding: 20px;
`;


const UserCard = styled.div`
top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 10px;
    width: 30vh;
    height: 20vh;
    background-color: yellow;
    display: flex;
    justify-content: center;
    align-items: center;
     box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    z-index: 999;

a{
    text-decoration: none;
    font-family: 'Permanent Marker', cursive;
    color: black;
}

`;


const Header = styled.div`






`



const Furnishing = (props) => {

    return (
     
        <FurnWrapper>
<UserCard>
            <a href={props.furnishing.furniture_url}>Furniture</a>
            </UserCard>
            <img src={props.furnishing.furniture_img}/>
            <a href={props.furniture_url}></a> <br /> 
            <img src={props.furniture_img}/>
            <a href={props.light_url}></a> <br />
           {props.light_img}
           <a href={props.rug_url}></a> <br /> 
          {props.rug_img}
           
        </FurnWrapper>

    )

}

export default Furnishing