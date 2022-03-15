import React from 'react';
import {Route , Routes} from 'react-router-dom';
import 'normalize.css';
import './App.css';
import {ProfilePage} from "./pages/Profile/ProfilePage";
import {SignInPage} from "./pages/SignIn/SignInPage";

function App() {
    return <Routes>
        <Route path='/profile' element={<ProfilePage/>}>  </Route>
            <Route path='/signin' element={<SignInPage/>}>
        </Route>
    </Routes>

}

export default App;
