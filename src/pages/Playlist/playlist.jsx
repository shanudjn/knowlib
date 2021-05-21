import { useVideo } from '../../context/video-context';
import { Link } from 'react-router-dom';
import './playlist.css'

export function Playlist() {

    const { playlist } = useVideo();


    console.log(playlist)
    return (
        <div className="container-playlist">
            {
                playlist.map(({ _id, playlistName, videos }) => {
                    return (
                        <>
                            <div className="div-title-playlist"><p className="title-playlist" >{playlistName}</p></div>
                            {/* <div> */}
                            {
                                videos.map(({ id, title, url, thumbnail }) => {

                                    return (
                                        <div className="card-horizontal" key={id}>

                                            <Link to={`/videopage/${id}`}><img src={thumbnail} alt="" className="playlist-video-thumbnail" /></Link>

                                            <div className="div-video-details">
                                                <Link to={`/videopage/${id}`}><span>{title}</span></Link>
                                            </div>

                                        </div>
                                    )
                                })
                            }
                            {/* </div> */}
                        </>

                    )

                })
            }
        </div>
    )
}