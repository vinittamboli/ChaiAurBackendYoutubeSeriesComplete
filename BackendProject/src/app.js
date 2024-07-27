import express  from "express";
import CookieParser from "cookie-parser";
import cors from "cors"

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({
    limit:"16kb"
})) 

app.use(express.urlencoded({
    extended: true, limit: "16kb"
}))

app.use(express.static("public")) //For saving some public data on Server locally

app.use(CookieParser()) // To access cookies in user's browser and be able to set them. 


//Routes Import
import userRouter from './routes/user.route.js'


//Routes declaration
app.use("/api/v1/users", userRouter)



export {app}
