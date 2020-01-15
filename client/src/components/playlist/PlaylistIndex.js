import React, { Component } from 'react';
import PlaylistForm from './PlaylistForm';
import PlaylistList from './PlaylistList';
import { Button } from 'semantic-ui-react';
import { PlaylistConsumer } from '../../providers/PlaylistProvider';


class PlaylistIndex extends Component {
  state = { adding: false, room_id: {} }

  componentDidMount() {
    this.setState({room_id: this.props.room_id})
    // this.props.getPlaylist(this.props.room_id)
  }

  toggleAdd = () => this.setState({ adding: !this.state.adding })


  render() {
    const { adding } = this.state
    return(
      <>
        <h1>Playlist Index</h1>

        {
          adding ? 
          <PlaylistForm toggleAdd={this.toggleAdd} room_id={this.state.room_id} />
          :
          <Button onClick={this.toggleAdd}>Add A Playlist</Button>
        }
          <PlaylistList playlists={this.props.playlists} />
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
            deletePlaylist={ value.deletePlaylist }
          />
        )
      }
    </PlaylistConsumer>
  )
}





export default ConnectedPlaylist;