import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import AuthProvider from './providers/AuthProvider';
import RoomProvider from './providers/RoomProvider';
import { BrowserRouter } from 'react-router-dom';
import { initMiddleware } from 'devise-axios';
import PlaylistProvider from './providers/PlaylistProvider';

initMiddleware();

ReactDOM.render(
    <AuthProvider>
        <RoomProvider>
            <PlaylistProvider>
                <BrowserRouter>
                        <App />
                    </BrowserRouter>
            </PlaylistProvider>
            </RoomProvider>
        </AuthProvider>,
   document.getElementById('root')
);