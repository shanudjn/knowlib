import './saved.css'
import { useEffect } from 'react';
import { useVideo } from '../../context/video-context'
import axios from 'axios';

export function Saved() {

    const { saved, dispatch } = useVideo();
    console.log(saved)

    // async function getSavedList() {
    //     const response = await axios.get('/api/savedList');
    //     console.log(response.data.savedList)
    // }

    // useEffect(() => getSavedList(), [])

    return (
        <div className="div-saved">
            {
                (saved.length === 0) ?
                    <p>There are no saved videos</p> :
                    saved.map((item) => {
                        return (
                            <div className="vertical-video-card">
                                <img src={item.videoThumbnail} alt="thumbnail" />
                                <div className="div-details">
                                    <p className="title">{item.title}</p>
                                    <p class="channel">{item.channelName}</p>
                                </div>
                            </div>
                        )
                    })
            }
        </div>
    )
}