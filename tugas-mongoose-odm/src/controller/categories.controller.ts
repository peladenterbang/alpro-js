import { Request, Response } from "express";
import CategoriesModel from "../models/category.model";

export default {
    async create(req: Request, res: Response) {
        try {
            const result = await CategoriesModel.create();

            res.status(201).json({
                data: result,
                message: `success to create category`
            })

        } catch (error) {
            const err = error as Error;
            res.status(500).json({
                data: err,
                message: `failed to create category`
            })
        }
    },
    async findOne(req: Request, res: Response) {
        try {
            const result = await CategoriesModel.findOne({
                _id: req.params.id
            });

            res.status(201).json({
                data: result,
                message: `success to get category`
            })
        } catch (error) {
            const err = error as Error;
            res.status(500).json({
                data: err,
                message: `failed to get category`
            })
        }
    },
    async findAll(req: Request, res: Response) {
        try {
            const result = await CategoriesModel.find();
            res.status(201).json({
                data: result,
                message: `success to get all category`
            })
        } catch (error) {
            const err = error as Error;
            res.status(500).json({
                data: err,
                message: `failed to get all category`
            })
        }
    },
    async update(req: Request, res: Response) {
        try {
            const result = await CategoriesModel.findOneAndUpdate(
                {_id: req.params.id},
                req.body,
                {
                    new: true
                }
            )

            res.status(201).json({
                data: result,
                message: `success to edit category`
            })
        } catch (error) {
            const err = error as Error;
            res.status(500).json({
                data: err,
                message: `failed to edit category`
            })
        }
    },
    async delete(req: Request, res: Response) {
        try {
            const result = await CategoriesModel.findOneAndDelete({_id: req.params.id});
            res.status(201).json({
                data: result,
                message: `success to delete category`
            })
        } catch (error) {
            const err = error as Error;
            res.status(500).json({
                data: err,
                message: `failed to delete category`
            })
        }
    }
}