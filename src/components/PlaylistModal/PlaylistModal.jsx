import "./PlaylistModal.css";
import axios from "axios";

import { useState } from "react";
import { useVideo } from "../../context/video-context";
import { useAuth } from "../../context/auth-context";

export function PlaylistModal({ showModal, videoId, handleShowModal }) {
  const { videoList, playlist, dispatch } = useVideo();

  const [modalInput, setModalInput] = useState("");

  const { token } = useAuth();

  async function createPlaylist(e) {
    e.preventDefault();
    const video = videoList.find((item) => item.videoId === videoId);

    if (modalInput === "") return;

    try {
      const createNewPlaylistResponse = await axios.post(
        "https://video-library-backend.onrender.com/playlist/",
        { playlistName: modalInput },
        { headers: { authorization: `Bearer ${token}` } }
      );
      const newPlaylist = createNewPlaylistResponse.data.playlist;
      const playlistId = createNewPlaylistResponse.data.playlist._id;

      if (createNewPlaylistResponse.status === 200) {
        dispatch({
          type: "ADD_PLAYLIST",
          payload: { newPlaylist: newPlaylist },
        });

        setModalInput("");
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  function isChecked(playlistName, videoId) {
    const videos = playlist.find(
      (item) => item.playlistName === playlistName
    ).videos;

    if (videos.length !== 0) {
      const video = videos.filter((item) => item.videoId === videoId);

      if (video.length !== 0) {
        return true;
      }
      return false;
    }
    return false;
  }
  function checkInPlaylist(playlistName, videoId) {
    const videos = playlist.find(
      (item) => item.playlistName === playlistName
    ).videos;
   
    const foundVideo = videos.filter((item) => item.videoId === videoId);
   
    if (foundVideo.length !== 0) {
    
      return true;
    }
    return false;
  }

  async function addToPlaylist(video, playlistName, playlistId) {
    try {
      const addToPlaylistResponse = await axios.post(
        `https://video-library-backend.onrender.com/playlist/${playlistId}`,
        { playlistName: modalInput, videoId: video._id },
        { headers: { authorization: `Bearer ${token}` } }
      );

      if (addToPlaylistResponse.status === 200) {
        
        dispatch({
          type: "ADD_TO_PLAYLIST",
          payload: { video: video, playlistName: playlistName },
        });
      }
    } catch (error) {
      console.log(error)
    }
  }

  async function removeFromPlaylist(video, playlistName, playlistId) {
   
    try {
      // console.log("inside removeFromAplaylist", video)
      const removeFromPlaylistResponse = await axios.delete(
        `https://video-library-backend.onrender.com/playlist/${playlistId}/${video._id}`,
        { headers: { authorization: `Bearer ${token}` } }
      );
      if (removeFromPlaylistResponse.status === 200) {
        dispatch({
          type: "REMOVE_FROM_PLAYLIST",
          payload: { video: video, playlistName: playlistName },
        });
      }
    } catch (error) {
      console.log(error)
    }
  }

  function handleCheckbox(playlistName, playlistId) {
   
    const video = videoList.find((item) => item.videoId === videoId);

    const isVideoInPlaylist = checkInPlaylist(playlistName, videoId);

    if (isVideoInPlaylist === true) {
      removeFromPlaylist(video, playlistName, playlistId);
    } else {
      addToPlaylist(video, playlistName, playlistId);
    }
  }

  return (
    { showModal } && (
      <div className={showModal ? "modal" : "modal hide"}>
        <div className="playlist-heading">
          <span>Playlists</span>
          <span
            className="material-icons button-modal-close"
            onClick={handleShowModal}
          >
            close
          </span>
        </div>

        {playlist.map((playlistItem, index) => {
          return (
            <>
              <div className="modal-options">
                <input
                  key={playlistItem._id}
                  type="checkbox"
                  name={playlistItem.playlistName}
                  id={`checkbox${index}`}
                  onChange={() =>
                    handleCheckbox(playlistItem.playlistName, playlistItem._id)
                  }
                  checked={isChecked(playlistItem.playlistName, videoId)}
                />
                {playlistItem.playlistName}
              </div>
            </>
          );
        })}
        <form onSubmit={(e) => createPlaylist(e)}>
          <input
            type="text"
            className="modal-input-text"
            onChange={(e) => setModalInput(e.target.value)}
            placeholder="New Playlist..."
            value={modalInput}
          />
          <button className="btn btn-primary btn-add-playlist" type="submit">
            Add
          </button>
        </form>
      </div>
    )
  );
}
