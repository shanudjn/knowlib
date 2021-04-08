import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import YouTube from 'react-youtube';
import { Navbar } from '../../components/Navbar/Navbar';
import './video.css';
import { videoList, notesList } from '../../data';

export function Video() {
    let { id } = useParams();
    const [videoDetails, setVideoDetails] = useState([]);

    const [videoNotes, setNotes] = useState([])


    function getVideoDetails(id) {
        const details = videoList.find((item) => item.id === id)
        setVideoDetails(details)
    }

    function getNote(id) {
        const { notes } = notesList.find((item) => item.id === id)
        console.log(notes)
        console.log([...videoNotes, notes])
        setNotes([...videoNotes, notes])
    }
    useEffect(() => {
        getVideoDetails(id);

    }, [])
    useEffect(() => {

        getNote(id);
    }, [])

    // getVideoDetails(id);
    console.log(videoNotes)
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
                    </div>


                </div>

                <div className="note-section">
                    {/* <div className="note-heading"></div> */}
                    <h3 className="note-section-heading">Notes</h3>
                    <ul className="notes-list">
                        {
                            videoNotes.map((note) => {

                                return (
                                    <li className="notes-list-item" key={note.id}>
                                        {note.notes}
                                    </li>
                                )
                            })
                        }
                        {/* <li className="notes-list-item">
                            I hva attente the funeral ceremony of Captain America's lover Peggy Carter
                        </li>
                        <li className="notes-list-item">
                            I hva attente the funeral ceremony of Captain America's lover Peggy Carter
                        </li> <li className="notes-list-item">
                            I hva attente the funeral ceremony of Captain America's lover Peggy Carter
                        </li> <li className="notes-list-item">
                            I hva attente the funeral ceremony of Captain America's lover Peggy Carter
                        </li> <li className="notes-list-item">
                            I hva attente the funeral ceremony of Captain America's lover Peggy Carter
                        </li> <li className="notes-list-item">
                            I hva attente the funeral ceremony of Captain America's lover Peggy Carter
                        </li> */}

                    </ul>

                </div>
            </div>
        </>
    )
}