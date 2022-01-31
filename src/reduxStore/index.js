import {combineReducers, createStore} from "redux"
import themeReducer from "./themeChanger";
import trendReducer from "./trendingPeriod";
import { searchReducer } from "./searchHandle";
import { paginationReducer } from "./paginationContext";
import { userReducer } from "./user";
import { loadMoreReducer } from "./loadMoreMovies";
import { genresReducer } from "./getGenres";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { sortFilterReducer } from "./sortFilterStates";

const rootReducer = combineReducers({
    user: userReducer,
    theme: themeReducer,
    trend: trendReducer,
    search: searchReducer,
    pagination: paginationReducer,
    load: loadMoreReducer,
    genres: genresReducer,
    sortFilter: sortFilterReducer,
})

const persistConfig = {
    key: 'root',
    storage,
    //whitelist: ["counter"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer)
// const store = createStore(rootReducer)

store.subscribe(() => console.log("STORE:::", store.getState()))

export const persistor = persistStore(store)
export default store