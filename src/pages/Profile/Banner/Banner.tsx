import banner from '../../../assets/Rectangle 5.png';
import classes from './Banner.module.css';
import {Button} from "../../../components/Button/Button";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {Fragment} from "react";
import {IRootStore} from "../../../models/interfaces/store";

export const Banner = () => {
    const id = useSelector((state:IRootStore) => state.user.userInfo.id);
    return (<Fragment>
        {!id && <div className={classes.banner}>
        <img src={banner} className={classes['banner-image']}/>
                <h3 className={classes['banner-header']}>Hey! <br/> Why don’t you join us?</h3>
                <span className={classes['banner-text']}>It’s simple - just click on sign up <br/> button!</span>
                <NavLink to='/signin'> <Button>Sign in</Button> </NavLink>

        </div>}
        </Fragment>
    );
};
