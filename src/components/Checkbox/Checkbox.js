import classes from "../Checkbox/Checkbox.module.css";

export const Checkbox = () => {
    return   <div className={classes['checkbox-wrapper']}>
        <input type='checkbox' className={classes.trigger}/>
        <div className={classes.checker}>
            <div className={classes['checker-mark-wrapper']}>
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.39644 7.31067L0.146441 4.06066C-0.0488135 3.86541 -0.0488135 3.54883 0.146441 3.35355L0.853531 2.64644C1.04879 2.45117 1.36539 2.45117 1.56064 2.64644L3.75 4.83578L8.43936 0.146441C8.63461 -0.0488135 8.95121 -0.0488135 9.14647 0.146441L9.85356 0.853551C10.0488 1.0488 10.0488 1.36539 9.85356 1.56066L4.10355 7.31069C3.90828 7.50594 3.5917 7.50594 3.39644 7.31067Z" fill="#66757F"/>
                </svg>
            </div>
        </div>
        <label htmlFor='checkbox'>Remember me</label>
    </div>
};