import { Request, Response } from "express";
import { FriendServiceImpl } from "../../infrastructure/services/friendServiceImpl";

const friendService = new FriendServiceImpl();

export class FriendController {
    async createFriend(req: Request, res: Response) {
        const { name, gender } = req.body;
        try {
            const friend = await friendService.createFriend(name, gender);
            res.status(201).json(friend);
        } catch (error) {
            console.error("Error creating friend: ", error);
            res.status(500).json({ error: "Failed to create friend" });
        }
    }

    async getFriend(req: Request, res: Response) {
        try {
            const friends = await friendService.getFriend();
            res.status(200).json(friends);
        } catch (error) {
            console.error("Error fetching friends: ", error);
            res.status(500).json({ error: "Failed to fetch friends" });
        }
    }

    async getFriendById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const friend = await friendService.getFriendById(Number(id));
            if (!friend) {
                res.status(404).json({ error: "Friend not found" });
            } else {
                res.status(200).json(friend);
            }
        } catch (error) {
            console.error("Error fetching friend: ", error);
            res.status(500).json({ error: "Failed to fetch friend" });
        }
    }

    async updateFriend(req: Request, res: Response) {
        const { id } = req.params;
        const { name, gender } = req.body;
        try {
            const friend = await friendService.updateFriend(Number(id), name, gender);
            if (!friend) {
                res.status(404).json({ error: "Friend not found" });
            } else {
                res.status(200).json(friend);
            }
        } catch (error) {
            console.error("Error updating Friend: ", error);
            res.status(500).json({ error: "Failed to update Friend" });
        }
    }

    async deleteFriend(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const success = await friendService.deleteFriend(Number(id));
            if (success) {
                res.status(200).json({ message: "Friend deleted successfully" });
            } else {
                res.status(404).json({ error: "Friend not found" });
            }
        } catch (error) {
            console.error("Error deleting Friend: ", error);
            res.status(500).json({ error: "Failed to delete Friend" });
        }
    }
}
