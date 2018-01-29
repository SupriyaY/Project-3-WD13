import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import User from './User'
import styled from 'styled-components'

const Designers = styled.div `
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
flex-wrap: wrap;
 a{
     text-decoration: none;
 }
`;

class UserList extends Component {

    render()
    {

        const userComponents = this
            .props
            .users
            .map((user, index) => {
                return (<User key={index} {...user}/>)

            })

        return (

            <div>
                <Designers>
                    {userComponents}
                </Designers>
            </div>

        )
    }

}

export default UserList;