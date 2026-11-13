import express, { json } from "express";
import dotenv from 'dotenv';
import { connectDB } from "./db/index.js";
import todoRoute from "./routes/todo.js";
import userRoute from "./routes/user.js";
import cookieParser from "cookie-parser";
import cors from 'cors';
import errorHandler from "./middleware/errorHandler.js";
dotenv.config({
    path: ".env", 
  });
const app = express();
app.use(
    cors({
        origin: process.env.CLIENT_URL
    })
)
app.use(json())
app.get("/", (req, res) => {
    res.send("You Got it you got it OK")
});
app.use(cookieParser());
app.use(userRoute);
app.use(todoRoute);

app.use(errorHandler)
const PORT = process.env.PORT || "4000";
app.listen(PORT, ()=>{
    connectDB()
    console.log("Server is Running On The:" , PORT);
})