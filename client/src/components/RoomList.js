import React from 'react'
import {Redirect, Link} from 'react-router-dom'
import styled from 'styled-components'
import Room from './Room'

const RoomWrapper = styled.div`
display: flex;
align-items: center;
justisfy-content: center;
flex-direction: row;
padding: 20px;
`;


const RoomList = (props) => {
    console.log("Furnishing from RoomList:", props.rooms)

    const roomList = props.rooms.map((room, index) => {
            return (
            <Room
                key={index}
                room_name={props.rooms[index].room_name}
                roomId={props.rooms[index]._id}
                furnishings={props.rooms[index].furnishingsToAdd}
                getAllFurnishings={props.getAllFurnishings}
                />)
        })

    return (
        <RoomWrapper>
            {roomList}
        </RoomWrapper>
    )

}

export default RoomList;