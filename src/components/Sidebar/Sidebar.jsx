import './Sidebar.css';
import { Link } from 'react-router-dom'



export function Sidebar() {
    return (

        <div className="sidebar">
            <ul className='sidebar-list' >
                <div className="div-list-item">

                    <Link to='/'><li className="sidebar-list-item"><span className="material-icons">
                        home
                    </span></li><span>Home</span></Link>

                </div>
                <div className="div-list-item">
                    <Link to='/playlist'><li className="sidebar-list-item">
                        <span className="material-icons">
                            video_library
                        </span>

                    </li><span>Library</span></Link>
                </div>
            </ul>
        </div>
    )

}