import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    description: {
        required: true,
        type: String
    },
    name: {
        required: true,
        type: String
    },
    productImages: {
        type: String
    },
    price: {
        type: Number,
        default: 0
    },
    stock: {
        default: 0
    },
    category: {
        type: mongoose.Schema.types.ObjectId,
        ref: "Category"
    }
},{timestamps: true })

export const Product = mongoose.model("Product",productSchema)
