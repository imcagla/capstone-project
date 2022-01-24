import React from 'react';
import { useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate'
import { useQuery } from 'react-query';
import { fetchMovies } from '../api';
import { Card, CardDescription } from '../styledComponents/CardContainer';
import { useDispatch } from 'react-redux';
import { paginationHandler } from '../reduxStore/paginationContext';

function SearchPagination() {
    const dispatch = useDispatch()
    const { theme, search, pagination: selectedPage } = useSelector((state) => state)
    const themeName = theme ? "light" : "dark";
    const perPage = 5
    let pageCount

    const searchData = useQuery(["search movies", search], () => fetchMovies(search), { retry: false })
    console.log("DATA:::", searchData)

    if(searchData.isFetched) {
        pageCount = Math.ceil(searchData.data.data.results.length/perPage)
    }

    return <div className='container text-center my-3'>
        <h4 className='text-start'>Search Results: </h4>
        {
            searchData?.data?.data?.results.slice(selectedPage, selectedPage + perPage).map(item => <Card theme={themeName} className='position-relative'>
                <img width={"200"} src={`https://image.tmdb.org/t/p/w200${item?.poster_path}`} className='rounded-3' alt="" />
                <CardDescription>
                    <p>{item.title}</p>
                </CardDescription>
            </Card>)
        }
        <ReactPaginate
            breakLabel="..."
            nextLabel=" >>"
            onPageChange={(e) => dispatch(paginationHandler(e.selected, perPage))}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel="<< "
            containerClassName={"list-unstyled d-flex align-items-center justify-content-center"}
            previousLinkClassName={"text-danger fw-bold text-decoration-none mx-2 fs-5"}
            nextLinkClassName={"text-danger fw-bold text-decoration-none mx-2 fs-5"}
            disabledLinkClassName={"text-muted"}
            pageLinkClassName={"text-decoration-none mx-1 btn btn-outline-secondary"}
            activeLinkClassName={"fw-bold btn-outline-danger"}
            initialPage={0}
            // forcePage={selectedPage, perPage}
        />
    </div>;
}

export default SearchPagination;
