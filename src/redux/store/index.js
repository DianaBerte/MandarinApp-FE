import Storage from "redux-persist/lib/storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import userReducer from "../reducers/userReducer.js";


const persistConfig = {
    storage: Storage,
    key: "root",
}

const combinedReducer = combineReducers({
    users: userReducer,
})

const persistedReducer = persistReducer(persistConfig, combinedReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false,
        });
    },
});

const persistedStore = persistStore(store)

export { store, persistedStore }