import { Friend } from "../../infrastructure/models/FriendModel";

export interface FriendService {
    createFriend(name: string, gender: string): Promise<Friend>;
    getFriend(): Promise<Friend[]>;
    getFriendById(id: number): Promise<Friend | null>;
    updateFriend(id: number, name?: string, gender?: string): Promise<Friend | null>;
    deleteFriend(id: number): Promise<boolean>;
}