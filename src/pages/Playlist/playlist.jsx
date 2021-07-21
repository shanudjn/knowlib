import { useVideo } from '../../context/video-context';

import axios from "axios"
import { Link } from 'react-router-dom';

import './playlist.css'
import { useEffect } from 'react';
import { useAuth } from '../../context/auth-context';

export function Playlist() {
    const { dispatch } = useVideo();
    const { token } = useAuth();

    async function getPlaylists() {
        console.log("token", token)
        if (token !== "") {
            try {
                // const response = await axios.get("http://localhost:8080/playlist/",

                const response = await axios.get("https://video-lib-backend.herokuapp.com/playlist/",

                    { headers: { authorization: `Bearer ${token}` } }
                );
                // console.log(response)
                if (response.status === 200) {
                    // console.log("playlist", response.data.playlist)
                    dispatch({ type: "INITIALIZE_ALL_PLAYLIST", payload: { playlist: response.data.playlist } })
                }
            } catch (error) {
                console.log(error)
            }
        }
    }
    useEffect(() => {
        getPlaylists();
    }, [token])



    const { playlist } = useVideo();

    console.log(playlist)
    return (
        <div className="playlist-grid">
            {
                playlist.map(({ _id, playlistName, videos }) => {
                    return (
                        <>
                            <div className="playlist-container">
                                <div className="div-title-playlist"><span className="title-playlist" >{playlistName}</span><Link to={`/playlist/${_id}`} className="span-see-all">See All</Link></div>
                                <div className="card-container">
                                    {
                                        videos.map(({ id, title, videoId, url, thumbnail }) => {

                                            return (
                                                <>
                                                    <div className="playlist-card" key={id}>

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
                                        })
                                    }</div>
                            </div>


                        </>

                    )

                })
            }
        </div>
    )
}