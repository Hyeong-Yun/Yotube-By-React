import './App.css';
import React, {useEffect, useState} from 'react'
import VideoList from './components/video_list/video_list'

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() =>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResult=25&key=AIzaSyBeIuhviDYUlPp4o-R8grqMvEpWy2qeL_w", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, [])

  return (
    <VideoList videos = {videos} />
  );
}

export default App;
