//Global state for local storage like to manage the favorites
import { createContext,useState,useContext,useEffect } from "react";

const MovieContext=createContext()

export const useMovieContext=()=>useContext(MovieContext)

export const MovieProvider=({children})=>{
    const[favorites,setFavorites]=useState([])

    useEffect(()=>{
        const storedFavs=localStorage.getItem("favorites")

        if(storedFavs)
            setFavorites(JSON.parse(storedFavs))//check for favorites
    },[]
    )

    useEffect(()=>{
        localStorage.setItem('favorites',JSON.stringify(favorites))//add to favorites
    },[favorites])

    const addToFavorites=(movie)=>{
        setFavorites(prev=>[...prev,movie])//update state (favorites)
    }

    const removeFromFavorites=(movieId)=>{
        setFavorites(prev=>prev.filter(movie=>movie.Id !== movieId))
    }

    const isFavorites=(movieId)=>{
          return favorites.some(movie=>movie.Id===movieId)//check if one movieId is equal to the one we are looking at
    }

    const value={
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorites
    }
    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}//children is a reserved prop when you write a component and children is anything that is inside the component that we rendered
//provide state to any components that are wrapped around it