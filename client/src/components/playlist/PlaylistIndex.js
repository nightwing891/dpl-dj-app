import React, { Component } from 'react';
import { PlaylistConsumer } from '../../providers/PlaylistProvider';

class PlaylistIndex extends Component {
  state = { playlists: this.props.playlists }

  render() {
    return(
      <>
        <h1>Playlist Index</h1>
      </>
    )
  }
}

const ConnectedPlaylist = (props) => {
  return(

    <PlaylistConsumer>
      {
        value => (
          <PlaylistIndex
            {...props}
            getPlaylist={ value.getPlaylist }
            playlists={ value.playlists }
            addPlaylist={ value.addPlaylist }
            updatePlaylist={ value.updatePlaylist }
          />
        )
      }
    </PlaylistConsumer>
  )
}





export default ConnectedPlaylist;