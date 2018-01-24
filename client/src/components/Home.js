import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import UserPage from './UserPage'

class Home extends Component {

    render() {
        return (
            <div>
<h1>RoomStyle</h1>

<div>
  <Link to="/users">Users</Link>  
</div>
</div>

        )
    }

}

export default Home;