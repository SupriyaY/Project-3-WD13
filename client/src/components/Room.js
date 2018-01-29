import React from 'react'
import {Redirect, Link} from 'react-router-dom'
import styled from 'styled-components'
import FurnishingPage from './FurnishingPage'
const Room = (props) => {

    return (

        <div>
           
        {props.room_name}
< FurnishingPage />
        </div>

    )

}

export default Room