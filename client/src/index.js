import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import PlaylistProvider from './providers/PlaylistProvider';

ReactDOM.render(
    <PlaylistProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </PlaylistProvider>
    ,
   document.getElementById('root')
);