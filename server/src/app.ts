import express, { json } from "express";
import dotenv from 'dotenv';
import { connectDB } from "./db/index.js";
import todoRoute from "./routes/todo.js" 
dotenv.config({
    path: ".env", 
  });
const app = express();
app.use(json())
app.get("/", (req, res) => {
    res.send("You Got it you got it OK")
});
app.use(todoRoute);
const PORT = process.env.PORT || "4000";
app.listen(PORT, ()=>{
    connectDB()
    console.log("Server is Running On The:" , PORT);
})