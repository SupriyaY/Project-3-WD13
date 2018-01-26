import React, {Component} from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import styled from 'styled-components'

// const UserAdd = styled.div ` margin: 0 auto; display: flex; justify -
// content: flex - end; align - items: center; text - align: right; padding:20px
// `; // input{ //     display: flex; //     align-items: center; //
// width:100px; //     height: 20px; // };

const Button = styled.div `  
color: turquoise; 
font-size: 1em; 
margin: 1em; 
padding: 0.25em 1em; 
border: 2px solid turquoise;
border-radius: 3px;     
`;

const EditUserForm = (props) => (
    <form onSubmit={props.handleSubmit}>
        <div>
            <input
                value={props.user.name}
                type="text"
                onChange={(e) => props.handleChange(e)}
                name="name"/>
        </div>
        <div>
            <input
                value={props.user.username}
                type="text"
                onChange={(e) => props.handleChange(e)}
                name="username"/>
        </div>
        < div >
            <input
                value={props.user.photo_url}
                onChange={(e) => props.handleChange(e)}
                name="photo_url"
                type="text"/>
        </div>
        <div>
            <input
                value={props.user.email}
                onChange={(e) => props.handleChange(e)}
                name="email"
                type="text"/>
        </div>

        <div>
            <Button onClick={props.handleSubmit}>edit</Button>
        </div>
    </form>
)

export default EditUserForm;