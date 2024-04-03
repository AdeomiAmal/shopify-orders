import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { Platform } from '../../consts/platform';

@Injectable()
export class PlatformValidationPipe implements PipeTransform<string, string> {
  transform(value: Platform): string {
    if (!Object.values(Platform).includes(value)) {
      throw new BadRequestException('Unsupported platform');
    }
    return value;
  }
}
