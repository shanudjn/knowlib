
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';

import { Home } from './pages/Home/home';
import { Saved } from './pages/Saved/saved';
import { Playlist } from './pages/Playlist/playlist';
import { Video } from './pages/Video/video'
function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/videopage/:id" element={<Video />} />

      </Routes>
    </div>
  );
}

export default App;
