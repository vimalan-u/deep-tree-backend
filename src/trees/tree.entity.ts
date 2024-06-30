import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tree {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('json')
  structure: any;

  @Column()
  userId: number;
}
