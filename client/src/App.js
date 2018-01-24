import React, {Component} from 'react'
//import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import styled from 'styled-components'
import Home from './components/Home'
import UserPage from './components/UserPage'
import axios from 'axios'

class App extends Component {

  state = {
    users: []
  }
  componentWillMount() {
  this.getAllUsers()

  }

  async getAllUsers(){try {
    const response = await axios.get('/api/users')
    const users = response.data
    console.log(users)
    this.setState({users: users})
  }
catch(error) {
  console.log(error)
}

}


render() {
  
  console.log("Users!", this.state.users)
  return (
      <div>
        <Home />
        <UserPage users={this.state.users} key={this.state.index}/>
      </div>
  
  )
}
}

export default App
