import React, { Component } from 'react';
import SongSearch from './SongSearch';



class PlaylistShow extends Component {
  state = { name: '', description: '', explicit: null }

  render() {
    const { name, description, explicit } = this.props.location.state

    return(
      <>
        <SongSearch />
        <h1>{name}</h1>
        <p>{description}</p>
        <p>{explicit}</p>
      </>
    )
  }
}




export default PlaylistShow;