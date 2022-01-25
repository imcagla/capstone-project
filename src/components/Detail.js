import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { fetchSingleMovie } from '../api';

function Detail() {
  const {movieId} = useParams()


  const movieQuery = useQuery(["movie", movieId], () => fetchSingleMovie(movieId), {retry: false})
  console.log("movie:::", movieQuery)
  const movieData = movieQuery?.data?.data

  return <div>
    {
      movieData?.title
    }
  </div>;
}

export default Detail;
