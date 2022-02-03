import React, { useEffect } from 'react';
import { useQueries } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleMovie } from '../../api';
import { TwitterIcon, InstagramIcon } from '../../styledComponents/Icons';
import { StyledTable, ProfileGrid, ProfileInfo, ProfileInfoGrid, TableContainer, TableDropdownContainer } from '../../styledComponents/ProfileStyle';
import { MainContainer } from "../../styledComponents/BaseStyleComponents"
import { ProfileImg } from '../../styledComponents/NavbarStyles';
import SeenFavIcons from '../SeenFavIcons';
import { StyledSelect } from "../../styledComponents/Dropdown"
import { getSortVal } from '../../reduxStore/sortFilterStates';


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

  const columns = [
    {
      title: 'Film ID',
      dataIndex: 'id',
      key: 'id',
      width: 150,
    },
    {
      title: 'Film Title',
      dataIndex: 'title',
      key: 'title',
      width: 150,
    },
    {
      title: 'Film Genre',
      dataIndex: 'genres',
      key: 'genres',
      width: 200,
    },
    {
      title: 'Icon Actions',
      dataIndex: '',
      key: 'operations',
      render: (movie) => (
        <SeenFavIcons loc={"table"} movieId={movie.id} />
      )
    },
  ];


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
        <StyledTable
          theme={theme} 
          columns={columns}
          data={
            sortFilter.sortingValue === "closest_release_date" ?
              data?.sort((prev, curr) => curr?.release_date > prev?.release_date) :
              sortFilter.sortingValue === "favorites" ?
                data?.filter(item => user.favoritesList.favoritesFilms?.includes(item?.id)) :
                data?.filter(item => user.seenList.seenFilms?.includes(item?.id))
          }
        />
      </TableContainer>
    </ProfileGrid>
  </MainContainer>;
}

export default Profile;
