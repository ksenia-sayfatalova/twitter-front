import classes from './button.module.css';
import classNames from 'classnames';

export const Button = (props) => {
    const btnClasses = classNames(classes['btn'], classes['btn-primary'],
        {[classes['btn-secondary']]: props.secondaryBtn === true},
        {[classes['w-100']]: props.w100 === true});
    return <button className={btnClasses} onClick={props.onClick} disabled={props.disabled}>{props.children}</button>
};
