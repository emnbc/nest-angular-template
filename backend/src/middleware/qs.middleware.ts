
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class QuerySelectingMiddleware implements NestMiddleware {

    use(req: Request, res: Response, next: Function) {

        let query: any = {};

        if(req.query) {
            for (let key in req.query) {
                query[key] = req.query[key] && !Array.isArray(req.query[key]) ? req.query[key] : null;
            }
        }

        let qs: QuerySelecting = {
            take: this.getSize(query.size),
            skip: this.getSkip(query.page, query.size),
            where: {},
            order: {}
        };

        // TODO: If the parametr doesn't exist in the entity - there will be error (500)
        for (let key in query) {
            if(query[key] && key !== 'size' && key !== 'page' && key !== 'sort') {
                qs.where[key] = query[key];
            }
        }

        if(query.sort && query.sort.split(',').length === 2) {
            const sort = { 
                field: query.sort.split(',')[0],
                direction: query.sort.split(',')[1]
            };
            if(sort.direction === 'asc') { 
                qs.order[sort.field] = 'ASC';
            }
            if(sort.direction === 'desc') { 
                qs.order[sort.field] = 'DESC';
            }
        } else {
            qs.order['id'] = 'ASC';
        }

        req.qs = qs;

        next();
    }

    getSize(size: string | number): number {
        return size && (+size > 0 && +size < 1001) ? +size : 10;
    }

    getSkip(page: string | number, size: string | number): number {
        return (page && +page > 0) ? ((+page - 1) * this.getSize(size)) : 0;
    }

}