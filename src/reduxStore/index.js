import {combineReducers, createStore} from "redux"
import themeReducer from "./themeChanger";
import trendReducer from "./trendingPeriod";
import { searchReducer } from "./searchHandle";
import { paginationReducer } from "./paginationContext";
import { userReducer } from "./user";
// import { persistStore, persistReducer } from 'redux-persist'


const rootReducer = combineReducers({
    user: userReducer,
    theme: themeReducer,
    trend: trendReducer,
    search: searchReducer,
    pagination: paginationReducer,
})

// const persistConfig = {
//     key: 'root',
//     storage,
//     //whitelist: ["counter"]
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// const store = createStore(persistedReducer, applyMiddleware(logger))
const store = createStore(rootReducer)

store.subscribe(() => console.log("STORE:::", store.getState()))

// export const persistor = persistStore(store)
export default store