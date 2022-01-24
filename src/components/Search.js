import React from 'react';
import { searchHandler } from '../reduxStore/searchHandle';
import { useDispatch } from 'react-redux';


function Search() {
  const dispatch = useDispatch()

  return <div>
    <input type="text" placeholder='search' className='form-control' onChange={(e) => dispatch(searchHandler(e.target.value))}/>
  </div>
}

export default Search;
