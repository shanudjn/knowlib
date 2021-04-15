import './PlaylistModal.css';

import { useState } from 'react';
import { useVideo } from '../../context/video-context';



export function PlaylistModal({ showModal, videoId }) {

    const { videoList, playlist, dispatch } = useVideo();

    const [modalInput, setModalInput] = useState("");



    function addPlaylist(e) {
        e.preventDefault();
        console.log(modalInput);
        const video = videoList.find((item) => item.id === videoId)
        if (modalInput === "") return;
        dispatch({ type: "ADD_PLAYLIST", payload: { video: video, playlistName: modalInput } })
        setModalInput("");
    }

    function isChecked(playlistName, videoId) {
        const videos = playlist.find((item) => item.name === playlistName).videos
        // console.log(videos)
        if (videos.length !== 0) {
            const video = videos.filter((item) => item.id === videoId)
            if (video.length === 0) { return false; }
        }

        // console.log(video)

        return true;


    }
    function checkInPlaylist(playlistName, videoId) {
        const video = playlist.find(item => item.name === playlistName).videos.filter((item) => item.id === videoId)
        console.log(video);

        if (video.length === 0) {
            return false
        }
        return true;


    }

    function handleCheckbox(playlistName) {

        const video = videoList.find((item) => item.id === videoId)

        const isInPlaylist = checkInPlaylist(playlistName, videoId);

        !isInPlaylist ? dispatch({ type: "ADD_TO_PLAYLIST", payload: { video: video, playlistName: playlistName } })
            : dispatch({ type: "REVOME_FROM_PLAYLIST", payload: { video: video, playlistName: playlistName } })
    }
    console.log(playlist)
    return (
        <div className={showModal ? "modal" : "modal hide"}>
            <p>Playlists</p>
            {
                playlist.map((playlistItem, index) => {

                    return (
                        <>

                            <div className='modal-options' >

                                <input

                                    type="checkbox"
                                    name={playlistItem.name}
                                    id={`checkbox${index}`}
                                    onChange={() => handleCheckbox(playlistItem.name)}
                                    checked={isChecked(playlistItem.name, videoId)}

                                />
                                {/* {playlistItem.id} */}
                                {playlistItem.name}

                            </div>


                        </>
                    )
                })
            }
            <form
                onSubmit={e => addPlaylist(e)}>
                <input type="text"
                    className="modal-input-text"
                    onChange={(e) => setModalInput(e.target.value)}
                    placeholder="New Playlist..."
                    value={modalInput} />
                <button type="submit">Add</button>
            </form>


        </div >
    )
}
//(category === playlistItem.name) ? true : false