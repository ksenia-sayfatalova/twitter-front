import {Fragment} from "react";
import {TweetItem} from "../TweetItem/TweetItem";
import classes from './TweetsList.module.css';
import classNames from 'classnames';

export const TweetsList = (props) => {

    const tweetsList = props.items.map((item) => (
        <TweetItem
            key={item.id}
            name={item.name}
            user={item.user}
            date={item.date}
            text={item.text}
        />
    ));
    return (<Fragment>
            <div className='tweet-menu-wrapper'>
                <div className={classes.tweets}> <ul>{tweetsList}</ul></div>
            </div>
        </Fragment>
    );
};