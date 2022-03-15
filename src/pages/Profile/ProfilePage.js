import React, {Fragment} from "react";
import Header from "../../components/layout/Header/Header";
import {Cover} from "./Cover/Cover";
import {Profile} from "./Profile/Profile";

export const ProfilePage = () => {
    return <Fragment>
        <Header/>
        <Cover/>
        <Profile/>
    </Fragment>
}