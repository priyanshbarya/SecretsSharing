import Express from "express";
import { postSecrets, getSecrets } from "../controllers/secretControllers.js";
import protect from "../middleware/authMiddleware.js";

const router = Express.Router();

router.route("/").get(protect, getSecrets);
router.route("/").post(protect, postSecrets);

export default router;
