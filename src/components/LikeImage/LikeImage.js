import classes from "../LikeImage/LikeImage.module.css";
import like from "../../assets/like-svgrepo-com.svg";
import {tweetListActions} from "../../store/tweetList";
import {useSelector} from "react-redux";

export const LikeImage = (props) => {
    
    return (
        <div className={classes['like-info']} onClick={props.onClick}>
            <img src={like} className={classes['like-image']} />
            <span>{props.likeAmount}</span>
        </div>
    );
};
