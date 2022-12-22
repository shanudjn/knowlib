import "./VideoCard.css";

import { Link } from "react-router-dom";
import { useVideo } from "../../context/video-context";

export function VideoCard({ video }) {
  return (
    <>
      <div className="video-card" key={video.videoId}>
        <Link
          state={{ videoId: video.videoId }}
          to={`/videopage/${video.videoId}`}
          className="link"
        >
          <div>
            <img src={video.thumbnail} alt="thumbnail" className="thumbnail" />
          </div>
        </Link>

        <div className="channel-details">
          <div className="title">
            <Link to={`/videopage/${video.videoId}`} className="link">
              <p className="video-title">{video.title}</p>
            </Link>
          </div>
          <p>{video.channel}</p>
        </div>
      </div>
    </>
  );
}
