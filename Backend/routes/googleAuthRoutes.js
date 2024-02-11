import Express from "express";
import passport from "../controllers/passport.js";
import User from "../models/userModel.js";
import generateToken from "../config/generateToken.js";

const router = Express.Router();

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: process.env.URL }),
  async (req, res) => {
    const email = req.user._json.email;
    const user = await User.findOne({ email });
    const token = generateToken(user._id);
    const userData = { token: token };
    res.redirect(
      process.env.URL + `/store-profile/${JSON.stringify(userData)}`
    );
  }
);

export default router;
