import Express from "express";
import {postSecrets,getSecrets} from "../controllers/secretControllers.js"
import protect from "../middleware/authMiddleware.js";

const router = Express.Router();

router.route('/').get(getSecrets).get(protect);
router.route('/').post(postSecrets).get(protect);

export default router;