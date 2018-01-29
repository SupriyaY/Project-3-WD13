import React from 'react'
import {Redirect} from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import RoomList from './RoomList'




const RoomPage = (props) => {

console.log("logging from the roompage", props.rooms)
    return (
        <div>
            (<RoomList
            userId = {props.userId} 
            room_name = {props.room_name}
            rooms={props.rooms}/>)
        </div>
    )
    
}



export default RoomPage;



