import { Request, Response } from 'express';
import CreateCategoryService from '../services/CreateCategoryService';

class CreateCategoryController {
  async handle(req: Request, res: Response) {
    const { name, url } = req.body;

    const createCategoryService = new CreateCategoryService();

    const category = await createCategoryService.execute(name, url);

    return res.json(category);
  }
}

export default CreateCategoryController;
