import axios from "axios"

const apiKey = "ac22be9bbdecac2ac8db9998e2a14de4"
const BASE_AXIOS = axios.create({baseURL: "https://api.themoviedb.org/3"})

export const fetchMovies = (searchValue) => BASE_AXIOS.get(`/search/movie?api_key=${apiKey}&query=${searchValue}`);

export const fetchDiscoverMovies = () => BASE_AXIOS.get(`/discover/movie?api_key=${apiKey}&page=1`);

export const fetchTrendingMovies = (trendValue) => BASE_AXIOS.get(`/trending/movie/${trendValue}?api_key=${apiKey}&page=1`);

export const fetchGenres = () => BASE_AXIOS.get(`/genre/movie/list?api_key=${apiKey}`)

export const fetchSingleMovie = (movieId) => BASE_AXIOS.get(`/movie/${movieId}?api_key=${apiKey}`) 

export const fetchSingleMovieCredits = (movieId) => BASE_AXIOS.get(`/movie/${movieId}/credits?api_key=${apiKey}`)

export const fetchSimilarMovies = (movieId) => BASE_AXIOS.get(`/movie/${movieId}/similar?api_key=${apiKey}`)

export const fetchReviews = (movieId) => BASE_AXIOS.get(`/movie/${movieId}/reviews?api_key=${apiKey}`)

export const fetchSortFilterMovies = (sortingValue, page, startDate, endDate, genres) => BASE_AXIOS.get(`/discover/movie?api_key=${apiKey}&sort_by=${sortingValue}&page=${page}&release_date.gte=${startDate}&release_date.lte=${endDate}&with_genres=${genres.toString()}`)
