import { v4 } from "uuid";
import { playlist, videoList } from "../data";




export function savedReducer(state, action) {

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
                playlist: [...state.playlist, { id: v4(), name: action.payload }]
            }
        case "REVOME_FROM_PLAYLIST":
            console.log("Remove from playlist", action.payload);
            return {
                ...state,
                videoList: videoList.map((item) => (item.id === action.payload.videoId) ? { ...item, category: "" } : item)
            }


        default:
            break;
    }

}