import { useState } from 'react';
import { useParams } from 'react-router';
import YouTube from 'react-youtube';

import { v4 } from 'uuid';
// import Remarkable from "remarkable";
import Markdown from "react-remarkable"



import './video.css';


import { PlaylistModal } from '../../components/PlaylistModal/PlaylistModal'
import { useVideo } from '../../context/video-context';
// import { notesList } from '../../data';


export function Video() {


    let { videoId } = useParams();


    const { videoList } = useVideo();
    const [showModal, setShowModal] = useState(false);
    const [videoNotes, setNotes] = useState([]);
    const [notesInput, setNotesInput] = useState("");



    const videoDetails = videoList.find((item) => item.videoId === videoId)


    function handleShowModal() {
        setShowModal((showModal) => !showModal)
    }
    function handleAddNote(e) {
        e.preventDefault();
        setNotes(videoNotes.concat({ id: v4(), notes: notesInput }))
        setNotesInput("")

    }




    return (
        <>
            {/* <Navbar /> */}
            <div className="container-video">

                <div className="video-section">
                    <YouTube videoId={videoId}>
                    </YouTube>
                    <div className="div-video-details">
                        <p className="text-video-title">{videoDetails?.title}</p>
                        <span className="material-icons  button-show-playlist" onClick={() => handleShowModal()}>
                            playlist_add
                        </span>
                        <PlaylistModal showModal={showModal} videoId={videoDetails?.videoId} handleShowModal={handleShowModal} />

                    </div>
                </div>

                <div className="note-section">
                    <div className="notes-display-section">
                        <h3 className="note-section-heading">Notes</h3>
                        <ul className="notes-list" >
                            {
                                videoNotes.map((note) => {

                                    return (

                                        <li className="notes-list-item" key={note.id} >
                                            <Markdown source={note.notes} />
                                        </li>

                                    )
                                })
                            }
                        </ul>
                    </div>
                    <form className="notes-input" onSubmit={(e) => handleAddNote(e)}>
                        <textarea placeholder="Add your notes..." value={notesInput} onChange={(e) => setNotesInput(e.target.value)} />
                        <button className="btn btn-primary btn-add-note">Add Note</button>
                    </form>

                </div>
            </div>
        </>
    )
}