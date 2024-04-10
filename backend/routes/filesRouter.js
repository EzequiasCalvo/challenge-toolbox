import express from "express";
import { fetchData, fetchFilesList } from "../controllers/filesController.js";

const router = express.Router();

router.get("/data", fetchData);
router.get("/list", fetchFilesList);

export default router;
