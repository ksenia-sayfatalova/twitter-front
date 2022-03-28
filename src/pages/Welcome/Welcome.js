import Header from "../../components/layout/Header/Header";
import classes from './Welcome.module.css';

const Welcome = () => {
    return <div>
        <Header/>
       <p className={classes.welcome}> Welcome to the Guccitter! </p>
    </div>
};

export default Welcome;
