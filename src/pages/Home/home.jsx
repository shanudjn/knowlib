import './home.css';
import { videoList } from '../../data';
import { useVideo } from '../../context/video-context';
// import { Link } from 'react-router-dom';
import { Topics } from '../../components/Topics/Topics'
import { VideoCard } from '../../components/VideoCard/VideoCard'

export function Home() {

    const { value } = useVideo();
    console.log(value)

    return (
        <>
            <Topics />
            <div className="video-grid">
                {
                    videoList.map((video) => <VideoCard video={video} key={video.id} />)
                }
            </div>

        </>
    )
}
