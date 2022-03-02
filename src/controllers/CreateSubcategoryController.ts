import { Request, Response } from 'express';
import CreateSubcategoryService from '../services/CreateSubcategoryService';

class CreateSubcategoryController {
  async handle(req: Request, res: Response) {
    const { category_id, name, url } = req.body;

    const createSubcategoryService = new CreateSubcategoryService();

    const subcategory = await createSubcategoryService.execute(category_id, name, url);

    return res.json(subcategory);
  }
}

export default CreateSubcategoryController;
