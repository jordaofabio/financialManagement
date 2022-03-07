import { injectable } from 'tsyringe';
import { getCustomRepository } from 'typeorm';
import SubcategoryRepositoy from '../repositories/SubcategoryRepository';

@injectable()
class CreateSubcategoryService {
  async execute(category_id: string, name: string, url: string) {
    const subcategoryRepositoy = getCustomRepository(SubcategoryRepositoy);

    if (!name) {
      throw new Error('Invalid name!');
    }

    if (!url) {
      throw new Error('Invalid url!11');
    }

    if (!category_id) {
      throw new Error('Invalid main category!');
    }

    const subcategoryAlreadyExists = await subcategoryRepositoy.findOne({ name, url });

    if (subcategoryAlreadyExists) {
      throw new Error('Tag already exists!');
    }

    const subcategory = subcategoryRepositoy.create({ category_id, name, url });

    await subcategoryRepositoy.save(subcategory);

    return subcategory;
  }
}

export default CreateSubcategoryService;
