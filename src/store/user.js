import {createSlice} from '@reduxjs/toolkit';

const initialUserState = {
    name: 'Vasia',
    secondName: 'test'
};

const userSlice = createSlice({
    name: 'user',
    initialState: initialUserState,
});

export const userActions = userSlice.actions;

export default userSlice.reducer;