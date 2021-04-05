import "./Navbar.css"
import { Link } from 'react-router-dom';
import { Searchbar } from '../Searchbar/Searchbar';
import { Sidebar } from '../Sidebar/Sidebar';
import { useState } from "react"

export function Navbar() {
    const [showSideBar, setShowSideBar] = useState(true);

    function handleShowSidebar() {
        setShowSideBar(showSideBar => !showSideBar);
    }

    return (
        <>
            <div className="navbar">
                <div className="navbar-left">
                    <span className="material-icons burger-icon"
                        onClick={handleShowSidebar}
                    >
                        menu
                    </span>
                    <Link to="/" className="link"><span>
                        KnowLib
                    </span>
                    </Link>
                </div>
                <Searchbar />
                <div className="navbar-right">
                    <span className="material-icons">
                        person_outline
                    </span>
                </div>
                <Sidebar showSideBar={showSideBar} />
            </div>
        </>
    )
}