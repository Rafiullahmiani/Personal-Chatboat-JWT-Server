import express from "express";

import { UserLogin } from "../Controllers/UserLogin.js";
import { AdminRequests } from "../Controllers/AdminRequest.js";

const router = express.Router();

router.post("/login", UserLogin);
router.get("/dashboard", AdminRequests);
export default router;
