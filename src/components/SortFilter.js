import React from 'react';
import {useParams} from "react-router-dom"

function SortFilter() {
  const params = useParams()
  console.log(params)
  return <div>SortFilter</div>;
}

export default SortFilter;
