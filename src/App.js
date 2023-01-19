import React from 'react';
import { useState } from 'react';
import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const[Movies,setMovies]=useState([])
  const [isLoading,setIsLoading]=useState(false);
  async function fetchMoviesHandler(){
    setIsLoading(true);
   const response= await fetch('https://swapi.dev/api/films/')
   const data=await response.json();
  //  .then((response)=>{
  //     return response.json();
  //   })
    // .then((data)=>{
      const transformedMovies=data.results.map(movieData=>{
        return{
          id:movieData.episode_id,
          title:movieData.title,
          openingText:movieData.opening_crawl,
          releasedDate:movieData.release_date
        }
      })
      setMovies(data.results);
      setIsLoading(false);
    
  }
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
       {!isLoading && Movies.length > 0 &&<MoviesList movies={Movies} />}
       {isLoading && Movies.length==0 && <p>movies not found </p>}
       {isLoading && <p> Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
