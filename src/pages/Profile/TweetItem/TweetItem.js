import like from '../../../assets/like-svgrepo-com.svg';
import classes from './TweetItem.module.css';
import photo from '../../../assets/Ellipse 1.png';

export const TweetItem = (props) => {
    const date = props.date.getFullYear() + '-' + (props.date.getMonth() + 1) + '-' + props.date.getDate();
    return (
        <li key={props.key}>
            <div className={classes['tweet-item']}>
                <div className={classes['tweet-foto']}>
                    <img src={photo} className={classes.foto}/>
                </div>
                <div className={classes['tweet-item-info']}>
                    <div className={classes['tweet-info']}>
                        <h3>{props.name}</h3>
                        <span className={classes['tweet-info-user']}>{props.user}</span>
                        <span>{date}</span>
                    </div>
                    <div className={classes['tweet-text']}>
                        <span>{props.text}</span>
                    </div>
                    <div className={classes['like-info']}>
                        <img src={like} className={classes['like-image']}/>
                        <span>15</span>
                    </div>
                </div>
            </div>
        </li>
    );
};