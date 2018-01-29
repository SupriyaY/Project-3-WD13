import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

//Styled Components
// const Designers = styled.div `
// display: flex;
// flex-direction: row;
// justify-content: center;
// align-items: center;
// flex-wrap: wrap;
// `;


const UserPicture = styled.div `
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin: 10px;
padding: 10px;
img {
border-radius: 50%
width: 20vw;
height: 20vh; 
}
&:hover: {
opacity: 0.8;
position: relative;
top: -20 px;
}
`;



class User extends Component {

    render() {

        return (
            <Link to={`/users/${this.props._id}`}>
            <UserPicture>
                <div><img src={this.props.photo_url}/></div>
                </UserPicture>
               <div>{this.props.name}</div>
            
            </Link>

        )

    }

}

export default User;