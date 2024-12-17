import { query } from "express";
import CategoriesModel, { Category } from "../models/categories.model";


export const create = async (payload : Category): Promise<Category> => {
    const result = await CategoriesModel.create(payload);
    return result
}

export interface findAll {
    query?: any,
    limit: number,
    page: number
}

export const findAll = async (query: any, limit: number, page: number): Promise<Category[]> => {
    const result = await CategoriesModel.find(query)
                        .limit(limit)
                        .skip((page - 1) * limit)
                        .sort({createdAt : -1})
    return result
}

export const findOne = async (id: string): Promise<Category | null> => {
    const result = await CategoriesModel.findById(id);
    return result
}

export const update = async (id: string, payload : Category): Promise<Category | null> => {
    const result   = await CategoriesModel.findByIdAndUpdate(
        {_id : id},
        payload,
        {
            new: true
        }
    )
    return result
}

export const remove = async (id: String): Promise<Category | null> => {
    const result = await CategoriesModel.findOneAndDelete(id);
    return result
}