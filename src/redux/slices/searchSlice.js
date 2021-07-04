import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const searchSliceInitialState = {
    resourceInfos: [],
}

export const fetchResourceInfos = createAsyncThunk(
    'search/fetchResourceInfos',
    async (params,) => {
        console.log('--- Fetch Resource Infos ---');
        let res = await axios.get(`${process.env.REACT_APP_BASE_URL_API}/search/?name=${params.name}`);

        return res.data;
    });

const searchReducer = {
    setResourceInfos: (state, action) => {
        state.resourceInfos = action.payload;
    }
}

const searchResources = createSlice({
    name: "searchResources",
    initialState: searchSliceInitialState,
    reducers: searchReducer,
    extraReducers: {
        [fetchResourceInfos.fulfilled]: (state, action) => {
            state.resourceInfos = action.payload;
        }
    }
});

export const {
    setResourceInfos,
} = searchResources.actions;

export default searchResources;
