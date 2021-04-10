import './PlaylistModal.css';

import { useState } from 'react';
import { useVideo } from '../../context/video-context';



export function PlaylistModal({ showModal, category, videoId }) {
    // console.log(playlist);

    const { videoList, playlist, dispatch } = useVideo();

    const [modalInput, setModalInput] = useState("");

    function addPlaylist(e) {
        e.preventDefault();
        console.log(modalInput);
        dispatch({ type: "ADD_PLAYLIST", payload: modalInput })
        setModalInput("")

    }
    function handleCheckbox(playlistName, videoId) {
        console.log("inside handlecheckbox")
        dispatch({ type: "REVOME_FROM_PLAYLIST", payload: { playlistName: playlistName, videoId: videoId } })
    }


    console.log(videoList);
    return (
        <div className={showModal ? "modal" : "modal hide"}>
            <p>Playlists</p>
            {
                playlist.map((playlistItem, index) => {
                    // console.log(playlistItem.id)
                    return (
                        <>
                            <div key={index} >
                                <div
                                    className='modal-options' >
                                    <label htmlFor={`checkbox ${index}`}>
                                        <input
                                            type="checkbox"
                                            name="checkbox"
                                            id={`checkbox${index}`}
                                            onChange={() => handleCheckbox(playlistItem.name, videoId)}
                                            checked={(category === playlistItem.name) ? true : false}
                                        />
                                        {/* {playlistItem.id} */}
                                        {playlistItem.name}
                                    </label>
                                </div>
                            </div>

                        </>
                    )
                })
            }
            <form
                onSubmit={e => addPlaylist(e)}>
                <input type="text"
                    onChange={(e) => setModalInput(e.target.value)}
                    placeholder="New Playlist..."
                    value={modalInput} />
                <button type="submit">Add</button>
            </form>


        </div >
    )
}