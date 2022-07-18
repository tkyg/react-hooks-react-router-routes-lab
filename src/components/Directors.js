import React from "react";
import { directors } from "../data";

function Directors() {
  
  const directorList = directors.map((director) => {
    return (
      <div key={director.name}>
        <h1>Name: {director.name}</h1>
        <ul>Movies: {director.movies.map((movie, index) => {
          return<li key={index}>{movie}</li>
        })}</ul>
      </div>
    )
  })
  return (
    <div>
      <h1>Directors Page</h1>
      <ul>{directorList}</ul>
    </div>
    )
  }

export default Directors;
