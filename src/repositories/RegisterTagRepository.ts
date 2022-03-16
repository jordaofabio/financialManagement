import { EntityRepository, Repository } from 'typeorm';
import RegisterTag from '@entities/RegisterTag';

@EntityRepository(RegisterTag)
class RegisterTagRepository extends Repository<RegisterTag> {}

export default RegisterTagRepository;
