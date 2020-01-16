import React, { Component } from 'react';
import { RoomConsumer } from '../../providers/RoomProvider';
import RoomForm from './RoomForm';
import RoomList from './RoomList';
import { Button } from 'semantic-ui-react';
import RoomSearch from './RoomSearch';

class RoomIndex extends Component {
    state = { adding: false }

    componentDidMount() {
        this.props.getRooms()
    }

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
                <Button onClick={this.toggleAdd}>Create A Room</Button>
            }
                <RoomList rooms={this.props.rooms}/>
           
            <div>
            <RoomSearch />
            </div>
            </>
        )
    }
}

const ConnectedRoomIndex = (props) => {
    return(   
        <RoomConsumer >
            { 
               value => (
                   <RoomIndex 
                   {...props}                    
                   rooms={ value.rooms }
                   getRooms={ value.getRooms }
                   addRoom={ value.addRoom }
                   updateRoom={ value.updateRoom }
                   deleteRoom={ value.deleteRoom }
                   />
               )
            }
        </RoomConsumer>
    )
}

export default ConnectedRoomIndex;
