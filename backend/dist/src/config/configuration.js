"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configuration = void 0;
const path_1 = require("path");
exports.configuration = () => ({
    secret: process.env.SECRET_KEY,
    db: {
        type: 'postgres',
        host: process.env.TYPEORM_HOST,
        port: +process.env.TYPEORM_PORT,
        username: process.env.TYPEORM_USERNAME,
        password: process.env.TYPEORM_PASSWORD,
        database: process.env.TYPEORM_DATABASE,
        schema: process.env.TYPEORM_SCHEMA,
        synchronize: true,
        entities: ['dist/**/*.entity{.ts,.js}']
    },
    static: [{
            rootPath: path_1.join(__dirname, '..', '..', '..', 'static'),
            exclude: ['/api*'],
        }]
});
//# sourceMappingURL=configuration.js.map