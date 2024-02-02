import express  from "express";
import cors from "cors"
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js"
import { notFound,errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();
connectDB();
const app=express();
app.use(cors());

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hello World!")
});
app.use('/api/user/',userRoutes)

app.use(notFound);
app.use(errorHandler);

const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server Starts ${PORT}.`);
})