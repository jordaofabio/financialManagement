import {
  Entity, PrimaryColumn, CreateDateColumn, UpdateDateColumn, Column,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity()
export class Register {
  @PrimaryColumn()
  readonly id: string;

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

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default Register;
