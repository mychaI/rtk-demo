import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetching from '../../assets/dog_fetching.gif';
import { getFox } from '../../api';

// Async Thunks
export const fetchFox = createAsyncThunk('fox/fetchFoxStatus', (endpoint, thunkAPI) => {
    const response = getFox(endpoint);
    setTimeout(() =>{
        console.log('response: ', response);
    }, 1000);
    
    return response;
})

export const foxSlice = createSlice({
    name: 'fox',
    initialState: {
        src: 'https://thedogtrainingsecret.com/images/iStock_000011537938XSmall.jpg'
    },
    reducers: {},
    extraReducers: {
        [fetchFox.fulfilled]: (state, action) => {

            state.src = action.payload;
        },
        [fetchFox.pending]: (state) => {
            state.src = fetching;
        }
    }
});

export const selectSrc = state => state.fox.src;

export default foxSlice.reducer;
