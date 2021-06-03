
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
                playlist: [...state.playlist, { ...action.payload.newPlaylist }]
            }
        case "DELETE_PLAYLIST":
            console.log("inside REDUCER delete playlist ", action.payload)

            const updatedPlaylistAfterDelete = state.playlist.filter((item) => item._id !== action.payload.playlistId)
            console.log(updatedPlaylistAfterDelete)
            return {
                ...state,
                playlist: [...updatedPlaylistAfterDelete]
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
                // playlist: updatedPlaylist
                playlist: state.playlist.map((item) => (item.playlistName === action.payload.playlistName)
                    ? { ...item, videos: item.videos.filter((filterItem) => filterItem.videoId !== action.payload.video.videoId) }
                    : item
                )
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

        case "SET_SEARCH_TERM":
            console.log(action.payload)
            const newSearchTerm = action.payload
            return {
                ...state,
                searchTerm: newSearchTerm
            }
        case "INITIALIZE_ALL_VIDEOS":

            return {
                ...state,
                videoList: [...action.payload.videos],

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

    videoList: [],
    savedList: [],
    playlist: [],



}