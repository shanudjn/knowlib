import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import YouTube from 'react-youtube';
import { Navbar } from '../../components/Navbar/Navbar';
import './video.css';
import { videoList, notesList, playlist } from '../../data';
import { v4 } from 'uuid';
import { PlaylistModal } from '../../components/PlaylistModal/PlaylistModal'

export function Video() {
    let { id } = useParams();
    const [videoDetails, setVideoDetails] = useState([]);

    const [videoNotes, setNotes] = useState([]);

    const [notesInput, setNotesInput] = useState("");

    const [showModal, setShowModal] = useState(false);

    const [videoCategory, setVideoCategory] = useState("");


    function getVideoDetails(id) {
        const details = videoList.find((item) => item.id === id)
        setVideoDetails(details)
    }

    function getNote(id) {
        const { notes } = notesList.find((item) => item.id === id)
        // if (notes === undefined) { setNotes(videoNotes.concat({})) }

        setNotes(videoNotes.concat(notes))
    }

    function handleAddNote(e) {
        e.preventDefault();
        setNotes(videoNotes.concat({ id: v4(), notes: notesInput }))
    }

    function handleShowModal(videoDetails) {
        console.log(videoDetails)
        setVideoCategory(videoDetails.category)

        setShowModal(showModal => !showModal)
    }






    useEffect(() => {
        getVideoDetails(id);

    }, [])
    useEffect(() => {

        getNote(id);
    }, [])

    // getVideoDetails(id);
    // console.log(videoNotes.length)
    return (
        <>
            <Navbar />
            <div className="container-video">
                {/* <p>{id}</p> */}
                <div className="video-section">
                    <YouTube videoId={id}>
                    </YouTube>
                    <div className="div-video-details">
                        <p className="text-video-title">{videoDetails.title}</p>
                        <span className="material-icons" onClick={() => handleShowModal(videoDetails)}>
                            playlist_add
                        </span>
                        <PlaylistModal showModal={showModal} videoCategory={videoCategory} videoId={id} />
                    </div>
                </div>

                <div className="note-section">
                    <div className="notes-display-section">
                        <h3 className="note-section-heading">Notes</h3>
                        <ul className="notes-list" >
                            {
                                videoNotes.map((note) => {
                                    // console.log("line 58 ", note)
                                    return (

                                        <li className="notes-list-item" key={note.id}>
                                            {note.notes}
                                        </li>

                                    )
                                })
                            }
                        </ul>
                    </div>
                    <form className="notes-input" onSubmit={(e) => handleAddNote(e)}>
                        <textarea placeholder="Add your notes..." onChange={(e) => setNotesInput(e.target.value)} />
                        <button className="btn btn-primary btn-add-note" >Add Note</button>
                    </form>

                </div>
            </div>
        </>
    )
}