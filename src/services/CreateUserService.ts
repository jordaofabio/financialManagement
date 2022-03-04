import { getCustomRepository } from 'typeorm';
import UserRepository from '@repositories/UserRepository';

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
}

class CreateUserService {
  async execute({ name, email, admin }: IUserRequest) {
    const userRepository = getCustomRepository(UserRepository);

    if (!email) {
      throw new Error('Email incorrect');
    }

    const userAlredyExists = await userRepository.findOne({ email });

    if (userAlredyExists) {
      throw new Error('User alredy exists');
    }

    const user = userRepository.create({
      name,
      email,
      admin,
    });

    await userRepository.save(user);

    return user;
  }
}

export default CreateUserService;
