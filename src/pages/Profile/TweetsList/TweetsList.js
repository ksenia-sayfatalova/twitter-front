import {Fragment, useEffect, useState} from "react";
import {TweetItem} from "../TweetItem/TweetItem";
import classes from './TweetsList.module.css';
import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import {tweetListActions} from '../../../store/tweetList';
import {userActions} from "../../../store/user";
import {fetchTweetsData} from "../../../store/tweet-actions";
import {NavLink} from "react-router-dom";

export const TweetsList = () => {
    const tweets = useSelector((state) => state.tweetList.list);
    const dispatch=useDispatch();

    useEffect(() => {
        dispatch(fetchTweetsData());
    }, []);

    // useEffect(async (props) => {
    //     const response = await  fetch('http://localhost:3002/tweet/', {
    //         method: 'GET',
    //     })
    //     if (!response.ok) {
    //         throw new Error('Something went wrong!');
    //     }
    //
    //     const data = await response.json();
    //     dispatch(tweetListActions.setTweets(data.items));
    //
    // }, [])
    // const tweets = useSelector((state) => state.tweetList);

    const tweetsList = tweets.map((item) => (
        <NavLink to={`/details/${item.id}`} className={classes.tweetItem}><TweetItem
            key={item.id}
            item={item}
        /></NavLink>
    ));
    return (<Fragment>
            <div className='tweet-menu-wrapper'>
                <div className={classes.tweets}> <ul>{tweetsList}</ul></div>
            </div>
        </Fragment>
    );
};
