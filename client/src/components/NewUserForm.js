import React from 'react'
import {Redirect} from 'react-router-dom'
import styled from 'styled-components'

//testing using project 2's styling
const UserAdd = styled.div `
margin: 0 auto;     
display: flex;     
justify-content: flex-end;
flex-direction: column;
align-items: center;    
text-align: right;
padding: 20px;
color: black;
font-size: 3vh
    input {
    display: flex;
    align-items: center;
width: 120px;
height: 20px;

             }

`;
const Button = styled.button `
background-color: turquoise;
color: white;
font-size : 1em;
margin : 1em;
padding : 0.25em 1em;
border : 2px solid turquoise;
border-radius : 3px;
    &:hover {
    opacity: 0.8;
    position: relative;
    bottom: -5px;
    }
 `;

// trying something out from code.io const const UserAdd = styled.div `
// overflow: hidden; padding: 0 0 32 px; margin: 48px auto 0; width: 300px;
// font-family: Quicksand,arial,sans - serif; box-shadow: 0 0 20 px rgba(0, 0,0,
// .05),0 0 px 40 px rgba(0, 0, 0, .08); border-radius: 5 px;  `;

const NewUserForm = (props) => {

    if (props.redirect) {
        return (<Redirect to={`/users/${props.id}`}/>)
    }

    return (
        <UserAdd>
            <h2>Add Designer</h2>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <input
                        value={props.user.name}
                        type="text"
                        placeholder="Name"
                        onChange={(e) => props.handleChange(e)}
                        name="name"
                        required/>
                </div>

                <div>
                    <input
                        value={props.user.username}
                        type="text"
                        placeholder="Username"
                        onChange={(e) => props.handleChange(e)}
                        name="username"
                        required/>
                </div>

                <div>
                    <input
                        value={props.user.photo_url}
                        placeholder="Image"
                        onChange={(e) => props.handleChange(e)}
                        name="photo_url"
                        type="text"/>
                </div>
                <div>
                    <input
                        value={props.user.email}
                        placeholder="Email"
                        onChange={(e) => props.handleChange(e)}
                        name="email"
                        type="text"/>
                </div>

                <Button type="submit">Create</Button>

            </form>
        </UserAdd>
    )
}

export default NewUserForm
