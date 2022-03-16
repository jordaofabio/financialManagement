import {
  Entity, PrimaryColumn, CreateDateColumn, UpdateDateColumn, Column
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('categories')
class Category {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  url: string;

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

export default Category;
