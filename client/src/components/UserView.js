import React, {Component} from 'react'
import {Redirect, Link} from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

const Button = styled.button ` 
color: turquoise;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid turquoise;
border-radius: 3px;
`;

class UserView extends Component {
    state = {
        user: {}

    }
    componentWillMount() {
        this.getUserInfo()
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

    render() {
        const {userId} = this.props.match.params
        return (
            <div>
                <div>
                    <div><img src={this.state.user.photo_url}/></div>
                    <div>username: {this.state.user.username}</div>
                    <div>{this.state.user.name}</div>
                    <div>email: {this.state.user.email}</div>

                </div>

                <div>
                    <Button>Edit</Button>
                 <Link to={`${this.state.user._id}/delete`}>
                 <Button>Delete</Button></Link>

                </div>
            </div>
        )

    }

}

export default UserView;
