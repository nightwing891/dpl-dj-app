import React, { Component } from 'react';
import axios from 'axios';

const PlaylistContext = React.createContext();

export const PlaylistConsumer = PlaylistContext.Consumer;

class PlaylistProvider extends Component {
  state = { playlists: [] }

  getPlaylist = (room_id) => {
    axios.get(`/api/rooms/${room_id}/playlists`)
    .then( res => {
      this.setState({ playlists: res.data})
    })
    .catch( err => {
      console.log(err)
    })
  }


  addPlaylist = ( room_id, playlist) => {
    axios.post(`/api/rooms/${room_id}/playlists`, playlist)
    .then( res => {
      const { playlists } = this.state
      this.setState({ playlists: [...playlists, res.data] })
    })
    .catch( err => {
      console.log(err)
    })
  }

  deletePlaylist = (id, room_id) => {
    axios.delete(`/api/rooms/${room_id}/playlists/${id}`)
    .then( res => {
      const { playlists } = this.state
      this.setState({playlists: playlists.filter(p => p.id !==id )})
    })
    .catch( err => {
      console.log(err)
    })
  }

  updatePlaylist = (id, playlist, room_id) => {
    axios.put(`/api/rooms/${room_id}/playlists/${id}`, playlist)
    .then ( res => {
      const playlists = this.state.playlists.map( p => {
        if (p.id === id)
        {return res.data}
        return p
      })
      this.setState({ playlists })
    })
    .catch( err => {
      console.log(err)
    })
  }


  render(){
    return(
      <PlaylistContext.Provider value={{
        ...this.state,
        getPlaylist: this.getPlaylist,
        addPlaylist: this.addPlaylist,
        updatePlaylist: this.updatePlaylist,
        deletePlaylist: this.deletePlaylist,
      }}>
        { this.props.children }
      </PlaylistContext.Provider>
    )
  }
}


export default PlaylistProvider;