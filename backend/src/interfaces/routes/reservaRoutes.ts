import { Router } from "express";
import { ReservaController } from "../controllers/reservaController";

const reservaController = new ReservaController();

export const reservaRoutes = Router();

reservaRoutes.post("/reservas", (req, res) => reservaController.createReserva(req, res));
reservaRoutes.get("/reservas", (req, res) => reservaController.getReservas(req, res));
reservaRoutes.get("/reservas/usuario/:id", (req, res) => reservaController.getReservasPorUsuario(req, res));
reservaRoutes.get("/reservas/:id", (req, res) => reservaController.getReservaById(req, res));
reservaRoutes.put("/reservas/:id", (req, res) => reservaController.updateReserva(req, res));
reservaRoutes.put("/reservas/:id/cancelar", (req, res) => reservaController.cancelarReserva(req, res));
reservaRoutes.put("/reservas/:id/devolver", (req, res) => reservaController.devolverReserva(req, res));
reservaRoutes.delete("/reservas/:id", (req, res) => reservaController.deleteReserva(req, res));

export default reservaRoutes;
