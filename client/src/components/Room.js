import React, {Component} from 'react'
import {Redirect, Link} from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import FurnishingPage from './FurnishingPage'
import FurnishingList from './FurnishingList'
import {IdeaBoard} from './StyledComponents/Containers'
import NewRoomForm from './NewRoomForm'


const RoomWrapper = styled.div `
align-items: center;
justify-content: center;
flex-direction: row;
padding:20px;
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

addNewRoom = async () =>{

    try {
        const userId = this.props.match.params.userId
        const res = await axios.post(`/api/users/${userId}/rooms`)
        console.log("LOGGING RES", res.data)
        const rooms = res.data
        console.log(rooms)
        this.setState({ rooms })
    } catch (err) {
        console.log(err)
    }
}


// handleSubmit = async (e) => {
//         //console.log("Submitting User")
//         e.preventDefault()
//         const letsbuy = {
//             _id: this.state.room._id,
//             room_name: this.state.room.room_name
//         }
//     }




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
            <IdeaBoard>
            <RoomWrapper>
                {roomlist}
            </RoomWrapper>

                <div>
                    <NewRoomForm
                        rooms={this.state.rooms}
                        room={this.state.newRoom}
                        id={this.state.newUserId}
                        redirect={this.state.redirect}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit} />
                </div>
            </IdeaBoard>

        )

    }
}

export default Room