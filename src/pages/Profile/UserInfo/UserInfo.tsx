import {Fragment} from "react";
import date from '../../../assets/date.svg';
import location from '../../../assets/location.svg';
import classes from './UserInfo.module.css'
import {useSelector} from "react-redux";
import {dateFormat} from "../../../utils/dateFormat";
import {IRootStore} from "../../../models/interfaces/store";

export const UserInfo = () => {
    const user = useSelector((state:IRootStore) => state.user.userInfo);
    const createdAtMonth = new Date(user.createdAt).toLocaleString('en-US', {month:'long'});
    const createdAtYear = new Date(user.createdAt).getFullYear();

    return (<Fragment> <div className={classes['user-info']}>
            <div>
                <h1 className={classes['user-name']}>{user.firstName} {user.lastName}</h1>
                <span>{user.login}</span>
            </div>
            <div className={classes['user-data']}>
                <div className={classes['user-date']}>
                    <img src={date} className={classes['date-image']}/>
                    <span className={classes['date-info']}> Since {createdAtMonth} {createdAtYear}</span>
                </div>
                <div >
                    <img src={location} className={classes['location-image']}/>
                    <span className={classes['location-info']}> {user.location}</span>
                </div>
            </div>
        </div>
        </Fragment>
    )
        ;
};
