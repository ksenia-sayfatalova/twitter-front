import banner from '../../../assets/Rectangle 5.png';
import classes from './Banner.module.css';
import {Button} from "../../../components/Button/Button";
export const Banner = () => {
return (
    <div className={classes.banner}>
        <img src={banner} className={classes['banner-image']}/>
        <h3 className={classes['banner-header']}>Hey! <br/> Why don’t you join us?</h3>
        <span className={classes['banner-text']}>It’s simple - just click on sign up <br/> button!</span>
        <Button>Sign in</Button>

    </div>
);
};