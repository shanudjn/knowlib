import './PlaylistModal.css';
import axios from "axios";


import { useState } from 'react';
import { useVideo } from '../../context/video-context';



export function PlaylistModal({ showModal, videoId, handleShowModal }) {

    const { videoList, playlist, dispatch } = useVideo();

    const [modalInput, setModalInput] = useState("");



    async function createPlaylist(e) {
        e.preventDefault();
        const video = videoList.find((item) => item.videoId === videoId)
        console.log(video)

        if (modalInput === "") return;

        try {
            const createNewPlaylistResponse = await axios.post('http://localhost:8080/playlist/new', { playlistName: modalInput })
            const addVideoToNewPlaylist = await axios.post('http://localhost:8080/playlist/add', { playlistName: modalInput, videoId: video.videoId })
            if (createNewPlaylistResponse.status === 200 && addVideoToNewPlaylist.status === 200) {
                console.log("Successfully Saved")
                dispatch({ type: "ADD_PLAYLIST", payload: { playlistName: modalInput, video: video } })
                setModalInput("");
            }
        } catch (error) {
            console.log(error)
        }

    }

    function isChecked(playlistName, videoId) {

        const videos = playlist.find((item) => item.playlistName === playlistName).videos

        if (videos.length !== 0) {
            const video = videos.filter((item) => item.videoId === videoId)

            if (video.length === 0) { return false; }
        }
        return true;


    }
    function checkInPlaylist(playlistName, videoId) {
        console.log(playlistName, videoId)
        const videos = playlist.find(item => item.playlistName === playlistName).videos;
        console.log(videos)
        const foundVideo = videos.filter((item) => item.videoId === videoId)
        console.log(foundVideo)
        if (foundVideo.length === 0) {
            return false
        }
        return true;
    }

    async function addToPlaylist(video, playlistName) {
        try {
            const addToPlaylistResponse = await axios.post('https://video-lib-backend.herokuapp.com/playlist/add', { playlistName: playlistName, videoId: video.videoId })
            console.log(addToPlaylistResponse)
            if (addToPlaylistResponse.status === 200) {
                console.log("add to playlist")
                dispatch({ type: "ADD_TO_PLAYLIST", payload: { video: video, playlistName: playlistName } })
            }
        } catch (error) {
            console.log(error)
        }
        // dispatch({ type: "ADD_TO_PLAYLIST", payload: { video: video, playlistName: playlistName } })
    }

    async function removeFromPlaylist(video, playlistName) {
        console.log(video.videoId, playlistName)
        try {
            const removeFromPlaylistResponse = await axios.post('https://video-lib-backend.herokuapp.com/playlist/remove', { playlistName: playlistName, videoId: video.videoId })
            if (removeFromPlaylistResponse.status === 200) {
                console.log("removed from playlist")
                dispatch({ type: "REMOVE_FROM_PLAYLIST", payload: { video: video, playlistName: playlistName } })
            }
        } catch (error) {
            console.log(error)
        }

    }

    function handleCheckbox(playlistName) {

        const video = videoList.find((item) => item.videoId === videoId)
        console.log(video)
        const isVideoInPlaylist = checkInPlaylist(playlistName, videoId);
        console.log(isVideoInPlaylist)
        !isVideoInPlaylist ? addToPlaylist(video, playlistName)
            : removeFromPlaylist(video, playlistName)
    }



    console.log(playlist)
    return (
        { showModal } && <div className={showModal ? "modal" : "modal hide"}>
            <div className="playlist-heading"><span>Playlists</span><span className="material-icons button-modal-close" onClick={handleShowModal}>
                close
                </span>
            </div>

            {
                playlist.map((playlistItem, index) => {

                    return (
                        <>

                            <div className='modal-options' >

                                <input

                                    type="checkbox"
                                    name={playlistItem.playlistName}
                                    id={`checkbox${index}`}
                                    onChange={() => handleCheckbox(playlistItem.playlistName)}
                                    checked={isChecked(playlistItem.playlistName, videoId)}

                                />
                                {playlistItem.playlistName}
                            </div>


                        </>
                    )
                })
            }
            <form
                onSubmit={e => createPlaylist(e)}>
                <input type="text"
                    className="modal-input-text"
                    onChange={(e) => setModalInput(e.target.value)}
                    placeholder="New Playlist..."
                    value={modalInput} />
                <button className="btn btn-primary btn-add-playlist" type="submit">Add</button>
            </form>

        </div >
    )


}
