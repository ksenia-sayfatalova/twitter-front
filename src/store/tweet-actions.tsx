import {tweetListActions} from './tweetList';
import {userActions} from './user';
import {useSelector} from "react-redux";
import { Dispatch } from 'redux';
import {IUserStore} from "../models/interfaces/store/IUserStore";
import {IUser} from "../models/interfaces/IUser";

export const fetchProfileData = () => {
    return async (dispatch:Dispatch,getState: () => any) => {
        const token =  getState().user.token; // getState() - возвращает state всего redux
        const fetchData = async () => {
            const response = await fetch('http://localhost:3002/user/', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            })

            if (!response.ok) {
                throw new Error('Could not fetch data!');
            }

            const data = await response.json();
            return data;
        };

        try {
            const tweetData = await fetchData();
            dispatch(userActions.login(tweetData));

        } catch (error) {
            //setError(error.message);
        }
    };
};

export const fetchTweetsData = () => {
    return async (dispatch:Dispatch,getState: () => any)  => {
        const token =  getState().user.token;
        const fetchTweets = async () => {
            const response = await fetch('http://localhost:3002/tweet/?offset=0&limit=100', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            })

            if (!response.ok) {
                throw new Error('Could not fetch data!');
            }

            const data = await response.json();
            return data;
        };

        try {
            const tweets = await fetchTweets();
            dispatch(tweetListActions.setTweets(tweets.items));

        } catch (error) {
            //setError(error.message);
        }
    };
};


export const sendSignInData = (enteredLogin:string, enteredPassword:string, needToSaveToken:boolean) => {
    return async (dispatch:Dispatch ) => {
        const sendRequest = async () => {
            const response = await fetch('http://localhost:3002/auth/login', {
                method: 'POST',
                body: JSON.stringify({
                    login: enteredLogin,
                    password: enteredPassword
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            const data = await response.json();
            dispatch(userActions.setToken(data.access_token));
            if(needToSaveToken){
                localStorage.setItem('token', data.access_token);
            }
            console.log(data.access_token);
        };

        try {
            await sendRequest();
            //setIsLoading(false);

        } catch (error) {
            // setError(error.message);
        }

    }
};

export const deleteLike = (tweetId:string, userInfo:IUser) => {
    console.log(tweetId);
    return async (dispatch:Dispatch,getState: () => any) => {
        const token =  getState().user.token;
        dispatch(tweetListActions.deleteLike(userInfo.id));

        const fetchLikeData = async () => {
            const response = await fetch(`http://localhost:3002/tweet/${tweetId}/like`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            })
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            const data = await response.json();
            return data;
        };

        try {
            const tweetData = await fetchLikeData();

        } catch (error) {
            dispatch(tweetListActions.setLike(userInfo));
        }
    };
};

export const setLike = (tweetId:string, userInfo:IUser) => {
    return async (dispatch:Dispatch,getState: () => any) => {
        const token =  getState().user.token;
        dispatch(tweetListActions.setLike(userInfo));

        const fetchLikeData = async () => {
            const response = await fetch(`http://localhost:3002/tweet/${tweetId}/like`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            })
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const data = await response.json();
            return data;
        };

        try {
            const tweetData = await fetchLikeData();

        } catch (error) {
            dispatch(tweetListActions.deleteLike(userInfo.id));
        }
    };
};


