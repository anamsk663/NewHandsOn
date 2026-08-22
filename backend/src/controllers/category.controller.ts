import { Request, Response } from "express";
import Category from "../models/category.model.js";


export const createCategory = async (req: Request, res: Response) => {
  try {
    const category = await Category.create(req.body);

    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({
      message: "Failed to create category",
      error,
    });
  }
};

export const getCategories = async (_req: Request, res: Response) => {
  try {
    const categories = await Category.find();

    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch categories",
      error,
    });
  }
};
