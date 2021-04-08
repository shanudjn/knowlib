import './VideoCard.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useVideo } from '../../context/video-context';
import { useState } from 'react';
import { PlaylistModal } from '../PlaylistModal/PlaylistModal'


export function VideoCard({ video, handleWatchLater }) {
    const { saved, dispatch } = useVideo()



    return (
        <>
            <div className="video-card" key={video.id}>
                <Link to={`/videopage/${video.id}`} className="link"><div><img src={video.videoThumbnail} alt="thumbnail" className="thumbnail" /></div></Link>
                <div className="div-video-details">
                    <div className="channel-details">
                        <div className="title">
                            <Link to={`/videopage/${video.id}`} className="link"><p>{video.title}</p></Link>
                            <span className="material-icons"
                                onClick={() => handleWatchLater(video)}
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