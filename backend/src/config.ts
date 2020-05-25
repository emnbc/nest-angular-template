import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ServeStaticModuleOptions } from '@nestjs/serve-static';
import { join } from 'path';

export const config: Config = {
    db: {
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'test',
        password: 'test',
        database: 'test',
        synchronize: true
    },
    static: {
        rootPath: join(__dirname, '..', '..', 'static'),
        exclude: ['/api*'],
    }
};

interface Config {
    db: TypeOrmModuleOptions;
    static: ServeStaticModuleOptions;
}