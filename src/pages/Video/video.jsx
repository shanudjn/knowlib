import { useParams } from 'react-router';
import YouTube from 'react-youtube';
import { Navbar } from '../../components/Navbar/Navbar';
import './video.css';

export function Video() {
    let { id } = useParams();
    return (
        <>
            <Navbar />
            <div className="container-video">
                {/* <p>{id}</p> */}
                <YouTube videoId={id}>

                </YouTube>

            </div>
        </>
    )
}