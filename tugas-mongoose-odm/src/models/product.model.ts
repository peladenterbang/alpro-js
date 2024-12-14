import mongoose from "mongoose";

const Schema = mongoose.Schema;

const productShema = new Schema(
    {
        name :{
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        images:{
            type: [String],
            required: true
        },
        price: {
            type: Number,
            required: true,
        },
        qty: {
            type: Number,
            required: true,
            min: [1, "Quantity can not be less than 1"]
        },
        categoryId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
        }
    },
    {
        timestamps: true
    }
)

const ProductModel = mongoose.model("Products", productShema);

export default ProductModel;