import React, { Component } from 'react';
import RoomForm from './RoomForm';
import { RoomConsumer } from '../../providers/RoomProvider';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Room extends Component {
    state = { editing: false }

    toggleEdit = () => this.setState({ editing: !this.state.editing })

    render() {
    const { editing } = this.state
    const { id, name, description, deleteRoom } = this.props 

    return(

    <>
    <Link
    to={{
        pathname: `/rooms/${id}`,
        state: { id, name, description }
    }}><h3>{name}</h3></Link>
    <p>{description}</p>
    <br />
    <Button onClick={ () => deleteRoom(id) }>
        Delete Room
    </Button>
    {
        editing ?
        <RoomForm {...this.props} toggleEdit={this.toggleEdit} />
        :
        <Button onClick={this.toggleEdit}>
         Update Room
        </Button>
    }
    </>
    )
    }
}

const ConnectedRoom = (props) => {
    return(   
        <RoomConsumer >
            { 
               value => (
                   <Room
                   {...props}                    
                   rooms={ value.rooms }
                   updateRoom={ value.updateRoom }
                   updateRoom={ value.updateRoom }
                   deleteRoom={ value.deleteRoom }
                   />
               )
            }
        </RoomConsumer>
    )
}
 
export default ConnectedRoom;