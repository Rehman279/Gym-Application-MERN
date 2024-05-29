import express from "express";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import cors from "cors";
import { config } from "dotenv";
import { dbconnection } from "./database/db.js";
import messageRouter from "./routes/messageRouter.js";
const app = express();

config({path:"./config/config.env"});
app.use(cors({
    origin:[process.env.FRONTEND_URL, process.env.DASHBOARD_URL],
    method: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    fileUpload({
      useTempFiles: true,
      tempFileDir: "/tmp/",
    })
  );
  
  app.get("/", (req,res)=>{
    res.send("hell world")
  })
  app.use("/api/v1/message", messageRouter);
  dbconnection();

export default app