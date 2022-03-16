import {
  Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column, JoinColumn, ManyToOne, ManyToMany, JoinTable, OneToMany,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import Category from './Category';
import RegisterTag from './RegisterTag';

@Entity('registers')
export class Register {
  @PrimaryGeneratedColumn()
  readonly id: string;

  @Column()
  category_id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  value: number;

  @Column()
  type: number;

  @Column()
  date: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Category)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @OneToMany(() => RegisterTag, registerTag => registerTag.register)
  registerTag!: RegisterTag[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default Register;
