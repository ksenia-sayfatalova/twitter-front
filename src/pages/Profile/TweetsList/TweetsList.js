import {Fragment} from "react";
import {TweetItem} from "../TweetItem/TweetItem";
import classes from './TweetsList.module.css';
import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import {tweetListActions} from '../../../store/tweetList';

export const TweetsList = () => {
    const tweets = useSelector((state) => state.tweetList);
    const tweetsList = tweets.map((item) => (
        <TweetItem
            key={item.id}
            item={item}
        />
    ));
    return (<Fragment>
            <div className='tweet-menu-wrapper'>
                <div className={classes.tweets}> <ul>{tweetsList}</ul></div>
            </div>
        </Fragment>
    );
};