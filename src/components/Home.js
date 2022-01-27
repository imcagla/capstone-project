import React from 'react';
import { useSelector, useDispatch } from "react-redux"
import { useQuery } from 'react-query'
import { fetchDiscoverMovies, fetchTrendingMovies } from '../api'
import { Button, Container } from '../styledComponents/CardContainer';
import { changeTrendingPeriod } from "../reduxStore/trendingPeriod"
import Search from "./Search"
import SearchPagination from './SearchPagination';
import Cards from './Cards';
import { MainContainer } from '../styledComponents/MainContainer';

function Home() {
  const dispatch = useDispatch()
  const { theme, trend, search } = useSelector((state) => state)
  const themeName = theme ? "light" : "dark";


  const discoverData = useQuery('discover movies', fetchDiscoverMovies, { retry: false })
  const trendingData = useQuery(['trending movies', trend], () => fetchTrendingMovies(trend), { retry: false })


  return (<MainContainer>
    <Search />
    {
      search !== "" ? <SearchPagination /> :
        <>
          <h4>Discover</h4>
          <Container theme={themeName}>
          <Cards height={"230"} width={"150"} data={discoverData?.data?.data?.results} />
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
          <Cards  height={"230"} width={"150"} data={trendingData?.data?.data?.results} />
          </Container>
        </>
    }
  </MainContainer>
  );
}

export default Home;
