import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CategorySchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        productCategory: [{
            type: Schema.Types.ObjectId,
            ref: "Product"
        }]
    },
    {
        timestamps: true
    }
)

const CategoriesModel = mongoose.model("Category", CategorySchema);

export default CategoriesModel;
