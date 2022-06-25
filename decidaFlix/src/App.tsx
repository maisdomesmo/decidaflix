import { useEffect, useState } from 'react';
import logo from './assets/logo.svg'
import { MovieCard } from './components/movie-card'
import { api } from './services/api'
import { MovieTypeProps } from './types';
import './style/style.css'

function App() {
  const [movie, setMovie] = useState<MovieTypeProps>()

  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  async function getMovie(){
    let movieId = getRandomInt(2, 996)
    await api.get(`/${movieId}?api_key=9609b26f22b90594b520799edb163f81`).then(response => {
      setMovie(response.data)  
    })
  }

  useEffect(()=>{
    
  }, [])

  return (
    <div className="container">
      <header>
        <img className='logo' src={logo} alt="" />
        <h1>Não sabe o que assistir?</h1>
    </header>

    <main>
        <MovieCard movie={movie} />
    </main>

      <button onClick={getMovie} className='button'>
        <img className='logo' src={logo} alt="" />
        Encontrar filme
      </button>

      <footer>
        <p>Clique em "Encontrar filme" que traremos informações de algum filme para você assistir hoje.</p>
      </footer>

    </div>
  )
}

export default App
