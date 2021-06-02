import './Searchbar.css';
import { useState } from "react";
import { useVideo } from '../../context/video-context';


export function Searchbar() {
    const [searchBarInput, setSearchBarInput] = useState("")

    const { dispatch } = useVideo();
    function handleSearch() {
        console.log(searchBarInput)
        dispatch({ type: "SET_SEARCH_TERM", payload: { searchBarInput } })
    }

    return (
        <div className="searchbar">
            <input type="text" placeholder="Search here" onChange={(e) => setSearchBarInput(e.target.value)} />
            <button onClick={handleSearch}><span className="material-icons search-icon">
                search
                    </span>
            </button>
        </div>
    )
}