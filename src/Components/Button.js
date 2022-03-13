import classes from './button.module.css';
import classNames from 'classnames';

export const Button = (props) => {
    const btnClasses = classNames(classes['btn-primary'], { [classes['btn-secondary']]: props.secondaryBtn === true });
    return <button className={btnClasses}>{props.children}</button>
};