import {
  Entity, PrimaryColumn, CreateDateColumn, UpdateDateColumn, Column, JoinColumn, ManyToMany,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import Register from './Register';

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

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default Tag;
