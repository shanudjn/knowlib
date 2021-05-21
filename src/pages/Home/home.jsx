import './home.css';
import { useState } from "react"
import { useVideo } from '../../context/video-context';
import { Topics } from '../../components/Topics/Topics'
import { VideoCard } from '../../components/VideoCard/VideoCard'


export function Home() {
    const { videoList } = useVideo();
    const [filter, setFilter] = useState("");

    function handleSetFilter(e) {
        console.log("inside setFilter");
        console.log(e)
        setFilter(e);
        console.log(filter)
    }

    function getFilteredList(videoList, filter) {
        if (filter === "") {
            return videoList
        }
        return videoList.filter((item) => item.category.toLowerCase() === filter)
    }


    const filteredList = getFilteredList(videoList, filter);

    return (
        <>
            <Topics handleSetFilter={handleSetFilter} />
            <div className="video-grid">
                {
                    filteredList.map((video) => <VideoCard video={video} key={video.videoId} />)
                }
            </div>

        </>
    )
}
