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

const ConnectedRoom = (props) => {
    return(
      
        <RoomConsumer >
            {
               value => (
                   <RoomIndex 
                   {...props}                    
                   rooms={ value.rooms }
                   addRoom={ value.addRoom }
                   updateRoom={ value.updateRoom }
                   deleteRoom={ value.deleteRoom }
                   />
               )
            }

        </RoomConsumer>
    )
}

export default ConnectedRoom;