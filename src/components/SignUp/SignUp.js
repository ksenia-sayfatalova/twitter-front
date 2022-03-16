import classes from "../SignUp/SignUp.module.css";
import {Button} from "../Button/Button";

export const SignUp = () => {
    return <div className={classes['form-sign-up-wrapper']}>
        <h3 className={classes['sign-up-header']}> Sign Up</h3>
        <form className={classes['sign-up']}>
            <input type='text' placeholder='First Name'/>
            <input type='text' placeholder='Last Name'/>
            <input type='text' placeholder='Location'/>
            <input type='email' placeholder='Login'/>
            <input type='password' placeholder='Password'/>
            <Button w100>Sign Up</Button>
        </form>
    </div>
};