import React, {Component} from 'react'
//import {Redirect} from 'react-router-dom'
import User from './User'

class UserList extends Component {

    render()
    {

        const userComponents = this.props.users.map((user, index) => {
                return (<User
                    key={index}
                    username={user.username}
                     name={user.name}
                     email={user.email}
                     photo_url={user.photo_url}
                    />)

            })

        return (

            <div>
                {userComponents}
                <User/>
            </div>

        )
    }

}

export default UserList;