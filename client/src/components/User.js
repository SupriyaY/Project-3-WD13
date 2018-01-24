import React, {Component} from 'react';

class User extends Component {

    render() {

        return (
            <div>
<div>username {this.props.username} </div>
<div>name {this.props.name}</div>
<div>email {this.props.email}</div>
<div>{this.props.photo_url}</div>
            </div>

        )

    }

}

export default User;