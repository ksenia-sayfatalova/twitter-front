import {Button} from "../Button/Button";
import classes from "./SignIn.module.css";
import classNames from 'classnames';
import {Checkbox} from "../Checkbox/Checkbox";

export const SignIn = (props) => {
    return <div className={classes['form-sign-in-wrapper']}>
        <form className={classes['sign-in']}>
            <label htmlFor='email'>Already signed up?</label>
            <input type='email' placeholder='Login' className={classes.login}/>
            <input type='password' placeholder='Password' className={classes.password}/>
          <Checkbox/>
            <div className={classes['login-btn']}>
                <Button w100>Login</Button>
            </div>
        </form>
    </div>
};