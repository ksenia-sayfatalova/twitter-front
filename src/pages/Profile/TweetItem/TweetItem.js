import like from '../../../assets/like-svgrepo-com.svg';
import classes from './TweetItem.module.css';
import photo from '../../../assets/Ellipse 1.png';
import {dateFormat} from "../../../utils/dateFormat";
import {LikeImage} from "../../../components/LikeImage/LikeImage";

export const TweetItem = (props) => {
    return (
        <li key={props.key}>
            <div className={classes['tweet-item']}>
                <div className={classes['tweet-foto']}>
                    <img src={photo} className={classes.foto}/>
                </div>
                <div className={classes['tweet-item-info']}>
                    <div className={classes['tweet-info']}>
                        <h3>{props.item.user.firstName} {props.item.user.lastName}</h3>
                        <span className={classes['tweet-info-user']}>{props.item.user.login}</span>
                        <span>{dateFormat(new Date(props.item.createdAt))}</span>
                    </div>
                    <div className={classes['tweet-text']}>
                        <span>{props.item.message}</span>
                    </div>
                  <LikeImage likeAmount={props.item.likes}/>
                </div>
            </div>
        </li>
    );
};
