import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import ReactPlayer from "react-player";
import Markdown from "react-remarkable";

import "./video.css";

import { PlaylistModal } from "../../components/PlaylistModal/PlaylistModal";
import { useVideo } from "../../context/video-context";
import { useAuth } from "../../context/auth-context";
import axios from "axios";

export function Video() {
  let { videoId } = useParams();
  const { token, isUserLoggedIn } = useAuth();

  const { videoList } = useVideo();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [videoNotes, setNotes] = useState([]);
  const [notesInput, setNotesInput] = useState("");

  const videoDetails = videoList.find((item) => item.videoId === videoId);

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(
          `https://video-library-backend.onrender.com/notes/${videoDetails._id}`,
          { headers: { authorization: `Bearer ${token}` } }
        );
        setNotes(response.data.notes.notes);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  function handleShowModal() {
    if (!isUserLoggedIn) {
      navigate("/login");
    }
    setShowModal((showModal) => !showModal);
  }

  async function addNewNote() {
    const addNewNoteResponse = await axios.post(
      `https://video-library-backend.onrender.com/notes/${videoDetails._id}`,
      { note: notesInput },
      { headers: { authorization: `Bearer ${token}` } }
    );
    if (addNewNoteResponse.status === 200) {
      setNotes((videoNotes) => videoNotes.concat(notesInput));
    }
  }
  async function updateNotes() {
    const updateNoteResponse = await axios.put(
      `https://video-library-backend.onrender.com/notes/${videoDetails._id}`,
      { note: notesInput },
      { headers: { authorization: `Bearer ${token}` } }
    );
    if (updateNoteResponse.status === 200) {
      setNotes((videoNotes) => videoNotes.concat(notesInput));
    }
  }

  function handleAddNote(e) {
    e.preventDefault();
    if (!isUserLoggedIn) {
      navigate("/login");
      return;
    }
    if (videoNotes.length === 0) {
      addNewNote();
      return;
    }
    updateNotes();
  }

  return (
    <>
      <div className="container-video">
        <div className="video-section">
          <div className="player-wrapper">
            <ReactPlayer
              className="react-player"
              url={`https://www.youtube.com/watch?v=${videoId}`}
              width="100%"
              height="100%"
            />
          </div>
          <div className="div-video-details">
            <p className="text-video-title">{videoDetails?.title}</p>
            <span
              className="material-icons  button-show-playlist"
              onClick={() => handleShowModal()}
            >
              playlist_add
            </span>
            <PlaylistModal
              showModal={showModal}
              videoId={videoDetails?.videoId}
              handleShowModal={handleShowModal}
            />
          </div>
        </div>

        <div className="note-section">
          <div className="notes-display-section">
            <p className="note-section-heading">Notes</p>
          </div>
          <ul className="notes-list">
            {videoNotes.map((note, index) => {
              return (
                <li className="notes-list-item" key={index}>
                  <Markdown source={note} />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="div-form">
          <form className="notes-input" onSubmit={(e) => handleAddNote(e)}>
            <textarea
              className="notes-textarea"
              placeholder="Add your notes..."
              value={notesInput}
              onChange={(e) => setNotesInput(e.target.value)}
            />
            <button className="btn btn-primary btn-add-note">Add Note</button>
          </form>
        </div>
      </div>
    </>
  );
}
