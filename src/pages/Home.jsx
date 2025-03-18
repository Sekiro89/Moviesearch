import MovieCard from "../components/Moviecard.jsx";
import {getPopularMovies,searchMovies} from "../services/services";
import { useState,useEffect } from "react";//the use effect allows you to add side effects to your functions or your components and define when they should runw
import '../css/Home.css'//useStates are hooks rememver that used to handle logic

function Home(){
    const [searchQuery , setsearchQuery]=useState("")//used to store what the user types in the search field
    
    const[movies,setGames]=useState([]);
    const[error, setError]=useState(null);
    const[loading,setloading]=useState(true);

    useEffect(()=>{
        const loadPopularMovies= async()=>{
            try{
                const PopularGames=await getPopularMovies()
                setGames(PopularGames)
            }catch(err){
                console.log(err)
                setError("failed to load games  ")
            }
            finally{
                setloading(false)
            }
        }
        loadPopularMovies()
    },[])//we call ()=>{} these when this([]) array changes called dependency array

    /*const movies=[
        {id: 1,title:"john wick",relese_date:"2020"},
        {id: 1,title:"Batman vs superman",relese_date:"2020"}, 
        {id: 1,title:"interstellar",relese_date:"2020"},
        {id: 1,title:"trapped",relese_date:"2020"},  
    ]*/

const handleSearch=async(e)=>{
    e.preventdefault()
    if(!searchQuery.trim()) return
    if(loading) return
    setloading(true)
    try{
        const searchResults= await searchMovies(searchQuery)
        searchMovies(searchResults)
        setError(null)
    }
    catch (err){
        console.log(err)
        setError("failed to search movies...")
    }
    finally{
        setloading(false)
    }
    //setsearchQuery("")
    
}
    return(
    <div className="Home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" 
                placeholder="search for movies..." 
                className="search-input"
                value={searchQuery}
                onChange={(e)=>setsearchQuery(e.target.value)}
                />
                  <button type="submit" className="search-btn">Search</button>
            </form>
            {error && <div className="error-message">{error}</div> }
            {loading ? <div className="loading">Loading...</div> : 
            <div className="movies-grid">
             {movies.map((game)=>(  
                 //movie.title.toLowerCase().startsWith(searchQuery) && 
                 <MovieCard movie={game} key={game.id}/> ))}{/*whenever map is used a key must be given because the react needs to know which needs to be changed*/
             /*When a state change occours the entire componets are re-ran and re-rendered*/ }
         </div>}
       
    </div>
    )
}

export default Home