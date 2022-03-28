import {Fragment, useEffect} from "react";
import Header from "../../../components/layout/Header/Header";
import classes from './TweetDetailsPage.module.css';
import {SignUp} from "../../../components/SignUp/SignUp";
import {TweetDetails} from '../../../components/TweetDetails/TweetDetails';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {tweetListActions} from '../../../store/tweetList';

export const TweetDetailsPage = (props) => {
    // const tweets = useSelector((state) => state.tweetList.list);
    const params = useParams();
    const dispatch = useDispatch();
    // const tweet = tweets.find((item) => item.id === params.detailsId);
    const tweet = useSelector((state) => state.tweetList.tweetDetails);

// страница загрузилась, подгрузился твит
    useEffect(async () => {
        const token = localStorage.getItem('token');
        const response = await fetch(`http://localhost:3002/tweet/${params.detailsId}`, {
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

    }, []);
    if (!tweet) {
        return <p className={classes['no-tweet-wrapper']}>No tweet found!</p>;
    }
    return <Fragment>
        <Header/>
        <section className={classes['general-tweet-details-wrapper']}>
            <TweetDetails tweet={tweet}/>
        </section>
    </Fragment>
};
