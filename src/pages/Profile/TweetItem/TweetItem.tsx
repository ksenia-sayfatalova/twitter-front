import like from '../../../assets/like-svgrepo-com.svg';
import classes from './TweetItem.module.css';
import photo from '../../../assets/Ellipse 1.png';
import {dateFormat} from "../../../utils/dateFormat";
import {LikeImage} from "../../../components/LikeImage/LikeImage";
import {useDispatch, useSelector} from "react-redux";
import {userActions} from "../../../store/user";
import {tweetListActions} from '../../../store/tweetList';
import {NavLink, useNavigate} from "react-router-dom";
import {Button} from "../../../components/Button/Button";
import {useState} from "react";
import ReactModal from "react-modal";
import {ITweet} from "../../../models/interfaces/ITweet";
import {IRootStore} from "../../../models/interfaces/store";
import {ITweetListStore} from "../../../models/interfaces/store/ITweetListStore";
import {IDetailedTweet} from "../../../models/interfaces/IDetailedTweet";

ReactModal.setAppElement('#root');

interface TweetItemProps {
    key: string;
    item: ITweet;
}

export const TweetItem: React.FC<TweetItemProps> = (props) => {
    // const userId = useSelector((state) => state.user.userInfo.id);
    // const userLikes = useSelector((state) => state.tweetList.tweetDetails.likes);
    // const isLiked = userLikes.find(item => item.id === userId);
    // const dispatch = useDispatch();
    // const [modalIsOpen, setIsOpen] = useState(false);
    // const deleteTweetHandler = async () => {
    //     const token = localStorage.getItem('token');
    //     const tweetId = props.item.id;
    //     try {
    //         const response = await fetch(`http://localhost:3002/tweet/${tweetId}`, {
    //             method: 'DELETE',
    //             headers: {
    //                 'Authorization': `Bearer ${token}`,
    //             },
    //         })
    //         if (!response.ok) {
    //             throw new Error('Something went wrong!');
    //         }
    //
    //         const data = await response.json();
    //         dispatch(tweetListActions.deleteTweet(tweetId));
    //         console.log(data);
    //         console.log(tweetId);
    //
    //     } catch (error) {
    //     }
    //     setIsOpen(false);
    // };
    // const openModal = () => {
    //     setIsOpen(true);
    // };
    // const closeModal = () => {
    //     setIsOpen(false);
    // };
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
