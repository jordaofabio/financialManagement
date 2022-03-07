import CreateCategoryService from '@/services/CreateCategoryService';
import ListCategoryService from '@services/ListCategoryService';
import { container } from 'tsyringe';

const categoriesResolvers = {
  Query: {
    getAllCategory() {
      const listCategoryService = container.resolve(ListCategoryService);
      return listCategoryService.execute();
    },
  },
  Mutation: {
    createCategory(_: any, { input }: any) {
      const createCategoryService = container.resolve(CreateCategoryService)
      return createCategoryService.execute(input)
    }
  },
};

export default categoriesResolvers;
