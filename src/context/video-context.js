import axios from "axios";
import { useContext, createContext, useReducer, useEffect } from "react";
import { reducer, initialState } from "../reducer/reducer";



const VideoContext = createContext();

export function VideoProvider({ children }) {

    async function getVideos() {
        try {
            const response = await axios.get("http://localhost:8080/videos");
            if (response.status === 200) {

                dispatch({ type: "INITIALIZE_ALL_VIDEOS", payload: { videos: response.data.videos } })
            }
        } catch (error) {
            console.log({ error })
        }
    }

    async function getPlaylists() {
        try {
            const response = await axios.get("http://localhost:8080/playlist");

            if (response.status === 200) {
                console.log(response.data.playlist)
                dispatch({ type: "INITIALIZE_ALL_PLAYLIST", payload: { playlist: response.data.playlist } })
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getVideos();

    }, [])

    useEffect(() => {
        getPlaylists();
    }, [])

    const [state, dispatch] = useReducer(reducer, initialState)


    return <VideoContext.Provider value={{ videoList: state.videoList, saved: state.savedList, playlist: state.playlist, dispatch }}>
        {children}
    </VideoContext.Provider>
}
export function useVideo() {
    return useContext(VideoContext)
}