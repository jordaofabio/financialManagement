import { injectable } from 'tsyringe';
import { getCustomRepository } from 'typeorm';
import RegisterRepositoy from '@repositories/RegisterRepository';

interface IRegisterRequest {
  name: string;
  description?: string;
  value: number;
  date: Date;
}
@injectable()
class CreateRegisterService {
  async execute({ name, value, date }: IRegisterRequest) {
    const registerRepositoy = getCustomRepository(RegisterRepositoy);

    if (!name) {
      throw new Error('Invalid name!');
    }

    if (!date) {
      throw new Error('Invalid date!');
    }

    if (!value || value < 0) {
      throw new Error('Invalid value!');
    }

    const register = registerRepositoy.create({ name });

    await registerRepositoy.save(register);

    return register;
  }
}

export default CreateRegisterService;
