// {username, password, seenList: {seenFilms: [], totalCount: 0}, favoritesList: {favoritesFilms: [], totalCount: 0}, joinDate}

// loginUser(username, password), addSeenFilms(username, movieId), addFavoritesList(userName, movieId)

const LOGIN_USER = "LOGIN_USER"
const ADD_SEEN_MOVIES = "ADD_SEEN_MOVIES"
const ADD_FAV_MOVIES = "ADD_FAV_MOVIES"


export const loginUser = (username, password) => ({
    type: LOGIN_USER,
    payload: { username, password, seenList: { seenFilms: [], totalCount: 0 }, favoritesList: { favoritesFilms: [], totalCount: 0 } }
})

export const addSeenList = (username, movieId) => ({
    type: ADD_SEEN_MOVIES,
    payload: { username, movieId }
})

export const addFavList = (username, movieId) => ({
    type: ADD_FAV_MOVIES,
    payload: { username, movieId }
})

const userReducer = (users = [], action) => {
    switch (action.type) {
        case LOGIN_USER:
            return [action.payload, ...users]
        case ADD_FAV_MOVIES:
            return users.map(item => item.username === action.payload.username && !item.favoritesList.favoritesFilms.includes(action.payload.movieId) ?
                { ...item, favoritesList: { favoritesFilms: [...item.favoritesList.favoritesFilms, action.payload.movieId], totalCount: item.favoritesList.totalCount + 1 } } : item)
        case ADD_SEEN_MOVIES:
            return users.map(item => item.username === action.payload.username && !item.seenList.seenFilms.includes(action.payload.movieId) ?
                { ...item, seenList: { seenFilms: [...item.seenList.seenFilms, action.payload.movieId], totalCount: item.seenList.totalCount + 1 } } : item)
        default:
            return users
    }
}

export { userReducer }

// {
//     "avatarUrl": "https://i.picsum.photos/id/1005/150/150.jpg?hmac=-Q1z4K5WO9Q7qDB-R9vrj9440_mRxpeHZMOFHblbB6s",
//     "username": "username",
//     "password": "password",
//     "socials": {
//       "twitter": "https://twitter.com/",
//       "instagram": "https://www.instagram.com/"
//     },
//     "seenList": {
//       "seenFilms": [
//       ],
//       "totalCount": 0
//     },
//     "favorites": {
//       "favoriteFilms": [
//       ],
//       "totalCount": 0
//     },
//     "joinDate": "December 2021"
//   }