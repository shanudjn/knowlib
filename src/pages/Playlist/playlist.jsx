import { useVideo } from '../../context/video-context'
import './playlist.css'

export function Playlist() {

    const { playlist } = useVideo();

    console.log(playlist)

    return (
        <h1>
            Playlist Page
        </h1>
    )
}