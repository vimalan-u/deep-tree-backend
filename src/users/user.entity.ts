import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;
}

@Entity()
export class Tree {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('json')
  structure: any;

  @Column()
  userId: number;
}
