import { getCustomRepository } from 'typeorm';
import CategoryRepositoy from '@repositories/CategoryRepository';
import { injectable } from 'tsyringe';

interface ICategoryRequest {
  name: string
  url: string
}
@injectable()
class CreateCategoryService {
  async execute({ name, url }: ICategoryRequest) {
    const categoryRepositoy = getCustomRepository(CategoryRepositoy);

    if (!name) {
      throw new Error('Invalid name!');
    }

    if (!url) {
      throw new Error('Invalid url!');
    }

    const categoryAlreadyExists = await categoryRepositoy.findOne({ name, url });

    if (categoryAlreadyExists) {
      throw new Error('Tag already exists!');
    }

    const category = categoryRepositoy.create({ name, url });

    await categoryRepositoy.save(category);

    return category;
  }
}

export default CreateCategoryService;
