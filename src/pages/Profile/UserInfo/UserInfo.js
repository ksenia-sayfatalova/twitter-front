import {Fragment} from "react";
import date from '../../../assets/Vector.png';
import location from '../../../assets/Vector (1).png';
import classes from './UserInfo.module.css'

export const UserInfo = () => {
    return (<Fragment> <div className={classes['user-info']}>
            <div>
                <h1 className={classes['user-name']}>Kseniya Tsarenko</h1>
                <span>@ksyu.sayfatalova</span>
            </div>
            <div className={classes['user-data']}>
                <div className={classes['user-date']}>
                    <img src={date} className={classes['date-image']}/>
                    <span className={classes['date-info']}> Since March 2022</span>
                </div>
                <div >
                    <img src={location} className={classes['location-image']}/>
                    <span className={classes['location-info']}> Krasnodar, Russia</span>
                </div>
            </div>
        </div>
        </Fragment>
    )
        ;
};