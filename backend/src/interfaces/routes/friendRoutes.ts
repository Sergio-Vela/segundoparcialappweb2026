import { Router } from "express";
import { FriendController } from "../controllers/friendController";

const friendController = new FriendController();

export const friendRoutes = Router();

friendRoutes.post("/friends", (req, res) => friendController.createFriend(req, res));
friendRoutes.get("/friends", (req, res) => friendController.getFriend(req, res));
friendRoutes.get("/friends/:id", (req, res) => friendController.getFriendById(req, res));
friendRoutes.put("/friends/:id", (req, res) => friendController.updateFriend(req, res));
friendRoutes.delete("/friends/:id", (req, res) => friendController.deleteFriend(req, res));

export default friendRoutes;
