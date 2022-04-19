import {createSlice} from '@reduxjs/toolkit';

const initialUserState = {
    userInfo: {
        avatar: null,
        cover: null,
        createdAt: null,
        firstName: null,
        id: null,
        lastName: null,
        location: null,
        login: null,
        tweets: null,
    },
    token: null
};


const userSlice = createSlice({
    name: 'user',
    initialState: initialUserState,
    reducers: {
        login(state, action) {
            state.userInfo = action.payload;
        },
        clearUserInfo(state, action) {
            state.userInfo = initialUserState.userInfo;
            state.token = initialUserState.token;
        },
        setToken(state,action) {
            state.token = action.payload;
        }
    }
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
