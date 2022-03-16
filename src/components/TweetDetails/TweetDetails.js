import {Fragment} from "react";
import like from '../../assets/like-svgrepo-com.svg';
import avatar from '../../assets/Ellipse 1.png';
import classes from './TweetDetails.module.css';

export const TweetDetails = (props) => {
    const date = props.date.getFullYear() + '-' + (props.date.getMonth() + 1) + '-' + props.date.getDate();
    return <Fragment>
        <div className={classes.details}>
            <div className={classes['details-inner-wrapper']}>
                <div className={classes['details-wrapper']}>
                    <div className={classes['details-avatar-wrapper']}>
                        <div className={classes['details-avatar']}>
                            <img src={avatar} className={classes['details-avatar']}/>
                        </div>
                        <div className={classes['details-name-wrapper']}>
                            <span className={classes['details-name']}>{props.name}</span>
                            <span className={classes['details-user']}>{props.user}</span>
                        </div>
                    </div>
                    <div className={classes['details-text']}>{props.text}</div>
                    <div className={classes['details-date']}>
                        <span>17:26 - </span>
                        <span>{date}</span>
                    </div>
                    <div className={classes['details-like']}>
                        <span className={classes['details-like-amount']}>15</span>
                        <span className={classes['details-like-text']}>Likes</span>
                    </div>
                    <div className={classes['details-all-like']}>
                        <img src={like} className={classes['details-all-like-image']}/>
                        <span className={classes['details-all-like-text']}> 15 </span>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>

};