import React, {Component} from 'react';
import { Link } from 'react-router-dom'
class User extends Component {

    render() {

        return (
            <Link to={`/users/${this.props._id}`}>
                {/* <div>username: {this.props.username} </div> */}
                <div>{this.props.name}</div>
                {/* <div>email: {this.props.email}</div> */}
                <div><img src={this.props.photo_url}/></div>
            </Link>

        )

    }

}

export default User;