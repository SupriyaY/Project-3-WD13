import React, {Component} from 'react';

class User extends Component {

    render() {

        return (
            <div>
<div>UserName{this.props.username} </div>
<div>Name{this.props.name}</div>
<div>Email{this.props.email}</div>
<div>User Picture{this.props.photo_url}</div>
            </div>

        )

    }

}

export default User;