import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { VideoProvider } from './context/video-context'
import { BrowserRouter as Router } from "react-router-dom"
// import mockServer from './api/mock.server';

// mockServer();
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <VideoProvider>
        <App />
      </VideoProvider>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

