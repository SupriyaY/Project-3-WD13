import React, {Component} from 'react'
import {Redirect, Link} from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import EditUserForm from './EditUserForm'
import RoomPage from './RoomPage'

const Button = styled.button ` 
color: turquoise;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid turquoise;
border-radius: 3px;
`;

const Body = styled.div `
margin:0;
width:100%;
height:100%;
position:relative;
background:#FFBC73;
background: -webkit-linear-gradient(to left, #FF5F6D, #FFC371);
background: linear-gradient(to left, #FF5F6D, #FFC371);
`;

class UserView extends Component {
    state = {
        user: {},
        rooms: [],
        furnishings: [],
        redirect: false
    }

    componentWillMount() {
        this.getUserInfo()
        this.getAllRooms()

    }

    getUserInfo = async() => {
        try {
            const {userId} = this.props.match.params
            const res = await axios.get(`/api/users/${userId}`)
            console.log(res.data)
            this.setState({user: res.data})
        } catch (err) {
            console.log(err)
        }
    }

    getAllRooms = async () => {
        try {
            const userId = this.props.match.params.userId
            const res = await axios.get(`/api/users/${userId}/rooms`)
            console.log("LOGGING RES", res)
            const rooms = res.data.rooms
            console.log(rooms)
            this.setState({rooms})
        } catch (err) {
            console.log(err)
        }
    }

getAllFurnishings = async (roomId) => {
try {
const userId = this.props.match.params.userId
console.log("YOOOOO",userId, roomId)
const res = await axios.get(`/api/users/${userId}/rooms/${roomId}/furnishings`)
const furnishings = res.data
console.log("HIIIII",furnishings)
this.setState({furnishings})
} catch (err) {
console.log(err)
}

}

    //not sure about this code - it works but errors at the end
    banannaDelete = async() => {
        try {
            const {userId} = this.props.match.params
            const res = await axios.delete(`/api/users/${userId}`)
            console.log(res.data)
            this
                .props
                .getAllUsers()
            this.setState({redirect: true, user: res.data})
        } catch (err) {
            console.log(err)
        }
    }

    handleSubmit = async(e) => {
        console.log("Submitting User")
        e.preventDefault()
        const letsbuy = {
            _id: this.state.user._id,
            name: this.state.user.name,
            username: this.state.user.username,
            photo_url: this.state.user.photo_url,
            email: this.state.user.email
        }

        console.log("Submitting user:", letsbuy)
        const res = await axios.patch(`/api/users/${this.state.user._id}`, letsbuy)
        console.log('Posted user', res.data)
        this.setState({redirect: false, newUser: res.data})

    }

    handleChange = (e) => {
        console.log("Changing name to value:", e.target.name, e.target.value)
        const user = {
            ...this.state.user
        }

        user[e.target.name] = e.target.value
        this.setState({user})
    }

    render() {
        console.log("Rendering UserView.User:", this.state.rooms)
        // if (this.state.redirect === true) {     return (<Redirect to={`/users`}/>) }
        if (this.state.redirect) {
            return (<Redirect to={`/users`}/>)
        }

        return (
            <Body>
                <div>
                    <div><img src={this.state.user.photo_url}/></div>
                    <div>username: {this.state.user.username}</div>
                    <div>name: {this.state.user.name}</div>
                    <div>email: {this.state.user.email}</div>

                </div>

                <div>
                    <EditUserForm
                        user={this.state.user}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}/>

                    <Button onClick={this.banannaDelete}>Delete</Button>

                </div>

                <div>
                    <RoomPage getAllFurnishings={this.getAllFurnishings} furnishings={this.state.furnishings}
                    rooms={this.state.rooms} userId = {this.props.match.params.userId}/>
                </div>

            </Body>
        )

    }

}

export default UserView;
