import React from 'react'
import {Redirect} from 'react-router-dom'
import styled from 'styled-components'


const NewUserForm = (props) => {

if (props.redirect) {
return (<Redirect to={`/users/${props.id}`}/>)
}

return (
<h2>Add User</h2>
<form onSubmit={props.handleSumbit}>
<div>
<input
value={props.user.name}
type="text"
placeholder="Name"
onChange={(e) => handleChange(e)}
name="name"
/>
</div>
<div>
    <input
    value={props.user.photo_url}
    placeholder="image"
    onChange={(e) => props.handleChange(e)}
    name="photo_url"
    type="text"
/>
</div>
<button>Submit</button>

</form>
)
}
export default NewUserForm