import React from 'react';
import Room from './Room';
import { RoomConsumer } from '../../providers/RoomProvider';

const RoomList = ({rooms}) => (
    <>
    {
       rooms.map( r =>
           <Room 
            key={r.id}
            {...r}
           />
        ) 
    }
    </>
)


const ConnectedRoomList = (props) => {
    return(   
        <RoomConsumer >
            { 
               value => (
                   <RoomList
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
 
export default ConnectedRoomList;