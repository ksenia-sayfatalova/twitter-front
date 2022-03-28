import {Button} from "../../../components/Button/Button";
import {TweetsList} from "../TweetsList/TweetsList";
import {Fragment, useRef, useState} from "react";
import classes from './TweetForm.module.css'
import {tweetListActions} from "../../../store/tweetList";
import {fetchTweetsData} from "../../../store/tweet-actions";
import {useDispatch} from "react-redux";

const isEmpty = value => value.trim().length === '';
const isEmptyArray = array => array.length === 0;

export const TweetForm = () => {
    const dispatch = useDispatch();
    const tweetInputRef = useRef();
    const hashtagInputRef = useRef();
    const [formInputsValidity, setFormInputsValidity] = useState({
        message: false,
        hashtags: false
    });

    const isFormValid = formInputsValidity.message && formInputsValidity.hashtags;

    console.log(formInputsValidity)

    const tweetHandler = async (event) => {
        event.preventDefault();
        const enteredTweet = tweetInputRef.current.value;
        const enteredHashtag = hashtagInputRef.current.value.split(' ');

        const enteredTweetIsValid = !isEmpty(enteredTweet);
        const enteredHashtagIsValid = !isEmptyArray(enteredHashtag);

        setFormInputsValidity({
            message: enteredTweetIsValid,
            hashtags: enteredHashtagIsValid
        });
        const formIsValid = enteredTweetIsValid && enteredHashtagIsValid;

        if (!formIsValid) {
            return
        }
        try {
            const token = localStorage.getItem('token');
            const response = await fetch('http://localhost:3002/tweet', {
                method: 'POST',
                body: JSON.stringify({
                    message: enteredTweet,
                    hashtags: enteredHashtag
                }),
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
            })
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const data = await response.json();

            //dispatch(fetchTweetsData());
            dispatch(tweetListActions.addTweet(data));

        } catch (error) {
            //setError(error.message);
        }
    };

    return (
        <form className={classes['tweet-form']} onSubmit={tweetHandler}>
            <input className={classes['tweet-input']} type='text' placeholder='Whats happening?' ref={tweetInputRef}/>
            <input className={classes['hashtag-input']} type='text' placeholder='write hashtags' ref={hashtagInputRef}/>
            <div className={classes['button-wrapper']}>
            <Button disabled={!isFormValid}>Tweet</Button>
            </div>
        </form>
    );
};
