import { getCustomRepository } from 'typeorm';
import UsersRepositoy from '@repositories/UserRepository';
import { instanceToPlain } from 'class-transformer';
import { injectable } from 'tsyringe';

@injectable()
class ListUserService {
  async execute() {
    const usersRepositoy = getCustomRepository(UsersRepositoy);

    const users = await usersRepositoy.find();

    return instanceToPlain(users);
  }
}

export default ListUserService;
