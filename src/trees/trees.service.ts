import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tree } from './tree.entity';
import { User } from '../users/user.entity';

@Injectable()
export class TreesService {
  constructor(
    @InjectRepository(Tree)
    private treesRepository: Repository<Tree>,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async saveTree(username: string, structure: any): Promise<Tree> {
    const user = await this.usersRepository.findOne({ where: { username } });
    if (!user) {
      throw new Error(`User with username ${username} not found`);
    }

    const tree = this.treesRepository.create({ userId: user.id, structure });
    return this.treesRepository.save(tree);
  }

  async getTree(username: string): Promise<Tree> {
    const user = await this.usersRepository.findOne({ where: { username } });
    if (!user) {
      throw new Error(`User with username ${username} not found`);
    }

    return this.treesRepository.findOne({ where: { userId: user.id } });
  }
}
