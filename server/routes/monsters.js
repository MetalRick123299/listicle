import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import monsterData from "../data/monsters.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json(monsterData);
});

router.get("/:monsterId", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "../public/monster.html"));
});
export default router;
