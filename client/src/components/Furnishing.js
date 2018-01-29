import React from 'react'
import {Redirect, Link} from 'react-router-dom'
import styled from 'styled-components'
import FurnishingList from './FurnishingList'

const FurnWrapper = styled.div`
align - items : center
justisfy content : center
flex - direction : row;
padding : 20 px;
`;




const Furnishing = (props) => {

    return (

        <FurnWrapper>

            <a href={props.furniture_url}>Furniture</a> <br />
            {/* <img src={props.furniture_img}/> */}
            <a href={props.light_url}>Light</a> <br />
           {/* {props.light_img} */}
            <a href={props.rug_url}>Rug</a> <br />
            {/* {props.rug_img} */}
           
        </FurnWrapper>

    )

}

export default Furnishing;