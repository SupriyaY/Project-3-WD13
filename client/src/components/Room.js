import React, {Component} from 'react'
import {Redirect, Link} from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import FurnishingPage from './FurnishingPage'
import FurnishingList from './FurnishingList'
import {IdeaBoard} from './StyledComponents/Containers'
import NewRoomForm from './NewRoomForm'


const RoomWrapper = styled.div `
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
text-align: center;
padding:20px;
`;



export const Header = styled.div`
min-width: 100vw;
min-height: 10vh;
display: flex;
justify-content: center;
background: white;
align-items:center;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);


   a {
     text-decoration: none;
    font-size: 1.0em;
    margin-right: 30px;
    margin-top: 20px;
    font-family: 'Raleway', sans-serif;
text-align: center;
        :hover {
    color: #fff;
}
}


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
                <Header>
                    <a href='/'>HOME
                    </a>
                    <a href='/users'>DESIGNERS
                    </a>
                </Header>
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