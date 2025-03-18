import { useMovieContext } from "./Contexts/MovieContext.jsx"
import "../css/Moviecard.css"

function MovieCard({movie}){
    const {isFavorites,addToFavorites,removeFromFavorites}=useMovieContext()
    const favorite=isFavorites(movie.id)

    function onFavoriteClick(e){
        e.preventDefault()
        if(favorite) removeFromFavorites(movie.id)
            else addToFavorites(movie)
    }

    return (
    <div className="movie-card">
        <div className="movie-poster"> 
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            <div className="movie-overlay">
                <button className={`favorite-btn${favorite ? "active": ""}`} onClick={onFavoriteClick}>
                    ♥
                </button>{/* btton that allows us to*/}
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.relese_date}</p>
        </div>
    </div>
    )
}

export default MovieCard