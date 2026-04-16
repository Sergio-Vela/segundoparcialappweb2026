import { Request, Response } from "express";
import { ReservaServiceImpl } from "../../infrastructure/services/reservaServiceImpl";

const reservaService = new ReservaServiceImpl();

export class ReservaController {
    async createReserva(req: Request, res: Response) {
        const { usuarioId, libroId, fechaReserva, fechaDevolucion, estadoId } = req.body;
        try {
            const reserva = await reservaService.createReserva(
                usuarioId,
                libroId,
                new Date(fechaReserva),
                new Date(fechaDevolucion),
                estadoId
            );
            res.status(201).json(reserva);
        } catch (error) {
            console.error("Error creating reserva: ", error);
            res.status(500).json({ error: "Failed to create reserva" });
        }
    }

    async getReservas(req: Request, res: Response) {
        try {
            const reservas = await reservaService.getReservas();
            res.status(200).json(reservas);
        } catch (error) {
            console.error("Error fetching reservas: ", error);
            res.status(500).json({ error: "Failed to fetch reservas" });
        }
    }

    async getReservaById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const reserva = await reservaService.getReservaById(Number(id));
            if (!reserva) {
                res.status(404).json({ error: "Reserva not found" });
            } else {
                res.status(200).json(reserva);
            }
        } catch (error) {
            console.error("Error fetching reserva: ", error);
            res.status(500).json({ error: "Failed to fetch reserva" });
        }
    }

    async updateReserva(req: Request, res: Response) {
        const { id } = req.params;
        const { usuarioId, libroId, fechaReserva, fechaDevolucion, estadoId } = req.body;
        try {
            const reserva = await reservaService.updateReserva(
                Number(id),
                usuarioId,
                libroId,
                fechaReserva ? new Date(fechaReserva) : undefined,
                fechaDevolucion ? new Date(fechaDevolucion) : undefined,
                estadoId
            );
            if (!reserva) {
                res.status(404).json({ error: "Reserva not found" });
            } else {
                res.status(200).json(reserva);
            }
        } catch (error) {
            console.error("Error updating reserva: ", error);
            res.status(500).json({ error: "Failed to update reserva" });
        }
    }

    async deleteReserva(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const success = await reservaService.deleteReserva(Number(id));
            if (success) {
                res.status(200).json({ message: "Reserva deleted successfully" });
            } else {
                res.status(404).json({ error: "Reserva not found" });
            }
        } catch (error) {
            console.error("Error deleting reserva: ", error);
            res.status(500).json({ error: "Failed to delete reserva" });
        }
    }

    async getReservasPorUsuario(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const reservas = await reservaService.getReservasPorUsuario(Number(id));
            res.status(200).json(reservas);
        } catch (error) {
            console.error("Error fetching reservas por usuario: ", error);
            res.status(500).json({ error: "Failed to fetch reservas por usuario" });
        }
    }

    async cancelarReserva(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const reserva = await reservaService.cancelarReserva(Number(id));
            if (!reserva) {
                res.status(404).json({ error: "Reserva not found" });
            } else {
                res.status(200).json({ message: "Reserva cancelled successfully", reserva });
            }
        } catch (error) {
            console.error("Error cancelling reserva: ", error);
            res.status(500).json({ error: "Failed to cancel reserva" });
        }
    }

    async devolverReserva(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const reserva = await reservaService.devolverReserva(Number(id));
            if (!reserva) {
                res.status(404).json({ error: "Reserva not found" });
            } else {
                res.status(200).json({ message: "Reserva returned successfully", reserva });
            }
        } catch (error) {
            console.error("Error returning reserva: ", error);
            res.status(500).json({ error: "Failed to return reserva" });
        }
    }
}
