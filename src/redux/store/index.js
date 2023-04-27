import Storage from "redux-persist/lib/storage";
import { applyMiddleware, combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import ThunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import userReducer from "../reducers/userReducer.js";



const persistConfig = {
    storage: Storage,
    key: "root",
}

const combinedReducer = combineReducers({
    users: userReducer,
})

const persistedReducer = persistReducer(persistConfig, combinedReducer);

const composedEnhancer = composeWithDevTools(applyMiddleware(ThunkMiddleware))

const store = configureStore(
    {
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware({
                serializableCheck: false,
            });
        },
    }, composedEnhancer
);

const persistedStore = persistStore(store)

export { store, persistedStore }