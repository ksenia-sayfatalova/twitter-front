import {ITweet} from "../ITweet";
import {IDetailedTweet} from "../IDetailedTweet";

export interface ITweetListStore {
    list: ITweet[];
    tweetDetails: IDetailedTweet;
}
