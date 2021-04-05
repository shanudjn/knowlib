import { useContext, createContext, useReducer } from "react";
import { savedReducer } from "../reducer/saved-reducer";


const VideoContext = createContext();



export function VideoProvider({ children }) {

    const saved = [];

    const [state, dispatch] = useReducer(savedReducer, { saved })
    return <VideoContext.Provider value={{ saved: state.saved, dispatch }}>
        {children}
    </VideoContext.Provider>
}
export function useVideo() {
    return useContext(VideoContext)
}