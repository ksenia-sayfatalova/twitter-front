import {ITweet} from "./ITweet";
import {IUser} from "./IUser";

export interface IDetailedTweet extends Omit<ITweet, 'likes' | 'id'> {

    author: {
        "createdAt": Date,
        "id": string,
        "firstName": string,
        "lastName": string,
        "login": string,
        "location": string
    }
    likes: IUser[];
    _id: string;
}
