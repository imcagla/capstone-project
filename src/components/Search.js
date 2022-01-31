import React from 'react';
import { searchHandler } from '../reduxStore/searchHandle';
import { useDispatch } from 'react-redux';
import { Input } from '../styledComponents/SearchComponents';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { MainContainer } from '../styledComponents/MainContainer';


function Search() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {theme,search} = useSelector(state => state)
  const themeName = theme ? "light" : "dark"



  return <MainContainer>
    <Input theme={themeName} type="text" placeholder='search' defaultValue={search} onChange={(e) => {
      dispatch(searchHandler(e.target.value))
      navigate(`/search?q=${e.target.value}`)
    }}/>
  </MainContainer>
}

export default Search;
