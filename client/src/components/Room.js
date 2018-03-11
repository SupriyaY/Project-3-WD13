import React, {Component} from 'react'
import {Redirect, Link} from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import FurnishingPage from './FurnishingPage'


const RoomWrapper = styled.div `
align-items: center;
justify-content: center;
flex-direction: row;
padding: 20 px;
`;





class Room extends Component {




getAllRooms = async (userId) => {
    try {
        const userId = this.props.match.params.userId
        const res = await axios.get(`/api/users/${userId}/rooms`)
        console.log("LOGGING RES", res)
        const rooms = res.data.rooms
        console.log(rooms)
        this.setState({ rooms })
    } catch (err) {
        console.log(err)
    }
}





    render() {
    
    console.log("Furnishings sent to Room:", this.props.furnishings)

        return (
            <RoomWrapper>
                {this.props.room_name}
                <FurnishingPage furnishings={this.props.furnishings} roomId={this.props.roomId}/>
            </RoomWrapper>

        )

    }
}

export default Room