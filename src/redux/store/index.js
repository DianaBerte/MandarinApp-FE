import Storage from "redux-persist/lib/storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import userReducer from "../reducers/userReducer.js";
import currentUserReducer from "../reducers/currentUserReducer.js";
import currentGameReducer from "../reducers/currentGameReducer.js";

const persistConfig = {
    storage: Storage,
    key: "root",
}

const combinedReducer = combineReducers({
    users: userReducer,
    currentUser: currentUserReducer,
    currentGame: currentGameReducer
})

const persistedReducer = persistReducer(persistConfig, combinedReducer);

const store = configureStore(
    {
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: false,
            })

    }

);

const persistedStore = persistStore(store)

export { store, persistedStore }