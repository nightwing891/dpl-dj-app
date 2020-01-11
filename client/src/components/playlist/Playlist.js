import React from 'react';

const Playlist = ({ name, description, explicit }) => (
  <>
    <h3>{name}</h3>
    <p>{description}</p>
    <p>{explicit}</p>
  </>
)


export default Playlist;