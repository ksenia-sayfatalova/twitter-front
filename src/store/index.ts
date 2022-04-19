import { configureStore } from '@reduxjs/toolkit';
import tweetListReducer from './tweetList';
import userReducer from './user';


const store = configureStore({
    devTools: true,
    reducer: {
        tweetList: tweetListReducer,
        user: userReducer
    },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
