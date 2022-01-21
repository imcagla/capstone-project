import axios from "axios"

const BASE_AXIOS = axios.create({baseURL: "https://api.themoviedb.org/3"})

export const fetchDiscoverMovies = () => BASE_AXIOS.get("/discover/movie?api_key=ac22be9bbdecac2ac8db9998e2a14de4&page=1")
export const fetchTrendingMovies = (trendValue) => BASE_AXIOS.get(`/trending/movie/${trendValue}?api_key=ac22be9bbdecac2ac8db9998e2a14de4&page=1`)