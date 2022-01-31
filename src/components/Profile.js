import React from 'react';
import { useQueries } from 'react-query';
import { useSelector } from 'react-redux';
import { fetchSingleMovie } from '../api';
import { FavoriteIcon, WatchedIcon, TwitterIcon, InstagramIcon } from '../styledComponents/Icons';
import { useDispatch } from 'react-redux';
import { addFavList, addSeenList } from '../reduxStore/user';
import { StyledTable, ProfileGrid, ProfileInfo, ProfileInfoGrid } from '../styledComponents/styledTable';
import { MainContainer } from "../styledComponents/MainContainer"
import { ProfileImg } from '../styledComponents/NavbarStyles';
import SeenFavIcons from './SeenFavIcons';



function Profile() {
  const dispatch = useDispatch()
  const { user, theme } = useSelector(state => state)
  const themeName = theme ? "light" : "dark"
  console.log("USSER::", user)

  const allFilms = user.favoritesList.favoritesFilms?.concat(user.seenList.seenFilms)
  const reducedAllFilms = allFilms.filter((item, index) => allFilms.indexOf(item) === index)


  console.log("ALL:::", allFilms)
  console.log("ALL:::", reducedAllFilms)

  const movies = useQueries(
    reducedAllFilms.map(movieId => {
      return {
        queryKey: ["movies", movieId],
        queryFn: () => fetchSingleMovie(movieId),
        retry: false,
        select: state => state.data
      }
    })
  )

  const data = movies.map(item => item?.data).map(item => ({ ...item, genres: [item?.genres?.map(item => item.name)].toString() }))

  console.log("DATA:::", data)
  console.log("MOVIES:::", movies)

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
        <ProfileInfoGrid theme={themeName}>
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
                <InstagramIcon theme={themeName} />
              </a>
              <a href={user.socials.twitter}>
                <TwitterIcon theme={themeName} />
              </a>
            </div>
          </div>
        </ProfileInfoGrid>
      </ProfileInfo>
      <StyledTable
        theme={themeName} columns={columns} data={data} />
    </ProfileGrid>
  </MainContainer>;
}

export default Profile;
