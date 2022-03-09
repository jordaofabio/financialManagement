import { EntityRepository, Repository } from 'typeorm';
import Register from '@entities/Register';

@EntityRepository(Register)
class RegisterRepositoy extends Repository<Register> {}

export default RegisterRepositoy;
