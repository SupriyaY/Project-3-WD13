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

const Name = styled.div `
text-decoration: none;
text-align: center;
`;




class User extends Component {

    render() {

        return (
            <div>
            <Link to={`/users/${this.props._id}`}>
                    <UserPicture>
                        <div><img src={this.props.photo_url}/></div>
                    </UserPicture>
                    </Link>

                    <Name>
                    <div>{this.props.name}</div>
                    </Name>
                    </div>
        )

    }

}

export default User;