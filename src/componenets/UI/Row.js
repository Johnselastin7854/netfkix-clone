import React, {useState,useEffect} from "react";
import movieTrailer from "movie-trailer";
import Youtube from "react-youtube";
import axios from "../../axios";
import "./Row.css";


const base_url = "https://image.tmdb.org/t/p/original";

function Row(props){
const [movies, setMovies]=useState([]);
const [trailerUrl, setTrailerUrl] =useState("");


// A snippet of code which runs based on a specific condition
useEffect(()=>{
// if[], run once when the row loads, and do not run again.
//if [variable] then run when row loads and run when variable value changes

async function fetchData(){
    const request = await axios.get(props.fetchUrl);
    if(request.status === 200){
        setMovies(request.data.results);
        return request;
    }
    else{
        return;
    }

    // return request;

}
fetchData();
//eternal variable in useEffect ust be put in like [fetchUrl] as it
//is dependency in this way useEffect refires the code when fetchUrl
//changes
},[props.fetchUrl]);



const opts = {
    height: "390",
    width: "99%",
    playerVars: {
      autoplay: 0,
    }
}

const handleClick = (movie) => {
    if (trailerUrl) {
      //if already open then close it
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.title || '')
        .then((url) => {
          let urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams)
          // setTrailerUrl(urlParams.get('v'));
        })
        .catch((error) => console.log(error));
    }
  };

const movieList= movies.map(movie=>(
    <img className={props.largeRow ? "row_posterLarge" : "row__poster"} key={movie.id} src={`${base_url}${props.largeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} onClick={() => handleClick(movie)} />
));


    return(
        <div className="row">
            {/* title */}
            <h2>{props.title}</h2>

            {/* container --> Poster */}
            <div className="row__posters">
                {/* several Posters */}
                {movieList}
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row;