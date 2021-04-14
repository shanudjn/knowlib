import './PlaylistModal.css';

import { useState } from 'react';
import { useVideo } from '../../context/video-context';



export function PlaylistModal({ showModal, videoId }) {

    const { videoList, playlist, dispatch } = useVideo();

    const [modalInput, setModalInput] = useState("");

    const [category, setCategory] = useState("");


    function addPlaylist(e) {
        e.preventDefault();
        console.log(modalInput);
        if (modalInput === "") return;
        dispatch({ type: "ADD_PLAYLIST", payload: modalInput })
        setModalInput("");
    }

    function isChecked(playlistName, videoId) {
        // console.log(playlistName)
        // // const { category } = videoList.find((item) => item.id === videoId)
        // const { videos } = playlist.find(item => item.name === playlistName)

        // console.log(videos)

        // const { reqdVideo } = (videos.find((item) => item.id === videoId))
        // console.log(reqdVideo)
        // if (playlistName === category)
        //     return true;
        // return false;
    }
    function checkInPlaylist(playlistName, videoId) {
        const video = playlist.find(item => item.name === playlistName).videos.filter((item) => item.id === videoId)
        console.log(video);

        if (video.length === 0) {
            return false
        }
        return true;

        // if (videoId === undefined)
        //     return false;
        // return true;
    }

    function handleCheckbox(playlistName) {
        // const { category } = videoList.find((item) => item.id === videoId)

        const video = videoList.find((item) => item.id === videoId)

        const isInPlaylist = checkInPlaylist(playlistName, videoId);

        !isInPlaylist ? dispatch({ type: "ADD_TO_PLAYLIST", payload: { video: video, playlistName: playlistName } })
            : dispatch({ type: "REVOME_FROM_PLAYLIST", payload: { video: video, playlistName: playlistName } })


        // if (video !== undefined) {
        //     dispatch({ type: "REVOME_FROM_PLAYLIST", payload: { videoId: videoId, category: "" } })
        // }




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
                                // checked={isChecked(playlistItem.name)}

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