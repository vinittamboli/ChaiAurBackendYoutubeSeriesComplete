import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    userName:{
        type: String,
        required: true,
        uniq: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        uniq: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    }
},{timestapms: true })

export const User = mongoose.model("User",userSchema)