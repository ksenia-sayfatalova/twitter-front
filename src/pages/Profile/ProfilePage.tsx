import React, {Fragment, useEffect} from "react";
import Header from "../../components/layout/Header/Header";
import {Cover} from "./Cover/Cover";
import {Profile} from "./Profile/Profile";
import {useDispatch, useSelector} from "react-redux";
import {userActions} from "../../store/user";
import {useNavigate} from "react-router-dom";
import {fetchProfileData} from "../../store/tweet-actions";
import {IUserStore} from "../../models/interfaces/store/IUserStore";
import {IRootStore} from "../../models/interfaces/store";



export const ProfilePage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSelector((state:IRootStore)=> state.user.token);

    console.log('GET TOKEN');

    useEffect(() => {
        if (token != null) {
        dispatch(fetchProfileData());
        } else {
            navigate('/signin');
        }
    }, []);

    return <Fragment>
        <Header/>
        <Cover/>
        <Profile/>
    </Fragment>
}
