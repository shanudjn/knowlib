import { React, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useVideo } from '../../context/video-context'
import "./playlist-detail.css";
function PlaylistDetail() {

    const { playlistId } = useParams();
    const { playlist } = useVideo()
    // const [playlistVideos, setPlaylistVideos] = useState([]);

    function getPlaylistById(playlist) {
        console.log(playlistId)
        return playlist.find((item) => item._id === playlistId)


    }



    const playlistVideos = getPlaylistById(playlist)
    console.log(playlistVideos.videos)
    return (
        <>
            <p>{playlistVideos.playlistName}</p>
            <div className="div-playlist-detail-grid">

                {playlistVideos.videos.map(({ _id, title, thumbnail, videoId }) => {
                    return (
                        <>
                            <div className="playlist-card" key={videoId}>

                                <Link to={`/videopage/${videoId}`}>
                                    <div>
                                        <img src={thumbnail} alt="" className="playlist-video-thumbnail" />
                                    </div>
                                </Link>
                                <div className="div-video-details">
                                    <Link to={`/videopage/${videoId}`}><span>{title}</span></Link>
                                </div>

                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default PlaylistDetail
