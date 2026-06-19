import { Module } from '@nestjs/common';
import { CloudinaryService } from 'src/common/helpers/cloudinary.service';

@Module({
  providers: [CloudinaryService],
  exports: [CloudinaryService],
})
export class CloudinaryModule {}
