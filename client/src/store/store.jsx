import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from "./sagas/rootSaga";
import { profileReducer } from "./slices/profile";

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        profile: profileReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false, serializableCheck: false }).concat(
            sagaMiddleware
        ),
})

sagaMiddleware.run(rootSaga);

export default store;