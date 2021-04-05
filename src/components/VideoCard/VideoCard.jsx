import './VideoCard.css'
import { Link } from 'react-router-dom';
import { useVideo } from '../../context/video-context';


export function VideoCard({ video }) {

    const { saved, dispatch } = useVideo()
    console.log("saved", saved)
    return (
        <div className="video-card" key={video.id} onClick={() => console.log("Hello")}>
            <Link to={`/videopage/${video.id}`} className="link"><div><img src={video.videoThumbnail} alt="thumbnail" className="thumbnail" /></div></Link>
            <div className="div-video-details">
                <div className="channel-details">
                    <div className="title">
                        <Link to={`/videopage/${video.id}`} className="link"><p>{video.title}</p></Link>
                        <span className="material-icons" onClick={() => dispatch({ type: "ADD_TO_SAVED_LIST", payload: video })}>
                            watch_later
                                        </span>
                    </div>
                    <p>{video.channelName}</p>
                </div>
            </div>
        </div>
    )
}