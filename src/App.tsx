import React from 'react';
import {Route , Routes} from 'react-router-dom';
import 'normalize.css';
import './App.css';
import {ProfilePage} from "./pages/Profile/ProfilePage";
import {SignInPage} from "./pages/SignIn/SignInPage";
import {SignUpPage} from "./pages/SignUp/SignUpPage";
import {TweetDetailsPage} from './pages/Profile/TweetDetails/TweetDetailsPage';


function App() {
    return <Routes>
        <Route path='/profile' element={<ProfilePage/>}>  </Route>
            <Route path='/signin' element={<SignInPage/>}> </Route>
                <Route path='/signup' element={<SignUpPage/>}>  </Route>
        <Route path='/details/:detailsId' element={<TweetDetailsPage/>}>  </Route>


    </Routes>

}

export default App;
