import { getCustomRepository } from 'typeorm';
import RegistersRepositoy from '@repositories/RegisterRepository';
import { instanceToPlain } from 'class-transformer';
import { injectable } from 'tsyringe';

@injectable()
class ListRegisterService {
  async execute() {
    const registersRepositoy = getCustomRepository(RegistersRepositoy);

    const registers = await registersRepositoy.find();

    return instanceToPlain(registers);
  }
}

export default ListRegisterService;
