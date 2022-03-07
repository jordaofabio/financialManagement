import CreateUserService from '@/services/CreateUserService';
import ListUserService from '@services/ListUserService';
import { container } from 'tsyringe';

const usersResolvers = {
  Query: {
    getAllUser() {
      const listUserService = container.resolve(ListUserService);
      return listUserService.execute();
    },
  },
  Mutation: {
    createUser(_: any, { input }: any) {
      const createUserService = container.resolve(CreateUserService)
      return createUserService.execute(input)
    }
  },
};

export default usersResolvers;
