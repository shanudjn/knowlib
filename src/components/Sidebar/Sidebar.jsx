import './Sidebar.css';
import { Link } from 'react-router-dom'



export function Sidebar({ showSideBar }) {
    return (

        <div className="sidebar" style={{ display: (showSideBar) ? "block" : "none" }}>
            <ul className='sidebar-list' >
                <div className="div-list-item">

                    <Link to='/saved'><li className="sidebar-list-item"><span className="material-icons">
                        bookmark
                    </span>Saved</li></Link>
                </div>
                <div className="div-list-item">
                    <Link to='/playlist'><li className="sidebar-list-item">
                        <span className="material-icons">
                            list
                        </span>Playlists
                    </li></Link>
                </div>
            </ul>
        </div>
    )

}