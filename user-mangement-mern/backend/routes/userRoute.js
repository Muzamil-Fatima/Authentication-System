import express from "express";
const router = express.Router();
import { createUser } from "../controller/userController.js";

router.route("/").post(createUser);

export default router;
