import './VideoCard.css'

import { Link } from 'react-router-dom';
import { useVideo } from '../../context/video-context';




export function VideoCard({ video }) {
    const { dispatch } = useVideo();
    return (
        <>
            <div className="video-card" key={video.id}>
                <Link to={`/videopage/${video.id}`} className="link"><div><img src={video.videoThumbnail} alt="thumbnail" className="thumbnail" /></div></Link>
                <div className="div-video-details">
                    <div className="channel-details">
                        <div className="title">
                            <Link to={`/videopage/${video.id}`} className="link"><p className="video-title">{video.title}</p></Link>
                            <span className="material-icons"
                                onClick={() => dispatch({ type: "ADD_TO_PLAYLIST", payload: { video: video, playlistName: "saved" } })}
                            >
                                watch_later
                             </span>

                        </div>
                        <p>{video.channelName}</p>

                    </div>
                </div>
            </div>

        </>
    )
}