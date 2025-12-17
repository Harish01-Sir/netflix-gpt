import React from 'react'
import VideoBack from './VideoBack'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies)
  console.log(movies,"movies");
  if(!movies) return

  const mainMovie = movies[0]
  console.log(mainMovie,"mainmovie");
  
  const {original_title,overview,id} = mainMovie

  return (
    <div>
        <VideoBack movieId={id}/>
        <VideoTitle title={original_title} desc={overview}/>
    </div>
  )
}

export default MainContainer