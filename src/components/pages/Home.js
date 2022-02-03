import React from 'react';
import { useSelector, useDispatch } from "react-redux"
import { useQuery } from 'react-query'
import { fetchDiscoverMovies, fetchTrendingMovies } from '../../api'
import { changeTrendingPeriod } from "../../reduxStore/trendingPeriod"
import Search from "../Search"
import SearchPagination from '../SearchPagination';
import Cards from '../Cards';
import { Container, MainContainer } from '../../styledComponents/BaseStyleComponents';
import { ButtonGroupContainer, ButtonGroupRow } from '../../styledComponents/HomeStyle';
import { useLocation } from 'react-router-dom';
import { Button } from '../../styledComponents/BaseStyleComponents';


function Home() {
  const dispatch = useDispatch()
  const location = useLocation()
  const { theme, trend, search } = useSelector((state) => state)

  

  const discoverData = useQuery('discover movies', fetchDiscoverMovies, { retry: false })
  const trendingData = useQuery(['trending movies', trend], () => fetchTrendingMovies(trend), { retry: false })


  return (<MainContainer>
    <Search />
    {
      location?.pathname==="/search" && search !== "" ? <SearchPagination /> :
        <>
          <h4>Discover</h4>
          <Container theme={theme}>
          <Cards height={"230"} width={"150"} data={discoverData?.data?.data?.results} />
          </Container>
          <ButtonGroupContainer>
            <h4>Trending</h4>
            <ButtonGroupRow trend={trend} theme={theme}>
              <Button 
                onClick={() => dispatch(changeTrendingPeriod("week"))}
                className={`btn-week`}
              >
                Week
              </Button>
              <Button 
                onClick={() => dispatch(changeTrendingPeriod("day"))}
                className={`btn-day`}
              >
                Day
              </Button>
            </ButtonGroupRow>
          </ButtonGroupContainer>
          <Container theme={theme}>
          <Cards  height={"230"} width={"150"} data={trendingData?.data?.data?.results} />
          </Container>
        </>
    }
  </MainContainer>
  );
}

export default Home;
