const API_KEY = 'b1993724f31f1a863513a57708436a36';

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genred=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genred=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genred=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genred=10749`,
    fetchDocumentMovies: `/discover/movie?api_key=${API_KEY}&with_genred=99`,
}

export default requests;