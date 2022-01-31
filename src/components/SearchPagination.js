import React from 'react';
import { useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate'
import { useQuery } from 'react-query';
import { fetchMovies } from '../api';
import Cards from './Cards';
import { useDispatch } from 'react-redux';
import { paginationHandler } from '../reduxStore/paginationContext';
import { MainContainer } from '../styledComponents/MainContainer';
import { PaginationContainer } from '../styledComponents/SearchComponents';
import { Alert } from '../styledComponents/Alert';
function SearchPagination() {
    const dispatch = useDispatch()
    const { search, pagination: selectedPage } = useSelector((state) => state)
    const perPage = 5
    let pageCount

    const searchData = useQuery(["search movies", search], () => fetchMovies(search), { retry: false })
    console.log("DATA:::", searchData)

    // when data is fetched update pageCount
    if (searchData.isFetched) {
        pageCount = Math.ceil(searchData?.data?.data?.results?.length / perPage)
    }

    return <MainContainer>
        <h4>Search Results: </h4>
        <PaginationContainer>
            <Cards height={"230"} width={"150"} data={searchData?.data?.data?.results.slice(selectedPage, selectedPage + perPage)} />
            {
                searchData?.data?.data?.results?.length === 0 && <Alert>No results found!</Alert>
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
                pageLinkClassName={"text-decoration-none mx-1 text-secondary p-2 align-middle"}
                activeLinkClassName={"fw-bold fs-4 text-danger p-2 align-middle"}
                initialPage={0}
            />
        </PaginationContainer>
    </MainContainer>;
}

export default SearchPagination;
