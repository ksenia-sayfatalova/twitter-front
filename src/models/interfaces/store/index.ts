import {IUserStore} from "./IUserStore";
import {ITweetListStore} from "./ITweetListStore";

export interface IRootStore {
    user: IUserStore;
    tweetList: ITweetListStore;
}
