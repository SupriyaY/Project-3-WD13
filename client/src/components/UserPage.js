import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import UserList from './UserList'
import styled from 'styled-components'
import axios from 'axios'

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
async componentWillMount () {
const res = await axios.get('/api/users')
this.setState({users: res.data})
}

handleSubmit = async (e) => {
const letsbuy = {


}





}




    render() {
        return (
            <div>
                <div>
                    Hello UserPage!
                    <UserList users={this.props.users}/>
                </div>
                <div>
                    <Button Onclick>Create User</Button>
                </div>
            </div>
        )
    }

}

export default UserPage;