import { Response, Request } from "express";
import CategoryModel from "../models/category.model";



export default {
    async createCategory(req: Request,res: Response) {
        try {
            const result = await CategoryModel.create(req.body);
            res.status(201).json({
                data: result,
                message: `success create category ...`
            })
        } catch (error) {
            const err = error as Error
            res.status(500).json({
                message: "Error creating category", 
                data : err.message
            })
        }
    },

    async getAllCategory (req: Request, res: Response) {
        try {
            const result = await CategoryModel.find();
            res.status(201).json({
                data: result,
                message: `success get all data ...`
            })
        } catch (error) {
            const err = error as Error;
            res.status(500).json({
                message: "error get all data categories ...",
                data: err.message
            })
        }
    },

    async getOneCategory (req: Request, res: Response) {
        try {
            const result = await CategoryModel.findOne({_id: req.params.id});
            res.status(201).json({
                data: result,
                message: `success get one categories`
            })
        } catch (error) {
            const err = error as Error;
            res.status(500).json({
                message: `failed to get data categories`,
                data: err.message

            })
        }
    },

    async editCategory(req: Request, res: Response) {
        try {
            const result = await CategoryModel.findByIdAndUpdate(
                {_id: req.params.id},
                req.body,
                {
                    new: true
                }
            )

            res.status(200).json({
                data: result,
                message: `success update catogeory id ${req.params.id}`
            })
        } catch (error) {

            const err = error as Error;
            res.status(500).json({
                message: `failed to category id ${req.params.id} `,
                data: err.message
            })
        }
    },

    async deleteCategory(req: Request, res: Response) {
        try {
            const result = await CategoryModel.findOneAndDelete({
                _id: req.params.id
            });
            res.status(200).json({
                message: `success delete category ${req.params.id}`,
                data: result
            })
        } catch (error) {
            const err = error as Error
            res.status(500).json({
                message: "failed to delete category ...",
                data: err
            })
        }
    }
}


