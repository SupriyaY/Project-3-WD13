import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import {Header, Footer} from './StyledComponents/HeaderFooter'
import UserList from './UserList'
import NewUserForm from './NewUserForm'

//Styled Components
const Button = styled.button ` 
color: turquoise;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid turquoise;
border-radius: 3px;
`;



const Holder = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
 `;

const Friends = styled.div `
font-family:'Saira Semi Condensed', sans-serif;
font-size: 2.5em;
margin-left: 30px;
margin-top: 20px;
`;



const PageHolder = styled.div`
margin-top: 40px;
margin-bottom: 40px;

`


class UserPage extends Component {

    //set state
    state = {
        newUser: [],
        newUserid: ''
    }

    //making an axios call to get all of the users
    async componentWillMount() {
        const res = await axios.get('/api/users')
        this.setState({users: res.data})
    }

    //creating a new user
    handleSubmit = async(e) => {
        e.preventDefault()
        const letsbuy = {
            name: this.state.newUser.name,
            username: this.state.newUser.username,
            photo_url: this.state.newUser.photo_url,
            email: this.state.newUser.email
        }

        console.log('about to post', letsbuy)
        const res = await axios.post('/api/users', letsbuy)
        console.log('posted')
        this
            .props
            .getAllUsers()

    }

    handleChange = (e) => {
        const newUser = {
            ...this.state.newUser
        }
        newUser[e.target.name] = e.target.value
        this.setState({newUser})
    }

    render() {

        return (
<div>
                <Header>
                    <a href='/'>HOME
                    </a>
                    <a href='/users'>DESIGNERS
                    </a>
                </Header>
                <PageHolder>
                <Holder>
                    <div>

                        <NewUserForm
                            users={this.state.users}
                            user={this.state.newUser}
                            id={this.state.newUserId}
                            redirect={this.state.redirect}
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}/>
                    </div>
                    <div>
                        <Friends>Designers</Friends>
                        <UserList users={this.props.users}/>
                    </div>
                </Holder>

            </PageHolder>
                <Footer>

                    </Footer>
</div>
        )
    }
}
export default UserPage;