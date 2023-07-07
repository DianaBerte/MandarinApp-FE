import Storage from "redux-persist/lib/storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import userReducer from "../reducers/userReducer.js";
import currentUserReducer from "../reducers/currentUserReducer.js";
import currentGameReducer from "../reducers/currentGameReducer.js";
import currentAudioGameReducer from "../reducers/currentAudioGameReducer.js";

const persistConfig = {
    storage: Storage,
    key: "root",
}

const combinedReducer = combineReducers({
    users: userReducer,
    currentUser: currentUserReducer,
    currentGame: currentGameReducer,
    // To shuffle games, it should be: 
    // currentTextGame: currentTextGameReducer,
    currentAudioGame: currentAudioGameReducer
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
    // composedEnhancer
);

const persistedStore = persistStore(store)

export { store, persistedStore }