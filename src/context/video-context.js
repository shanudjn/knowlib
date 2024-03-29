import axios from "axios";
import { useContext, createContext, useReducer, useEffect } from "react";
import { reducer, initialState } from "../reducer/reducer";
import { useAuth } from "./auth-context";

const VideoContext = createContext();

export function VideoProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { token } = useAuth();

  async function getVideos() {
    try {
      const response = await axios.get(
        "https://video-library-backend.onrender.com/videos/"
      );
      if (response.status === 200) {
        dispatch({
          type: "INITIALIZE_ALL_VIDEOS",
          payload: { videos: response.data.videos },
        });
      }
    } catch (error) {
      console.log({ error });
    }
  }

  async function getPlaylists() {
    try {
      const response = await axios.get(
        "https://video-library-backend.onrender.com/playlist/",
        { headers: { authorization: `Bearer ${token}` } }
      );
      if (response.status === 200) {
        dispatch({
          type: "INITIALIZE_ALL_PLAYLIST",
          payload: { playlist: response.data.playlist },
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <VideoContext.Provider
      value={{
        videoList: state.videoList,
        saved: state.savedList,
        playlist: state.playlist,
        searchTerm: state.searchTerm,
        dispatch,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
}
export function useVideo() {
  return useContext(VideoContext);
}
