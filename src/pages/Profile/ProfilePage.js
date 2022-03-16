import React, {Fragment} from "react";
import Header from "../../components/layout/Header/Header";
import {Cover} from "./Cover/Cover";
import {Profile} from "./Profile/Profile";

export const ProfilePage = (props) => {
    return <Fragment>
        <Header/>
        <Cover/>
        <Profile items={props.items}/>
    </Fragment>
}