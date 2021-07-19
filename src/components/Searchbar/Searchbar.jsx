import './Searchbar.css';
import { useState } from "react";
import { useVideo } from '../../context/video-context';


export function Searchbar() {
    const [searchBarInput, setSearchBarInput] = useState("")

    const { dispatch } = useVideo();
    function handleSearch(e) {
        console.log(searchBarInput)
        e.preventDefault()
        dispatch({ type: "SET_SEARCH_TERM", payload: { searchBarInput } })
    }

    return (
        // <div className="searchbar">
        <form className="searchbar" onSubmit={e => handleSearch(e)}>
            <input type="text" placeholder="Search here" onChange={(e) => setSearchBarInput(e.target.value)} />
            <button ><span className="material-icons search-icon">
                search
            </span>
            </button>
        </form>

        // </div>
    )
}