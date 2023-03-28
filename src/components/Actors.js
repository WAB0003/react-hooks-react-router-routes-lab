import React from "react";
import { actors } from "../data";

function Actors() {

  const displayActors = actors.map((actor)=>{
    const {name,movies} = actor;
    return(
      <div key={name}>
        <h2>{name}</h2>
        <ul>
          {movies.map(movie=> <li key={movie}>{movie}</li>) }
        </ul>
      </div>
    )
  })



  return (
    <div>
      <h1>Actors Page</h1>
      {displayActors}
    </div>
  ) 
}

export default Actors;
