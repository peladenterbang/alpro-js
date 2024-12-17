import { Request, Response } from "express";
import CategoriesModel from "../models/categories.model";
import {create, findAll,findOne, update, remove} from "../services/category.service";
import { IPaginationQuery } from "../utils/interfaces";

export default {
  async create(req: Request, res: Response) {
    try {
      const result = await create(req.body);
      res.status(201).json({
        data: result,
        message: "Success create product",
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed create product",
      });
    }
  },
  async findAll(req: Request, res: Response) {
    try {

      const {
        page = 1,
        limit = 10,
        search = ""
      } = req.query as unknown as IPaginationQuery;

      const query = {}
      if (search) {
        Object.assign(query, {
          name: {$regex: search, $option: "i"}
        })
      }

      const result = await findAll(query, limit, page);
      res.status(200).json({
        data: result,
        message: "Success get all categories",
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed get all categories",
      });
    }
  },
  async findOne(req: Request, res: Response) {
    try {
      const result = await findOne(req.params?.id);
      res.status(200).json({
        data: result,
        message: "Success get one product",
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed get one product",
      });
    }
  },
  async update(req: Request, res: Response) {
    try {
      const result = await update(req.params?.id, req.body);
      res.status(200).json({
        data: result,
        message: "Success update product",
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed update product",
      });
    }
  },
  async delete(req: Request, res: Response) {
    try {
      const result = await remove(req.params?.id);

      res.status(200).json({
        data: result,
        message: "Success delete product",
      });
    } catch (error) {
      const err = error as Error;
      res.status(500).json({
        data: err.message,
        message: "Failed delete product",
      });
    }
  },
};
