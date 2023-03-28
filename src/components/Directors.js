import React from "react";
import { directors } from "../data";

function Directors() {

  const displayDirectors = directors.map((director)=>{
    const {name,movies} = director;
    return (
      <div key={name}>
        <h2>{name}</h2>
        <ul>
          {movies.map(movie=> <li key={movie}>{movie}</li>) }
        </ul>

      </div>
    )
  })


  return(
    <div>
      <h1>Directors Page</h1>
      {displayDirectors}
    </div>
  ) 
}

export default Directors;
