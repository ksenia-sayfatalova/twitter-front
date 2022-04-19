import {Button} from "../Button/Button";
import classes from "./SignIn.module.css";
import classNames from 'classnames';
import {Checkbox} from "../Checkbox/Checkbox";
import React, {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {userActions} from "../../store/user";
import {sendSignInData} from "../../store/tweet-actions";
import {useDispatch, useSelector} from "react-redux";
import {IRootStore} from "../../models/interfaces/store";


const isEightChars = (value: string) => value.trim().length === 8;
const isEmail = (value: string) => value.includes('@');

export const SignIn = () => {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [checked, setChecked] = useState<boolean>(false);
    //const [error, setError] = useState(null);
    const [formInputsValidity, setFormInputsValidity] = useState<{
        login: boolean,
        password: boolean
    }>({
        login: true,
        password: true,
    });
    const loginInputRef = useRef<HTMLInputElement>(null);
    const passwordInputRef = useRef<HTMLInputElement>(null);

    const token = useSelector((state:IRootStore) => state.user.token);

    useEffect(() => {
        if (token) {
            navigate('/profile');
        }
    }, [token]);

const checkedHandler = (checked:boolean) => {
    setChecked(checked);
};
    const confirmHandler = async (event: React.FormEvent) => {
        event.preventDefault();

        const enteredLogin = loginInputRef.current!.value;
        const enteredPassword = passwordInputRef.current!.value;

        const enteredLoginIsValid = isEmail(enteredLogin);
        const enteredPasswordIsValid = isEightChars(enteredPassword);

        setFormInputsValidity({
            login: enteredLoginIsValid,
            password: enteredPasswordIsValid,
        });

        const formIsValid =
            enteredLoginIsValid &&
            enteredPasswordIsValid;

        if (!formIsValid) {
            return;
        }
        await dispatch(sendSignInData(enteredLogin, enteredPassword,checked));
        navigate('/profile');
    }
    const loginControlClasses = classNames(classes['sign-in-input-wrapper'], {[classes.invalid]: !formInputsValidity.login});
    const passwordControlClasses = classNames(classes['sign-in-input-wrapper'], {[classes.invalid]: !formInputsValidity.password});

    return <div className={classes['form-sign-in-wrapper']}>
        <form className={classes['sign-in']} onSubmit={confirmHandler}>

            <label htmlFor='email'>Already signed up?</label>
            <div className={loginControlClasses}>
                <input type='email' placeholder='Login' ref={loginInputRef}/>
                {!formInputsValidity.login &&
                    <p className={classes['sign-in-small-text-error']}>Please enter email!</p>}
            </div>
            <div className={passwordControlClasses}>
                <input type='password' placeholder='Password' className={classes.password} ref={passwordInputRef}/>
                {!formInputsValidity.password &&
                    <p className={classes['sign-in-small-text-error']}>Please enter password!</p>}
            </div>
            <Checkbox onChange={checkedHandler}/>
            <div className={classes['login-btn']}>
                <Button w100>Login</Button>
            </div>
        </form>
    </div>
};
