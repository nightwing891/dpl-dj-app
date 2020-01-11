import React, { Component } from 'react';
import PlaylistIndex from '../playlist/PlaylistIndex';



class RoomShow extends Component {
  state = { name: '', description: '' }


  render() {
    const { name, description } = this.props.location.state
    const { id } = this.props.match.params
    
    return(
      <>
        <h1>{name}</h1>
        <br />
        <h4>{description}</h4>
        <PlaylistIndex room_id={id} />
      </>
    )
  }
}


export default RoomShow;



