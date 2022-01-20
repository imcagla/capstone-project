import axios from "axios"

const BASE_AXIOS = axios.create({baseURL: "https://api.themoviedb.org/3"})

export const fetchMovies = () => BASE_AXIOS.get("/discover/movie?api_key=ac22be9bbdecac2ac8db9998e2a14de4&page=1")
// export const fetchSingleProduct = (productId) => BASE_AXIOS.get(`/products/${productId}`)