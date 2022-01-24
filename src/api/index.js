import axios from "axios"

const apiKey = "ac22be9bbdecac2ac8db9998e2a14de4"
const BASE_AXIOS = axios.create({baseURL: "https://api.themoviedb.org/3"})

export const fetchMovies = (searchValue) => BASE_AXIOS.get(`/search/movie?api_key=${apiKey}&query=${searchValue}`);

export const fetchDiscoverMovies = () => BASE_AXIOS.get(`/discover/movie?api_key=${apiKey}&page=1`);

export const fetchTrendingMovies = (trendValue) => BASE_AXIOS.get(`/trending/movie/${trendValue}?api_key=${apiKey}&page=1`);
