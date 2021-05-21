import { v4 } from "uuid";
// import { playlist, videoList } from "../data";




export function reducer(state, action) {

    switch (action.type) {
        case "ADD_TO_SAVED_LIST":
            return {
                ...state,
                savedList: [...state.savedList, action.payload]
            }
        case "ADD_PLAYLIST":
            console.log(action.payload)
            return {
                ...state,
                playlist: [...state.playlist, { playlistName: action.payload.playlistName, videos: [action.payload.video] }]
                // playlist: [...state.playlist, { ...action.payload }]
            }
        case "REVOME_FROM_PLAYLIST":


            return {
                ...state,
                playlist: state.playlist.map((item) => (item.name === action.payload.playlistName)
                    ? { ...item, videos: item.videos.filter((filterItem) => filterItem.id !== action.payload.video.id) }
                    : item
                )
            }
        case "ADD_TO_PLAYLIST":

            return {
                ...state,
                playlist: state.playlist.map((item) => (item.name === action.payload.playlistName)
                    ? { ...item, videos: [...item.videos, action.payload.video] }
                    : item
                )

            }
        case "INITIALIZE_ALL_VIDEOS":

            return {
                ...state,
                videoList: [...action.payload.videos]
            }
        case "INITIALIZE_ALL_PLAYLIST":

            return {
                ...state,
                playlist: [...action.payload.playlist]
            }

        default:
            break;
    }

}

export const initialState = {
    // videoList: [...videoList],
    // savedList: [],
    // playlist: [...playlist],
    videoList: [],
    savedList: [],
    playlist: []


}