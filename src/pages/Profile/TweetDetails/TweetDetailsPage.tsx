import {Fragment, useEffect, useState} from "react";
import Header from "../../../components/layout/Header/Header";
import classes from './TweetDetailsPage.module.css';
import {SignUp} from "../../../components/SignUp/SignUp";
import {TweetDetails} from '../../../components/TweetDetails/TweetDetails';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {tweetListActions} from '../../../store/tweetList';
import {IRootStore} from "../../../models/interfaces/store";

export const TweetDetailsPage = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const tweet = useSelector((state:IRootStore) => state.tweetList.tweetDetails);
    const token = useSelector((state:IRootStore)=> state.user.token);

    useEffect( () => {
        // страница загрузилась, подгрузился твит
        setIsLoading(true);
        const fetchData = async() => {
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
        };
        fetchData();
        setIsLoading(false);

        return () => {
            console.log('destroy')
        };
    }, []);

    if (!tweet) {
        return <p className={classes['no-tweet-wrapper']}>No tweet found!</p>;
    }

    return <Fragment>
        <Header/>
        <section className={classes['general-tweet-details-wrapper']}>
            <TweetDetails tweet={tweet}  loading={isLoading}/>
        </section>
    </Fragment>
};
