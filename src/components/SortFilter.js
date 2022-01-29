import React from 'react';
import { useQueries, useQuery } from 'react-query';
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularTopMovies, fetchGenres } from '../api';
import Cards from './Cards';
import { loadMoreMovies } from '../reduxStore/loadMoreMovies';
import { MainContainer } from '../styledComponents/MainContainer';
import { Button } from '../styledComponents/CardContainer';
import { SortFilterGrid, GridContainer, FilterDateContainer } from '../styledComponents/SortFilter';
import { StyledSelect } from '../styledComponents/Dropdown';
import { Input } from '../styledComponents/SearchComponents';
import { getGenres } from '../reduxStore/getGenres';
import { getSortVal, getGenreFilter, getFromDateFilter, getToDateFilter } from '../reduxStore/sortFilterStates';

function SortFilter() {
  const dispatch = useDispatch()
  const { load, theme, genres, sortFilter } = useSelector(state => state)
  console.log("LOAD:::", load)
  const params = useParams()
  console.log(params)
  
  const themeName = theme ? "light" : "dark"


  const movies = useQueries(
    load.map(page => {
      return {
        queryKey: ["movies", params.type, page, sortFilter.sortingValue, sortFilter.startDate, sortFilter.endDate, sortFilter.filteringGenres],
        queryFn: () => fetchPopularTopMovies(params.type, page, sortFilter.sortingValue, sortFilter.startDate, sortFilter.endDate, sortFilter.filteringGenres),
        retry: false
      }
    })
  )

  const genresQuery = useQuery("genres", () => fetchGenres, { reply: false })

  console.log("GENRES:::", genresQuery)

  genresQuery?.data?.then((val) =>
    dispatch(getGenres(val?.data?.genres))
  )

  console.log("MOVIES:::",movies)

  return <MainContainer>
    <SortFilterGrid>
      <GridContainer theme={themeName}>
        Sort by:
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
        Filter by:
        <FilterDateContainer>
          Date:
          <Input theme={themeName} onChange={(e) => dispatch(getFromDateFilter(e.target.value))} type="date" id="from_date" name="from_date"></Input>
          <Input theme={themeName} onChange={(e) => dispatch(getToDateFilter(e.target.value))} type="date" id="to_date" name="to_date"></Input>
        </FilterDateContainer>
        <div>
          {
            genres?.map(item=> <Button onClick={() => dispatch(getGenreFilter(item.id))} key={item.id} theme={themeName}>{item.name}</Button>)
          }
        </div>
        
      </GridContainer>
      <Button theme={themeName} onClick={() => console.log("Search yapıldığında filmler filtrelenecek!")} >Search</Button>
    </SortFilterGrid>

    {
      movies.map(item => <Cards height={"280"} width={"180"} data={item?.data?.data?.results} />)
    }
    <div>
      <Button theme={themeName} onClick={() => dispatch(loadMoreMovies())} >Load More</Button>
    </div>
  </MainContainer>;
}

export default SortFilter;
