import React from 'react'
import {Redirect} from 'react-router-dom'
import styled from 'styled-components'

//testing using project 2's styling
const UserAdd = styled.div `
margin: 0 auto;     
display: flex;     
justify - content: flex - end;
align - items: center;    
text - align: right;
padding: 20px
    input{
        display: flex;
        align-items: center;
width: 100px;
height: 20px;
`;
const Button = styled.button `
color: turquoise;
font-size : 1em;
margin : 1em;
padding : 0.25em 1em;
border : 2px solid turquoise;
border-radius : 3px;

 `;

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
                        name="name"/>
                </div>

                <div>
                    <input
                        value={props.user.username}
                        type="text"
                        placeholder="Username"
                        onChange={(e) => props.handleChange(e)}
                        name="username"/>
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

                <Button type="submit">Create User</Button>

            </form>
        </UserAdd>
    )
}

export default NewUserForm

// /* Input form styles */     .form - input {     margin: 6 px;     display:
// flex;     justify - content: flex - end;     align - items: center;     text
// - align: right; }.form - input label {     /* width: 30vh; */     height : 4
// vh; }.label {cursor: default;}