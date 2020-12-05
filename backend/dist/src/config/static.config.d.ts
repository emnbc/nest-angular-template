import { ConfigService } from '@nestjs/config';
import { ServeStaticModuleOptionsFactory } from '@nestjs/serve-static';
export declare class StaticConfig implements ServeStaticModuleOptionsFactory {
    private configService;
    constructor(configService: ConfigService);
    createLoggerOptions(): any;
}
