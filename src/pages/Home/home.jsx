import './home.css';
import { useState } from "react"
import { useVideo } from '../../context/video-context';
import { Topics } from '../../components/Topics/Topics'
import { VideoCard } from '../../components/VideoCard/VideoCard'
import { useAuth } from '../../context/auth-context';
import Loader from "react-loader-spinner";


export function Home() {
    const { videoList, searchTerm, dispatch } = useVideo();
    const { isUserLoggedIn } = useAuth()

    const [filter, setFilter] = useState("");

    function handleSetFilter(e) {
        // console.log("handleSetFilter")
        dispatch({ type: "SET_SEARCH_TERM", payload: "" })

        setFilter(e);
    }

    function getSearchData(videoList, searchTerm) {

        const searchKey = searchTerm?.searchBarInput
        if (searchKey) {

            const searchedList = videoList.filter(item => item.title.toLowerCase().includes(searchKey) === true)
            return searchedList
        }
        else {
            return videoList
        }
    }

    function getFilteredList(videoList, filter) {
        if (filter === "") {
            return videoList
        }
        return videoList.filter((item) => item.category.toLowerCase() === filter)
    }



    const searchedData = getSearchData(videoList, searchTerm)
    // console.log("searched data", searchedData)
    const filteredList = getFilteredList(searchedData, filter);

    // console.log("filtered", filteredList)
    return (
        <>
            <Topics handleSetFilter={handleSetFilter} />
            {(filteredList.length === 0) && <Loader
                type="Puff"
                color="#09D3AC"
                height={100}
                width={100}
                // timeout={000} //3 secs
                className="loader"
            />
            }
            <div className="video-grid">


                {
                    filteredList.map((video) => <VideoCard video={video} key={video.videoId} />)
                }
            </div>

        </>
    )
}
