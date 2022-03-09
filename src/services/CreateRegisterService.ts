import { injectable } from 'tsyringe';
import { getCustomRepository } from 'typeorm';
import RegisterRepositoy from '@repositories/RegisterRepository';

interface IRegisterRequest {
  name: string;
  category_id: string;
  description?: string;
  value: number;
  type: number;
  date: Date;
}
@injectable()
class CreateRegisterService {
  async execute({ name, category_id, description, value, type, date }: IRegisterRequest) {
    try {
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

      const register = registerRepositoy.create({ name, category_id, description, value, type, date: new Date(date) });

      await registerRepositoy.save(register);

      return register;
    } catch (err) {
      console.log('Erro: ', err)
    }
  }
}

export default CreateRegisterService;
