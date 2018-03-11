import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components'



const UserPicture = styled.div `
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin: 10px;
padding: 10px;
img {
 height: 170px;
 width: 175px;
/* border-radius: 50%; */
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

}
&:hover{
opacity: 0.8;
position: relative;
top: -20px;
}
`;



class User extends Component {

    render() {

        return (
            <Link to={`/users/${this.props._id}`}>
                <div>
                    <UserPicture>
                        <div><img src={this.props.photo_url}/></div>
                    </UserPicture>
                </div>
            </Link>

        )

    }

}

export default User;