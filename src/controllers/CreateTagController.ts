import { Request, Response } from 'express';
import CreateTagService from '../services/CreateTagService';

class CreateTagController {
  async handle(req: Request, res: Response) {
    const { name } = req.body;

    const createTagService = new CreateTagService();

    const Tag = await createTagService.execute(name);

    return res.json(Tag);
  }
}

export default CreateTagController;
