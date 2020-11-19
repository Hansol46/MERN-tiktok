import React, { useRef, useState } from 'react'
// rfce 
// import style from '../styles/Video.module.sass'
import '../index.css'
import VideoFooter from './VideoFooter'
import VideoSidebar from './VideoSidebar'

function Video({video, channel, description, song, likes, shares, messages}) {
    const videoRef = useRef(null)
    const [playing, setPlaying] = useState(false)

    const handleVideoPress = () => {
        if(playing) {
            videoRef.current.pause()
            setPlaying(false)
        } else {
            videoRef.current.play()
            setPlaying(true)
        }
    }

    return (
        <div className="video">
            <video 
            onClick={handleVideoPress}
            loop
            ref={videoRef}
            className='videoPlayer'
            src={video}
            ></video>


            <VideoFooter 
            channel={channel}
            description={description}
            song={song}
            />
            <VideoSidebar 
            likes={likes}
            messages={messages}
            shares={shares}
            />
        </div>
    )
}


export default Video
