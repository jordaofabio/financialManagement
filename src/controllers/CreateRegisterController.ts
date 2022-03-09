import { Request, Response } from 'express';
import CreateRegisterService from '@services/CreateRegisterService';

class CreateRegisterController {
  async handle(req: Request, res: Response) {
    const { name, description, value, type, date  } = req.body;

    const createRegisterService = new CreateRegisterService();

    const register = await createRegisterService.execute({ name, description, value, type, date  });

    return res.json(register);
  }
}

export default CreateRegisterController;
