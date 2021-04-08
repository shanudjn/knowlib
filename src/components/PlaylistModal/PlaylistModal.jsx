import './PlaylistModal.css';
// import { playlist } from '../../data';
import { useState } from 'react';
import { useVideo } from '../../context/video-context';


export function PlaylistModal({ showModal, handleShowModal, category }) {
    // console.log(playlist);

    const { playlist, dispatch } = useVideo();

    const [modalInput, setModalInput] = useState("");

    function addPlaylist(e) {
        e.preventDefault();
        console.log(modalInput);
        dispatch({ type: "ADD_PLAYLIST", payload: modalInput })

    }
    function isInPlaylist(playlistName, category) {
        if (playlist.find((item) => item.name === category)) {
            return true;
        }
        return false;
    }


    // console.log(playlist);
    return (
        <div className={showModal ? "modal" : "modal hide"}>
            <p>Playlists</p>
            {
                playlist.map((playlistItem) => {
                    console.log(playlistItem.id)
                    return (
                        <>

                            <div onClick={() => handleShowModal(playlistItem.category)}
                                className='modal-options' >
                                <label htmlFor="checkbox">
                                    <input type="checkbox"
                                        name="checkbox"
                                    // checked={playlistItem.name}
                                    // onChange={ }

                                    />
                                    {playlistItem.id}
                                    {playlistItem.name}
                                </label>
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


        </div>
    )
}