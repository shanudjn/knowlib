
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';

import { Home } from './pages/Home/home';
import { Saved } from './pages/Saved/saved';
import { Playlist } from './pages/Playlist/playlist';
import { Video } from './pages/Video/video'
import { Login } from './pages/Login/Login';
import PrivateRoute from './PrivateRoute'
import { Sidebar } from './components/Sidebar/Sidebar';
import NavbarMobile from './components/Navbar-Mobile/NavbarMobile';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <NavbarMobile />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saved" element={<Saved />} />
        {/* <Route path="/playlist" element={<Playlist />} /> */}
        <Route path="/videopage/:videoId" element={<Video />} />
        <Route path="/login" element={<Login />} />
        <PrivateRoute path="/playlist" element={<Playlist />} />
      </Routes>
    </div>
  );
}

export default App;
