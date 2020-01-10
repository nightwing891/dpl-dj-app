import React from 'react';
import Room from './Room';

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
 
export default RoomList;