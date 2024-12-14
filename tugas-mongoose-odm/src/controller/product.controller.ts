import { Request, Response } from "express";
import ProductModel from "../models/product.model";

export default {
    async create(req: Request, res: Response) {
        try {
            const result = await ProductModel.create(req.body);
            res.status(201).json({
                data: result,
                message: `success create product`
            })
        } catch (error) {
            const err = error as Error;
            res.status(500).json({
                data : err,
                message : `failed to create product`
            })
        }
    },
    async findAll(req: Request, res: Response){
        try {
            const result = await ProductModel.find();
            res.status(201).json({
                data: result,
                message: `success get all product`
            })
        } catch (error) {
            const err = error as Error;
            res.status(500).json({
                data : err,
                message : `failed to get all product`
            })
        }
    },

    async findOne(req: Request , res: Response) {
        try {
            const result = await ProductModel.findOne({
                _id : req.params.id
            });

            res.status(201).json({
                data: result,
                message: `failed to get product`
            })
        } catch (error) {
            const err = error as Error;
            res.status(500).json({
                data : err,
                message : `failed to get product`
            })
        }
    },

    async getProductByCategory (req: Request, res: Response){
        try {
          const result = await ProductModel.find({categoryId: req.params.categoryId}).populate("categoryId");
          console.log(req.params.categoryId)
          res.status(200).json({
            data: result,
            message: `success get product by category`
          })
        } catch (error){
          const err = error as Error
          res.status(500).json({
            data: err,
            message: `failed get product by category`
          })
        }
    
    },

    async update(req: Request, res: Response) {
        try {
            const result = await ProductModel.findOneAndUpdate(
                {_id : req.params.id},
                req.body,
                {
                    new: true
                }
            )

            res.status(201).json({
                data: result,
                message: `success to update product`
            })
        } catch (error) {
            const err = error as Error;
            res.status(500).json({
                data : err,
                message : `failed to edit product`
            })
        }
    },

    async delete(req: Request, res: Response) {
        try {
            const result = await ProductModel.findByIdAndDelete({
                _id : req.params.id
            });

            res.status(201).json({
                data: result,
                message: `success to delete product`
            })
        } catch (error) {
            const err = error as Error;
            res.status(500).json({
                data : err,
                message : `failed to delete product`
            })
        }
    }


}