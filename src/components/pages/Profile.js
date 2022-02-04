import React, { useEffect } from 'react';
import { useQueries } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import Table from '../Table';
import { fetchSingleMovie } from '../../api';
import { getSortVal } from '../../reduxStore/sortFilterStates';
import { StyledSelect } from "../../styledComponents/Dropdown"
import { ProfileImg } from '../../styledComponents/NavbarStyles';
import { TwitterIcon, InstagramIcon } from '../../styledComponents/Icons';
import { MainContainer } from "../../styledComponents/BaseStyleComponents"
import { ProfileGrid, ProfileInfo, ProfileInfoGrid, TableContainer, TableDropdownContainer } from '../../styledComponents/ProfileStyle';


function Profile() {
  const dispatch = useDispatch()
  const { user, theme, sortFilter } = useSelector(state => state)

  const allFilms = user?.favoritesList?.favoritesFilms?.concat(user?.seenList?.seenFilms)
  const reducedAllFilms = allFilms?.filter((item, index) => allFilms?.indexOf(item) === index)


  const movies = useQueries(
    reducedAllFilms?.map(movieId => {
      return {
        queryKey: ["movies", movieId],
        queryFn: () => fetchSingleMovie(movieId),
        select: state => state?.data,
      }
    })
  )

  const data = movies?.map(item => item?.data).map(item => ({ ...item, genres: [item?.genres?.map(item => item.name)].toString() }))

  useEffect(() => {
    dispatch(getSortVal("closest_release_date"))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return <MainContainer>
    <ProfileGrid>
      <ProfileInfo>
        <ProfileInfoGrid theme={theme}>
          <ProfileImg width={"200px"} src={user.avatarUrl} alt="" />
          <div>
            <p className="username"> {user.username.toUpperCase()} </p>
            <p className="join-date"> {user.joinDate} </p>
            <ul className='list'>
              <li>  <span className='movie-counts'>{user.seenList.totalCount}</span> Seen Movies</li>
              <li>  <span className='movie-counts'>{user.favoritesList.totalCount}</span> Favorites Movies</li>
            </ul>
            <div>
              <a href={user.socials.instagram}>
                <InstagramIcon theme={theme} />
              </a>
              <a href={user.socials.twitter}>
                <TwitterIcon theme={theme} />
              </a>
            </div>
          </div>
        </ProfileInfoGrid>
      </ProfileInfo>
      <TableContainer theme={theme}>
        <TableDropdownContainer>
          Filter By:
          <StyledSelect theme={theme} onChange={(e) => dispatch(getSortVal(e.target.options[e.target.selectedIndex].value))}>
            <option selected value="closest_release_date">Closest release date</option>
            <option value="favorites">Favorites</option>
            <option value="seen">Seenlist</option>
          </StyledSelect>
        </TableDropdownContainer>
        
        <Table data={
          sortFilter.sortingValue === "closest_release_date" ?
            data?.sort((prev, curr) => curr?.release_date > prev?.release_date) :
            sortFilter.sortingValue === "favorites" ?
              data?.filter(item => user.favoritesList.favoritesFilms?.includes(item?.id)) :
              data?.filter(item => user.seenList.seenFilms?.includes(item?.id))
        } />
      
      </TableContainer>
    </ProfileGrid>
  </MainContainer>;
}

export default Profile;
