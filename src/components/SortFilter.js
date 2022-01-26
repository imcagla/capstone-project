import React from 'react';
import { useQueries } from 'react-query';
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularTopMovies } from '../api';
import CardSlideContainer from './CardSlideContainer';
import { loadMoreMovies } from '../reduxStore/loadMoreMovies';

function SortFilter() {
  const dispatch = useDispatch()
  const {load} = useSelector(state => state)
  console.log("LOAD:::",load)
  const params = useParams()
  console.log(params)

  // const moviesQuery = useQuery(["movies", params.type], () => fetchPopularTopMovies(params.type), {retry: false})
  // console.log("query rop/popular:::", moviesQuery)


  const movies = useQueries(
    load.map(item => {
      return {
        queryKey: ["movies", params.type, item],
        queryFn: () => fetchPopularTopMovies(params.type, item),
        retry: false
      }
    })
  )

  console.log(movies)

  return <div>
    {
      movies.map(item => <CardSlideContainer data={item?.data?.data?.results} />)
    }
    <button onClick={() => dispatch(loadMoreMovies())} >Load More</button>
  </div>;
}

export default SortFilter;
