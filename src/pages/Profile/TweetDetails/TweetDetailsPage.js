import {Fragment} from "react";
import Header from "../../../components/layout/Header/Header";
import classes from './TweetDetailsPage.module.css';
import {SignUp} from "../../../components/SignUp/SignUp";
import {TweetDetails} from '../../../components/TweetDetails/TweetDetails';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {tweetListActions} from '../../../store/tweetList';

export const TweetDetailsPage = (props) => {
    const tweets = useSelector((state) => state.tweetList.tweets);
    const params = useParams();
    const tweet = tweets.find((item) => item.id === params.detailsId);

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