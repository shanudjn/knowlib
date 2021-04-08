import { v4 } from "uuid";
import { playlist } from "../data";




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
                playlist: [...playlist, { id: v4(), name: action.payload }]
            }


        default:
            break;
    }

}