import { configureStore } from '@reduxjs/toolkit';
import tweetListReducer from './tweetList';


const store = configureStore({
    reducer: { tweetList: tweetListReducer },
});

export default store;