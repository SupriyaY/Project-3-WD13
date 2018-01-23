import React, {Component} from 'react'
//import {Redirect} from 'react-router-dom'
import User from './User'

class UserList extends Component {

    render() {
        const buyerList = this.props.shoppers.map((shopper, index) => {
return (
<UserList
key={index}
username={shopper.username}
name={shopper.name}
email={shopper.email}
photo_url={shopper.photo_url} />

)

})


        return (

            <div>
        {buyerList}
            </div>

        )
    }

}

export default UserList;