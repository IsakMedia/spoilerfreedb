

const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const apiRAT = process.env.NEXT_PUBLIC_API_RAT;



export const dataFetch = async (number: number) => {
    try {

        const res = await fetch(`https://api.themoviedb.org/3/movie/11`, {
            method:'GET',
            headers:{
                'Authorization': `Bearer ${apiRAT}`,
                'accept': 'application/json'
            }
        });

        if(!res.ok) {
            throw new Error(`!res.ok från if-satsen : ${res.status}`)
        }
        
        return await res.json();

    } catch (error) {
        console.error("error från catchen", error);
    }

}


export default dataFetch;
