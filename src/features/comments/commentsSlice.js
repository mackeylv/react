//Create a selector in commentsSlice.js
//import { COMMENTS } from '../../app/shared/oldData/COMMENTS';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../app/shared/baseUrl';

//Task 1: Async Comments
export const fetchComments = createAsyncThunk(
    'comments/fetchComments',
    async () => {
        const response = await fetch(baseUrl + 'comments');
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        return data;
    }
);

const initialState = {
    commentsArray: [],
    isLoading: true,
    errMsg: ''
};

//comments Slice object
const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchComments.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchComments.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
        },
        [fetchComments.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

//Slicereducer- need to export as a const so that we can import it into the redux store later
export const commentsReducer = commentsSlice.reducer;

export const { addComment } = commentsSlice.actions;

export const selectCommentsByCampsiteId = (campsiteId) => (state) => {
    
//export const selectFeaturedComment = (state) => {
    return {
        featuredItem: state.comments.commentsArray.find(
            (comment) => comment.featured
        ),
        isLoading: state.comments.isLoading,
        errMsg: state.comments.errMsg
    };
};
/*export const selectCommentsByCampsiteId = (campsiteId) => (state) => {
    return state.comments.commentsArray.filter(
        (comment) => comment.campsiteId === parseInt(campsiteId)
    );
};*/

