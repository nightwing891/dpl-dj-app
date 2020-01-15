import React from 'react';
import { Link } from 'react-router-dom';

const RoomSuggestions = ({rooms, query, toggle}) => {
    if(rooms.length > 0) {
        const options = rooms.map( r => {
            const regex = new RegExp(query, 'gi')
            const { id, name, description } = r
            if (r.name.match(regex))
                return(<li key={r.id}>
                    <Link onClick={toggle} to={{
                        pathname: `/rooms/${r.id}`,
                        state: { id, name, description }
                    }}>
                        {r.name}
                    </Link>
                </li>)
        })
        return <ul>{options}</ul>
    }
    return <></>
}

export default RoomSuggestions;