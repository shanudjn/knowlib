import './PlaylistModal.css';
import axios from "axios";


import { useState } from 'react';
import { useVideo } from '../../context/video-context';
import { useAuth } from '../../context/auth-context';



export function PlaylistModal({ showModal, videoId, handleShowModal }) {

    const { videoList, playlist, dispatch } = useVideo();

    const [modalInput, setModalInput] = useState("");

    const { token } = useAuth()

    async function createPlaylist(e) {
        e.preventDefault();
        const video = videoList.find((item) => item.videoId === videoId)
        // console.log(video)

        if (modalInput === "") return;

        try {
            console.log("indie create try block", modalInput)

            const createNewPlaylistResponse = await axios.post('https://video-lib-backend.herokuapp.com/playlist/', { playlistName: modalInput }, { headers: { authorization: `Bearer ${token}` } })
            console.log({ createNewPlaylistResponse })
            const newPlaylist = createNewPlaylistResponse.data.playlist
            console.log(newPlaylist)
            const playlistId = createNewPlaylistResponse.data.playlist._id
            console.log("createNewPlaylistResponse", playlistId)
            console.log("waiting to dispatch")

            // const addVideoToNewPlaylist = await axios.post(`https://video-lib-backend.herokuapp.com/playlist/${playlistId}`, { playlistName: modalInput, videoId: video._id }, { headers: { authorization: `Bearer ${token}` } })
            // console.log({ addVideoToNewPlaylist })
            if (createNewPlaylistResponse.status === 200) { // && addVideoToNewPlaylist.status === 200
                // dispatch({ type: "ADD_PLAYLIST", payload: { playlistName: modalInput, video: video } })
                dispatch({ type: "ADD_PLAYLIST", payload: { newPlaylist: newPlaylist } })

                setModalInput("");
            }
        } catch (error) {
            console.log(error.message)
        }

    }

    function isChecked(playlistName, videoId) {

        const videos = playlist.find((item) => item.playlistName === playlistName).videos

        if (videos.length !== 0) {
            const video = videos.filter((item) => item.videoId === videoId)

            if (video.length !== 0) {
                return true;
            }
            return false
        }
        return false;


    }
    function checkInPlaylist(playlistName, videoId) {
        console.log(playlistName, videoId)
        const videos = playlist.find(item => item.playlistName === playlistName).videos;
        console.log(videos)
        const foundVideo = videos.filter((item) => item.videoId === videoId)
        console.log(foundVideo)
        if (foundVideo.length !== 0) {
            console.log("video is present")
            return true
        }
        return false;
    }

    async function addToPlaylist(video, playlistName, playlistId) {
        try {

            const addToPlaylistResponse = await axios.post(`https://video-lib-backend.herokuapp.com/playlist/${playlistId}`, { playlistName: modalInput, videoId: video._id }, { headers: { authorization: `Bearer ${token}` } })

            if (addToPlaylistResponse.status === 200) {
                // console.log("add to playlist")
                dispatch({ type: "ADD_TO_PLAYLIST", payload: { video: video, playlistName: playlistName } })
            }
        } catch (error) {
            console.log(error)
        }

    }

    async function removeFromPlaylist(video, playlistName, playlistId) {
        console.log("remove from playlist triggered")
        console.log(video._id, playlistName, playlistId)
        try {
            console.log("inside removeFromAplaylist", video)
            const removeFromPlaylistResponse = await axios.delete(`https://video-lib-backend.herokuapp.com/playlist/${playlistId}/${video._id}`, { headers: { authorization: `Bearer ${token}` } })
            if (removeFromPlaylistResponse.status === 200) {
                console.log("removed from playlist")
                dispatch({ type: "REMOVE_FROM_PLAYLIST", payload: { video: video, playlistName: playlistName } })
            }
        } catch (error) {
            console.log(error)
        }

    }

    function handleCheckbox(playlistName, playlistId) {
        console.log("inside handleCheckbox", playlistName, playlistId)
        const video = videoList.find((item) => item.videoId === videoId)
        // console.log(video)
        const isVideoInPlaylist = checkInPlaylist(playlistName, videoId);
        console.log(isVideoInPlaylist)
        if (isVideoInPlaylist === true) { removeFromPlaylist(video, playlistName, playlistId) }
        else {
            addToPlaylist(video, playlistName, playlistId)
        }
    }


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
                                    key={playlistItem._id}
                                    type="checkbox"
                                    name={playlistItem.playlistName}
                                    id={`checkbox${index}`}
                                    onChange={() => handleCheckbox(playlistItem.playlistName, playlistItem._id)}
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
