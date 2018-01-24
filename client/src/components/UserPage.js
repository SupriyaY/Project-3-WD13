import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import UserList from './UserList'
import styled from 'styled-components'

const Button = styled.button ` 
color: turquoise;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid turquoise;
border-radius: 3px;
`;



class UserPage extends Component {

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