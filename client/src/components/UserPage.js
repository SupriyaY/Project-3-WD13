import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'

import UserList from './UserList'
import NewUserForm from './NewUserForm'

const Button = styled.button ` 
color: turquoise;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid turquoise;
border-radius: 3px;
`;

class UserPage extends Component {

    //set state
    state = {
        newUser: [],
        redirect: false,
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
            name: this.state.newUser,
            photo_url: this.state.newUser.photo_url
            
        }

        const blankForm = {
            name: '',
            photo_url: ''
        }

        const res = await axios.post('/api/user', letsbuy)
        this.setState({redirect: true, newUser: res.data})

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
            <div>
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
                    Hello UserPage!
                    <UserList users={this.props.users}/>
                </div>

            </div>
        )
    }

}

export default UserPage;