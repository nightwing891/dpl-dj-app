import React from 'react';
import { RoomConsumer } from '../../providers/RoomProvider';
import { Button } from 'semantic-ui-react';

const Room = ({ id, name, description }) => (
    <>
    <h3>{name}</h3>
    <p>{description}</p>
    <br />
    <Button onClick={this.deleteRoom}>
        Delete Room
    </Button>
    </>
)

const ConnectedRoom = (props) => {
    return(   
        <RoomConsumer >
            { 
               value => (
                   <Room
                   {...props}                    
                   rooms={ value.rooms }
                   updateRoom={ value.updateRoom }
                   deleteRoom={ value.deleteRoom }
                   />
               )
            }
        </RoomConsumer>
    )
}
 
export default ConnectedRoom;