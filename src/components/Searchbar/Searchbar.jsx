import './Searchbar.css'

export function Searchbar() {
    return (
        <div className="searchbar">
            <input type="text" placeholder="Search here" />
            <button><span className="material-icons search-icon">
                search
                    </span>
            </button>
        </div>
    )
}