import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { VideoProvider } from './context/video-context';
import { AuthProvider } from './context/auth-context';
import { BrowserRouter as Router } from "react-router-dom";
import mockServer from "./api/mock.server"
// import mockServer from './api/mock.server';

mockServer();
ReactDOM.render(
  <React.StrictMode>

    <AuthProvider>
      <Router>
        <VideoProvider>
          <App />
        </VideoProvider>
      </Router>
    </AuthProvider>


  </React.StrictMode>,
  document.getElementById('root')
);

