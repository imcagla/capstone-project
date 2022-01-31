import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FavoriteIcon, WatchedIcon } from '../styledComponents/Icons';
import { addFavList, addSeenList } from '../reduxStore/user';

function SeenFavIcons(props) {
    const dispatch = useDispatch()
    const {user} = useSelector(state => state)
    console.log("USER:::", user)
    const {movieId, loc} = props

  return <div>
      {
          user.userLogin && <div>
          <FavoriteIcon loc={loc} isFav={user?.favoritesList?.favoritesFilms?.includes(movieId)}
            onClick={() => dispatch(addFavList(movieId))} />
          <WatchedIcon loc={loc} isSeen={user?.seenList?.seenFilms?.includes(movieId)}
            onClick={() => dispatch(addSeenList(movieId))} />
        </div>
      }
  </div>;
}

export default SeenFavIcons;
