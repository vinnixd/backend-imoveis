import express from "express";
import cors from "cors";
import imoveisRoutes from "./routes/imoveis.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/imoveis", imoveisRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
