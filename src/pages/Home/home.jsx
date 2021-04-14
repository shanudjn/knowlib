import './home.css';
import { useVideo } from '../../context/video-context';
import { Topics } from '../../components/Topics/Topics'
import { VideoCard } from '../../components/VideoCard/VideoCard'


export function Home() {
    const { videoList } = useVideo();
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
