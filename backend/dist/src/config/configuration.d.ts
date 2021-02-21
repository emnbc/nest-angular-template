export declare const configuration: () => {
    secret: string;
    db: {
        type: string;
        host: string;
        port: number;
        username: string;
        password: string;
        database: string;
        schema: string;
        synchronize: boolean;
        entities: string[];
    };
    static: ({
        rootPath: string;
        exclude: string[];
        serveRoot?: undefined;
    } | {
        rootPath: string;
        serveRoot: string;
        exclude?: undefined;
    })[];
};
