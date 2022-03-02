import { EntityRepository, Repository } from 'typeorm';
import Subcategory from '../entities/Subcategory';

@EntityRepository(Subcategory)
class SubcategoryRepositories extends Repository<Subcategory> {}

export default SubcategoryRepositories;
