import React from 'react'
import {Redirect, Link} from 'react-router-dom'
import styled from 'styled-components'
import Furnishing from './Furnishing'




const FurnishingList = (props) => {

    

    console.log("Furnishings in FurnishingList:", props.furnishings)


   const furnishingList = props.furnishings.map((furnishing, index) => {
            return (<Furnishing key={index} furnishing={furnishing}     />)
        })
    

    return (
        <div>
            {furnishingList}
        </div>
    )

}

export default FurnishingList;