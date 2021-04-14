import './VideoCard.css'

import { Link } from 'react-router-dom';
import { useVideo } from '../../context/video-context';




export function VideoCard({ video, }) {
    const { dispatch } = useVideo();
    return (
        <>
            <div className="video-card" key={video.id}>
                <Link to={`/videopage/${video.id}`} className="link"><div><img src={video.videoThumbnail} alt="thumbnail" className="thumbnail" /></div></Link>
                <div className="div-video-details">
                    <div className="channel-details">
                        <div className="title">
                            <Link to={`/videopage/${video.id}`} className="link"><p>{video.title}</p></Link>
                            <span className="material-icons"
                                onClick={() => dispatch({ type: "ADD_TO_SAVED_LIST", payload: { name: "saved", video: video } })}
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