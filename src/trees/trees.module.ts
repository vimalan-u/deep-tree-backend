import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TreesService } from './trees.service';
import { TreesController } from './trees.controller';
import { Tree } from './tree.entity';
import { User } from '../users/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tree, User])],
  providers: [TreesService],
  controllers: [TreesController],
})
export class TreesModule {}
