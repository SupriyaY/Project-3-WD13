import React from 'react'
import {Redirect, Link} from 'react-router-dom'
import styled from 'styled-components'
import Room from './Furnishing'

const FurnishingList = (props) => {

    const furnishingList = props.furnishings
        .map((furnishing, index) => {
            return (<Furnishing 
                key={index} 
                furniture_url={props.furnishings[index].furniture_url}
                furniture_img={props.furnhsings[index].furniture_img}
                light_url={props.furnishings[index].light_url}
                light_img={props.furnishings[index].light_img}
                rug_url={props.furnishings[index].rug_url}
                rug_img={props.furnishings[index].rug_img}              
                
            />)
        })

    return (
        <div>
            {furnishingList}
        </div>
    )

}

export default FurnshingList;