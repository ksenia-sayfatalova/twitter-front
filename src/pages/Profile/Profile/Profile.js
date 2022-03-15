import classes from './Profile.module.css';
import {UserInfo} from '../UserInfo/UserInfo'
import {Banner} from '../Banner/Banner';
import {TweetsList} from "../TweetsList/TweetsList";
import classNames from "classnames";

export const Profile = () => {
    return (
        <div className={classes['general-wrapper']}>
            <div className={classNames('section-wrapper', classes['section-wrapper-hue'])}>
                <div className={classes['inner-profile-wrapper']}>
                    <div className={classes['div-width']}>
                        <UserInfo/>
                    </div>
                    <TweetsList/>
                    <div className={classes['div-width']}>
                        <Banner/>
                    </div>
                </div>
            </div>
        </div>
    );
};