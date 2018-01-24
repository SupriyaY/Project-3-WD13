import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import UserList from './UserList'
import styled from 'styled-components'

const Button = styled.button `
display : inline - block;
color : palevioletred;
font - size : 1e m;
margin : 1e m;
padding : 0.25e m 1e m;
border : 2 px solid palevioletred;
border - radius : 3 px;
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
                    <Button>Create User</Button>
                </div>
            </div>
        )
    }

}

export default UserPage;