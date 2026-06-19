import { Module } from '@nestjs/common';
import { UploadsService } from './uploads.services';
import { UploadController } from './uploads.controller';
import { CloudinaryModule } from '../cloudinary/cloudinary.module';

@Module({
  imports: [CloudinaryModule],
  controllers: [UploadController],
  providers: [UploadsService],
})
export class UploadsModule {}
