import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import styled from 'styled-components'
import Home from './components/Home'
import UserList from './components/UserList'
import axios from 'axios'

class App extends Component {

  state = {
    users: []
  }
  componentWillMount() {
    this.getAllUsers()

  }

  async getAllUsers() {
    try {
      const response = await axios.get('/api/users')
      const users = response.data
      console.log(users)
      this.setState({users: users})
    } catch (error) {
      console.log(error)
    }

  }

  render() { 
    const userInfo = () => (<UserList users={this.state.users}/>

    )
    // const userInfo = () => (<UserPage users={this.state.user}/>) 
{/* <UserPage users={this.state.users} key={this.state.index}/> */
}
    
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/users" render={userInfo}/>
          <Route exact path="/users/:userId" render={userInfo}/>
        </Switch>
      </Router>

    )
  }
}

export default App

// < Router > <Switch>   <Route exact path="/" component={Home}/>   <Route exact
// path="/users" render={UsersComponent}/>   <Route exact path="/users/:userid"
// render={UsersComponent}/>   <Route exact path="/users/:userid/rooms"
// render={UsersComponent}/> </Switch> < /Router>