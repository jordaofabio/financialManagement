import { getCustomRepository } from 'typeorm';
import UsersRepositories from '@repositories/UserRepository';
import { classToPlain } from 'class-transformer';
import { injectable } from 'tsyringe';

@injectable()
class ListUserService {
  async execute() {
    const usersRepositories = getCustomRepository(UsersRepositories);

    const users = await usersRepositories.find();

    return classToPlain(users);
  }
}

export default ListUserService;
