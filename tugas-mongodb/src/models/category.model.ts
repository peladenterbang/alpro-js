import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CategorySchema = new Schema(
    {
        categoryName: String,
        productCategory: [{
            type: Schema.Types.ObjectId,
            ref: "Product"
        }]
    }
)

const CategoryModel = mongoose.model("Category", CategorySchema);


export default CategoryModel;