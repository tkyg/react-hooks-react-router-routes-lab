import React from "react";
import { actors } from "../data";

function Actors() {
  const actorList = actors.map((actor) => {
    return (
      <div key={actor.name}>
        <h1>Name: {actor.name}</h1>
        <p>Movies: {actor.movies.map((movie, index) => {
          return<li key={index}>{movie}</li>
        })}</p>

      </div>
    )
  })
  return (
  <div>
    <h1>Actors Page</h1>
    <ul>{actorList}</ul>
  </div>
  )
}

export default Actors;
