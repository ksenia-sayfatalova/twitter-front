import {Button} from "../Button/Button";
import classes from "./SignIn.module.css";
import classNames from 'classnames';
import {Checkbox} from "../Checkbox/Checkbox";
import {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {userActions} from "../../store/user";
import {SendSignInData} from "../../store/tweet-actions";
import {useDispatch} from "react-redux";


const isEightChars = (value) => value.trim().length === 8;
const isEmail = (value) => value.includes('@');

export const SignIn = (props) => {
    const dispatch= useDispatch();
    let navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [formInputsValidity, setFormInputsValidity] = useState({
        login: true,
        password: true,
    });
    const loginInputRef = useRef();
    const passwordInputRef = useRef();
    const token = localStorage.getItem('token');
    useEffect(() => {
        if (token) {
            navigate('/profile');
        } else {
            navigate('/signin');
        }
    }, [token]);


    const confirmHandler = async (event) => {
        event.preventDefault();

        const enteredLogin = loginInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

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
        // setIsLoading(true);
        // setError(null);

        await dispatch(SendSignInData(enteredLogin,enteredPassword));

        navigate('/profile');

        // try {
        //     const response = await fetch('http://localhost:3002/auth/login', {
        //         method: 'POST',
        //         body: JSON.stringify({
        //             login: enteredLogin,
        //             password: enteredPassword
        //         }),
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //     })
        //     if (!response.ok) {
        //         throw new Error('Something went wrong!');
        //     }
        //     const data = await response.json();
        //     console.log(data);
        //     localStorage.setItem('token', data.access_token);
        //
        //     setIsLoading(false);
        //     navigate('/profile')
        //
        // } catch (error) {
        //     setError(error.message);
        // }
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
            <Checkbox/>
            <div className={classes['login-btn']}>
                <Button w100>Login</Button>
            </div>
        </form>
    </div>
};
