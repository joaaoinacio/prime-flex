import axios from 'axios';

//BASE DA URL: https://api.themoviedb.org/3/
// URL DA API https://api.themoviedb.org/3/movie/now_playing?api_key=1a1280810fe12290fb8713b869124fb3&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;


