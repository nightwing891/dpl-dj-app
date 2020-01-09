import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Home from './components/shared/Home';
import RoomIndex from './components/RoomIndex';

const App = () => (
  <div>
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/rooms" component={RoomIndex}/>
  </Switch>
  </div>
)

export default App;
