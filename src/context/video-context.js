import { useContext, createContext } from "react";


const VideoContext = createContext();

export function VideoProvider({ children }) {
    return <VideoContext.Provider value={{ value: "test" }}>
        {children}
    </VideoContext.Provider>
}
export function useVideo() {
    return useContext(VideoContext)
}