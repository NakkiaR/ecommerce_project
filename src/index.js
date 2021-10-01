import React from 'react';
import {BrowserRouter as Router } from 'react-router-dom';
import App from './App'
import ReactDOM from 'react-dom';


ReactDOM.render(
    <Router>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Router>,
    document.getElementById('root')
);

