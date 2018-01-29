import React from 'react'
import {Redirect, Link} from 'react-router-dom'
import styled from 'styled-components'
import FurnishingList from './FurnishingList'
const Furnishing = (props) => {

    return (

        <div>

            <a href={props.furniture_url}>Furniture URL</a>
            <img src={props.furniture_img}/>
            {props.light_url}
           <img src= {props.light_img}/>
            {props.rug_url}
            {props.rug_img}
           
        </div>

    )

}

export default Furnishing