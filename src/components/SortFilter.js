import React, { useEffect } from 'react';
import { useQueries, useQuery } from 'react-query';
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularTopMovies, fetchGenres } from '../api';
import Cards from './Cards';
import { loadMoreMovies, resetLoad } from '../reduxStore/loadMoreMovies';
import { MainContainer } from '../styledComponents/MainContainer';
import { Button, Container } from '../styledComponents/CardContainer';
import { SortFilterGrid, GridContainer, FilterDateContainer, FilterButtons, FilteredButtons, SortFilterMainContainer, SortFilterTitle } from '../styledComponents/SortFilter';
import { StyledSelect } from '../styledComponents/Dropdown';
import { Input } from '../styledComponents/SearchComponents';
import { getGenres } from '../reduxStore/getGenres';
import { getSortVal, getGenreFilter, removeGenreFilter, getFromDateFilter, getToDateFilter, getSortFilterResult } from '../reduxStore/sortFilterStates';
import { Alert } from '../styledComponents/Alert';

function SortFilter() {
  const dispatch = useDispatch()
  const { load, theme, genres, sortFilter } = useSelector(state => state)
  const params = useParams()
  const themeName = theme ? "light" : "dark"


  const movies = useQueries(
    load.map(page => {
      return {
        queryKey: ["movies", params?.type, page, sortFilter?.sortingValue, sortFilter?.startDate, sortFilter?.endDate, sortFilter?.filteringGenres],
        queryFn: () => fetchPopularTopMovies(params?.type, page, sortFilter?.sortingValue, sortFilter?.startDate, sortFilter?.endDate, sortFilter?.filteringGenres),
        enabled: false,
        keepPreviousData: true,
      }
    })
  )

  const genresQuery = useQuery("genres", () => fetchGenres, { retry: false })

  console.log("GENRES:::", genresQuery)

  genresQuery?.data?.then((val) =>
    dispatch(getGenres(val?.data?.genres))
  )

  useEffect(() => {
    movies[0].refetch()
    dispatch(resetLoad())
  }, [])

  useEffect(() => {
    movies[load[load.length - 1] - 1]?.refetch()
  }, [load, load.length, params.type])

  console.log("MOVIES:::", movies)

  return <MainContainer>
    <SortFilterMainContainer>
      <SortFilterGrid>
        <GridContainer theme={themeName}>
           <SortFilterTitle>Sort by:</SortFilterTitle>
          <div>
            <StyledSelect theme={themeName} onChange={(e) => dispatch(getSortVal(e.target.options[e.target.selectedIndex].value))}>
              <option value="original_title.asc">Movie Title (from A to Z)</option>
              <option value="original_title.desc">Movie Title (from Z to A)</option>
              <option value="popularity.desc">Most Populars</option>
              <option value="popularity.asc">Least Populars</option>
              <option value="release_date.desc">Newest Released</option>
              <option value="release_date.asc">Oldest Released</option>
            </StyledSelect>
          </div>
        </GridContainer>
        <GridContainer theme={themeName}>
          <SortFilterTitle>Filter by: </SortFilterTitle>
          <FilterDateContainer>
            Date:
            <Input theme={themeName} onChange={(e) => dispatch(getFromDateFilter(e.target.value))} type="date" id="from_date" name="from_date"></Input>
            <Input theme={themeName} onChange={(e) => dispatch(getToDateFilter(e.target.value))} type="date" id="to_date" name="to_date"></Input>
          </FilterDateContainer>
          <Container>
            {
              genres?.filter(item => !sortFilter?.filteringGenres?.includes(item?.id)).map(item => <FilterButtons onClick={() => dispatch(getGenreFilter(item?.id))} key={item?.id} theme={themeName}>{item?.name}</FilterButtons>)
            }
          </Container>
        </GridContainer>
        <FilterButtons theme={themeName}
          onClick={() => {
            dispatch(getSortFilterResult(movies))
            dispatch(resetLoad())
          }} >
          Search
        </FilterButtons>
      </SortFilterGrid>
      <div>
        {
          genres?.filter(item => sortFilter?.filteringGenres?.includes(item?.id))?.map(item => <FilteredButtons theme={themeName}>{item?.name} <span onClick={() => dispatch(removeGenreFilter(item?.id))}> X </span></FilteredButtons>)
        }
      </div>
      <div>
        {
          movies?.map(item => item?.isLoading ? <h5>Loading...</h5> : <Cards height={"280"} width={"180"} data={item?.data?.data?.results} />)
        }
      </div>
      <div>
        {
          (movies[movies?.length - 1]?.data === undefined || (movies[movies?.length - 1]?.data?.data?.results?.length === 0)) ? <Alert>No more results found!</Alert> : <Button theme={themeName}
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
