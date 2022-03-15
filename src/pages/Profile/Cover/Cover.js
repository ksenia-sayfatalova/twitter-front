import cover from '../../../assets/cover.jpg';
import classes from './Cover.module.css';
import {Fragment} from "react";

export const Cover = () => {
    return (<Fragment>
            <div className={classes['image-wrapper']}>
                <img src={cover}/>
            </div>
            <div className={classes['small-tweet-menu']}>
                <div className='tweet-menu-wrapper'>
                    <div className={classes['small-tweet-wrapper']}>
                        <div className={classes['small-tweet']}>
                            <span className={classes['small-tweet-title']}> Tweets </span>
                            <span className={classes['small-tweet-count']}>15</span>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};