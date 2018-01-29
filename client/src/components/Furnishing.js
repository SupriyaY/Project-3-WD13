import React from 'react'
import {Redirect, Link} from 'react-router-dom'
import styled from 'styled-components'
import FurnishingList from './FurnishingList'






const Furnishing = (props) => {

    return (

        <div>

            <a href={props.furniture_url}>Furniture</a> <br />
            {/* <img src={props.furniture_img}/> */}
            <a href={props.light_url}>Light</a> <br />
           {/* {props.light_img} */}
            <a href={props.rug_url}>Rug</a> <br />
            {/* {props.rug_img} */}
           
        </div>

    )

}

export default Furnishing;