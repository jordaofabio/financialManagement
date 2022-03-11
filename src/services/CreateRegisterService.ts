import { injectable } from 'tsyringe';
import { getCustomRepository } from 'typeorm';
import RegisterRepository from '@repositories/RegisterRepository';
import RegisterTagRepository from '@repositories/RegisterTagRepository';
import Tag from '@/entities/Tag';
import TagsRepositoy from '@/repositories/TagsRepository';

interface IRegisterRequest {
  name: string
  category_id: string
  description?: string
  tags: Tag[],
  value: number
  type: number
  date: Date
}

// interface IResgisterTag {
//   tags: [string],
//   register_id: string
// }
@injectable()
class CreateRegisterService {
  // async createRegisterTag({ tags, register_id }: IResgisterTag) {
  //   const registerTagrRepository = getCustomRepository(RegisterTagRepository);



  //   const registerTagrAlredyExists = await registerTagrRepository.findOne({ tag_id, register_id });

  //   if (!registerTagrAlredyExists) {
  //     const registerTag = registerTagrRepository.create({ tag_id, register_id });
  //     await registerTagrRepository.save(registerTag);
  //   }

    

  // }

  async execute({ name, tags, category_id, description, value, type, date }: IRegisterRequest) {
    console.log('>>>>>>>>>>>>>>> tags', tags)
    try {
      const registerRepository = getCustomRepository(RegisterRepository);
      const tagRepository = getCustomRepository(TagsRepositoy);

      if (!name) {
        throw new Error('Invalid name!');
      }

      if (!date) {
        throw new Error('Invalid date!');
      }

      if (!value || value < 0) {
        throw new Error('Invalid value!');
      }
      const _tags = []

      for await (const id of tags) {
      console.log('>>>>>>>>>>>>>>> id', id)
      const [tag] = await tagRepository.findByIds([id])
        _tags.push(tag)
      }
      console.log('>>>>>>>>>>>>>>> _tags', _tags)


      const register = registerRepository.create({ name, tags: _tags, category_id, description, value, type, date: new Date(date) });

      await registerRepository.save(register);

      return register;
    } catch (err) {
      console.log('Erro: ', err)
    }
  }
}

export default CreateRegisterService;
