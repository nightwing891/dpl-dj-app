import React from 'react';
import Playlist from './Playlist';

const PlaylistList = ({ playlists }) => (
  <>
    {
      playlists.map ( p => 
          <Playlist
            key={p.id}
            {...p}
          />
        )
    }
  </>  
)

export default PlaylistList;