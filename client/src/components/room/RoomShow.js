import React, { Component } from 'react';
import PlaylistIndex from '../playlist/PlaylistIndex';

class RoomShow extends Component {
    state = { 
        name: '',
        description: ''
    }
    
    render() {
        const { name, description, id } = this.props.location.state
        return(
            <>
            <h1>{name}</h1>
            <br />
            <h4>{description}</h4>
            <h4>{id}</h4>
            <PlaylistIndex room_id={id}/>
          </>
        )
    }
}

export default RoomShow;
