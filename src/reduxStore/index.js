import {combineReducers, createStore, applyMiddleware} from "redux"
import themeReducer from "./themeChanger";
// import { persistStore, persistReducer } from 'redux-persist'


const rootReducer = combineReducers({
    theme: themeReducer,
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