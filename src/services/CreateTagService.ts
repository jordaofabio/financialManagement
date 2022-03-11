import { injectable } from 'tsyringe';
import { getCustomRepository } from 'typeorm';
import TagsRepositoy from '../repositories/TagsRepository';

interface ITagRequest {
  name: string
}
@injectable()
class CreateTagService {
  async execute({ name }: ITagRequest) {
    const tagsRepositoy = getCustomRepository(TagsRepositoy);

    if (!name) {
      throw new Error('Invalid name!');
    }

    const tagAlreadyExists = await tagsRepositoy.findOne({ name });

    if (tagAlreadyExists) {
      throw new Error('Tag already exists!');
    }

    const tag = tagsRepositoy.create({ name });

    await tagsRepositoy.save(tag);

    return tag;
  }
}

export default CreateTagService;
