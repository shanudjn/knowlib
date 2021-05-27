import { useState } from 'react';
import { useParams } from 'react-router';
import ReactPlayer from 'react-player'

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
                    <div className='player-wrapper'>
                        <ReactPlayer
                            className='react-player'
                            url={`https://www.youtube.com/watch?v=${videoId}`}
                            width='100%'
                            height='100%'
                        />
                    </div>
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
                        <p className="note-section-heading">Notes</p>

                    </div>
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
                <div className="div-form">
                    <form className="notes-input" onSubmit={(e) => handleAddNote(e)}>
                        <textarea className='notes-textarea' placeholder="Add your notes..." value={notesInput} onChange={(e) => setNotesInput(e.target.value)} />
                        <button className="btn btn-primary btn-add-note">Add Note</button>
                    </form>
                </div>




            </div>
        </>
    )
}