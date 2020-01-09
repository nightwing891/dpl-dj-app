import React, { Component } from 'react';
import { RoomConsumer } from '../providers/RoomProvider';

class RoomIndex extends Component {
    state = { rooms: this.props.rooms }

    render() {
        return(
            <>
            <h1>Room Index</h1>

            </>
        )
    }
}

const ConnectedRoom = () => {
    return(
        <RoomConsumer>
            <RoomIndex />
        </RoomConsumer>
    )
}

export default RoomIndex;