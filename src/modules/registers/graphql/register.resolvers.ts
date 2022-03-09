import CreateRegisterService from '@/services/CreateRegisterService';
import ListRegisterService from '@services/ListRegisterService';
import { container } from 'tsyringe';

const registersResolvers = {
  Query: {
    getAllRegister() {
      const listRegisterService = container.resolve(ListRegisterService);
      return listRegisterService.execute();
    },
  },
  Mutation: {
    createRegister(_: any, { input }: any) {
      const createRegisterService = container.resolve(CreateRegisterService)
      return createRegisterService.execute(input)
    }
  },
};

export default registersResolvers;
