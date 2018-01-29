import React from 'react'
import {Redirect, Link} from 'react-router-dom'
import styled from 'styled-components'
import FurnishingPage from './FurnishingPage'
const Room = (props) => {

    return (

        <div>

            {props.furniture_url}
            {props.furniture_img}
            {props.}
            < FurnishingPage/>
        </div>

    )

}

export default Room