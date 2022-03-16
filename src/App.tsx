import React from 'react';
import {Route , Routes} from 'react-router-dom';
import 'normalize.css';
import './App.css';
import {ProfilePage} from "./pages/Profile/ProfilePage";
import {SignInPage} from "./pages/SignIn/SignInPage";
import {SignUpPage} from "./pages/SignUp/SignUpPage";
import {TweetDetailsPage} from './pages/Profile/TweetDetails/TweetDetailsPage';
const DUMMY_TWEETS = [
    {
        id: 't1',
        name: 'Ksenia Tsarenko',
        user: '@ksyu.sayfatalova',
        date: new Date('1995-12-17'),
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        id: 't2',
        name: 'Ksenia Tsarenko',
        user: '@ksyu.sayfatalova',
        date: new Date('1995-12-17'),
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        id: 't3',
        name: 'Ksenia Tsarenko',
        user: '@ksyu.sayfatalova',
        date: new Date('1995-12-17'),
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        id: 't4',
        name: 'Ksenia Tsarenko',
        user: '@ksyu.sayfatalova',
        date: new Date('1995-12-17'),
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        id: 't5',
        name: 'Ksenia Tsarenko',
        user: '@ksyu.sayfatalova',
        date: new Date('1995-12-17'),
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
];

function App() {
    return <Routes>
        <Route path='/profile' element={<ProfilePage items={DUMMY_TWEETS}/>}>  </Route>
            <Route path='/signin' element={<SignInPage/>}> </Route>
                <Route path='/signup' element={<SignUpPage/>}>  </Route>
        <Route path='/details/:detailsId' element={<TweetDetailsPage items={DUMMY_TWEETS}/>}>  </Route>


    </Routes>

}

export default App;
