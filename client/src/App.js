import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/shared/Navbar';
import Home from './components/shared/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import FetchUser from './components/auth/FetchUser';
import ProtectedRoute from './components/auth/ProtectedRoute';
import RoomIndex from './components/room/RoomIndex';
import RoomShow from './components/room/RoomShow';
import NoMatch from './components/shared/NoMatch';
import About from './components/shared/About';
import Contact from './components/shared/Contact';
import PlaylistIndex from './components/playlist/PlaylistIndex';
import PlaylistShow from './components/playlist/PlaylistShow';


const App = () => (
  <div>
  <Navbar />
      <FetchUser>
	  <Switch>
	    <ProtectedRoute exact path="/" component={Home} />
	    <Route exact path="/about" component={About} />
	    <Route exact path="/contact" component={Contact} />
	    <Route exact path="/login" component={Login} />
	    <Route exact path="/register" component={Register} />
      <Route exact path="/playlists" component={PlaylistIndex} />
      <Route exact path="/api/rooms/:room_id/playlists/:id" component={PlaylistShow} />
      <ProtectedRoute exact path="/rooms" component={RoomIndex} />
      <ProtectedRoute exact path="/rooms/:id" component={RoomShow} />
      <Route component={NoMatch} /> 
	  </Switch>
      </FetchUser>
  </div>
)

export default App;
