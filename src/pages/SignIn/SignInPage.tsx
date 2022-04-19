import {SignIn} from "../../components/SignIn/SignIn";
import Header from "../../components/layout/Header/Header";
import {Fragment} from "react";
import classes from "./SignInPage.module.css";

export const SignInPage = () => {
    return <Fragment>
        <Header/>
        <section className={classes['general-sign-in-wrapper']}>
            <SignIn/>
        </section>
    </Fragment>
};