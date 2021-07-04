import {
    combineReducers,
    configureStore,
    getDefaultMiddleware,
} from "@reduxjs/toolkit";
import searchSlice from "./slices/searchSlice";

const rootReducer = combineReducers({
    searchResources: searchSlice.reducer,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware({
        thunk: true,
        serializableCheck: {
        },
    }),
    devTools: true,
});

const defaultStoreExport = {
    store,
};

export default defaultStoreExport;
