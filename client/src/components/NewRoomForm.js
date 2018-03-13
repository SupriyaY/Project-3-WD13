import React from  'react'
import {Redirect} from 'react-router-dom'
import styled from 'styled-components'


//testing using project 2's styling
const UserAdd = styled.div`
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
const Button = styled.button`
background-color: white;
color: #4CA1AF;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border:2px solid #4CA1AF;
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
    width: 30vh;
    height: 40vh;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid white;
 box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 5px;
    z-index: 999;
`;

const handleSubmit = (event) => {
    console.log("we're here");
}


const NewRoomForm = (props) => {

    if (props.redirect) {
        return (<Redirect to={`/users/rooms/${props.id}`} />)
    }

    return (
        <UserCard>
            <UserAdd>
                <h2>New Room</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            value={props.room}
                            type="text"
                            placeholder="Name"
                            name="name"
                            required />
                    </div>


                    <Button type="submit">Create</Button>

                </form>
            </UserAdd>
        </UserCard>
    )
}






export default NewRoomForm