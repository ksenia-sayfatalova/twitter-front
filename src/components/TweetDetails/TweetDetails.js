import {Fragment} from "react";
import like from '../../assets/like-svgrepo-com.svg';
import avatar from '../../assets/Ellipse 1.png';
import classes from './TweetDetails.module.css';
import {dateFormat} from "../../utils/dateFormat";
import {LikeImage} from "../LikeImage/LikeImage";

export const TweetDetails = (props) => {

    return <Fragment>
        <div className={classes.details}>
            <div className={classes['details-inner-wrapper']}>
                <div className={classes['details-wrapper']}>
                    <div className={classes['details-avatar-wrapper']}>
                        <div className={classes['details-avatar']}>
                            <img src={avatar} className={classes['details-avatar']}/>
                        </div>
                        <div className={classes['details-name-wrapper']}>
                            <span className={classes['details-name']}>{props.tweet.name}</span>
                            <span className={classes['details-user']}>{props.tweet.user}</span>
                        </div>
                    </div>
                    <div className={classes['details-text']}>{props.tweet.text}</div>
                    <div className={classes['details-date']}>
                        <span>17:26 - </span>
                        <span>{dateFormat(props.tweet.date)}</span>
                    </div>
                    <div className={classes['details-like']}>
                        <span className={classes['details-like-amount']}>15</span>
                        <span className={classes['details-like-text']}>Likes</span>
                    </div>
                    <LikeImage/>
                </div>
            </div>
        </div>
    </Fragment>

};


