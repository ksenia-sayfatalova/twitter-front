import cover from '../../Assets/cover.jpg';
import classes from './Cover.module.css';
export const Cover = () => {
    return (
        <div className={classes['image-wrapper']}>
            <img src={cover}/>
        </div>
    );
};