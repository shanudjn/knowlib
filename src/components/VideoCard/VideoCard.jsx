import './VideoCard.css'

import { Link } from 'react-router-dom';
import { useVideo } from '../../context/video-context';




export function VideoCard({ video }) {
    const { dispatch } = useVideo();
    return (
        <>
            <div className="video-card" key={video.videoId}>
                <Link to={`/videopage/${video.videoId}`} className="link"><div><img src={video.thumbnail} alt="thumbnail" className="thumbnail" /></div></Link>

                <div className="channel-details">
                    <div className="title">
                        <Link to={`/videopage/${video.videoId}`} className="link"><p className="video-title">{video.title}</p></Link>
                        <span className="material-icons icon-watch-later"
                            onClick={() => dispatch({ type: "ADD_TO_PLAYLIST", payload: { video: video, playlistName: "saved" } })}
                        >
                            watch_later
                             </span>

                    </div>
                    <p>{video.channel}</p>

                </div>

            </div>

        </>
    )
}