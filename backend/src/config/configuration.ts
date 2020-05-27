import { join } from 'path';

export const configuration = () => ({
    secret: process.env.SECRET_KEY,
    db: {
        type: 'postgres',
        host: process.env.TYPEORM_HOST,
        port: +process.env.TYPEORM_PORT,
        username: process.env.TYPEORM_USERNAME,
        password: process.env.TYPEORM_PASSWORD,
        database: process.env.TYPEORM_DATABASE,
        synchronize: true,
        entities: ['dist/**/*.entity{.ts,.js}']
    },
    static: [{
        rootPath: join(__dirname, '..', '..', 'static'),
        exclude: ['/api*'],
    }]
  });