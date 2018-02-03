import React, {Component} from 'react'
import {Redirect, Link} from 'react-router-dom'
import styled from 'styled-components'
import FurnishingPage from './FurnishingPage'


const RoomWrapper = styled.div `
align-items: center
justisfy content: center
flex-direction: row;
padding: 20 px;
`;






class Room extends Component {





    render() {
    
    console.log("Furnishings sent to Room:", this.props.furnishings)

        return (
            <RoomWrapper>
                {this.props.room_name}
                <FurnishingPage furnishings={this.props.furnishings} roomId={this.props.roomId}/>
            </RoomWrapper>

        )

    }
}

export default Room