import instance from '../API/axios';
import React, { useEffect, useState } from 'react'
import Video from '../components/Video'


function App() {
  const [videos, setVideos] = useState([])

  useEffect( () => {
    async function fetchPosts () {
    const response = await instance.get('/v2/posts')
    setVideos(response.data)
  }
  fetchPosts()
  }, [])
  return (
    <div className='app'>
      <div className='app__container'>
        {videos.map( 
          ({video, channel, description, song, likes, messages, shares, _id}) => (
          <Video 
          video={video}
          channel={channel}
          description={description}
          song={song}
          likes={likes}
          messages={messages}
          shares={shares}
          key={_id}
          />
        ))}
        
      </div>
    </div>
  );
}

export default App;
