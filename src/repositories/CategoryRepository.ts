import { EntityRepository, Repository } from 'typeorm';
import Category from '@entities/Category';

@EntityRepository(Category)
class CategoryRepositoy extends Repository<Category> {}

export default CategoryRepositoy;
