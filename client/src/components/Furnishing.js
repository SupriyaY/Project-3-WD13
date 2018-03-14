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




const Furnishing = (props) => {

    return (

        <FurnWrapper>

            <a href={props.furnishing.furniture_url}>Furniture</a>
            <img src={props.furnishing.furniture_img}/>
            {/* <a href={props.furniture_url}>Furniture</a> <br />  */}
            <img src={props.furniture_img}/>
            <a href={props.light_url}>Light</a> <br />
           {props.light_img}
           <a href={props.rug_url}>Rug</a> <br /> 
          {props.rug_img}
           
        </FurnWrapper>

    )

}

export default Furnishing