import "./Navbar.css"

export function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="navbar-right">KnowLib</div>
                <div className="searchbar">
                    <input type="text" />
                    <span class="material-icons">
                        search
                    </span>
                </div>
                <div className="navbar-right"></div>
            </div>
        </>
    )
}