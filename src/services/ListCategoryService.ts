import { getCustomRepository } from 'typeorm';
import CategorysRepositoy from '@repositories/CategoryRepository';
import { instanceToPlain } from 'class-transformer';
import { injectable } from 'tsyringe';

@injectable()
class ListCategoryService {
  async execute() {
    const categoriesRepositoy = getCustomRepository(CategorysRepositoy);

    const categories = await categoriesRepositoy.find();

    return instanceToPlain(categories);
  }
}

export default ListCategoryService;
