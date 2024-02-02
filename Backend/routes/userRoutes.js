import Express from "express";
import {registerUser,authUser} from "../controllers/userControllers.js"
import protect from "../middleware/authMiddleware.js";

const router = Express.Router();

router.route('/').post(registerUser).get(protect);
router.route('/login').post(authUser).get(protect);

export default router;