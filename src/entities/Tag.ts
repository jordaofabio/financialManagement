import {
  Entity, PrimaryColumn, CreateDateColumn, UpdateDateColumn, Column, JoinColumn, ManyToMany, OneToMany,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import RegisterTag from './RegisterTag';

@Entity('tags')
class Tag {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // @JoinColumn({ name: 'id' })
  // @ManyToMany(() => Register, (register: { tag: any; }) => register.tag)
  // tag: Tag;

  // @ManyToMany(() => Register, register => register.tags)
  // registers: Register[];

  @OneToMany(() => RegisterTag, registerTag => registerTag.register)
  registerTag!: RegisterTag[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default Tag;
