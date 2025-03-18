import { useMovieContext } from "../components/Contexts/MovieContext.jsx";
import MovieCard from "../components/Moviecard.jsx";
import "../css/Favorites.css"


function Favorites(){
    const {favorites}=useMovieContext();

    
    if(favorites){
        return(
            <div>
                <h2 className="Favorites">Your Favorites</h2>
        <div className="movies-grid">
        {favorites.map((movie)=>(  
            //movie.title.toLowerCase().startsWith(searchQuery) && 
            <MovieCard movie={movie} key={movie.id}/> ))}{/*whenever map is used a key must be given because the react needs to know which needs to be changed*/
        /*When a state change occours the entire componets are re-ran and re-rendered*/ }
    </div>
    </div>
        )
    }
        return(
        <div className="favorites-empty">
            <h2>No favorite movie yet</h2>
            <p>start adding movies to your favorites and they will appear here</p>
        </div>
    )
}

export default Favorites;