import React, {Component} from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import styled from 'styled-components'



const Button = styled.button`  
background-color: white;
color: #4CA1AF;
font-size: 1em;
margin:1em;
padding: 0.25em 1em;
border:2px solid #4CA1AF;
border-radius:3px;
display: flex;
justify-content: center;
align-items: center;
&:hover {
    color: black;
    position: relative;
    bottom: -5px;
}
`

const EditForm = styled.div`
margin: 0 auto;
display: flex;
justify-content: flex-end;
flex-direction:column;
align-items: center;
text-align: right;
padding: 20px;
color: white;
font-size: 3vh;

input {
  padding: 7px 0;
  width: 100%;
  font-family: inherit;
  font-size: 14px;
  margin-bottom: 10px;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #ddd;
  border-left: 0;
  transition: border-bottom-color .25s ease-in;
overflow: hidden;
}
img {
height: 170 px;
width: 170 px;
    }

 p{

     color: black;
 }   
`;

const UserCard = styled.div`
top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
   min-width: 45vh;
    min-height: 60vh;
    background-color: #white;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid white;
 box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 5px;
    z-index: 999;
`;








const EditUserForm = (props) => (

<UserCard>

 <EditForm>
        <div><p>Edit Designer</p></div>
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

      
    </form>
<div><Button onClick={props.handleSubmit}>Edit</Button></div>

    </EditForm> 
    </UserCard>


)

export default EditUserForm;