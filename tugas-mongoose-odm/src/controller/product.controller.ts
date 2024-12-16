import { Request, Response } from "express";
import * as Yup from "yup";
import ProductModel from "../models/product.model";


const createValidationSchema = Yup.object().shape({
    name: Yup.string().required().min(3, 'Name must be at least 3 caracters'),
    price: Yup.number().required(),
    category: Yup.string().required(),
    description: Yup.string().required(),
    images: Yup.array().of(Yup.string()).required().min(1),
    qty: Yup.number().required().min(1)
})

interface IPaginationQuery{
    page: number,
    limit: number,
    search?: string
}

export default {
    async create(req: Request, res: Response) {
        try {
            await createValidationSchema.validate(req.body, {abortEarly: false});
            const result = await ProductModel.create(req.body);
            res.status(201).json({
                message: `success create product`
            })
        } catch (error) {
            if (error instanceof Yup.ValidationError){
                res.status(400).json({
                    data: error.errors,
                    message: `failed to create product`
                })
                return;
            }
            const err = error as Error;
            res.status(500).json({
                data : err,
                message : `failed to create product`
            })
        }
    },
    
    async findAll(req: Request, res: Response){
        try {

            const {
                limit = 10,
                page = 1,
                search = " "
            } = req.query as unknown as IPaginationQuery;

            const query = {};

            if (search && search.trim() !== "") {
                Object.assign(query, {
                    name: {
                        $regex: search,
                        $options: "i",
                    }
                })
            }

            const result = await ProductModel.find(query)
                        .limit(limit)
                        .skip((page - 1 ) * limit)
                        .sort({
                            createdAt : -1
                        })
                        .populate("categoryId");

            const total = await ProductModel.countDocuments(query);

            res.status(201).json({
                data: result,
                message: `success get all product`,
                page: +page,
                limit: +limit,
                total,
                totalPages: Math.ceil(total/limit)
            });

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