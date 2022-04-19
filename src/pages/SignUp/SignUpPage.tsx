import {SignUp} from "../../components/SignUp/SignUp";
import Header from "../../components/layout/Header/Header";
import {Fragment} from "react";

export const SignUpPage = () => {
    return <Fragment>
        <Header/>
        <section className='general-sign-up-wrapper'>
            <SignUp/>
        </section>
    </Fragment>
};
