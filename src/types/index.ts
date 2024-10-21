

export type TMovieRes = {
    page:number,
    results: TTrendingMovie[]
    total_pages:number,
    total_results:number,
}

export type TTrendingMovie = {
 id:number,
 original_language: string,
 original_title: string,
 title:string,
 release_date: string,
 overview:string,
 poster_path: string,
 vote_average: number,
 vote_count: number,
};
   