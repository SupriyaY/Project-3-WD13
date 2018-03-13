import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import EditUserForm from './EditUserForm'
import RoomPage from './RoomPage'
import FurnishingPage from './FurnishingPage';
import { Header, Footer } from './StyledComponents/HeaderFooter'


const Button = styled.button` 
background-color: white;
color: #4CA1AF;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid #4CA1AF;
border-radius: 3px;
bottom: 5px;
    &:hover {
color: black;
position:relative;
bottom: -5px;
}

`;

const ButtonFormat = styled.div`
display:flex;
align-items: center;
justify-content: center;
`;

const Wrapper = styled.div`
font-family:'Saira Semi Condensed', sans - serif;
font-size: 1.0em;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;

`;

const People = styled.div`
display: flex;
align-items: center;
flex-direction: row;
justify-content: center;
`

const Board = styled.div`
display: flex;
justify-content:center;
align-items: center;

a{
    text-decoration: none;
}
`
const PageFormat = styled.div`
margin-top: 30px;
margin-bottom: 30px;


`

class UserView extends Component {
    state = {
        user: {},
        rooms: [],
        redirect: false,
        furnishings: []
    }

    componentWillMount() {
        this.getUserInfo()
        this.getAllRooms()
    }

    getUserInfo = async () => {
        try {
            const { userId } = this.props.match.params
            console.log(userId)
            const res = await axios.get(`/api/users/${userId}`)
            console.log(res.data)
            this.setState({ user: res.data })
        } catch (err) {
            console.log(err)
        }
    }

    getAllRooms = async (userId) => {
        try {
            const userId = this.props.match.params.userId
            const res = await axios.get(`/api/users/${userId}/rooms`)
            // console.log("LOGGING RES", res)
            const rooms = res.data.rooms
            //  console.log(rooms)
            this.setState({ rooms })
        } catch (err) {
            console.log(err)
        }
    }

    getAllFurnishings = async (roomId) => {
        try {
            const userId = this.props.match.params.userId
            console.log("Getting all furnishings by userId and roomId", userId, roomId)
            const res = await axios.get(`/api/users/${userId}/rooms/${roomId}/furnishings`)
            const furnishings = res.data
            //console.log(res.data)
            this.setState({ furnishings: res.data })
            //console.log("Got furnishing and updated state", this.state.furnishings)
        } catch (err) {
            console.log(err)
        }

    }

    banannaDelete = async () => {
        try {
            const { userId } = this.props.match.params
            const res = await axios.delete(`/api/users/${userId}`)
            // console.log(res.data)
            this
                .props
                .getAllUsers()
            this.setState({ redirect: true, user: res.data })
        } catch (err) {
            console.log(err)
        }
    }

    handleSubmit = async (e) => {
        //console.log("Submitting User")
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
        // console.log('Posted user', res.data)
        this.setState({ redirect: false, newUser: res.data })

    }

    handleChange = (e) => {
        //console.log("Changing name to value:", e.target.name, e.target.value)
        const user = {
            ...this.state.user
        }

        user[e.target.name] = e.target.value
        this.setState({ user })
    }

    componentWillMount() {
        this.getUserInfo()
    }



    render() {
        // console.log("Rendering UserView.User:", this.state.rooms)
        if (this.state.redirect) {
            return (<Redirect to={`/users`} />)
        }
        const { userId } = this.props.match.params

        return (
            <div>
                <Header>
                    <a href='/'> HOME</a>
                    <a href='/users'>DESIGNERS</a>
                </Header>
                <PageFormat>

                    <Wrapper>

                        <div>
                            <EditUserForm
                                user={this.state.user}
                                handleChange={this.handleChange}
                                handleSubmit={this.handleSubmit} />
                            <ButtonFormat>
                                <Button onClick={this.banannaDelete}>Remove Designer</Button>
                            </ButtonFormat>
                        </div>
                    </Wrapper>

                    <div>
                        <Board>
                            <Link to={`/users/${userId}/rooms`}>Rooms Vision Board</Link>
                        </Board>
                    </div>
                </PageFormat>
                <Footer>
                </Footer>
            </div>

        )

    }

}

export default UserView;
