import "./Navbar.css"
import { Searchbar } from '../Searchbar/Searchbar'

export function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="navbar-left">
                    <span className="material-icons burger-icon">
                        menu
                    </span>
                    <span>
                        KnowLib
                    </span>
                </div>
                <Searchbar />
                <div className="navbar-right">
                    <span className="material-icons">
                        person_outline
                    </span>

                </div>
            </div>
        </>
    )
}