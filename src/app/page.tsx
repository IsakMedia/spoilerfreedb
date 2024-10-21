'use client';
import { useEffect, useState } from "react";
import { dataFetch } from './components/dataFetch'
import type { TMovieRes } from "@/types";
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'



export default function Home() {

  // const [data, setData] = useState<TTrendingMovie[]>([]);
  const [data, setData] = useState<TMovieRes | null>(null);


  const fetchData = async () => {
    console.log('HEJ CLIKCed');
    
    try {
      const movieData = await dataFetch();
      console.log('MOVIE DATA', movieData);
      
     if(movieData) setData(movieData)
  
    } catch (error) {
      console.log(error);
    }
  
    console.log("when auth works this will give data: ",data);
  }


  return (
    <main>
      <h1>SpoilerFreeDB</h1>
      <button onClick={()=> fetchData()}>click</button>

      {data && data.results.length && (

        <div className="movie-grid max-w-sm w-full lg:max-w-full lg:flex">
          {data?.results.map(({id, title, poster_path, vote_average}) => (
            <div key={id} className="movie-card h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
              <h2>{title}</h2>
              <img src={poster_path} className="w-full"/>
              <p>{vote_average}</p>
            </div>
          ))}
        </div>
      )}

    </main>
  );
}


