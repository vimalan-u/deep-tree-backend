import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { TreesService } from './trees.service';

@Controller('trees')
export class TreesController {
  constructor(private readonly treesService: TreesService) {}

  @Post('save')
  async saveTree(
    @Body('username') username: string,
    @Body('structure') structure: any,
  ) {
    return this.treesService.saveTree(username, structure);
  }

  @Get(':username')
  async getTree(@Param('username') username: string) {
    return this.treesService.getTree(username);
  }
}
