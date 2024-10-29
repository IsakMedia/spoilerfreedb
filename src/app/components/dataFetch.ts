
import { TMovieDetails, TMovieRes } from "@/types";

const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const apiRAT = process.env.NEXT_PUBLIC_API_RAT;




export const dataFetch = async () => {

    try {

        const res = await fetch(`https://api.themoviedb.org/3/trending/movie/day?language=en-US'`, {
            method:'GET',
            headers:{
                'Authorization': `Bearer ${apiRAT}`,
                'accept': 'application/json'
            }
        });

        if(!res.ok) {
            throw new Error(`how is res.ok feeling? : ${res.status}`)
        }
        
        const jsonRes = await res.json() as TMovieRes
        return jsonRes;

    } catch (error) {
        console.error("hey son, wanna play catch? ", error);
    }

}

