import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'

import UserList from './UserList'
import NewUserForm from './NewUserForm'

//Styled Components
const Button = styled.button ` 
color: turquoise;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid turquoise;
border-radius: 3px;
`;

const Body = styled.div `
margin: 0;
width: 100%;
height: 100%;
position: relative;
/* background: #FFBC73;
background: -webkit-linear-gradient(to left, #FF5F6D, #FFC371);
background: linear-gradient(to left, #FF5F6D, #FFC371); */
background-color: white;
`;

const Holder = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
 `;

const Friends = styled.h1 `
font-family:'Saira Semi Condensed', sans-serif;
font-size: 3.5em;
`;

const Nav = styled.div `
align-items: flex-start;
padding: 15px;
margin-bottom : 20px;
width: 100 vw;
height: 10 vh;
background: #9CECFB;/* fallback for old browsers */
background: -webkit-linear-gradient(to right, #0052D4, #65C7F7, #9CECFB);/* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #0052D4, #65C7F7, #9CECFB);/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

a {
    text-decoration: none;
    align-items: left;
    justisfy-content: left;
    font-family: 'Saira Semi Condensed ', sans-serif;
    font-size: 1.5em;
}
`;

// trying something out from code.io const CardStyling = styled.div` overflow:
// hidden; padding: 0 0 32 px; margin: 48px auto 0; width: 300px; font-family:
// Quicksand,arial,sans - serif; box-shadow: 0 0 20 px rgba(0, 0, 0, .05),0 0 px
// 40 px rgba(0, 0, 0, .08); border-radius: 5 px; `;

class UserPage extends Component {

    //set state
    state = {
        newUser: [],
        newUserid: ''
    }

    //making an axios call to get all of the users
    async componentWillMount() {
        const res = await axios.get('/api/users')
        this.setState({users: res.data})
    }

    //creating a new user
    handleSubmit = async(e) => {
        e.preventDefault()
        const letsbuy = {
            name: this.state.newUser.name,
            username: this.state.newUser.username,
            photo_url: this.state.newUser.photo_url,
            email: this.state.newUser.email
        }

        console.log('about to post', letsbuy)
        const res = await axios.post('/api/users', letsbuy)
        console.log('posted')
        this
            .props
            .getAllUsers()

    }

    handleChange = (e) => {
        const newUser = {
            ...this.state.newUser
        }
        newUser[e.target.name] = e.target.value
        this.setState({newUser})
    }

    render() {
        return (
            <Body>

                <Nav>
                    <a href='/'>Home &hearts;
                    </a>
                </Nav>
                <Holder>
                    <div>

                        <NewUserForm
                            users={this.state.users}
                            user={this.state.newUser}
                            id={this.state.newUserId}
                            redirect={this.state.redirect}
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}/>
                    </div>
                    <div>
                        <Friends>Room Designers</Friends>
                        <UserList users={this.props.users}/>
                    </div>
                </Holder>
            </Body>

        )
    }
}
export default UserPage;