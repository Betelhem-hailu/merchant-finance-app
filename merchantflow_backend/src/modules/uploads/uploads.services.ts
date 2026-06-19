import { Injectable } from '@nestjs/common';
import { CloudinaryService } from '../../common/helpers/cloudinary.service';

@Injectable()
export class UploadsService {
  constructor(private readonly cloudinaryService: CloudinaryService) {}

  async uploadImage(file: Express.Multer.File) {
    const result = await this.cloudinaryService.uploadImage(file);

    return {
      success: true,
      url: result.secure_url,
      publicId: result.public_id,
    };
  }
}
