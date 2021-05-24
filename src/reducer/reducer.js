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

            return {
                ...state,
                playlist: [...state.playlist, { playlistName: action.payload.playlistName, videos: [action.payload.video] }]
                // playlist: [...state.playlist, { ...action.payload }]
            }
        case "REMOVE_FROM_PLAYLIST":
            console.log("Removefrom playlist", action.payload)

            const updatedPlaylist = state.playlist.map((item) => (item.playlistName === action.payload.playlistName)
                ? { ...item, videos: item.videos.filter((filterItem) => filterItem.videoId !== action.payload.video.videoId) }
                : item
            )

            console.log(updatedPlaylist)
            return {
                ...state,
                // playlist: state.playlist.map((item) => (item.playlistName === action.payload.playlistName)
                //     ? { ...item, videos: item.videos.filter((filterItem) => filterItem.videoId !== action.payload.video.videoId) }
                //     : item
                // )
            }
        case "ADD_TO_PLAYLIST":
            console.log("inside add to playlist")
            return {
                ...state,
                playlist: state.playlist.map((item) => (item.playlistName === action.payload.playlistName)
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