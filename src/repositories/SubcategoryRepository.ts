import { EntityRepository, Repository } from 'typeorm';
import Subcategory from '../entities/Subcategory';

@EntityRepository(Subcategory)
class SubcategoryRepositoy extends Repository<Subcategory> {}

export default SubcategoryRepositoy;
