import {Button} from "../../../components/Button/Button";
import {TweetsList} from "../TweetsList/TweetsList";
import {Fragment, useEffect, useRef, useState} from "react";
import classes from './TweetForm.module.css'
import {tweetListActions} from "../../../store/tweetList";
import {fetchTweetsData} from "../../../store/tweet-actions";
import {useDispatch, useSelector} from "react-redux";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import {IRootStore} from "../../../models/interfaces/store";
import {ITweet} from "../../../models/interfaces/ITweet";
import {isNullOrUndefined} from "../../../utils/isNullOrUndefined";

// const isEmpty = (value:null) => value.trim().length === '';
// const isEmptyArray = array => array.length === 0;

type FormValues = {
    message: string;
    hashtags: string;
};

export const TweetForm = () => {
    const dispatch = useDispatch();
    const token = useSelector((state: IRootStore) => state.user.token);
    const {register, handleSubmit, formState: {errors}, reset, trigger} = useForm<FormValues>({
        mode: "onChange",
    });
    // изначально устанавливает пустые значения
    useEffect(() => {
        reset({
            message: '',
            hashtags: ''
        });
        //и после загрузки страницы запускает валидацию. за счет этого кнопка disabled
        //setTimeout работает один раз
        setTimeout(() => {
            trigger();
        }, 0);
    }, [reset]);


    // const tweetInputRef = useRef();
    // const hashtagInputRef = useRef();
    // const [formInputsValidity, setFormInputsValidity] = useState({
    //     message: false,
    //     hashtags: false
    // });
    //
    // const isFormValid = formInputsValidity.message && formInputsValidity.hashtags;
    //
    // console.log(formInputsValidity)

    // const tweetHandler = async (event) => {
    //     // event.preventDefault();
    //     // const enteredTweet = tweetInputRef.current.value;
    //     // const enteredHashtag = hashtagInputRef.current.value.split(' ');
    //     //
    //     // const enteredTweetIsValid = !isEmpty(enteredTweet);
    //     // const enteredHashtagIsValid = !isEmptyArray(enteredHashtag);
    //     //
    //     // setFormInputsValidity({
    //     //     message: enteredTweetIsValid,
    //     //     hashtags: enteredHashtagIsValid
    //     // });
    //     // const formIsValid = enteredTweetIsValid && enteredHashtagIsValid;
    //     //
    //     // if (!formIsValid) {
    //     //     return
    //     // }
    //     try {
    //         const token = localStorage.getItem('token');
    //         const response = await fetch('http://localhost:3002/tweet', {
    //             method: 'POST',
    //             body: JSON.stringify({
    //                 message: enteredTweet,
    //                 hashtags: enteredHashtag
    //             }),
    //             headers: {
    //                 'Authorization': `Bearer ${token}`,
    //                 'Content-Type': 'application/json'
    //             },
    //         })
    //         if (!response.ok) {
    //             throw new Error('Something went wrong!');
    //         }
    //
    //         const data = await response.json();
    //
    //         //dispatch(fetchTweetsData());
    //         dispatch(tweetListActions.addTweet(data));
    //
    //     } catch (error) {
    //         //setError(error.message);
    //     }
    // };

    const onSubmit: SubmitHandler<FormValues> = async (enteredValues) => {
        console.log(enteredValues)
        const enteredHashtag = enteredValues.hashtags.split(' ');
        try {

            const response = await fetch('http://localhost:3002/tweet', {
                method: 'POST',
                body: JSON.stringify({
                    message: enteredValues.message,
                    hashtags: enteredHashtag
                }),
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
            })
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const data = await response.json();

            //dispatch(fetchTweetsData());
            dispatch(tweetListActions.addTweet(data));

        } catch (error) {
            //setError(error.message);
        }
        reset({
            message: '',
            hashtags: ''
        });
        setTimeout(() => {
            trigger(); //ЗАПУСКАЕТ ВАЛИДАЦИЮ НА ФОРМЕ
        }, 0);

    };


    return (
        <form className={classes['tweet-form']} onSubmit={handleSubmit(onSubmit)}>
            <input className={classes['tweet-input']} type='text'
                   placeholder='Whats happening?' {...register('message', {required: true})} />
            <input className={classes['hashtag-input']} type='text'
                   placeholder='write hashtags' {...register('hashtags', {required: true})} />
            <div className={classes['button-wrapper']}>
                <Button disabled={!isNullOrUndefined(errors.message) || !isNullOrUndefined(errors.hashtags)}>Tweet</Button>
            </div>
        </form>
    );
};
