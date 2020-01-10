import React, { Component } from 'react';
import { RoomConsumer } from '../../providers/RoomProvider';
import RoomForm from './RoomForm';
import RoomList from './RoomList';
import { Button } from 'semantic-ui-react';

class RoomIndex extends Component {
    state = { rooms: this.props.rooms, adding: false }

    toggleAdd = () => this.setState({ adding: !this.state.adding })

    render() {
        const { adding } = this.state
        return(
            <>
            <h1>Rooms</h1>
            {
                adding ?
                <RoomForm toggleAdd={this.toggleAdd} />
                :
                <Button onClick={this.toggleAdd}>Add A Room</Button>
            }
            <RoomList />
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