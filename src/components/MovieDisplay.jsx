import React from 'react'
import { styled } from 'styled-components';
import '../styles.css'

const Title = styled.h1`
  font-size: 3em;
  color: red;
`

function MovieDisplay({movie}) {

    const loaded = () => {
  return (
    <>
        <Title>{movie.Title}</Title>
        
        <img src ={movie.Poster} alt={movie.Title} />
        <h2>{movie.Genre}</h2>
        <h2>{movie.Year}</h2> 
    </>
  );
    };

    const loading = () => {
        return <h1>Enter Movie Title</h1>
    }

    return movie? loaded() : loading()
}

export default MovieDisplay