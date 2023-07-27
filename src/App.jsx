import Form from "./components/Form"
import MovieDisplay from "./components/MovieDisplay"
import { useState } from "react"
import { useEffect } from "react"

function App() {

  const apiKey = "44011384";

  const [movie,setMovie] = useState(null)

  const getMovie = async (searchTerm) =>{
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`)
      const data = await response.json();
      console.log(data)


    } catch (error) {
      console.log(error)
    }

  }

  return (
    <>
    <Form />
    <MovieDisplay />
    </>
  )
}

export default App
