import logo from '../Assets/Logo.svg';
import {Button} from '../Components/Button';
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <div className="section-wrapper">
                <div className={classes['inner-wrapper']}>
                    <div className={classes.logo}>
                        <img src={logo}/>
                        <p>Guccitter</p>
                    </div>
                    <div>
                        <Button secondaryBtn>Login</Button>
                        <Button>Sign up</Button>
                    </div>
                </div>
            </div>
        </header>
    );
};
export default Header;