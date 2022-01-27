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

function SortFilter() {
  const dispatch = useDispatch()
  const { load, theme, genres } = useSelector(state => state)
  console.log("LOAD:::", load)
  const params = useParams()
  console.log(params)
  
  const themeName = theme ? "light" : "dark"


  const movies = useQueries(
    load.map(item => {
      return {
        queryKey: ["movies", params.type, item],
        queryFn: () => fetchPopularTopMovies(params.type, item),
        retry: false
      }
    })
  )

  const genresQuery = useQuery("genres", () => fetchGenres, { reply: false })

  console.log("GENRES:::", genresQuery)

  genresQuery?.data?.then((val) =>
    dispatch(getGenres(val?.data?.genres))
  )

  console.log(movies)

  return <MainContainer>
    <SortFilterGrid>
      <GridContainer theme={themeName}>
        Sort by:
        <div>
          <StyledSelect>
            <option value="a-to-z">Movie Title (from A to Z)</option>
            <option value="z-to-a">Movie Title (from Z to A)</option>
            <option value="most-populars">Most Populars</option>
            <option value="least-populars">Least Populars</option>
            <option value="newest">Newest Released</option>
            <option value="oldest">Oldest Released</option>
          </StyledSelect>
        </div>
      </GridContainer>
      <GridContainer theme={themeName}>
        Filter by:
        <FilterDateContainer>
          Date:
          <Input theme={themeName} type="date" id="from_date" name="from_date"></Input>
          <Input theme={themeName} type="date" id="to_date" name="to_date"></Input>
        </FilterDateContainer>
        <div>
          {
            genres?.map(item=> <button>{item.name}</button>)
          }
        </div>
      </GridContainer>
      <Button theme={themeName} >Search</Button>
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
