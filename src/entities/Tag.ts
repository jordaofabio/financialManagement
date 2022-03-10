import {
  Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('tags')
class Tag {
  @PrimaryGeneratedColumn()
  readonly id: string;

  @Column()
  name: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default Tag;
