import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ServeStaticModuleOptionsFactory } from '@nestjs/serve-static';

@Injectable()
export class StaticConfig implements ServeStaticModuleOptionsFactory {
  constructor(private configService: ConfigService) {}
  createLoggerOptions() {
    return this.configService.get('static');
  }
}