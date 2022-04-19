import {IUser} from "./IUser";

export interface ITweet {
    id: string;
    hashtags: string[]
    user: IUser;
    message: string;
    createdAt: string;
    likes: number;
}
