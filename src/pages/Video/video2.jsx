import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import YouTube from 'react-youtube';
import { Navbar } from '../../components/Navbar/Navbar';
import './video.css';

import { PlaylistModal } from '../../components/PlaylistModal/PlaylistModal'
import { useVideo } from '../../context/video-context';

export function Video() {


    let { id } = useParams();

    const { videoList, playlist } = useVideo();

    const [videoDetails, setVideoDetails] = useState({});

    const [showModal, setShowModal] = useState(false);

    const [category, setCategory] = useState("");


    function getVideoDetails(id) {
        const details = videoList.find((item) => item.id === id)
        // setCategory(details.category)
        setVideoDetails(details)
    }


    function handleShowModal() {
        setShowModal((showModal) => !showModal)
    }

    useEffect(() => getVideoDetails(id), [])

    console.log("required category", category)
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
                        <span className="material-icons" onClick={() => handleShowModal()}>
                            playlist_add
                        </span>
                        <PlaylistModal showModal={showModal} category={category} videoId={id} />
                        {/* <PlaylistModal showModal={showModal} videoId={id} /> */}

                    </div>
                </div>

                <div className="note-section">
                    <div className="notes-display-section">
                        <h3 className="note-section-heading">Notes</h3>
                        <ul className="notes-list" >
                            {/* {
                                videoNotes.map((note) => {
                                    // console.log("line 58 ", note)
                                    return (

                                        <li className="notes-list-item" key={note.id}>
                                            {note.notes}
                                        </li>

                                    )
                                })
                            } */}
                        </ul>
                    </div>
                    <form className="notes-input" >
                        <textarea placeholder="Add your notes..." />
                        <button className="btn btn-primary btn-add-note" >Add Note</button>
                    </form>

                </div>
            </div>
        </>
    )
}