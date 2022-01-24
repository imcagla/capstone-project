import React from 'react';
import { useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import { fetchMovies } from '../api';
import { Card, CardDescription } from '../styledComponents/CardContainer';

function SearchPagination() {
    const { theme, search } = useSelector((state) => state)
    const themeName = theme ? "light" : "dark";

    const searchData = useQuery(["search movies", search], () => fetchMovies(search), { retry: false })

    return <div className='container text-center my-3'>
        <h4 className='text-start'>Search Results: </h4>
        {
            searchData?.data?.data?.results.map(item => <Card theme={themeName} className='position-relative'>
                <img width={"200"} src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} className='rounded-3' alt="" />
                <CardDescription>
                    <p>{item.title}</p>
                </CardDescription>
            </Card>)
        }
    </div>;
}

export default SearchPagination;
