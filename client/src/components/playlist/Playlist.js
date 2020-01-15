import React, { Component } from 'react';
import PlaylistForm from './PlaylistForm'; 
import { PlaylistConsumer } from '../../providers/PlaylistProvider';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Playlist extends Component {
  state = { editing: false }

  toggleEdit = () => this.setState({ editing: !this.state.editing })

  render() { 
    const { editing } = this.state
    const { id, room_id, name, description, explicit, deletePlaylist } = this.props

    return(
      <>
        <Link to={{ 
          pathname: `/api/rooms/${room_id}/playlists/${id}`, state: { name, description, explicit }
        }}><h2>{name}</h2></Link>
        <p>{description}</p>
        <p>{explicit}</p>

        <Button onClick={ () => deletePlaylist(room_id, id) }>Delete Playlist</Button>
      </>
    )
  }
}

const ConnectedPlaylist = (props) => {
  return(
    <PlaylistConsumer >
      {
        value => (
          <Playlist 
            {...props}                    
            playlists={ value.playlists }
            updatePlaylist={ value.updatePlaylist }
            deletePlaylist={ value.deletePlaylist }         
          />
        )
      }
    </PlaylistConsumer>
  )
}


export default ConnectedPlaylist;