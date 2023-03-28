import axios from "../api/axios";
import requests from '../api/requests'
import { useEffect, useState } from "react";
import React from 'react';
import './Banner.css';

export default function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
      fetchData();
    }, [])
    
    const fetchData = async ()=>{

        const request = await axios.get(requests.fetchNowplaying);
        
        const movieId =
            request.data.results[
                Math.floor(Math.random()*request.data.results.length)
            ].id
        console.log(movieId);
        const{data:movieDetail}= await axios.get(`movie/${movieId}`, {params:{append_to_response:"viedos"},})
        setMovie(movieDetail);
    }

    const turncate=(str,n)=>{
        return str?.length > n ? str.substr(0,n-1)+"...":str;
    }

  return (
    <header
    className="banner"
    style={{
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
      backgroundPosition: "top center",
      backgroundSize: "cover",
    }}
  >
    <div className="banner__contents">
      <h1 className="banner__title">
        {movie.title || movie.name || movie.original_name}
      </h1>

      <div className="banner__buttons">
        <button
          className="banner__button play"
        >
          Play
        </button>
        <button className="banner__button info">More Information</button>
      </div>

      <h1 className="banner__description">
        {turncate(movie?.overview,100)}
      </h1>
    </div>
    <div className="banner--fadeBottom" />
  </header>
  )
}
