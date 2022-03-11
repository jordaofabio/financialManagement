import CreateTagService from '@/services/CreateTagService';
import ListTagService from '@services/ListTagService';
import { container } from 'tsyringe';

const tagsResolvers = {
  Query: {
    getAllTag() {
      const listTagService = container.resolve(ListTagService);
      return listTagService.execute();
    },
  },
  Mutation: {
    createTag(_: any, { input }: any) {
      const createTagService = container.resolve(CreateTagService)
      return createTagService.execute(input)
    }
  },
};

export default tagsResolvers;
