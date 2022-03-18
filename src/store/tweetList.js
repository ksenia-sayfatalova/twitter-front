import {createSlice} from '@reduxjs/toolkit';

const initialTweetListState = {
    tweets: [
        {
            id: 't1',
            name: 'Ksenia Tsarenko',
            user: '@ksyu.sayfatalova',
            date: new Date('1995-12-17'),
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
            id: 't2',
            name: 'Ksenia Tsarenko',
            user: '@ksyu.sayfatalova',
            date: new Date('1995-12-17'),
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
            id: 't3',
            name: 'Ksenia Tsarenko',
            user: '@ksyu.sayfatalova',
            date: new Date('1995-12-17'),
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
            id: 't4',
            name: 'Ksenia Tsarenko',
            user: '@ksyu.sayfatalova',
            date: new Date('1995-12-17'),
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
            id: 't5',
            name: 'Ksenia Tsarenko',
            user: '@ksyu.sayfatalova',
            date: new Date('1995-12-17'),
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
    ],
};

const tweetListSlice = createSlice({
    name: 'tweetList',
    initialState: initialTweetListState,
});

export const tweetListActions = tweetListSlice.actions;

export default tweetListSlice.reducer;