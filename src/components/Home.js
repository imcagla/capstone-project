import React from 'react';
import { useSelector, useDispatch } from "react-redux"
import { useQuery } from 'react-query'
import { fetchDiscoverMovies, fetchTrendingMovies } from '../api'
import { Card, CardDescription, Container, Button } from '../styledComponents/CardContainer';
import { changeTrendingPeriod } from "../reduxStore/trendingPeriod"
import Search from "./Search"
import SearchPagination from './SearchPagination';

function Home() {
  const dispatch = useDispatch()
  const { theme, trend, search } = useSelector((state) => state)
  const themeName = theme ? "light" : "dark";


  const discoverData = useQuery('discover movies', fetchDiscoverMovies, { retry: false })
  const trendingData = useQuery(['trending movies', trend], () => fetchTrendingMovies(trend), { retry: false })


  return (<div className='container my-3'>
    <Search />
    {
      search !== "" ? <SearchPagination /> :
        <>
          <h4>Discover</h4>
          <Container theme={themeName}>
            {
              discoverData?.data?.data?.results?.map(item => <Card theme={themeName} className='position-relative'>
                <img width={"150"} 
                src={`https://image.tmdb.org/t/p/w200${item?.poster_path}`} 
                className='rounded-3' alt="" />
                <CardDescription>
                  <p>{item.title}</p>
                </CardDescription>
              </Card>
              )
            }
          </Container>
          <div className='d-flex'>
            <h4>Trending</h4>
            <div className="btn-group ms-auto">
              <Button theme={themeName}
                onClick={() => dispatch(changeTrendingPeriod("week"))}
                className={`btn btn-danger ${trend === "week" ? "active" : null}`}
              >
                Week
              </Button>
              <Button theme={themeName}
                onClick={() => dispatch(changeTrendingPeriod("day"))}
                className={`btn btn-danger ${trend === "day" ? "active" : null}`}
              >
                Day
              </Button>
            </div>
          </div>
          <Container theme={themeName}>
            {
              trendingData?.data?.data?.results?.map(item => <Card theme={themeName} className='position-relative'>
                <img width={"150"} 
                src={`https://image.tmdb.org/t/p/w200${item?.poster_path}`} 
                className='rounded-3' alt="" />
                <CardDescription>
                  <p>{item.title}</p>
                </CardDescription>
              </Card>
              )
            }
          </Container>
        </>
    }
  </div>
  );
}

export default Home;
