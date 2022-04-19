import React, {Fragment, useEffect, useState} from "react";
import like from '../../assets/like-svgrepo-com.svg';
import avatar from '../../assets/Ellipse 1.png';
import classes from './TweetDetails.module.css';
import {dateFormat} from "../../utils/dateFormat";
import {LikeImage} from "../LikeImage/LikeImage";
import {useDispatch, useSelector} from "react-redux";
import {tweetListActions} from "../../store/tweetList";
import {Button} from "../Button/Button";
import {useNavigate} from "react-router-dom";
import backImg from './../../assets/back.svg'
import ReactModal from "react-modal";
import {deleteLike, setLike} from "../../store/tweet-actions";
import bin from './../../assets/bin.svg'
import {IDetailedTweet} from "../../models/interfaces/IDetailedTweet";
import {IUser} from "../../models/interfaces/IUser";
import {RootState} from "../../store";
import {IRootStore} from "../../models/interfaces/store";

interface TweetDetailsProps {
    loading?: boolean;
    tweet: IDetailedTweet;
}
export const TweetDetails:React.FC<TweetDetailsProps> = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoading = props.loading;
    const [modalIsOpen, setIsOpen] = useState<boolean>(false);
    const userInfo = useSelector((state: IRootStore) => state.user.userInfo);
    const isLikedTweet = props.tweet.likes?.some((item:IUser) => item.id === userInfo.id);
    const clickHandler = async () => {
        const token = localStorage.getItem('token');
        if (isLikedTweet) {
            dispatch(deleteLike(props.tweet._id, userInfo));
        } else {
            dispatch(setLike(props.tweet._id, userInfo));
        }
    };
    const backButtonHandler = () => {
        navigate('/profile');
    };
    const deleteTweetHandler = async () => {
        const token = localStorage.getItem('token');
        const tweetId = props.tweet._id;
        console.log(tweetId);
        try {
            const response = await fetch(`http://localhost:3002/tweet/${tweetId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            })
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const data = await response.json();
            dispatch(tweetListActions.deleteTweet(tweetId));
            console.log(data);
            console.log(tweetId);

        } catch (error) {
        }
        setIsOpen(false);
        navigate('/profile');
    };

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return <Fragment>
        <div className={classes.details}>
            <div className={classes['details-inner-wrapper']}>
                {!isLoading && props.tweet._id && <div className={classes['details-wrapper']}>
                    <div className={classes['button-wrapper']}>
                        <Button onClick={backButtonHandler} size='small'>
                            <div className={classes['back-content-wrapper']}>
                                <div className={classes['back-image-wrapper']}>
                                    <img src={backImg}/>
                                </div> Back
                            </div>
                        </Button>
                    </div>
                    <div className={classes['details-avatar-wrapper']}>
                        <div className={classes['details-avatar']}>
                            <img src={avatar} className={classes['details-avatar']}/>
                        </div>
                        <div className={classes['details-name-wrapper']}>
                            <span
                                className={classes['details-name']}>{props.tweet.author.firstName}{props.tweet.author.lastName}</span>
                            <span className={classes['details-user']}>{props.tweet.author.login}</span>
                        </div>
                    </div>
                    <div className={classes['details-text']}>{props.tweet.message}</div>
                    <div className={classes['details-date']}>
                        <div className={classes['details-date-time']}>
                            <span>17:26 - </span>
                            <span>{dateFormat(new Date(props.tweet.createdAt))}</span>
                        </div>
                        <div className={classes['delete-image']}>
                            {/*<img src={bin} onClick={openModal}/>*/}
                            <div className={classes.deleteButtonWrapper} onClick={openModal}>
                                <svg viewBox="0 0 2050 2050"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path className={classes.fillGray}
                                          d="M1554.9 602.8H508.2a45 45 0 0 0 0 90h84.1l64.9 768.3a156 156 0 0 0 155.3 142.7h438.1a155.8 155.8 0 0 0 155.3-142.7l64.9-768.3h84.1a45 45 0 0 0 0-90Z"/>
                                    <path className={classes.fillWhite}
                                        d="M929.8 1422.6a45 45 0 0 1-44.8-41l-44.2-505.2a45 45 0 0 1 89.6-7.8l44.3 505.1a45.1 45.1 0 0 1-40.9 48.8Zm203.5 0h-3.9a45 45 0 0 1-40.9-48.8l44.2-505.1a45 45 0 0 1 89.7 7.8l-44.3 505.2a44.9 44.9 0 0 1-44.8 40.9Z"
                                        />
                                    <path className={classes.fillGray}
                                          d="M1155.4 536.2H907.7a45 45 0 1 1 0-90h247.7a45 45 0 0 1 0 90Z"/>
                                </svg></div>
                            <ReactModal
                                isOpen={modalIsOpen}
                                onRequestClose={closeModal}
                                className={classes.Modal}
                                overlayClassName={classes.Overlay}>
                                <div className={classes['modal-content']}>
                                    <p>Are you sure?</p>
                                    <Button onClick={deleteTweetHandler}>Yes</Button>
                                    <Button onClick={closeModal} modal>No</Button>
                                </div>
                            </ReactModal>
                        </div>
                    </div>
                    <div className={classes['details-like']}>
                        <span className={classes['details-like-amount']}>{props.tweet.likes.length}</span>
                        <span className={classes['details-like-text']}>Likes</span>
                    </div>
                    <LikeImage likeAmount={props.tweet.likes.length} onClick={clickHandler} isLiked={isLikedTweet}/>
                </div>}
                {isLoading && <p className={classes['details-wrapper']}>Loading...</p>}
            </div>
        </div>
    </Fragment>

};


