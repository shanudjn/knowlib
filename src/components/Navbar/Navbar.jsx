import "./Navbar.css"
import { Link } from 'react-router-dom';
import { Searchbar } from '../Searchbar/Searchbar';


export function Navbar() {


    return (
        <>
            <div className="navbar">
                <div className="navbar-left">
                    <Link to="/" className="link">
                        <span className="title-full">
                            KnowLib
                    </span>
                    </Link>
                    <Link to="/" className="link">
                        <span className="title-small">
                            KL
                    </span>
                    </Link>
                </div>
                <Searchbar />
                <div className="navbar-right">

                    <Link to="/playlist">
                        <span className="material-icons icon">
                            playlist_play
                    </span>
                    </Link>
                    <Link to="/login">
                        <span className="material-icons icon">
                            person_outline
                    </span>
                    </Link>
                </div>

            </div>
        </>
    )
}