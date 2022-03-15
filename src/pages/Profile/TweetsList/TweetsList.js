import {Fragment} from "react";
import {TweetItem} from "../TweetItem/TweetItem";
import classes from './TweetsList.module.css';
import classNames from 'classnames';
const DUMMY_TWEETS = [
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
    ];
export const TweetsList = () => {
    const tweetsList = DUMMY_TWEETS.map((tweet) => (
        <TweetItem
            key={tweet.id}
            name={tweet.name}
            user={tweet.user}
            date={tweet.date}
            tweet={tweet.text}
        />
    ));
    return (<Fragment>
            <div className='tweet-menu-wrapper'>
                <div className={classes.tweets}> <ul>{tweetsList}</ul></div>
            </div>
        </Fragment>
    );
};