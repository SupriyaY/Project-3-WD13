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
text-align: left;
margin-left: 20px;
font-size: 1em;
`;

const UserCard = styled.div`
top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 10px;
    min-width: 30vh;
    min-height: 20vh;
    background-color: #white;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid white;
 box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 5px;
    z-index: 999;
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

<UserCard>
                    <Name>
                    <div>{this.props.name}</div>
                    <div>{this.props.username}</div> 
                    <div>{this.props.email}</div>
                    </Name>
  </UserCard>                  
                    </div>
        )

    }

}

export default User;