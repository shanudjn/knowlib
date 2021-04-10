import { useContext, createContext, useReducer } from "react";
import { savedReducer } from "../reducer/saved-reducer";
import { videoList } from '../data';
import { playlist } from '../data'



const VideoContext = createContext();



export function VideoProvider({ children }) {


    const initialState = {
        videoList: videoList,
        savedList: [],
        playlist: playlist,

    }


    const [state, dispatch] = useReducer(savedReducer, initialState)


    return <VideoContext.Provider value={{ videoList: state.videoList, saved: state.savedList, playlist: state.playlist, dispatch }}>
        {children}
    </VideoContext.Provider>
}
export function useVideo() {
    return useContext(VideoContext)
}