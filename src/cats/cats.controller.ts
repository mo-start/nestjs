import { Controller, Res, Get, Req, Post, HttpStatus } from '@nestjs/common';
import { Request } from 'express';
import { Response } from 'express';

@Controller('cats')
export class CatsController {
  @Post()
  create(@Res() res: Response) {
    res.status(HttpStatus.CREATED).send();
  }

  @Get()
  findAll(@Req() request: Request): string {
    return `This action returns all cats: ${request.url}`;
  }

  @Get()
  findAll2(@Res({ passthrough: true }) res: Response) {
    res.status(HttpStatus.OK);
    return [];
  }
}
