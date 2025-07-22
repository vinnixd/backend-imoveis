import express from "express";
import { getImoveis } from "../services/apify.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const { estado, cidade, financiavel } = req.query;
  const dados = await getImoveis({ estado, cidade, financiavel });
  res.json(dados);
});

export default router;
