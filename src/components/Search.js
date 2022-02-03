import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { searchHandler } from '../reduxStore/searchHandle';
import { Input } from '../styledComponents/SearchStyle';
import { MainContainer } from '../styledComponents/BaseStyleComponents';


function Search() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const { theme, search } = useSelector(state => state)

  return <MainContainer>
    <Input theme={theme} type="text" placeholder='search' value={location?.pathname === "/search" ? search : ""} onChange={(e) => {
      dispatch(searchHandler(e.target.value))
      navigate(`/search?q=${e.target.value}`)
    }} />
  </MainContainer>
}

export default Search;
