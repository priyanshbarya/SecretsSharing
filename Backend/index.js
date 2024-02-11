import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import secretRoutes from "./routes/secretRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import session from "express-session";
import passport from "passport";
import googleAuthRoutes from "./routes/googleAuthRoutes.js";

dotenv.config();
connectDB();
const app = express();
app.use(cors());

app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/secrets/", secretRoutes);
app.use("/api/user/", userRoutes);
app.use("/", googleAuthRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server Starts ${PORT}.`);
});
