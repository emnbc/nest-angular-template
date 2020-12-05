import { NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
export declare class QuerySelectingMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: Function): void;
    getSize(size: string | number): number;
    getSkip(page: string | number, size: string | number): number;
}
