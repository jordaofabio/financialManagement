import { getCustomRepository } from 'typeorm';
import CategoryRepositories from '../repositories/CategoryRepositories ';

class CreateCategoryService {
  async execute(name: string, url: string) {
    const categoryRepositories = getCustomRepository(CategoryRepositories);

    if (!name) {
      throw new Error('Invalid name!');
    }

    if (!url) {
      throw new Error('Invalid url!');
    }

    const categoryAlreadyExists = await categoryRepositories.findOne({ name, url });

    if (categoryAlreadyExists) {
      throw new Error('Tag already exists!');
    }

    const category = categoryRepositories.create({ name, url });

    await categoryRepositories.save(category);

    return category;
  }
}

export default CreateCategoryService;
