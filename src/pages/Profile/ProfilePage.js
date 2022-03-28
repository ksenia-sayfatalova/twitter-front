import React, {Fragment, useEffect} from "react";
import Header from "../../components/layout/Header/Header";
import {Cover} from "./Cover/Cover";
import {Profile} from "./Profile/Profile";
import {useDispatch, useSelector} from "react-redux";
import {userActions} from "../../store/user";
import {useNavigate} from "react-router-dom";
import {fetchProfileData} from "../../store/tweet-actions";



export const ProfilePage = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token != null) {
        dispatch(fetchProfileData());
        } else {
            navigate('/profile');
        }
    }, [dispatch]);

    // useEffect(async () => {
    //     const token = localStorage.getItem('token');
    //     if (token != null) {
    //         try {
    //             const response = await  fetch('http://localhost:3002/user/', {
    //                 method: 'GET',
    //                 headers: {
    //                     'Authorization': `Bearer ${token}`,
    //                 },
    //             })
    //             if (!response.ok) {
    //                 throw new Error('Something went wrong!');
    //             }
    //
    //             const data = await response.json();
    //             console.log(data);
    //             dispatch(userActions.login(data));
    //
    //         } catch (error) {
    //             //setError(error.message);
    //         }
    //     } else {
    //         navigate('/signin');
    //     }
    // }, [])
    return <Fragment>
        <Header/>
        <Cover/>
        <Profile/>
    </Fragment>
}
