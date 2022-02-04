import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../api';
import { searchHandler } from '../reduxStore/searchHandle';
import { SearchIcon } from '../styledComponents/Icons';
import { StyledLink } from '../styledComponents/Link';
import { Input } from '../styledComponents/SearchStyle';
import { Dropdown, DatalistDropdownList, DatalistDropdown } from '../styledComponents/Dropdown';


function SearchDropdown(props) {
    const dispatch = useDispatch()
    const { search, theme } = useSelector(state => state)
    const [isActive, setIsActive] = useState(false)
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

    const searchResults = useQuery(["search movies", debouncedSearchTerm], () => fetchMovies(debouncedSearchTerm), { retry: false, enabled: !!search })
    console.log("SEARCH:::", searchResults)

    return <>
        <Dropdown theme={theme}>
            <SearchIcon className="search-icon"
                onClick={() => {
                    setIsActive(!isActive)
                    dispatch(searchHandler(""))
                }}
            />
            <DatalistDropdown theme={theme} active={isActive}>
                <Input type="text" placeholder='search' value={search} onChange={(e) => {
                    dispatch(searchHandler(e.target.value))
                }} />
                <DatalistDropdownList theme={theme} height={!!search}>
                    {
                        searchResults?.data?.data?.results?.map(item => <li>
                            <StyledLink theme={theme}
                                to={`/movies/${item.id}`}
                                onClick={() => {
                                    setIsActive(false)
                                    props.setClicked(false)
                                }}
                            >
                                {item.title}
                            </StyledLink>
                        </li>)
                    }
                </DatalistDropdownList>
            </DatalistDropdown>
        </Dropdown>
    </>;
}

export default SearchDropdown;
