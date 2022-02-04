import React, { useEffect } from 'react';
import { useQueries } from 'react-query';
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { fetchSortFilterMovies } from '../../api';
import Cards from '../Cards';
import { loadMoreMovies, resetLoad } from '../../reduxStore/loadMoreMovies';
import { getSortVal, getGenreFilter, removeGenreFilter, getFromDateFilter, getToDateFilter, getSortFilterResult } from '../../reduxStore/sortFilterStates';
import { Input } from '../../styledComponents/SearchStyle';
import { StyledSelect } from '../../styledComponents/Dropdown';
import { Container, MainContainer, Alert, Button } from '../../styledComponents/BaseStyleComponents';
import { SortFilterGrid, GridContainer, FilterDateContainer, FilterButtons, SearchButton, FilteredButtons, SortFilterMainContainer, SortFilterTitle } from '../../styledComponents/SortFilterStyle';



function SortFilter() {
  const dispatch = useDispatch()
  const { load, theme, genres, sortFilter } = useSelector(state => state)
  const params = useParams()
console.log( "PARAMS:::", params)

  const movies = useQueries(
    load.map(page => {
      return {
        queryKey: ["movies",sortFilter.sortingValue, page, sortFilter?.startDate, sortFilter?.endDate, sortFilter?.filteringGenres],
        queryFn: () => fetchSortFilterMovies(sortFilter.sortingValue, page, sortFilter?.startDate, sortFilter?.endDate, sortFilter?.filteringGenres),
        select: state => state?.data,
        enabled: false,
        keepPreviousData: true,
        cacheTime: 0,
      }
    })
  )


  useEffect(() => {
    movies[0].refetch()
    dispatch(resetLoad())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    movies[load[load.length - 1] - 1]?.refetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [load, load.length, params.type])

  console.log("MOVIES:::", movies)
  

  return <MainContainer>
    <SortFilterMainContainer>
      <SortFilterGrid>
        <GridContainer theme={theme}>
           <SortFilterTitle>Sort by:</SortFilterTitle>
          <div>
            <StyledSelect theme={theme} onClick={(e) => dispatch(getSortVal(e.target.options[e.target.selectedIndex].value))}>
              <option value="original_title.asc">Movie Title (from A to Z)</option>
              <option value="original_title.desc">Movie Title (from Z to A)</option>
              <option value="popularity.desc" selected={params.type === "popularity.desc" && true }>Most Populars</option>
              <option value="popularity.asc">Least Populars</option>
              <option value="release_date.desc">Newest Released</option>
              <option value="release_date.asc">Oldest Released</option>
              <option value="vote_average.asc">Lowest Rate</option>
              <option value="vote_average.desc" selected={params.type === "vote_average.desc" && true }>Highest Rate</option>
            </StyledSelect>
          </div>
        </GridContainer>
        <GridContainer theme={theme}>
          <SortFilterTitle>Filter by: </SortFilterTitle>
          <FilterDateContainer>
            Date:
            <Input theme={theme} value={sortFilter?.startDate} onChange={(e) => dispatch(getFromDateFilter(e.target.value))} type="date" id="from_date" name="from_date"></Input>
            <Input theme={theme} value={sortFilter?.endDate} onChange={(e) => dispatch(getToDateFilter(e.target.value))} type="date" id="to_date" name="to_date"></Input>
          </FilterDateContainer>
          <Container>
            {
              genres?.filter(item => !sortFilter?.filteringGenres?.includes(item?.id)).map(item => <FilterButtons onClick={() => dispatch(getGenreFilter(item?.id))} key={item?.id} theme={theme}>{item?.name}</FilterButtons>)
            }
          </Container>
        </GridContainer>
        <div>
        <SearchButton theme={theme}
          onClick={() => {
            dispatch(getSortFilterResult(movies))
            dispatch(resetLoad())
          }} >
          Search
        </SearchButton>
        </div>
      </SortFilterGrid>
      <div>
        {
          genres?.filter(item => sortFilter?.filteringGenres?.includes(item?.id))?.map(item => <FilteredButtons key={item.id} theme={theme}>{item?.name} <span onClick={() => dispatch(removeGenreFilter(item?.id))}> X </span></FilteredButtons>)
        }
      </div>
      <div>
        {
          movies?.map((item, index) => item?.isLoading ? <h5>Loading...</h5> : <Cards key={index} height={"280"} width={"180"} data={item?.data?.results} />)
        }
      </div>
      <div>
        {
          ((movies[movies?.length - 1]?.data?.results?.length === 0)) ? <Alert>No more results found!</Alert> : <Button theme={theme}
            onClick={() => {
              dispatch(loadMoreMovies())
            }} >
            Load More
          </Button> 
        }
      </div>
    </SortFilterMainContainer>
  </MainContainer>;
}

export default SortFilter;
