import logo from '../../../assets/Logo.svg';
import {Button} from '../../Button/Button';
import classes from './Header.module.css';
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {userActions} from "../../../store/user";


const Header = (props) => {
    const id = useSelector((state) => state.user.userInfo.id);
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logoutHandler = () => {
        localStorage.removeItem('token');
        dispatch(userActions.clearUserInfo());
        navigate('/signin', {replace: true});
    };

    return (
        <header className={classes.header}>
            <div className="section-wrapper">
                <div className={classes['inner-wrapper']}>
                    <NavLink to='/'>
                        <div className={classes.logo}>
                            <img className={classes['logo-img']} src={logo}/>
                            <p>Guccitter</p>
                        </div>
                    </NavLink>
                    <div className={classes['Button-wrapper']}>
                        {!id && <NavLink to='/signin'><Button secondaryBtn>Login</Button></NavLink>}
                        {!id && <NavLink to='/signup'><Button>Sign up</Button></NavLink>}
                        {id && <Button onClick={logoutHandler}>Logout</Button>}
                    </div>
                </div>
            </div>
        </header>
    );
};
export default Header;
