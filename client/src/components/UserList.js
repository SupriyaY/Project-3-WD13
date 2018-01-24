import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import User from './User'

class UserList extends Component {

    render()
    {

        const userComponents = this.props.users.map((user, index) => {
                return (<User
                    key={index}
                    {...user}
                    />)

            })

        return (

            <div>
                {userComponents}
       
            </div>

        )
    }

}

export default UserList;