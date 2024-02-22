import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import * as path from 'path';
import * as fs from 'fs';

@Controller('get-images')
export class GetImagesController {
  @Get(':folder/:imageName')
  getImage(
    @Param('folder') folder: string,
    @Param('imageName') imageName: string,
    @Res() res: Response,
  ) {
    const imagePath = path.join(process.cwd(), `images/${folder}/${imageName}`);
    console.log(imagePath);
    if (fs.existsSync(imagePath)) {
      return res.sendFile(imagePath);
    } else {
      return res.status(404).json({ message: 'Image not found' });
    }
  }
}
