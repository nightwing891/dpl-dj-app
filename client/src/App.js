import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Navbar from './components/shared/Navbar';
import Home from './components/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import FetchUser from './components/auth/FetchUser';
import ProtectedRoute from './components/auth/ProtectedRoute';
import RoomIndex from './components/RoomIndex';

const App = () => (
  <div>
  <Navbar />
  <FetchUser>
	  <Switch>
	    <ProtectedRoute exact path="/" component={Home}/>
	    <Route exact path="/login" component={Login}/>
	    <Route exact path="/register" component={Register}/>
      <Route exact path="/rooms" component={RoomIndex}/>
	  </Switch>
  </FetchUser>
  </div>
)

export default App;
