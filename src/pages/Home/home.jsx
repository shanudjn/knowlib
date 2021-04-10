import './home.css';

import { useVideo } from '../../context/video-context';
// import { Link } from 'react-router-dom';
import { Topics } from '../../components/Topics/Topics'
import { VideoCard } from '../../components/VideoCard/VideoCard'


export function Home() {



    const { videoList, dispatch } = useVideo();



    function handleWatchLater(video) {
        console.log(video);
        dispatch({ type: "ADD_TO_SAVED_LIST", payload: video })
    }

    return (
        <>
            <Topics />
            <div className="video-grid">
                {
                    videoList.map((video) => <VideoCard video={video} key={video.id} handleWatchLater={handleWatchLater} />)
                }
            </div>
            {/* <PlaylistModal showModal={showModal} handleWatchLater={handleWatchLater} category={category} /> */}


        </>
    )
}
