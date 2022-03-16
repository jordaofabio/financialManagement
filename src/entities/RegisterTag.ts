import {
  Entity, PrimaryColumn, CreateDateColumn, UpdateDateColumn, Column, JoinColumn, ManyToOne,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import Register from './Register';
import Tag from './Tag';

@Entity('register_tags_tag')
export class RegisterTag {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  register_id: String;

  @Column()
  tag_id: String;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Tag, tag => tag.registerTag)
  tag!: Tag;

  @ManyToOne(() => Register, register => register.registerTag)
  register!: Register;


  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default RegisterTag;
