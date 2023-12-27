const mongoose  =require('mongoose')

const Schema  = mongoose.Schema

const productSchema  = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    catetory: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discountPrice: {
        type: Number,
        required: true
    },
    productImages: {
        type: Object,
        required: true
    }
},{timestamps: true})

const Products = mongoose.model('Products',productSchema)

module.exports = Products