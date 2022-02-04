import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import ReactPaginate from 'react-paginate'
import { useSelector, useDispatch } from 'react-redux';
import Cards from './Cards';
import { fetchMovies } from '../api';
import { paginationHandler } from '../reduxStore/paginationContext';
import { PaginationContainer } from '../styledComponents/SearchStyle';
import { Alert, MainContainer } from '../styledComponents/BaseStyleComponents';


function SearchPagination() {
    const dispatch = useDispatch()
    const { search, pagination: selectedPage } = useSelector((state) => state)
    const perPage = 5
    let pageCount = 0


    const debouncedSearchTerm = useDebounce(search, 500);

    function useDebounce(value, delay) {
        const [debouncedValue, setDebouncedValue] = useState(value);
        useEffect(
            () => {
                const handler = setTimeout(() => {
                    setDebouncedValue(value);
                }, delay);
                return () => {
                    clearTimeout(handler);
                };
            },
            [value, delay]
        );
        return debouncedValue;
    }

    const searchData = useQuery(["search movies", debouncedSearchTerm], () => fetchMovies(debouncedSearchTerm), { retry: false, enabled: !!search})


    // when data is fetched update pageCount
    if (searchData.isFetched) {
        pageCount = Math.ceil(searchData?.data?.data?.results?.length / perPage)
    }

    return <>
        {
            search === "" ? <h4>Search Movies!</h4> :
                <MainContainer>
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
                </MainContainer>
        }
    </>;
}

export default SearchPagination;
