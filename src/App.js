import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./pages/Home/home";
import { Saved } from "./pages/Saved/saved";
import { Playlist } from "./pages/Playlist/playlist";
import { Video } from "./pages/Video/video";
import { Login } from "./pages/Login/Login";
import { Sidebar } from "./components/Sidebar/Sidebar";
import NavbarMobile from "./components/Navbar-Mobile/NavbarMobile";
import PlaylistDetail from "./pages/PlaylistDetail/playlist-detail";
import Account from "./pages/Account/account";
import Signup from "./pages/Signup/Signup";
import { RequireAuth } from "./RequireAuth";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <NavbarMobile />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/videopage/:videoId" element={<Video />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/account"
          element={
            <RequireAuth>
              <Account />
            </RequireAuth>
          }
        />
        <Route
          path="/playlist"
          element={
            <RequireAuth>
              <Playlist />
            </RequireAuth>
          }
        />
        <Route
          path="/playlist/:playlistId"
          element={
            <RequireAuth>
              <PlaylistDetail />
            </RequireAuth>
          }
        />
        <Route
          path="/videopage/:videoId"
          element={
            <RequireAuth>
              <Video />
            </RequireAuth>
          }
        />
      </Routes>
      {/* <PrivateRoute path="/playlist" element={<Playlist />} /> */}
      {/* <RequireAuth>
        <Route path="/account" element={<Account />} />
      </RequireAuth> */}

      {/* <PrivateRoute path="/playlist/:playlistId" element={<PlaylistDetail />} /> */}
      {/* <PrivateRoute path="/account" element={<Account />} /> */}
      {/* <PrivateRoute path="/videopage/:videoId" element={<Video />} /> */}
    </div>
  );
}

export default App;
