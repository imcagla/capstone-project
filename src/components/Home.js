import React from 'react';
import { Button } from '../styledComponents/Button';
import { useSelector } from "react-redux"
import { useQuery } from 'react-query'
import { fetchMovies } from '../api'
import { Card, Container } from '../styledComponents/Card';

function Home() {
  const theme = useSelector((state) => state.theme)
  const { isLoading, isError, isFetching, isFetched, error, data, ...query } = useQuery('movies', fetchMovies, { retry: false, select: (data) => data.data.results })
  console.log("DATA ::: ", data)
  console.log("QUERY ::: ", query)


  return (
    <Container>
        {
          data?.map(item => <Card theme={theme ? "light" : "dark"} className=''>
            <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} alt="" />
            <p>{item.title}</p>
          </Card>)
        }
    </Container>);
}

export default Home;
