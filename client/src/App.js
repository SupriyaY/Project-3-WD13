import React, {Component} from 'react'
//import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import styled from 'styled-components'

//import UserPage from './components/UserPage'
import axios from 'axios'

class App extends Component {

  state = {
    users: []
  }
  componentWillMount() {
  this.getAllUsers()

  }

  async getAllUsers(){try {
    const res = await axios.get('/api/users')
    const users = res.data
    console.log(users)
    this.setState({users: users})
  }
catch(error) {
  console.log(error)
}

}


render() {
  return (
    // <Router>
      <div>
        {/* <div>
          <Link to='/'>HomePage</Link>
        </div> */}
        {/* <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/user/:userId" component={UserPage}/>
        </Switch> */}
      </div>
    // </Router>
  )
}
}

export default App
