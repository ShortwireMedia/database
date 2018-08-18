import { UserFriend, UserBlock } from '.';
export declare class User {
    id: string;
    username: string;
    email: string;
    verified: boolean;
    password: string;
    friends: UserFriend[];
    blocks: UserBlock[];
}
