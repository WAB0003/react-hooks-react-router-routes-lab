import React from "react";
import { movies } from "../data";

function Movies() {

  //make a new Div for each movie(create a movie function that maps movies)
  //Div should contain Title and UL of genres, each an li
  const displayMovies = movies.map((movie,index)=>{
    const {title, time, genres} = movie
    return(
      <div key={index}>
        <h2>{title}</h2>
        <p>Run Time: {time}</p>
        <ul>
          {genres.map(genre=> <li key={genre}>{genre}</li>) }
        </ul>
      </div>
    )
  })
  
  
  return (
    <div>
      <h1>Movies Page</h1>
      {displayMovies}
    </div>
  ) 
}

export default Movies;
