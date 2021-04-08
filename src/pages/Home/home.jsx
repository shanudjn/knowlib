import './home.css';
import { videoList } from '../../data';
import { useVideo } from '../../context/video-context';
// import { Link } from 'react-router-dom';
import { Topics } from '../../components/Topics/Topics'
import { VideoCard } from '../../components/VideoCard/VideoCard'
import { PlaylistModal } from '../../components/PlaylistModal/PlaylistModal';
import { useState } from 'react';

export function Home() {



    const [showModal, setShowModal] = useState(false)

    const [category, setCategory] = useState("");

    const { dispatch } = useVideo();


    function handleShowModal(category) {
        console.table('inside handleShowModal', category);
        setShowModal(!showModal)
        setCategory(category);
    }
    function handleWatchLater(video) {
        console.log(video);
        dispatch({ type: "ADD_TO_SAVED_LIST", payload: video })



    }

    console.log("category", category)
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
