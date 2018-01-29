import React from 'react'
import {Redirect} from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import FurnishingList from './FurnishingList'

const FurnishingPage = (props) => {
    return(
        <div>
            <FurnishingList
furnishings={props.furnishings}
/>
        </div>
    )



}


export default FurnishingPage