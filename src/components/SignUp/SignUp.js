import classes from "../SignUp/SignUp.module.css";
import {Button} from "../Button/Button";
import {useCallback, useRef, useState} from "react";
import classNames from 'classnames';
import {useNavigate} from "react-router-dom";

const isEmpty = (value) => value.trim() === '';
const isEightChars = (value) => value.trim().length === 8;
const isEmail = (value) => value.includes('@');

export const SignUp = () => {
    let navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [formInputsValidity, setFormInputsValidity] = useState({
        firstName: true,
        lastName: true,
        location: true,
        login: true,
        password: true,
        confirmPassword: true
    });
    const firstNameInputRef = useRef();
    const lastNameInputRef = useRef();
    const locationInputRef = useRef();
    const loginInputRef = useRef();
    const passwordInputRef = useRef();
    const confirmPasswordInputRef = useRef();

    const confirmHandler = async (event) => {
        event.preventDefault();

        const enteredFirstName = firstNameInputRef.current.value;
        const enteredLastName = lastNameInputRef.current.value;
        const enteredLocation = locationInputRef.current.value;
        const enteredLogin = loginInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        const enteredPasswordConfirm = confirmPasswordInputRef.current.value;

        const enteredFirstNameIsValid = !isEmpty(enteredFirstName);
        const enteredLastNameIsValid = !isEmpty(enteredLastName);
        const enteredLocationIsValid = !isEmpty(enteredLocation);
        const enteredLoginIsValid = isEmail(enteredLogin);
        const enteredPasswordIsValid = isEightChars(enteredPassword);
        const enteredPasswordConfirmIsValid = enteredPassword === enteredPasswordConfirm;

        setFormInputsValidity({
            firstName: enteredFirstNameIsValid,
            lastName: enteredLastNameIsValid,
            location: enteredLocationIsValid,
            login: enteredLoginIsValid,
            password: enteredPasswordIsValid,
            confirmPassword: enteredPasswordConfirmIsValid
        });

        const formIsValid =
            enteredFirstNameIsValid &&
            enteredLastNameIsValid &&
            enteredLocationIsValid &&
            enteredLoginIsValid &&
            enteredPasswordIsValid &&
            enteredPasswordConfirmIsValid;

        if (!formIsValid) {
            return;
        }


            setIsLoading(true);
            setError(null);
            try {
                const response = await  fetch('http://localhost:3002/User/', {
                    method: 'POST',
                    body: JSON.stringify({
                        firstName: enteredFirstName,
                        lastName: enteredLastName,
                        location: enteredLocation,
                        login: enteredLogin,
                        password: enteredPassword
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                if (!response.ok) {
                    throw new Error('Something went wrong!');
                }

                const data = await response.json();

            } catch (error) {
                setError(error.message);
            }
            setIsLoading(false);
        navigate('/signin')
    };
    // const nameControlClasses = `${classes['valid-field']} ${
    //     formInputsValidity.firstName ? '' : classes.invalid
    // }`;
    const firstNameControlClasses = classNames(classes['input-wrapper'], { [classes.invalid]: !formInputsValidity.firstName });
    const lastNameControlClasses = classNames(classes['input-wrapper'], { [classes.invalid]: !formInputsValidity.lastName });
    const locationControlClasses = classNames(classes['input-wrapper'], { [classes.invalid]: !formInputsValidity.location });
    const loginControlClasses = classNames(classes['input-wrapper'], { [classes.invalid]: !formInputsValidity.login });
    const passwordControlClasses = classNames(classes['input-wrapper'], { [classes.invalid]: !formInputsValidity.password });
    const confirmPasswordControlClasses = classNames(classes['input-wrapper'], { [classes.invalid]: !formInputsValidity.confirmPassword });


    return <div className={classes['form-sign-up-wrapper']}>
        <h3 className={classes['sign-up-header']}> Sign Up</h3>
        <form className={classes['sign-up']} onSubmit={confirmHandler}>
            <div className={firstNameControlClasses}>
                <input className={classes['input-wrapper__input']} type='text' placeholder='First Name' id='firstName' ref={firstNameInputRef}/>
                {!formInputsValidity.firstName && <p className={classes['small-text-error']}>Please enter a valid name!</p>}
            </div>
            <div className={lastNameControlClasses}>
            <input className={classes['input-wrapper__input']} type='text' placeholder='Last Name' id='secondName' ref={lastNameInputRef}/>
                {!formInputsValidity.lastName && <p className={classes['small-text-error']}>Please enter a valid second name!</p>}
            </div>
            <div className={locationControlClasses}>
            <input className={classes['input-wrapper__input']} type='text' placeholder='Location' id='location' ref={locationInputRef}/>
                {!formInputsValidity.location && <p className={classes['small-text-error']}>Please enter location!</p>}
            </div>
            <div className={loginControlClasses}>
            <input className={classes['input-wrapper__input']} type='email' placeholder='Login' id='email' ref={loginInputRef}/>
                {!formInputsValidity.login && <p className={classes['small-text-error']}>Please enter email!</p>}
            </div>
            <div className={passwordControlClasses}>
            <input className={classes['input-wrapper__input']} type='password' placeholder='Password' id='password' ref={passwordInputRef}/>
                {!formInputsValidity.password && <p className={classes['small-text-error']}>Please enter password!</p>}
            </div>
            <div className={confirmPasswordControlClasses}>
            <input className={classes['input-wrapper__input']} type='password' placeholder='Confirm Password' id='confirmPassword' ref={confirmPasswordInputRef}/>
                {!formInputsValidity.confirmPassword && <p className={classes['small-text-error']}>Please confirm password!</p>}

            </div>
            <Button w100>Sign Up</Button>
        </form>
    </div>
};
