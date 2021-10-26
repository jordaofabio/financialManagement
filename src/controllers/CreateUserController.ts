import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserService';

class CreateUserController {
  async handle(req: Request, res: Response) {
    try {
      const { name, email, admin } = req.body;

      const createUserService = new CreateUserService();

      const user = await createUserService.execute({ name, email, admin });

      return res.json(user);
    } catch (err: any) {
      return res.status(400).json({ error: err.message });
    }
  }
}

export default CreateUserController;
