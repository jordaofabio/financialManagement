import { injectable } from 'tsyringe';
import { getCustomRepository } from 'typeorm';
import SubcategoryRepositories from '../repositories/SubcategoryRepositories';

@injectable()
class CreateSubcategoryService {
  async execute(category_id: string, name: string, url: string) {
    const subcategoryRepositories = getCustomRepository(SubcategoryRepositories);

    if (!name) {
      throw new Error('Invalid name!');
    }

    if (!url) {
      throw new Error('Invalid url!11');
    }

    if (!category_id) {
      throw new Error('Invalid main category!');
    }

    const subcategoryAlreadyExists = await subcategoryRepositories.findOne({ name, url });

    if (subcategoryAlreadyExists) {
      throw new Error('Tag already exists!');
    }

    const subcategory = subcategoryRepositories.create({ category_id, name, url });

    await subcategoryRepositories.save(subcategory);

    return subcategory;
  }
}

export default CreateSubcategoryService;
