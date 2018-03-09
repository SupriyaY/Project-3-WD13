import React from 'react'
import {Redirect} from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import RoomList from './RoomList'

const ListWrapper = styled.div `
    display: flex;

`


const RoomPage = (props) => {

console.log("logging from the roompage", props.rooms)
    return (
        <ListWrapper>
            <RoomList
            getAllFurnishings = {props.getAllFurnishings}
            furnishings={props.furnishings}
            userId = {props.userId} 
            room_name={props.room_name}
            rooms={props.rooms}/>
            
        </ListWrapper>
    )
    
}



export default RoomPage;



