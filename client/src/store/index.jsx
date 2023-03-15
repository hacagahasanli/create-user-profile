import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from '@redux-saga/core';
import { profileReducer } from "./slices/profile";

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        profile: profileReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false, seriziableCheck: false }).concat(
        sagaMiddleware
    ),
})

sagaMiddleware.run();

export default store;