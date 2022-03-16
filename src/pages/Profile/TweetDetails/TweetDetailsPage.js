import {Fragment} from "react";
import Header from "../../../components/layout/Header/Header";
import classes from './TweetDetailsPage.module.css';
import {SignUp} from "../../../components/SignUp/SignUp";
import {TweetDetails} from '../../../components/TweetDetails/TweetDetails';
import {useParams} from "react-router-dom";

export const TweetDetailsPage = (props) => {
    const params = useParams();
    const tweet = props.items.find((item) => item.id === params.detailsId);
    if (!tweet) {
        return <p className={classes['no-tweet-wrapper']}>No quote found!</p>;
    }
    return <Fragment>
        <Header/>
        <section className={classes['general-tweet-details-wrapper']}>
            <TweetDetails name={tweet.name} user={tweet.user} date={tweet.date} text={tweet.text}/>
        </section>
    </Fragment>
};