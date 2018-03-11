import React, {Component} from 'react'
import {Redirect, Link} from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import FurnishingPage from './FurnishingPage'
import FurnishingList from "./FurnishingList";


const RoomWrapper = styled.div `
align-items: center;
justify-content: center;
flex-direction: row;
padding: 20 px;
`;





class Room extends Component {
    state = {
        user: {},
        rooms: [],
        redirect: false
    }



getAllRooms = async (userId) => {
    try {
        const userId = this.props.match.params.userId
        const res = await axios.get(`/api/users/${userId}/rooms`)
        console.log("LOGGING RES", res.data)
        const rooms = res.data
        console.log(rooms)
        this.setState({ rooms })
    } catch (err) {
        console.log(err)
    }
}

    componentWillMount() {
        this.getAllRooms()

    }




    render() {
    
    console.log("Furnishings sent to Room:", this.props.furnishings)

    const roomlist = this.state.rooms.map((room) => {
        return(
            <div key={room._id}>
                {room.room_name}
                <FurnishingList furnishings={room.furnishingsToAdd}/>
            </div>
        )
    })

        return (
            <RoomWrapper>
                {roomlist}
                {/* {this.props.room_name} */}
                {/* <FurnishingPage furnishings={this.props.furnishings} roomId={this.props.roomId}/> */}
            </RoomWrapper>

        )

    }
}

export default Room