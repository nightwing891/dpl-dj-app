import React from 'react';
import Playlist from 'react';

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
