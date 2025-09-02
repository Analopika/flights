import express from "express";
import { createCollection } from "../controllers/collectController.js";
import protect from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/create", protect, createCollection);

export default router;