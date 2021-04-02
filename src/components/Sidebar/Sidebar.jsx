import './Sidebar.css';



export function Sidebar({ showSideBar }) {
    return (

        <div className="sidebar" style={{ display: (showSideBar) ? "block" : "none" }}>
            <ul className='sidebar-list' >
                <div className="div-list-item">

                    <li className="sidebar-list-item"><span class="material-icons">
                        bookmark
                    </span>Saved</li>
                </div>
                <div className="div-list-item"><li className="sidebar-list-item"><span class="material-icons">
                    list
</span>Playlists</li></div>

            </ul>
        </div>
    )

}