import React from "react";
import { movies } from "../data";

function Movies() {
  const moviesList = movies.map((movie) => {
   return (
    <div key={movie.title}>
      <h1>Name: {movie.title}</h1> 
      <p>Time: {movie.time}</p> 
      <p>Genres: {movie.genres.map((genre, index) => {
        return<li key={index}>{genre}</li>
      })}
      </p>
    </div>
  )})
  

  return (
  <div>
    <h1>Movies Page</h1>
    <ul>{moviesList}</ul>
  </div>
  )
}

export default Movies;
