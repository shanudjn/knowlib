import './home.css';
import { videoList } from '../../data';
import { useVideo } from '../../context/video-context';
import { Link } from 'react-router-dom';
import { Topics } from '../../components/Topics/Topics'


export function Home() {

    const { value } = useVideo();
    console.log(value)
    return (
        <>
            <Topics />
            <div className="video-grid">
                {

                    videoList.map(({ id, title, url, videoThumbnail, channelName, category, channelImage }) => (

                        <div className="video-card" key={id} onClick={() => console.log("Hello")}>
                            <Link to={`/videopage/${id}`} className="link"><div><img src={videoThumbnail} alt="thumbnail" className="thumbnail" /></div></Link>
                            <div className="div-video-details">
                                <div className="channel-details">
                                    <div className="title">
                                        <Link to={`/videopage/${id}`} className="link"><p>{title}</p></Link>
                                        <span className="material-icons" onClick={console.log("add to watch later")}>
                                            watch_later
                                            </span>
                                    </div>
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