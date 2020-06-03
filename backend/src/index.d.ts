declare namespace Express {
    export interface Request {
       qs?: QuerySelecting;
    }
}

interface QuerySelecting {
    take: number;
    skip: number;
    where: { [key: string]: string; };
    order: { [key: string]: string; };
}

interface QueryResult {
    count: number;
    result: any[];
}