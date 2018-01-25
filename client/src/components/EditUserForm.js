import React, {Component} from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import styled from 'styled-components'

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
    };

    Button {
color : turquoise;
font - size : 1e m;
margin : 1e m;
padding : 0.25e m 1e m;
border : 2 px solid turquoise;
border - radius : 3 px;

    }

`

const EditUserForm = (props) => (

    <FormStyle>
        <form onSubmit={props.handleSubmit}>
            <div>
                <input
                    placeholder="UpdateName"
                    onChange={props.handleChange}
                    name="userName"
                    type="text"
                    value={props.user.userName}/>
            </div>
            <div>
                <button>Save</button>
            </div>
        </form >

    </FormStyle>

)
export default EditUserForm;