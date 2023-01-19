import React from 'react';
import { useState } from 'react';
import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const[Movies,setMovies]=useState([])
  function fetchMoviesHandler(){
    fetch('https://swapi.dev/api/films/').then((response)=>{
      return response.json();
    })
    .then((data)=>{
      const transformedMovies=data.results.map(movieData=>{
        return{
          id:movieData.episode_id,
          title:movieData.title,
          openingText:movieData.opening_crawl,
          releasedDate:movieData.release_date
        }
      })
      setMovies(data.results);
    });
  }
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={Movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
