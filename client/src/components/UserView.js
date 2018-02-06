import React, {Component} from 'react'
import {Redirect, Link} from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import EditUserForm from './EditUserForm'
import RoomPage from './RoomPage'
import FurnishingPage from './FurnishingPage';



const Button = styled.button ` 
background-color: turquoise;
color: white;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid turquoise;
border-radius: 3px;
    &:hover {
opacity: 0.8;
position:relative;
bottom: 5px;
}

`;

const Wrapper = styled.div `
font-family : 'Saira Semi Condensed', sans - serif;
font-size: 1.0em;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
    img {
        height: 170 px;
        width: 170 px;
        border-radius: 50%;
    } &:hover 
        {opacity: 0.8;
        position: relative;
        top: -20 px;}
`;

const People = styled.div `
display: flex;
align-items: center;
flex-direction: row;
justify-content: center;
`;

const Nav = styled.div `
padding: 15px;
margin-bottom : 20px;
width: 100vw;
height: 5vh;
display: flex;
justify-content: flex-end;
/* align-items: center; */
/* position: fixed; */
background: linear-gradient(to right, #C4E0E5, #4CA1AF);/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
a {
    text-decoration: none;
    font-family: 'Saira Semi Condensed ', sans-serif;
    font-size: 1.5em;
}
`;



class UserView extends Component {
    state = {
        user: {},
        rooms: [],
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

    getAllRooms = async(userId) => {
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

    getAllFurnishings = async(roomId) => {
        try {
            const userId = this.props.match.params.userId
            console.log("Getting all furnishings by userId and roomId", userId, roomId)
            const res = await axios.get(`/api/users/${userId}/rooms/${roomId}/furnishings`)
            //const furnishings = res.data

            this.setState({furnishings: res.data})
            console.log("Got furnishing and updated state", this.state.furnishings)
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
            <div>
            <Nav>
<a href ='/'> Home &hearts;
</a> 
< a href='/users'>Designers 
 </a>
                </Nav>
            <Wrapper>
 
                <div>
                    <div><img src={this.state.user.photo_url}/></div>
                    <div>{this.state.user.username}</div>
                    <div>{this.state.user.name}</div>
                    <div>{this.state.user.email}</div>
      <div>          </div>
<p>Update Designer Info</p>
</div>
                <div>
                    <EditUserForm
                        user={this.state.user}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}/>

                    <Button onClick={this.banannaDelete}>Delete</Button>
                </div>
                
                <div className ="People">
                
                    <RoomPage
                        getAllFurnishings={this.getAllFurnishings}
                        furnishings={this.state.furnishings}
                        rooms={this.state.rooms}
                        userId={this.props.match.params.userId}/>
                        
                </div>
            </Wrapper>
            </div>
        )

    }

}

export default UserView;
