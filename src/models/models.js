import mongoose from 'mongoose'

const Schema = mongoose.Schema

export const ProductSchema = new Schema({
    name: {
        type: 'String',
        required: 'Enter a Product name',
    },
    description: {
        type: String,
        required: 'Enter a product description'
    },
    category: {
        type: String
    },
    price: {
        type: Number
    },
    created_date: {
        type: Date,
        default: Date.now
    }
})