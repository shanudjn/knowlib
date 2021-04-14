import { useContext, createContext, useReducer } from "react";
import { reducer, initialState } from "../reducer/reducer";



const VideoContext = createContext();

export function VideoProvider({ children }) {

    const [state, dispatch] = useReducer(reducer, initialState)


    return <VideoContext.Provider value={{ videoList: state.videoList, saved: state.savedList, playlist: state.playlist, dispatch }}>
        {children}
    </VideoContext.Provider>
}
export function useVideo() {
    return useContext(VideoContext)
}