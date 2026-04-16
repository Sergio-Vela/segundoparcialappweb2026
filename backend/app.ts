import express from "express";
import cors from "cors";
import { estadoRoutes } from "./src/interfaces/routes/estadoRoutes";
import { categoriaRoutes } from "./src/interfaces/routes/categoriaRoutes";
import { autorRoutes } from "./src/interfaces/routes/autorRoutes";
import { libroAutorRoutes } from "./src/interfaces/routes/libroAutorRoutes";
import { usuarioRoutes } from "./src/interfaces/routes/usuarioRoutes";
import { reservaRoutes } from "./src/interfaces/routes/reservaRoutes";
import libroRoutes from "./src/interfaces/routes/libroRoutes";

export const app = express();

app.use(cors({
    origin: "http://localhost:4200",
    credentials: true
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

app.use("/api", autorRoutes);
app.use("/api", categoriaRoutes);
app.use("/api", estadoRoutes);
app.use("/api", libroAutorRoutes);
app.use("/api", libroRoutes);
app.use("/api", reservaRoutes);
app.use("/api", usuarioRoutes);


app.get("/health", (req,res) => {
    res.send("todo bien")
});