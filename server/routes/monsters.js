import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { pool } from "../database.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get("/", async (req, res) => {
  const result = await pool.query("SELECT * from monsters");
  res.status(200).json(result.rows);
});

router.get("/:monsterId", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "../public/monster.html"));
});
export default router;
