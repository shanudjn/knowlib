import { useContext, createContext, useReducer } from "react";
import { savedReducer } from "../reducer/saved-reducer";

import { playlist } from '../data'



const VideoContext = createContext();



export function VideoProvider({ children }) {


    const initialState = {
        savedList: [],
        playlist: playlist
    }


    const [state, dispatch] = useReducer(savedReducer, initialState)


    return <VideoContext.Provider value={{ saved: state.savedList, playlist: state.playlist, dispatch }}>
        {children}
    </VideoContext.Provider>
}
export function useVideo() {
    return useContext(VideoContext)
}