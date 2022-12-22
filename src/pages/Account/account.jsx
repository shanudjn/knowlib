import axios from "axios";
import React from "react";
import { useAuth } from "../../context/auth-context";
import { useVideo } from "../../context/video-context";
import "./account.css";
function Account() {
  const { token, logoutUser } = useAuth();
  const { playlist, dispatch } = useVideo();

  async function deletePlaylist(playlistId) {
    try {
      const deletePlaylistResponse = await axios.delete(
        `https://video-library-backend.onrender.com/playlist/${playlistId}`,
        { headers: { authorization: `Bearer ${token}` } }
      );
      // console.log(deletePlaylistResponse)
      if (deletePlaylistResponse.status === 200) {
        // console.log("playlist is deleted, now delete it from state");
        dispatch({
          type: "DELETE_PLAYLIST",
          payload: { playlistId: playlistId },
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="account-page-layout">
      <div className="div-logout">
        {/* <p>Account page</p> */}
        <p className="title-heading">Your Playlists</p>
        <button className="logout-button" onClick={() => logoutUser()}>
          Logout
        </button>
      </div>
      <>
        <div className="div-playlist-layout">
          {playlist.map((playlistItem, index) => {
            return (
              <div key={playlistItem._id} className="div-playlist">
                <span>{playlistItem.playlistName}</span>
                <span
                  className="material-icons delete-button"
                  onClick={() => deletePlaylist(playlistItem._id)}
                >
                  delete
                </span>
              </div>
            );
          })}
        </div>
      </>
    </div>
  );
}

export default Account;
