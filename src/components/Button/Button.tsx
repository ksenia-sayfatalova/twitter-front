import classes from './button.module.css';
import classNames from 'classnames';
import React from "react";

interface ButtonProps {
    secondaryBtn?: boolean;
    w100?: boolean;
    size?: 'small' | 'medium';
    delete?: boolean;
    modal?: boolean;
    onClick?: () => void;
    disabled?: boolean
}

export const Button: React.FC<ButtonProps> = ({children, ...restProps}) => {
    const btnClasses = classNames(classes['btn'], classes['btn-primary'],
        {[classes['btn-secondary']]: restProps.secondaryBtn},
        // {[classes['btn-secondary']]: restProps.secondaryBtn === true},
        {[classes['w-100']]: restProps.w100},
        // {[classes['w-100']]: restProps.w100 === true},
        {[classes['size-small']]: restProps.size === 'small'},
        {[classes.delete]: restProps.delete},
        // {[classes.delete]: restProps.delete === true},
        {[classes.modal]: restProps.modal});
    // {[classes.modal]: restProps.modal === true});
    // return <button className={btnClasses} onClick={restProps.onClick} disabled={restProps.disabled}>
    return <button {...restProps} className={btnClasses}>
        {children}
    </button>
};

