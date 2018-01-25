import React, { Component } from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import styled from 'styled-components'


const EditUserForm = (props) =>(

<FormStyle>
<form onSubmit = {
    props.handleSubmit
} > <div>
    {/* <label htmlFor="userName">Username: </label> */}
    <input
        placeholder="UpdateName"
        onChange={props.handleChange}
        name="userName"
        type="text"
        value={props.user.userName}/>
</div> 
 <div> <button>Save</button> </div>
                </form >


</FormStyle>

)
export default EditUserForm;