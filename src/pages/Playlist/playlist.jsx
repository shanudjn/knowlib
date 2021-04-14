import { useVideo } from '../../context/video-context';
import { Link } from 'react-router-dom';
import './playlist.css'

export function Playlist() {

    const { playlist } = useVideo();


    console.log(playlist)
    return (
        <div className="container-playlist">
            {
                playlist.map(({ id, name, videos }) => {
                    return (
                        <>
                            <p className="title-playlist" key={id}>{name}</p>
                            <div>
                                {
                                    videos.map(({ id, title, url, videoThumbnail }) => {
                                        console.log()
                                        return (
                                            <div className="card-horizontal" key={id}>
                                                <div className="playlist-thumbnail">
                                                    <Link to={`/videopage/${id}`}><img src={videoThumbnail} alt="" className="playlist-video-thumbnail" /></Link>
                                                </div>
                                                <div className="div-video-details">
                                                    {title}
                                                </div>

                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </>

                    )

                })
            }
        </div>
    )
}