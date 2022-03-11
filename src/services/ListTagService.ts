import { getCustomRepository } from 'typeorm';
import TagsRepository from '@repositories/TagsRepository';
import { instanceToPlain } from 'class-transformer';
import { injectable } from 'tsyringe';

@injectable()
class ListTagService {
  async execute() {
    const tagsRepositoy = getCustomRepository(TagsRepository);

    const tags = await tagsRepositoy.find();

    return instanceToPlain(tags);
  }
}

export default ListTagService;
