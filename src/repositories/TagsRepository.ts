import { EntityRepository, Repository } from 'typeorm';
import Tag from '../entities/Tag';

@EntityRepository(Tag)
class TagsRepositoy extends Repository<Tag> {}

export default TagsRepositoy;
