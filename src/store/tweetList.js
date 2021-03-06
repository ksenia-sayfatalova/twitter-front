import {createSlice} from '@reduxjs/toolkit';


// const initialTweetListState = {
//     list: [
//         {
//             "id": "62387857abb7a42424b6a414",
//             "hashtags": [
//                 "first",
//                 "tweet"
//             ],
//             "user": {
//                 "firstName": "eugene",
//                 "lastName": "tsarenko",
//                 "login": "eugene.tsarenko"
//             },
//             "message": "This is my first tweet!!!",
//             "createdAt": "2022-03-21T13:06:31.195Z",
//             "likes": 0
//         },
//     ],
//     tweetDetails: {
//         "deletedAt": null,
//         "hashtags": [
//             "чсч"
//         ],
//         "_id": "624176664ff62f2c608a0875",
//         "user": "623c93d3a48f6611b4262d63",
//         "message": "Институт цвета Pantone назвал цвет наступающего, 2022 года",
//         "createdAt": "2022-03-28T08:48:38.503Z",
//         "updatedAt": "2022-03-28T08:48:38.503Z",
//         "author": {
//             "createdAt": "2022-03-24T15:52:51.454Z",
//             "id": "623c93d3a48f6611b4262d63",
//             "firstName": "Ksenia",
//             "lastName": "Tsarenko",
//             "avatar": null,
//             "cover": null,
//             "login": "ksenia@wellyes.ru",
//             "location": "Krasnodar"
//         },
//         "likes": [
//             { //юзеры которые лайкнули твит
//                 "createdAt": "2022-03-21T09:22:07.488Z",
//                 "id": "623843bfb049e7312c6b341c",
//                 "firstName": "Ksenia",
//                 "lastName": "xcxcx",
//                 "avatar": null,
//                 "cover": null,
//                 "login": "test@test.com",
//                 "location": "xcxcxcxc"
//             }
//         ]
//     }
// };

const initialTweetListState = {
    list: [
        // {
        //     "id": null,
        //     "hashtags": [],
        //     "user": {
        //         "firstName": null,
        //         "lastName": null,
        //         "login": null
        //     },
        //     "message": null,
        //     "createdAt": null,
        //     "likes": null
        // },
    ],
    tweetDetails: {
        // "deletedAt": null,
        // "hashtags": [],
        // "_id": null,
        // "user": null,
        // "message": null,
        // "createdAt": null,
        // "updatedAt": null,
        // "author": {
        //     "createdAt": null,
        //     "id": null,
        //     "firstName": null,
        //     "lastName": null,
        //     "avatar": null,
        //     "cover": null,
        //     "login": null,
        //     "location": null
        // },
        // "likes": [
        //     { //юзеры которые лайкнули твит
        //         "createdAt": null,
        //         "id": null,
        //         "firstName": null,
        //         "lastName": null,
        //         "avatar": null,
        //         "cover": null,
        //         "login": null,
        //         "location": null
        //     }
        // ]
    }
};

const tweetListSlice = createSlice({
    name: 'tweetList',
    initialState: initialTweetListState,
    reducers: {
        setTweets(state, action) {
            state.list = action.payload;
        },
        addTweet(state, action) {
            state.list = [action.payload, ...state.list];

        },
        setTweet(state, action) {
            state.tweetDetails = action.payload;
        },
        deleteTweet(state, action) {
            const tweetId = action.payload;
            state.list = state.list.filter((item) => item.id !== tweetId);
        },
        setLike(state, action) {
            const userInfo = action.payload;
            state.tweetDetails.likes.push(userInfo);
        },
        deleteLike(state, action) {
            state.tweetDetails.likes = state.tweetDetails.likes.filter(user => user.id !== action.payload);
        },
    }
});

export const tweetListActions = tweetListSlice.actions;

export default tweetListSlice.reducer;
