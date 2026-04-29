import { Friend } from "../../infrastructure/models/FriendModel";
import { FriendService } from "../../domain/services/friendService";

export class FriendServiceImpl implements FriendService {
    async createFriend(name: string, gender: string): Promise<Friend> {
        return await Friend.create({ name, gender});
    }

    async getFriend(): Promise<Friend[]> {
        return await Friend.findAll();
    }

    async getFriendById(id: number): Promise<Friend | null> {
        return await Friend.findByPk(id);
    }

    async updateFriend(id: number, name?: string, gender?: string): Promise<Friend | null> {
        const friendObj = await Friend.findByPk(id);
        if (!friendObj) return null;
        const updateData: any = {};
        if (name !== undefined) updateData.name = name;
        if (gender !== undefined) updateData.gender = gender;
        await friendObj.update(updateData);
        return friendObj;
    }

    async deleteFriend(id: number): Promise<boolean> {
        const deleted = await Friend.destroy({ where: { id } });
        return deleted > 0;
    }
}