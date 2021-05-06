import './Topics.css';

export function Topics({ handleSetFilter }) {
    return (
        <div className="topics">

            {/* <button className="topics-button btn btn-primary" onClick={() => handleSetFilter("finance")}>Personal Finance</button> */}
            <button className="topics-button btn btn-primary" onClick={() => handleSetFilter("")}>Show All Videos</button>
            <button className="topics-button btn btn-primary" onClick={() => handleSetFilter("comedy")}>Comedy</button>
            <button className="topics-button btn btn-primary" onClick={() => handleSetFilter("video-essay")}>Video Essay</button>
            <button className="topics-button btn btn-primary" onClick={() => handleSetFilter("case-study")}>Start Up</button>

        </div>
    )
}