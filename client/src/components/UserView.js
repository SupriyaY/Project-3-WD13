import React, {Component} from 'react'
import {Redirect, Link} from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import EditUserForm from './EditUserForm'

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
    //not sure about this code - it works but errors at the end
    banannaDelete = async() => {
        try {
            const {userId} = this.props.match.params
            const res = await axios.delete(`/api/users/${userId}`)
            console.log(res.data)
            this.setState({user: res.data, redirect: true})
        } catch (err) {
            console.log(err)
        }
    }




    render() {
        if (this.state.redirect === "true") {
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
< EditUserForm
user = {
    this.state.user
}
handleChange = {
    this.handleChange
}
handleSubmit = {
    this.handleSubmit
} />
                    
                    <Button onClick={this.banannaDelete}>Delete</Button>

                </div>

            </Body>
        )

    }

}

export default UserView;
