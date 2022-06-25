import { MovieTypeProps } from "../../types"
import './style.css'

type MovieCardProps ={
    movie?: MovieTypeProps
}

export function MovieCard({movie}: MovieCardProps){  
    if(!movie){
        return <div></div>
    }
    return (
        <div className="movie-card">
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="Baner do Filme." />
            <span>
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
            </span>
        </div>
    )
}