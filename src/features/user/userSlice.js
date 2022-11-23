//Task 1: Create the userSlice
import { createSlice } from "@reduxjs/toolkit";

//declare a const named initialState and give it a currentUser property set to the value null
const initialState = {
    currentUser: null
  };

//Pass an object to the createSlice function with the following properties:
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        //Give the setCurrentUser method two parameters, state and action
        setCurrentUser: (state, action) => {
            //console.log('addUser action.payload', action.payload);
            return (
                { ...state, currentUser: action.payload }
            )
        }
    }
});

//Declare two export const variables
export const userReducer = userSlice.reducer;
export const { setCurrentUser } = userSlice.actions;

//export a const named selectCurrentUser. This will be a selector function. For its value, write an arrow function with a parameter of state that returns the value state.user.currentUser.
export const selectCurrentUser = (state) => {
    return state.user.currentUser;
};
