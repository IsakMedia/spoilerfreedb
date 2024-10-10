'use client';
import { useEffect, useState } from "react";
import dataFetch from "./components/dataFetch";


const randomziser = () => {
  return Math.floor(Math.random() * 9999 + 1);

}

export default function Home() {

  const [data, setData] = useState("")
  const [number, setNumber] = useState(0)

  // setNumber(randomziser())
  console.log(number);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieData = await dataFetch(number);
        setData(movieData)

      } catch (error) {
        console.log(error);
      }

      console.log("when auth works this will give data: ",data);
    }
    fetchData()
  }, [number]);

  return (
    <main>
      <h1>SpoilerFreeDB</h1>
      <button onClick={()=> setNumber(randomziser())}>click</button>
    </main>
  );
}
