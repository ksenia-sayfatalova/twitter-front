import {Fragment, useEffect} from "react";
import like from '../../assets/like-svgrepo-com.svg';
import avatar from '../../assets/Ellipse 1.png';
import classes from './TweetDetails.module.css';
import {dateFormat} from "../../utils/dateFormat";
import {LikeImage} from "../LikeImage/LikeImage";
import {useDispatch, useSelector} from "react-redux";
import {tweetListActions} from "../../store/tweetList";


export const TweetDetails = (props) => {
    // const tweetDetails = useSelector((state) => state.tweetList.tweetDetails);
    const userId = useSelector((state) => state.user.userInfo.id);
    const dispatch = useDispatch();



    //  const isLikedTweet =  tweetDetails.likes.find((item) => item.id === userId);
    const isLikedTweet = props.tweet.likes.some((item) => item.id === userId);

    const clickHandler = async () => {
        const token = localStorage.getItem('token');
        if (isLikedTweet) {
            try {
                const response = await fetch(`http://localhost:3002/tweet/${props.tweet._id}/like`, {
                    method: 'DELETE',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                })
                if (!response.ok) {
                    throw new Error('Something went wrong!');
                }

                const data = await response.json();
                console.log(data);

            } catch (error) {
            }

        } else {
            try {
                const response = await fetch(`http://localhost:3002/tweet/${props.tweet._id}/like`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                })
                if (!response.ok) {
                    throw new Error('Something went wrong!');
                }

                const data = await response.json();
                console.log(data);
            } catch (error) {
            }
        }


        //---------------------------- получение твита по id
        const response = await fetch(`http://localhost:3002/tweet/${props.tweet._id}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
        if (!response.ok) {
            throw new Error('Something went wrong!');
        }

        const data = await response.json();
        dispatch(tweetListActions.setTweet(data));
        // }

    };
    return <Fragment>
        <div className={classes.details}>
            <div className={classes['details-inner-wrapper']}>
                <div className={classes['details-wrapper']}>
                    <div className={classes['details-avatar-wrapper']}>
                        <div className={classes['details-avatar']}>
                            <img src={avatar} className={classes['details-avatar']}/>
                        </div>
                        <div className={classes['details-name-wrapper']}>
                            <span className={classes['details-name']}>{props.tweet.author.firstName}</span>
                            <span className={classes['details-user']}>{props.tweet.author.login}</span>
                        </div>
                    </div>
                    <div className={classes['details-text']}>{props.tweet.message}</div>
                    <div className={classes['details-date']}>
                        <span>17:26 - </span>
                        <span>{dateFormat(new Date(props.tweet.createdAt))}</span>
                    </div>
                    <div className={classes['details-like']}>
                        <span className={classes['details-like-amount']}>15</span>
                        <span className={classes['details-like-text']}>Likes</span>
                    </div>
                    <LikeImage likeAmount={props.tweet.likes.length} onClick={clickHandler}/>
                </div>
            </div>
        </div>
    </Fragment>

};


