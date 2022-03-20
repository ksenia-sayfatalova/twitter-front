import classes from "../SignUp/SignUp.module.css";
import {Button} from "../Button/Button";
import {useRef, useState} from "react";
import classNames from 'classnames';

const isEmpty = (value) => value.trim() === '';
const isEightChars = (value) => value.trim().length === 8;
const isEmail = (value) => value.includes('@');

export const SignUp = () => {
    const [formInputsValidity, setFormInputsValidity] = useState({
        firstName: true,
        secondName: true,
        location: true,
        email: true,
        password: true,
        confirmPassword: true
    });
    const firstNameInputRef = useRef();
    const secondNameInputRef = useRef();
    const locationInputRef = useRef();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const confirmPasswordInputRef = useRef();

    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredFirstName = firstNameInputRef.current.value;
        const enteredSecondName = secondNameInputRef.current.value;
        const enteredLocation = locationInputRef.current.value;
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        const enteredPasswordConfirm = confirmPasswordInputRef.current.value;

        const enteredFirstNameIsValid = !isEmpty(enteredFirstName);
        const enteredSecondNameIsValid = !isEmpty(enteredSecondName);
        const enteredLocationIsValid = !isEmpty(enteredLocation);
        const enteredEmailIsValid = isEmail(enteredEmail);
        const enteredPasswordIsValid = isEightChars(enteredPassword);
        const enteredPasswordConfirmIsValid = enteredPassword === enteredPasswordConfirm;

        setFormInputsValidity({
            firstName: enteredFirstNameIsValid,
            secondName: enteredSecondNameIsValid,
            location: enteredLocationIsValid,
            email: enteredEmailIsValid,
            password: enteredPasswordIsValid,
            confirmPassword: enteredPasswordConfirmIsValid
        });

        const formIsValid =
            enteredFirstNameIsValid &&
            enteredSecondNameIsValid &&
            enteredLocationIsValid &&
            enteredEmailIsValid &&
            enteredPasswordIsValid &&
            enteredPasswordConfirmIsValid;

        if (!formIsValid) {
            return;
        }
        console.log({
            firstName: enteredFirstName,
            secondName: enteredSecondName,
            location: enteredLocation,
            email: enteredEmail,
            password: enteredPassword,
            confirmPassword: enteredPasswordConfirm
        });
    };
    // const nameControlClasses = `${classes['valid-field']} ${
    //     formInputsValidity.firstName ? '' : classes.invalid
    // }`;
    const firstNameControlClasses = classNames(classes['input-wrapper'], { [classes.invalid]: !formInputsValidity.firstName });
    const secondNameControlClasses = classNames(classes['input-wrapper'], { [classes.invalid]: !formInputsValidity.secondName });
    const locationControlClasses = classNames(classes['input-wrapper'], { [classes.invalid]: !formInputsValidity.location });
    const emailControlClasses = classNames(classes['input-wrapper'], { [classes.invalid]: !formInputsValidity.email });
    const passwordControlClasses = classNames(classes['input-wrapper'], { [classes.invalid]: !formInputsValidity.password });
    const confirmPasswordControlClasses = classNames(classes['input-wrapper'], { [classes.invalid]: !formInputsValidity.confirmPassword });


    return <div className={classes['form-sign-up-wrapper']}>
        <h3 className={classes['sign-up-header']}> Sign Up</h3>
        <form className={classes['sign-up']} onSubmit={confirmHandler}>
            <div className={firstNameControlClasses}>
                <input className={classes['input-wrapper__input']} type='text' placeholder='First Name' id='firstName' ref={firstNameInputRef}/>
                {!formInputsValidity.firstName && <p className={classes['small-text-error']}>Please enter a valid name!</p>}
            </div>
            <div className={secondNameControlClasses}>
            <input className={classes['input-wrapper__input']} type='text' placeholder='Last Name' id='secondName' ref={secondNameInputRef}/>
                {!formInputsValidity.secondName && <p className={classes['small-text-error']}>Please enter a valid second name!</p>}
            </div>
            <div className={locationControlClasses}>
            <input className={classes['input-wrapper__input']} type='text' placeholder='Location' id='location' ref={locationInputRef}/>
                {!formInputsValidity.location && <p className={classes['small-text-error']}>Please enter location!</p>}
            </div>
            <div className={emailControlClasses}>
            <input className={classes['input-wrapper__input']} type='email' placeholder='Login' id='email' ref={emailInputRef}/>
                {!formInputsValidity.email && <p className={classes['small-text-error']}>Please enter email!</p>}
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