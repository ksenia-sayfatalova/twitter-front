import classes from "../SignUp/SignUp.module.css";
import {Button} from "../Button/Button";
import {useCallback, useEffect, useRef, useState} from "react";
import classNames from 'classnames';
import {useNavigate} from "react-router-dom";
import {useForm, SubmitHandler } from "react-hook-form";

const isEmpty = (value:string) => value.trim() === '';
const isEightChars = (value:string) => value.trim().length === 8;
const isEmail = (value:string) => value.includes('@');
interface FormValues {
    firstName: string,
    lastName: string,
    location: string,
    login: string,
    password: string,
    confirmPassword: string
};
export const SignUp = () => {
    let navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    // const [error, setError] = useState(null);
    // const [formInputsValidity, setFormInputsValidity] = useState({
    //     firstName: true,
    //     lastName: true,
    //     location: true,
    //     login: true,
    //     password: true,
    //     confirmPassword: true
    // });
    // const firstNameInputRef = useRef();
    // const lastNameInputRef = useRef();
    // const locationInputRef = useRef();
    // const loginInputRef = useRef();
    // const passwordInputRef = useRef();
    // const confirmPasswordInputRef = useRef();
    const {register, handleSubmit,getFieldState, formState: {errors }} = useForm<FormValues>({
        mode: "onChange",
    });
    // //изначально устанавливает пустые значения
    // useEffect(() => {
    //     reset({
    //         firstName: null,
    //         lastName: null,
    //         location: null,
    //         login: null,
    //         password: null,
    //         confirmPassword: null
    //     });
    //     //и после загрузки страницы запускает валидацию. за счет этого кнопка disabled
    //     //setTimeout работает один раз
    //     setTimeout(() => {
    //         trigger();
    //     }, 0);
    // }, [reset]);

    const onSubmit: SubmitHandler <FormValues> = async (enteredValues) => {
        // event.preventDefault();
        //
        // const enteredFirstName = firstNameInputRef.current.value;
        // const enteredLastName = lastNameInputRef.current.value;
        // const enteredLocation = locationInputRef.current.value;
        // const enteredLogin = loginInputRef.current.value;
        // const enteredPassword = passwordInputRef.current.value;
        // const enteredPasswordConfirm = confirmPasswordInputRef.current.value;
        //
        // const enteredFirstNameIsValid = !isEmpty(enteredFirstName);
        // const enteredLastNameIsValid = !isEmpty(enteredLastName);
        // const enteredLocationIsValid = !isEmpty(enteredLocation);
        // const enteredLoginIsValid = isEmail(enteredLogin);
        // const enteredPasswordIsValid = isEightChars(enteredPassword);
        // const enteredPasswordConfirmIsValid = enteredPassword === enteredPasswordConfirm;
        //
        // setFormInputsValidity({
        //     firstName: enteredFirstNameIsValid,
        //     lastName: enteredLastNameIsValid,
        //     location: enteredLocationIsValid,
        //     login: enteredLoginIsValid,
        //     password: enteredPasswordIsValid,
        //     confirmPassword: enteredPasswordConfirmIsValid
        // });
        //
        // const formIsValid =
        //     enteredFirstNameIsValid &&
        //     enteredLastNameIsValid &&
        //     enteredLocationIsValid &&
        //     enteredLoginIsValid &&
        //     enteredPasswordIsValid &&
        //     enteredPasswordConfirmIsValid;
        //
        // if (!formIsValid) {
        //     return;
        // }

        setIsLoading(true);
        //setError(null);
        try {
            const response = await fetch('http://localhost:3002/User/', {
                method: 'POST',
                body: JSON.stringify({
                    firstName: enteredValues.firstName,
                    lastName: enteredValues.lastName,
                    location: enteredValues.location,
                    login: enteredValues.login,
                    password: enteredValues.password,
                    confirmPassword: enteredValues.password
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
           // setError(error.message);
        }
        setIsLoading(false);
        navigate('/signin')
    };
    // const nameControlClasses = `${classes['valid-field']} ${
    //     formInputsValidity.firstName ? '' : classes.invalid
    // }`;

    const firstNameControlClasses = classNames(classes['input-wrapper'], {[classes.invalid]: errors.firstName});
    const lastNameControlClasses = classNames(classes['input-wrapper'], {[classes.invalid]: errors.lastName});
    const locationControlClasses = classNames(classes['input-wrapper'], {[classes.invalid]: errors.location});
    const loginControlClasses = classNames(classes['input-wrapper'], {[classes.invalid]: errors.login});
    const passwordControlClasses = classNames(classes['input-wrapper'], {[classes.invalid]: errors.password});
    const confirmPasswordControlClasses = classNames(classes['input-wrapper'], {[classes.invalid]: errors.confirmPassword});

    return <div className={classes['form-sign-up-wrapper']}>
        <h3 className={classes['sign-up-header']}> Sign Up</h3>
        <form className={classes['sign-up']} onSubmit={handleSubmit(onSubmit)}>
            <div className={firstNameControlClasses}>
                <input className={classes['input-wrapper__input']} type='text' placeholder='First Name'
                       id='firstName' {...register('firstName', {required: true})} />
                {errors.firstName &&
                    <p className={classes['small-text-error']}>Please enter a valid name!</p>}

            </div>
            <div className={lastNameControlClasses}>
                <input className={classes['input-wrapper__input']} type='text' placeholder='Last Name'
                       id='secondName' {...register('lastName', {required: true})} />
                {errors.lastName &&
                    <p className={classes['small-text-error']}>Please enter a valid second name!</p>}
            </div>
            <div className={locationControlClasses}>
                <input className={classes['input-wrapper__input']} type='text' placeholder='Location'
                       id='location' {...register('location', {required: true})} />
                {errors.location && <p className={classes['small-text-error']}>Please enter location!</p>}
            </div>
            <div className={loginControlClasses}>
                <input className={classes['input-wrapper__input']} placeholder='Login'
                       id='email' {...register('login', { validate: isEmail} )} />
                {errors.login && <p className={classes['small-text-error']}>Please enter email!</p>}
            </div>
            <div className={passwordControlClasses}>
                <input className={classes['input-wrapper__input']} type='password' placeholder='Password'
                       id='password' {...register('password', { validate: isEightChars})} />
                {errors.password && <p className={classes['small-text-error']}>Please enter password!</p>}
            </div>
            <div className={confirmPasswordControlClasses}>
                <input className={classes['input-wrapper__input']} type='password' placeholder='Confirm Password'
                       id='confirmPassword'  {...register('password', {required: true})}/>
                {errors.confirmPassword &&
                    <p className={classes['small-text-error']}>Please confirm password!</p>}

            </div>
            <Button w100>Sign Up</Button>
        </form>
    </div>
};
