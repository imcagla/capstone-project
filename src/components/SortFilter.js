import React from 'react';
import { useQueries } from 'react-query';
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularTopMovies } from '../api';
import Cards from './Cards';
import { loadMoreMovies } from '../reduxStore/loadMoreMovies';
import { MainContainer } from '../styledComponents/MainContainer';
import { Button } from '../styledComponents/CardContainer';

function SortFilter() {
  const dispatch = useDispatch()
  const {load, theme} = useSelector(state => state)
  console.log("LOAD:::",load)
  const params = useParams()
  console.log(params)

  const themeName = theme ? "light" : "dark"
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

  return <MainContainer>
    {
      movies.map(item => <Cards  height={"280"} width={"180"} data={item?.data?.data?.results} />)
    }
    <div>
    <Button theme={themeName} onClick={() => dispatch(loadMoreMovies())} >Load More</Button>
    </div>
  </MainContainer>;
}

export default SortFilter;
