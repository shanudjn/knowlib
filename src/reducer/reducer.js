import { v4 } from "uuid";
import { playlist, videoList } from "../data";




export function reducer(state, action) {

    switch (action.type) {
        case "ADD_TO_SAVED_LIST":
            return {
                ...state,
                savedList: [...state.savedList, action.payload]
            }
        case "ADD_PLAYLIST":
            console.log("Inside Add Playlist", action.payload)
            return {
                ...state,
                playlist: [...state.playlist, { id: v4(), name: action.payload, videos: [] }]
            }
        case "REVOME_FROM_PLAYLIST":
            console.log("Remove from playlist", action.payload);

            return {
                ...state,
                playlist: state.playlist.map((item) => (item.name === action.payload.playlistName)
                    ? { ...item, videos: item.videos.filter((filterItem) => filterItem.id !== action.payload.video.id) }
                    : item
                )

                //videoList: state.videoList.map((item) => (item.id === action.payload.videoId) ? { ...item, category: "" } : item),

            }
        case "ADD_TO_PLAYLIST":
            console.log("Add to playlist")
            console.log(action.payload)
            return {
                ...state,
                playlist: state.playlist.map((item) => (item.name === action.payload.playlistName)
                    ? { ...item, videos: [...item.videos, action.payload.video] }
                    : item
                )
                // videoList: state.videoList.map((item) => (item.id === action.payload.videoId) ? { ...item, category: action.payload.category } : item)
            }



        default:
            break;
    }

}

export const initialState = {
    videoList: [...videoList],
    savedList: [],
    playlist: [...playlist],

}