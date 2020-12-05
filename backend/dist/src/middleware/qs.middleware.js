"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuerySelectingMiddleware = void 0;
const common_1 = require("@nestjs/common");
let QuerySelectingMiddleware = (() => {
    let QuerySelectingMiddleware = class QuerySelectingMiddleware {
        use(req, res, next) {
            let query = {};
            if (req.query) {
                for (let key in req.query) {
                    query[key] = req.query[key] && !Array.isArray(req.query[key]) ? req.query[key] : null;
                }
            }
            let qs = {
                take: this.getSize(query.size),
                skip: this.getSkip(query.page, query.size),
                where: {},
                order: {}
            };
            for (let key in query) {
                if (query[key] && key !== 'size' && key !== 'page' && key !== 'sort') {
                    qs.where[key] = query[key];
                }
            }
            if (query.sort && query.sort.split(',').length === 2) {
                const sort = {
                    field: query.sort.split(',')[0],
                    direction: query.sort.split(',')[1]
                };
                if (sort.direction === 'asc') {
                    qs.order[sort.field] = 'ASC';
                }
                if (sort.direction === 'desc') {
                    qs.order[sort.field] = 'DESC';
                }
            }
            else {
                qs.order['id'] = 'ASC';
            }
            req.qs = qs;
            next();
        }
        getSize(size) {
            return size && (+size > 0 && +size < 1001) ? +size : 10;
        }
        getSkip(page, size) {
            return (page && +page > 0) ? ((+page - 1) * this.getSize(size)) : 0;
        }
    };
    QuerySelectingMiddleware = __decorate([
        common_1.Injectable()
    ], QuerySelectingMiddleware);
    return QuerySelectingMiddleware;
})();
exports.QuerySelectingMiddleware = QuerySelectingMiddleware;
//# sourceMappingURL=qs.middleware.js.map