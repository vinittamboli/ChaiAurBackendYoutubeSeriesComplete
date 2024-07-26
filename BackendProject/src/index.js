import mongoose, { mongo } from "mongoose"
import { DB_Name } from "./constants"


// import express from "express"
// const app = express()
// 
// ;(async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
//         app.on("error", (error) => {
//             console.log("Error: ", error);
//             throw error
//         })
// 
//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.error("Error:", error)
//         throw error
//     }
// })()

