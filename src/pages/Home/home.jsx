import './home.css';
import { videoList } from '../../data';
import YouTube from 'react-youtube';
import { useVideo } from '../../context/video-context';


export function Home() {

    const { value } = useVideo();
    console.log(value)
    return (
        <>
            <p>Home</p>

            <div className="video-grid">
                {

                    videoList.map(({ id, title, url, videoThumbnail, channelName, category, channelImage }) => (
                        <div className="video-card" key={id}>
                            <div><img src={videoThumbnail} alt="thumbnail" className="thumbnail" /></div>
                            <div className="div-video-details">
                                <div className="channel-details">
                                    <p>{title}</p>
                                    <p>{channelName}</p>
                                </div>
                            </div>
                        </div>

                    ))
                }
            </div>

        </>
    )
}