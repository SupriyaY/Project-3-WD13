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




class User extends Component {

    render() {

        return (
            <Link to={`/users/${this.props._id}`}>
            <User Picture>
                <div><img src={this.props.photo_url}/></div>
                <User P
               <div>{this.props.name}</div>
            
            </Link>

        )

    }

}

export default User;