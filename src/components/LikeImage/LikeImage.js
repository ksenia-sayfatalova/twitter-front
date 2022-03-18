import classes from "../LikeImage/LikeImage.module.css";
import like from "../../assets/like-svgrepo-com.svg";

export const LikeImage = () => {
    return (
        <div className={classes['like-info']}>
            <img src={like} className={classes['like-image']}/>
            <span>15</span>
        </div>
    );
};