import React, {Component} from 'react'
//import {Redirect} from 'react-router-dom'
import UserList from './UserList'

class UserPage extends Component {

    render() {
        return (

            <div>

                Hello UserPage!
                <UserList users={this.props.users}/>
            </div>

        )
    }

}

export default UserPage;