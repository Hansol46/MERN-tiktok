import React from 'react'
// rfce
// import style from '../styles/VideoFooter.module.sass'
import '../index.css'
import MusicNoteIcon from '@material-ui/icons/MusicNote'
import Tiker from 'react-ticker'



function VideoFooter({ channel, description, song }) {
    return (
        <div className='footer'>
            <div className='footerText'>
                <h3>@{channel}</h3>
                <p>{description}</p>
                <div className='footerTicker'>
                    <MusicNoteIcon 
                    className='footerIcon'
                    />
                    <Tiker mode='smooth'>
                        {({ index }) => (
                            <>
                            <p>{song}</p>
                            </>
                        )}

                    </Tiker>
                </div>
            </div>
            <img 
            className='footerRecord'
            src='https://static.thenounproject.com/png/934821-200.png'
            alt='record'
            />

        </div>
    )
}

export default VideoFooter
