import './home.css';
import { useState } from "react"
import { useVideo } from '../../context/video-context';
import { Topics } from '../../components/Topics/Topics'
import { VideoCard } from '../../components/VideoCard/VideoCard'


export function Home() {
    const { videoList, searchTerm } = useVideo();

    const [filter, setFilter] = useState("");

    function handleSetFilter(e) {
        setFilter(e);
    }

    function getSearchData(videoList, searchTerm) {
        console.log("inside search")
        return videoList.filter(item => {
            console.log(item.title)
            if (item.title.includes(searchTerm) === true || item.channel.includes(searchTerm) === true) {
                console.log("note hre", item)
                return item

            }
            return null
        })
    }

    function getFilteredList(videoList, filter) {
        if (filter === "") {
            return videoList
        }
        return videoList.filter((item) => item.category.toLowerCase() === filter)
    }



    // const searchedData = getSearchData(videoList, searchTerm)

    const filteredList = getFilteredList(videoList, filter);

    console.log(filteredList)
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
