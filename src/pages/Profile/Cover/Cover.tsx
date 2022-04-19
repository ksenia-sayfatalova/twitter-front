import cover from '../../../assets/cover.jpg';
import classes from './Cover.module.css';
import {Fragment} from "react";
import {useSelector} from "react-redux";
import {IRootStore} from "../../../models/interfaces/store";

export const Cover = () => {
    const tweets = useSelector((state:IRootStore) => state.tweetList.list);
    return (<Fragment>
            <div className={classes['image-wrapper']}>
                <img src={cover}/>
            </div>
            <div className={classes['small-tweet-menu']}>
                <div className='tweet-menu-wrapper'>
                    <div className={classes['small-tweet-wrapper']}>
                        <div className={classes['small-tweet']}>
                            <span className={classes['small-tweet-title']}> Tweets </span>
                            <span className={classes['small-tweet-count']}>{tweets.length}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};
