import {SignUp} from "../../components/SignUp/SignUp";
import Header from "../../components/layout/Header/Header";
import {Fragment} from "react";
import classes from "./SignUpPage.module.css";

export const SignUpPage = () => {
    return <Fragment>
        <Header/>
        <section className={classes['general-sign-up-wrapper']}>
            <SignUp/>
        </section>
    </Fragment>
};