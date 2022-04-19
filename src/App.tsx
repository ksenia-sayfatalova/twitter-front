import React, {useEffect, useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import 'normalize.css';
import './App.css';
import {ProfilePage} from "./pages/Profile/ProfilePage";
import {SignInPage} from "./pages/SignIn/SignInPage";
import {SignUpPage} from "./pages/SignUp/SignUpPage";
import {TweetDetailsPage} from './pages/Profile/TweetDetails/TweetDetailsPage';
import Welcome from './pages/Welcome/Welcome'
import {useDispatch, useSelector} from "react-redux";
import {userActions} from "./store/user";



function App() {
    const dispatch = useDispatch();
    const [isReady, setIsReady] = useState(false);
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token !== null) {
            console.log('SET TOKEN');
            dispatch(userActions.setToken(token));
        }
        setIsReady(true);
    }, [])
    return (isReady ? <Routes>
        <Route path='/' element={<SignInPage/>}> </Route>
        <Route path='/profile' element={<ProfilePage/>}> </Route>
        <Route path='/signin' element={<SignInPage/>}> </Route>
        <Route path='/signup' element={<SignUpPage/>}> </Route>
        <Route path='/details/:detailsId' element={<TweetDetailsPage/>}> </Route>
    </Routes> : null)

}

export default App;
