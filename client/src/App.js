import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import styled from 'styled-components'
import Home from './components/Home'
import UserPage from './components/UserPage'
import UserView from './components/UserView'
import Room from './components/Room'
import axios from 'axios'

class App extends Component {
  constructor(){
    super()

    this.state = {
      users: [],
      user: {},
      rooms: {}
    }

    this.getAllUsers = this.getAllUsers.bind(this);
  }
    
  componentWillMount() {
    this.getAllUsers()

  }

  async getAllUsers() {
    console.log("GETTING ALL USERS")
    try {
      const response = await axios.get('/api/users')
      const users = response.data
      console.log("Users:", users)
      this.setState({users})
    } catch (error) {
      console.log(error)
    }

  }

  render() { 
    const userInfo = () => (<UserPage users={this.state.users} 
    getAllUsers={this.getAllUsers} /> )
const userView = (props) => (<UserView users={this.state.users} getAllUsers={this.getAllUsers} {...props}/>)
    // const userInfo = () => (<UserPage users={this.state.user}/>) 
{/* <UserPage users={this.state.users} key={this.state.index}/> */
}
    
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/users" render={userInfo}/>
          <Route exact path="/users/:userId" render={userView}/>
          <Route exact path="/users/:userId/rooms" component={Room}/>
          <Route exact path="/users/:userId/bedroom"/>
          <Route exact path="/users/:userId/livingroom"/>
          <Route exact path="users/:userId/kitchen"/>
        
        </Switch>
      </Router>

    )
  }
}

export default App

