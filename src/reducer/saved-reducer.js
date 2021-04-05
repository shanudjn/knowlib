import axios from 'axios';
async function addToSaved(video) {
    const response = await axios.post('/api/saved');
    console.log({ response })
}

export function savedReducer(state, action) {

    switch (action.type) {
        case "ADD_TO_SAVED_LIST":
            addToSaved(action.payload);
            return {
                ...state,
            }


        default:
            break;
    }

}