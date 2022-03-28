import {tweetListActions} from './tweetList';
import {userActions} from './user';


export const fetchProfileData = () => {
    return async (dispatch) => {
        const token = localStorage.getItem('token');
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
    const token = localStorage.getItem('token');
    return async (dispatch) => {
        const fetchTweets = async () => {
            const response = await  fetch('http://localhost:3002/tweet/', {
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



export const SendSignInData = (enteredLogin, enteredPassword) => {
    return async (dispatch) => {
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
            localStorage.setItem('token', data.access_token);
            console.log (data.access_token);
        };

            try {
                await sendRequest();
                //setIsLoading(false);

            } catch (error) {
                // setError(error.message);
            }

    }
};
