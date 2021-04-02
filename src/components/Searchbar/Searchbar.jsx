import './Searchbar.css'

export function Searchbar() {
    return (
        <div className="searchbar">
            <input type="text" />
            <button><span className="material-icons search-icon">
                search
                    </span>
            </button>
        </div>
    )
}