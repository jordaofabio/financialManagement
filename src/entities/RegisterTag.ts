import {
  Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column, JoinColumn, ManyToOne,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import Register from './Register';
import Tag from './Tag';

@Entity('registersTags')
export class RegisterTag {
  @PrimaryGeneratedColumn()
  readonly id: string;

  @Column()
  register_id: String;

  @Column()
  tag_id: String;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Tag)
  @JoinColumn({ name: 'tag_id' })
  tag: Tag;

  @ManyToOne(() => Register)
  @JoinColumn({ name: 'register_id' })
  register: Register;


  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default RegisterTag;
