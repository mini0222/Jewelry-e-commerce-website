import React, { useRef, useState } from 'react'
import './Video.css'
import play_icon from '../Assets/play_icon.png'
import pause_icon from '../Assets/pause_icon.png'


const Video = () => {
    const [playStatus, setPlayStatus] = useState(true);
    const videoRef = useRef(null);

    const togglePlayback = () => {
        if (videoRef.current) {
            if (playStatus) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setPlayStatus(!playStatus)
        }
    }

    return (
        <div className='video'>
            <div className='ad'>

                <video className='background' autoPlay loop muted ref={videoRef} paused={!playStatus} playsInline>
                    <source src={require('../Assets/video1.mp4')} type="video/mp4" />
                </video>

                <div className='text'>
                    <p>No Tarnishing</p>
                    <p>2years Warranty</p>
                    <p>Water-Resistance</p>
                    <p>Hypoallergenic</p>
                </div>
            </div>
            <div className="play">
                <img onClick={togglePlayback} src={playStatus ? pause_icon : play_icon} alt="" />
            </div>
        </div>
    )
}


export default Video
