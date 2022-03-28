import classes from './Profile.module.css';
import {UserInfo} from '../UserInfo/UserInfo'
import {Banner} from '../Banner/Banner';
import {TweetsList} from "../TweetsList/TweetsList";
import classNames from "classnames";
import {Fragment} from "react";
import {Button} from "../../../components/Button/Button";
import {TweetForm} from "../TweetForm/TweetForm";

export const Profile = (props) => {
    const token = localStorage.getItem('token');
    return (
        <div className={classes['general-wrapper']}>
            <div className={classNames('section-wrapper', classes['section-wrapper-hue'])}>
                <div className={classes['inner-profile-wrapper']}>
                    <div className={classes['div-width']}>
                        {token && <UserInfo/>}
                    </div>
                    <div className={classNames('tweet-menu-wrapper', classes['main-column'])}>
                        <TweetForm/>
                        <TweetsList/>
                    </div>
                    <div className={classes['div-width']}>
                        <Banner/>
                    </div>
                </div>
            </div>
        </div>

    );
};
