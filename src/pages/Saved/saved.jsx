import './saved.css';

import { useVideo } from '../../context/video-context'


export function Saved() {

    const { saved } = useVideo();
    // console.log(saved)

    return (
        <div className="div-saved">
            {
                (saved.length === 0)
                    ? <p>There are no saved videos</p>
                    : saved.map((item) => {
                        return (
                            <div className="vertical-video-card" key={item.id}>
                                <img src={item.videoThumbnail} alt="thumbnail" />
                                <div className="div-details">
                                    <p className="title">{item.title}</p>
                                    <p className="channel">{item.channelName}</p>
                                </div>
                            </div>
                        )
                    })
            }
        </div>
    )
}