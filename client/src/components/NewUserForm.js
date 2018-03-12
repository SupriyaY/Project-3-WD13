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

`;
const Button = styled.button `
background-color: turquoise;
color: white;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid turquoise;
border-radius: 3px;
    &:hover {
    opacity: 0.8;
    position: relative;
    bottom: -5px;
    }
 `;
const UserCard = styled.div`
top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
   width: 45vh;
    height: 60vh;
    background-color: #white;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid white;
 box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 5px;
    z-index: 999;
`;




const NewUserForm = (props) => {

    if (props.redirect) {
        return (<Redirect to={`/users/${props.id}`}/>)
    }

    return (
        <UserCard>
        <UserAdd>
            <h2>New Designer</h2>
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
        </UserCard>
    )
}

export default NewUserForm
